import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const port = process.env.PORT || 5000;
const enquiryToEmail = process.env.ENQUIRY_TO_EMAIL || "voicecraftwithjothi@gmail.com";

const allowedOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || origin === allowedOrigin || /^http:\/\/localhost:\d+$/.test(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
  }),
);
app.use(express.json({ limit: "20kb" }));

app.get("/health", (_request, response) => {
  response.json({ ok: true });
});

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function detailRow(label, value) {
  return `
    <tr>
      <td style="padding:12px 14px;border-bottom:1px solid #eadfcd;background:#fffaf1;font-weight:700;color:#5b236b;width:38%;">${label}</td>
      <td style="padding:12px 14px;border-bottom:1px solid #eadfcd;color:#2d2432;">${escapeHtml(value || "Not provided")}</td>
    </tr>
  `;
}

app.post("/api/enquiry", async (request, response) => {
  const { fullName, phone, program, mode, message } = request.body || {};

  if (!fullName || !phone || !program || !mode) {
    response.status(400).json({ error: "Please fill all required fields." });
    return;
  }

  const missingEmailConfig =
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    process.env.SMTP_USER === "your-email@gmail.com" ||
    process.env.SMTP_PASS === "your-app-password";

  if (missingEmailConfig) {
    response.status(500).json({
      error: "Email service is not configured yet. Add SMTP details in voicecraft-backend/.env and restart the backend.",
    });
    return;
  }

  const transporterConfig = process.env.SMTP_HOST
    ? {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: process.env.SMTP_SECURE !== "false",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }
    : {
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      };

  const transporter = nodemailer.createTransport(transporterConfig);

  const text = [
    "New VoiceCraft website enquiry",
    "",
    `Full Name: ${fullName}`,
    `Phone / WhatsApp: ${phone}`,
    `Program Interested In: ${program}`,
    `Preferred Mode: ${mode}`,
    `Message: ${message || "Not provided"}`,
  ].join("\n");

  const html = `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#f7f4ef;font-family:Arial,sans-serif;color:#2d2432;">
        <div style="max-width:620px;margin:0 auto;padding:24px;">
          <div style="background:#5b236b;color:#ffffff;padding:20px 24px;border-radius:14px 14px 0 0;">
            <h1 style="margin:0;font-size:22px;line-height:1.3;">New VoiceCraft Enquiry</h1>
            <p style="margin:8px 0 0;font-size:14px;color:#f4e8f7;">A new enquiry was submitted from the website.</p>
          </div>

          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #eadfcd;border-top:0;">
            ${detailRow("Full Name", fullName)}
            ${detailRow("Phone / WhatsApp", phone)}
            ${detailRow("Program Interested In", program)}
            ${detailRow("Preferred Mode", mode)}
            ${detailRow("Message", message)}
          </table>

          <div style="background:#fffaf1;border:1px solid #eadfcd;border-top:0;border-radius:0 0 14px 14px;padding:16px 24px;">
            <p style="margin:0;font-size:13px;line-height:1.6;color:#5c5260;">
              You can reply to this email or contact the student using the phone number above.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"VoiceCraft Website" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      to: enquiryToEmail,
      replyTo: process.env.SMTP_USER,
      subject: `VoiceCraft Enquiry - ${program}`,
      text,
      html,
    });

    response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send enquiry email", error);
    response.status(500).json({ error: "Could not send enquiry right now." });
  }
});

app.listen(port, () => {
  console.log(`VoiceCraft backend running on http://localhost:${port}`);
});
