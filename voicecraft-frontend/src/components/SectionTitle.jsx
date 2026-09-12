import { Sparkles } from "lucide-react";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignClasses[align] || alignClasses.center} max-w-3xl mx-auto mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-extrabold uppercase tracking-wider mb-3 border border-brand-purple/15 shadow-sm">
          <Sparkles size={13} className="text-brand-gold" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-purple tracking-tight leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      {/* Subtle decorative gold line divider */}
      <div className="w-16 h-1 rounded-full bg-gradient-to-r from-brand-gold to-brand-olive mt-5 opacity-80" />
    </div>
  );
}
