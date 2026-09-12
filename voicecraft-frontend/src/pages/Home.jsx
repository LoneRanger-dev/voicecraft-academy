import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Phone,
  Presentation,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// Assets
import authorpic from "../assets/gallery/authorpic.png";
import gallery1 from "../assets/gallery/g1.jpeg";
import gallery2 from "../assets/gallery/g2.jpeg";
import gallery3 from "../assets/gallery/g3.jpeg";
import gallery4 from "../assets/gallery/g4.jpeg";
import gallery5 from "../assets/gallery/g5.jpeg";
import gallery6 from "../assets/gallery/g6.jpeg";
import wa1 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.04.09 AM.jpeg";
import wa2 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.04.20 AM (1).jpeg";
import wa3 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.04.20 AM.jpeg";
import wa4 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.12.52 AM.jpeg";
import wa5 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.12.53 AM.jpeg";
import heroBg from "../assets/herobg.png";
import engIcon from "../assets/icons/eng-cropped.png";
import frIcon from "../assets/icons/fr-cropped.png";
import ieltsIcon from "../assets/icons/ielts-cropped.png";
import speakIcon from "../assets/icons/Eloquent-cropped.png";
import logo from "../assets/logo.png";

// Components
import Button from "../components/Button.jsx";
import Navbar from "../components/Navbar.jsx";

const programs = [
  {
    title: "Eloquence by VoiceCraft",
    description: "Find your voice, speak confidently, and inspire an audience.",
    icon: Mic,
    iconImage: speakIcon,
    tone: "olive",
  },
  {
    title: "EngLingo by VoiceCraft",
    description: "Build strong language skills for everyday fluency and professional use.",
    icon: BookOpen,
    iconImage: engIcon,
    tone: "purple",
  },
  {
    title: "Bonjour by VoiceCraft",
    description: "Learn French with ease and speak with confidence.",
    icon: BookOpen,
    iconImage: frIcon,
    tone: "olive",
  },
  {
    title: "IELTS & PTE Training",
    description: "Expert coaching to help you achieve your desired band score.",
    icon: Globe,
    iconImage: ieltsIcon,
    tone: "purple",
  },
];

const galleryMoments = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  wa1,
  wa2,
  wa3,
  wa4,
  wa5,
].map((image, index) => ({ title: `Gallery Photo ${index + 1}`, image }));

const enquiryPrograms = [
  "IELTS & PTE Training",
  "Eloquence by VoiceCraft",
  "Bonjour by VoiceCraft",
  "EngLingo by VoiceCraft",
];

const courseDetails = {
  "Eloquence by VoiceCraft": {
    intro:
      "Eloquence by VoiceCraft helps young learners find their voice and inspire their audience.",
    overview: [
      "Public speaking is the ability to think clearly, communicate confidently, express ideas effectively, and connect with people in meaningful ways.",
      "The program is designed for children, teenagers, and young adults, and is inspired by recognized public speaking and youth leadership frameworks.",
      "Eloquence develops the complete communicator: someone who can think, organize, present, lead discussions, and communicate effectively in real-life situations.",
    ],
    bestFor:
      "Children aged 10 to 12 years, teenagers, young adults, students in debates and competitions, learners with stage fear, and students preparing for interviews or leadership roles.",
    covers: [
      "Communication skills",
      "Confidence building",
      "Presentation skills",
      "Thinking skills",
      "Leadership skills",
      "Audience engagement",
    ],
    outcomes: [
      "Speak confidently before an audience",
      "Organize and present ideas clearly",
      "Improve articulation, fluency, body language, and voice modulation",
      "Think critically and respond spontaneously",
      "Build leadership and interpersonal communication skills",
    ],
    moreDetails: [
      {
        title: "Mentorship and Program Foundation",
        paragraphs: [
          "Developed by Jothi, the course helps learners overcome hesitation, build self-confidence, and develop communication skills for academic, professional, and personal life.",
          "Public speaking is not a single skill. It is a combination of communication, confidence, leadership, critical thinking, and audience engagement.",
        ],
      },
      {
        title: "Option 1: Eloquence Fast Track (3 Months)",
        paragraphs: [
          "Recommended for students who already possess a reasonable command of English and want focused communication development for competitions, interviews, leadership roles, or presentations.",
        ],
        points: [
          "24 sessions of 2.5 hours each",
          "Level 1: Speaking with Confidence",
          "Level 2: Organizing and Delivering Ideas",
          "Level 3: Thinking on Your Feet",
          "Final showcase speech",
        ],
      },
      {
        title: "Option 2: Leadership and Communication Pathway (1 Year)",
        paragraphs: [
          "Recommended for students aged 8 to 15 years who wish to build communication skills progressively and develop long-term confidence, leadership, and presentation abilities.",
        ],
        points: [
          "80 to 100 instructional hours",
          "Level 1: Finding My Voice",
          "Level 2: Expressing My Ideas",
          "Level 3: Influencing and Leading",
          "Level 4: The Confident Communicator",
        ],
      },
      {
        title: "Assessment and Feedback",
        points: [
          "Speech evaluations",
          "Individual feedback",
          "Peer assessments",
          "Presentation reviews",
          "Communication challenges",
          "Leadership activities",
          "Final showcase presentations",
        ],
      },
      {
        title: "Why Choose Eloquence by VoiceCraft?",
        paragraphs: [
          "To speak confidently and live boldly, Eloquence helps young learners discover their voice, develop confidence, and express themselves with clarity, purpose, and impact.",
        ],
      },
    ],
  },
  "EngLingo by VoiceCraft": {
    intro:
      "EngLingo by VoiceCraft is customized English learning for real-life success.",
    overview: [
      "EngLingo is a personalized English language development program designed around your goals, age, proficiency level, and purpose for learning.",
      "It supports students, professionals, entrepreneurs, job seekers, homemakers, and parents seeking academic support for children.",
    ],
    bestFor:
      "Students, professionals, entrepreneurs, job seekers, homemakers, and parents looking for academic English support.",
    covers: [
      "English grammar and foundations",
      "Spoken English",
      "Workplace communication",
      "Business English",
      "Email and letter writing",
      "Presentation and meeting skills",
      "Vocabulary",
      "Reading comprehension",
      "Creative and academic writing",
      "Interview preparation",
    ],
    outcomes: [
      "Communicate more confidently",
      "Write clearly and professionally",
      "Strengthen grammar and accuracy",
      "Improve reading and comprehension",
      "Express ideas with clarity",
    ],
    moreDetails: [
      {
        title: "Our Approach",
        paragraphs: [
          "Training is built on a strong grammar foundation using trusted resources such as Wren & Martin along with contemporary learning materials.",
          "Every learner begins with an assessment, followed by a customized learning plan.",
        ],
      },
      {
        title: "For School Students",
        paragraphs: [
          "Sessions can align with school curriculum, textbooks, worksheets, and classroom requirements.",
        ],
      },
      {
        title: "For Professionals",
        paragraphs: [
          "Professionals can choose targeted modules for workplace communication, business writing, presentations, client interactions, and leadership communication.",
        ],
      },
      {
        title: "Why Choose EngLingo by VoiceCraft?",
        paragraphs: [
          "To find your voice and shape your future, language learning should fit the learners needs rather than being the other way around. We build for every learner a bespoke learning pathway that fits their language acquisition needs and wants.",
        ],
      },
    ],
  },
  "Bonjour by VoiceCraft": {
    intro:
      "Bonjour by VoiceCraft builds practical French communication skills for study, travel, work, relocation, and cultural integration.",
    overview: [
      "French is a gateway to global opportunities, cultural experiences, travel, higher education, and human connections.",
      "Bonjour is designed for complete beginners and early intermediate learners who want practical French skills.",
    ],
    bestFor:
      "Beginners, students, professionals, relocating individuals, travellers, and anyone interested in French language and culture.",
    covers: [
      "Listening",
      "Speaking",
      "Reading",
      "Writing",
      "Guided practice",
      "Assessments and feedback",
    ],
    outcomes: [
      "Understand basic to intermediate conversations",
      "Discuss everyday topics",
      "Read practical French texts",
      "Write short messages",
      "Use grammar and vocabulary accurately",
      "Build confidence with French speakers",
    ],
    moreDetails: [
      {
        title: "Structured Learning Journey",
        paragraphs: [
          "Bonjour is divided into six progressive levels from foundational French toward intermediate communication competency.",
        ],
      },
      {
        title: "Our Approach",
        paragraphs: [
          "Classes combine practical conversation, pronunciation coaching, grammar, vocabulary, listening, reading, writing, and cultural learning.",
        ],
      },
      {
        title: "Learning Beyond the Classroom",
        points: [
          "Practice worksheets",
          "Vocabulary lists",
          "Audio resources",
          "Reading materials",
          "Conversation activities",
          "Revision exercises",
        ],
      },
      {
        title: "Assessment and Feedback",
        paragraphs: [
          "Progress is monitored through assessments, participation, practical activities, and tutor feedback.",
        ],
      },
      {
        title: "Why Choose Bonjour by VoiceCraft?",
        paragraphs: [
          "To learn French and be a global citizen, language learning should prepare one not merely for an exam but also for life. Bonjour has six levels of French modules that caters to freshers, beginners and intermediate levels of learning French.",
        ],
      },
    ],
  },
  "IELTS & PTE Training": {
    intro:
      "IELTS and PTE by VoiceCraft is your gateway to global education, work, and migration opportunities.",
    overview: [
      "IELTS is one of the world's most recognized English proficiency examinations.",
      "IELTS and PTE by VoiceCraft helps learners understand the exam format, develop strong language skills, and approach the test with confidence.",
    ],
    bestFor:
      "Students planning to study abroad, professionals seeking overseas opportunities, emigrating applicants and learners requiring proof of English proficiency.",
    covers: [
      "IELTS format",
      "Listening",
      "Reading",
      "Writing",
      "Speaking",
      "Test strategies",
      "Grammar and vocabulary",
      "Personalized feedback",
    ],
    outcomes: [
      "Understand the IELTS format",
      "Improve all four modules",
      "Develop test-taking strategies",
      "Strengthen grammar and vocabulary",
      "Communicate clearly",
      "Prepare for global opportunities",
    ],
    moreDetails: [
      {
        title: "Learn from Experience",
        paragraphs: [
          "The program is led by Jothi, an experienced language educator with over 20 years of English training and learner mentoring experience.",
        ],
      },
      {
        title: "Understanding the IELTS Examination",
        paragraphs: [
          "IELTS assesses Listening, Reading, Writing, and Speaking skills.",
        ],
      },
      {
        title: "Module Practice",
        points: [
          "Listening for details and opinions",
          "Reading for main ideas and viewpoints",
          "Writing essays, reports, and correspondence",
          "Speaking with fluency and pronunciation",
        ],
      },
      {
        title: "Our Approach",
        paragraphs: [
          "Training focuses on official format understanding, language proficiency, grammar, vocabulary, confidence, writing structure, and individual feedback.",
        ],
      },
      {
        title: "Assessment and Progress Tracking",
        points: [
          "Practice exercises",
          "Module-based activities",
          "Mock assessments",
          "Speaking evaluations",
          "Writing reviews",
          "Performance discussions",
        ],
      },
      {
        title: "Why Choose IELTS and PTE by VoiceCraft?",
        paragraphs: [
          "To prepare learners for global opportunities as a student or a professional, learners receive structured guidance, expert mentoring, targeted practice and personalized feedback.",
        ],
      },
    ],
  },
};

const testimonials = [
  {
    quote: "Jyothi Ma'am's friendly guidance, deep knowledge, and practical teaching improved my confidence in speaking English.",
    name: "Kavin Raj",
  },
  {
    quote: "Jothi mam was very interactive and supportive, making every IELTS & PTE class engaging and easy to understand.",
    name: "Meriza Kuruvilla",
  },
  {
    quote: "Jyothi Ma'am's support, enthusiasm, and clear explanations helped me grow confident in speaking skills.",
    name: "Avani Goyal",
  },
  {
    quote: "Jothi Ma'am explained grammar clearly, gave regular speaking practice, and helped me overcome my fear of English.",
    name: "Gowthami Ragappagari",
  },
  {
    quote: "Jyothi Ma'am taught effectively, spoke clearly, gave daily homework, and helped me speak English more confidently.",
    name: "Laxmikanta Sahu",
  },
  {
    quote: "Jothi Ma'am made English lessons fun and engaging, helping me overcome my fear of speaking and making mistakes.",
    name: "Pahi Borborah",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61591796930292",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/voicecraftacademy_india",
  },
];

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const selectProgram = (courseTitle) => {
    setSelectedCourse(courseTitle);
    window.setTimeout(() => {
      document
        .getElementById("programs")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] overflow-hidden bg-brand-cream pt-[72px] shadow-soft sm:border sm:border-[#e8dfd7] lg:pt-[76px]">
      <Navbar
        programs={programs.map((program) => program.title)}
        onSelectProgram={selectProgram}
      />
      <HeroSection />
      <About />
      <Programs
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />
      <WhyChoose />
      <Testimonials />
      <Gallery />
      <Enquiry />
      <Footer />
    </main>
  );
}

// 1. HERO SECTION (Clean, standardized layout with round buttons & zero overlap)
function HeroSection() {
  return (
    <section
      id="home"
      data-section="home"
      aria-label="Home section"
      className="relative min-h-[540px] scroll-mt-24 overflow-hidden bg-brand-cream px-4 py-12 sm:px-6 md:min-h-[640px] lg:min-h-[700px] flex items-center"
    >
      {/* Background Graphic */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full select-none object-cover opacity-90 md:block"
        draggable="false"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/15 text-brand-olive text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            MANY PATHS TO ONE CONFIDENT VOICE
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.18] tracking-tight text-brand-purple">
            Unlock your confidence. <br />
            <span className="text-brand-olive">Communicate with power.</span>
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-brand-gold" />

          <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-brand-ink/90">
            From confident speaking to developing fluency, we help you express,
            connect and succeed in every stage of life.
          </p>

          {/* Round Buttons (rounded-full) */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href="#enquiry"
              variant="primary"
              size="lg"
              icon={CalendarDays}
            >
              Join a Session
            </Button>
            <Button
              href="#programs"
              variant="secondary"
              size="lg"
            >
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Hero Stats Row (Standardized cleanly at bottom) */}
        <div className="mt-14 pt-8 border-t border-brand-purple/15 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
          <HeroStat value="1000+" label="Students Trained" tone="purple" />
          <HeroStat value="20 years" label="Experience" tone="gold" />
          <HeroStat value="Personalized" label="Mentorship" tone="purple" />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, label, tone }) {
  return (
    <div className="flex flex-col">
      <strong
        className={`font-display text-2xl sm:text-3xl font-extrabold leading-tight ${
          tone === "gold" ? "text-brand-gold" : "text-brand-purple"
        }`}
      >
        {value}
      </strong>
      <span className="mt-1 text-xs sm:text-sm font-semibold text-brand-ink/80">
        {label}
      </span>
    </div>
  );
}

// 2. ABOUT SECTION
function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-brand-cream px-4 py-16 sm:px-6 md:px-10 md:py-24 border-t border-[#eadfcd]"
    >
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="mx-auto flex flex-col items-center text-center">
          <div className="aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl border border-[#eadfcd] bg-white shadow-lg sm:max-w-[300px]">
            <img
              src={authorpic}
              alt="Jothi from VoiceCraft"
              className="h-full w-full object-cover"
            />
          </div>
          <blockquote className="mt-4 text-[17px] font-semibold italic text-brand-olive sm:text-[19px]">
            “Reading is rewarding”
          </blockquote>
          <p className="mt-2 font-display text-[28px] font-bold leading-none text-brand-purple sm:text-[32px]">
            DTM Jothi
          </p>
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-1">
            Founder & Master Coach
          </span>
        </div>
        <div>
          <span className="px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Founder's Profile
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-brand-purple">
            About VoiceCraft
          </h2>
          <p className="mt-5 text-base sm:text-lg font-medium leading-relaxed text-brand-ink/90">
            Founded and led by DTM Jothi, VoiceCraft is dedicated to empowering
            individuals to speak with clarity, confidence, and impact. With
            decades of experience in mentoring speakers and language learners,
            her work helps students, professionals, and aspiring leaders communicate
            effectively at every stage of life.
          </p>
        </div>
      </div>
    </section>
  );
}

// 3. PROGRAMS SECTION
function Programs({ selectedCourse, setSelectedCourse }) {
  const detailRef = useRef(null);
  const selectedProgram = selectedCourse ? courseDetails[selectedCourse] : null;

  useEffect(() => {
    if (selectedCourse) {
      window.setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 60);
    }
  }, [selectedCourse]);

  return (
    <section
      id="programs"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 md:px-8 md:py-24 border-t border-[#eadfcd]"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading title="Our Programs" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              {...program}
              isActive={selectedCourse === program.title}
              onLearnMore={() => setSelectedCourse(program.title)}
            />
          ))}
        </div>
        {selectedProgram ? (
          <CourseDetailPanel
            panelRef={detailRef}
            title={selectedCourse}
            iconImage={
              programs.find((program) => program.title === selectedCourse)
                ?.iconImage
            }
            details={selectedProgram}
          />
        ) : null}
      </div>
    </section>
  );
}

function ProgramCard({
  title,
  description,
  icon: Icon,
  iconImage,
  isActive,
  onLearnMore,
}) {
  return (
    <article
      className={`flex min-h-[330px] flex-col items-center rounded-3xl border bg-[#FAF9F6] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isActive
          ? "border-brand-olive ring-2 ring-brand-olive/30 bg-white"
          : "border-[#eadfcd]"
      }`}
    >
      <div className="grid h-[130px] w-full place-items-center justify-items-center">
        {iconImage ? (
          <img
            src={iconImage}
            alt={title}
            className="max-h-[110px] max-w-[90%] object-contain rounded-2xl bg-white p-2 shadow-sm"
          />
        ) : (
          <Icon className="h-20 w-20 text-brand-purple" />
        )}
      </div>

      <h3 className="mt-4 font-display text-xl font-bold text-brand-purple">
        {title}
      </h3>

      <p className="mt-2 min-h-[64px] text-sm font-medium leading-relaxed text-brand-ink/80">
        {description}
      </p>

      {/* Strict rounded-full button */}
      <button
        type="button"
        aria-expanded={isActive}
        onClick={onLearnMore}
        className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
          isActive
            ? "bg-brand-olive text-white hover:bg-[#5e6b26]"
            : "bg-brand-purple text-white hover:bg-brand-deep"
        }`}
      >
        <span>{isActive ? "Viewing Details" : "Learn More"}</span>
        <ChevronRight size={16} strokeWidth={2.8} />
      </button>
    </article>
  );
}

function CourseDetailPanel({ panelRef, title, iconImage, details }) {
  const [isMoreDetailsOpen, setIsMoreDetailsOpen] = useState(false);
  useEffect(() => setIsMoreDetailsOpen(false), [title]);

  return (
    <article
      ref={panelRef}
      className="mt-10 overflow-hidden rounded-3xl border border-[#d8cc8b] bg-brand-cream shadow-xl"
    >
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.4fr]">
        <div className="relative overflow-hidden bg-brand-deep px-6 py-8 text-white md:px-10 md:py-10">
          <div className="grid h-[120px] w-[200px] place-items-center overflow-hidden rounded-2xl bg-white p-3 shadow-md">
            {iconImage ? (
              <img
                src={iconImage}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            ) : null}
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-gold">
            Course Details
          </p>
          <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 text-sm font-medium leading-relaxed text-white/90">
            {details.intro}
          </p>
          {details.overview.map((paragraph, i) => (
            <p
              key={i}
              className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-white/80"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-[#fffaf1] p-6 md:p-10 flex flex-col justify-between">
          <div>
            <div className="grid gap-6 md:grid-cols-2">
              <DetailList title="What you will learn" items={details.covers} />
              <DetailList title="You will be able to" items={details.outcomes} />
            </div>

            {details.moreDetails?.length ? (
              <button
                type="button"
                aria-expanded={isMoreDetailsOpen}
                onClick={() => setIsMoreDetailsOpen((open) => !open)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand-olive bg-white px-6 py-3 text-xs font-bold text-brand-olive shadow-sm transition hover:bg-brand-cream cursor-pointer"
              >
                <span>{isMoreDetailsOpen ? "Hide Details" : "More Details"}</span>
                <ChevronRight
                  size={16}
                  strokeWidth={2.8}
                  className={`transition-transform ${isMoreDetailsOpen ? "-rotate-90" : "rotate-90"}`}
                />
              </button>
            ) : null}

            {details.moreDetails?.length && isMoreDetailsOpen ? (
              <div className="mt-6">
                <MoreDetails details={details.moreDetails} />
              </div>
            ) : null}
          </div>

          <div className="mt-8 rounded-2xl border border-[#eadfcd] bg-white p-5 shadow-sm">
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-brand-ink">
              <strong className="text-brand-olive">Best for:</strong>{" "}
              {details.bestFor}
            </p>
            <div className="mt-4 flex flex-col gap-3 border-t border-[#eadfcd] pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-bold text-brand-purple">
                Start your journey with us by filling the enquiry form.
              </p>
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-brand-deep transition-colors shrink-0"
              >
                <span>Enquire Now</span>
                <ChevronRight size={16} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function MoreDetails({ details }) {
  return (
    <div className="mb-6 rounded-2xl border border-[#eadfcd] bg-white p-6 shadow-sm">
      <h4 className="font-display text-xl font-bold text-brand-purple mb-4">
        More Details
      </h4>
      <div className="grid gap-5">
        {details.map((section, idx) => (
          <section key={idx}>
            <h5 className="text-sm font-bold text-brand-olive">
              {section.title}
            </h5>
            <div className="mt-2 grid gap-2">
              {section.paragraphs?.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-xs sm:text-sm font-medium leading-relaxed text-brand-ink"
                >
                  {paragraph}
                </p>
              ))}
              {section.points?.length ? (
                <ul className="mt-2 grid gap-1.5">
                  {section.points.map((point, ptIdx) => (
                    <CoursePoint key={ptIdx}>{point}</CoursePoint>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function DetailList({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-brand-purple mb-3">{title}</h4>
      <ul className="grid gap-2">
        {items.map((item, idx) => (
          <CoursePoint key={idx}>{item}</CoursePoint>
        ))}
      </ul>
    </div>
  );
}

function CoursePoint({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-xs sm:text-sm font-medium leading-relaxed text-brand-ink">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-olive" />
      <span>{children}</span>
    </li>
  );
}

// 4. WHY CHOOSE SECTION
function WhyChoose() {
  const benefits = [
    {
      title: "Stage Presence",
      description: "To overcome the 'phobia' of speaking in public, build stage presence, Engage any audience with confidence and poise.",
      icon: Presentation,
    },
    {
      title: "Build Confidence",
      description: "To build confidence. Speak without fear, self-doubt, or hesitation.",
      icon: Star,
    },
    {
      title: "Improve Fluency",
      description: "To improve fluency. Express your thoughts clearly, naturally, and precisely.",
      icon: MessageCircle,
    },
    {
      title: "Conquer Fear",
      description: "To overcome stage fear. Conquer anxiety and stand tall in front of any crowd.",
      icon: Shield,
    },
    {
      title: "Speak & Lead",
      description: "To speak, lead and be heard. Inspire others and command attention with your voice.",
      icon: Users,
    },
    {
      title: "Unleash Potential",
      description: "To unleash your potential. Unlock new personal and professional opportunities.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="bg-brand-deep px-5 py-14 text-center text-white md:px-8 md:py-20 border-t border-[#e6dfd4]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className="hidden h-px w-16 bg-brand-gold md:block" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#f6f0ec]">
            Why Choose VoiceCraft?
          </h2>
          <span className="hidden h-px w-16 bg-brand-gold md:block" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className={`flex flex-col items-center px-4 ${index > 0 ? "lg:border-l lg:border-white/15" : ""}`}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Icon className="h-8 w-8 text-brand-gold" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-gold">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#efe9f2]/85">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 5. TESTIMONIALS SECTION
function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24 border-t border-[#eadfcd]"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading title="From her years of teaching across Bahrain and India, her students say..." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <figure className="flex flex-col justify-between rounded-3xl border border-[#eadfcd] bg-[#fffaf1] p-6 sm:p-7 shadow-sm">
      <div>
        <div className="flex gap-1 mb-3" aria-label="5 star rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-5 w-5 fill-brand-gold text-brand-gold"
            />
          ))}
        </div>
        <blockquote className="text-sm font-medium italic leading-relaxed text-brand-ink/90">
          "{quote}"
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3.5 pt-4 border-t border-brand-purple/10">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#d8cc8b] bg-white text-base font-extrabold uppercase text-brand-purple shadow-sm">
          {initials}
        </div>
        <strong className="text-sm font-bold text-brand-purple">
          {name}
        </strong>
      </figcaption>
    </figure>
  );
}

// 6. GALLERY SECTION
function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-brand-cream px-4 py-16 sm:px-6 md:px-10 md:py-20 border-t border-[#eadfcd]"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading title="Gallery" />
        <div className="marquee-wrapper mt-8 overflow-hidden py-4">
          <div className="marquee-track flex gap-6 w-max">
            {[...galleryMoments, ...galleryMoments].map((moment, index) => (
              <div
                key={index}
                className="w-64 sm:w-80 aspect-[4/3] shrink-0 overflow-hidden rounded-2xl border border-[#d8cc8b] bg-white shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. ENQUIRY SECTION
function Enquiry() {
  return (
    <section
      id="enquiry"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 md:px-8 md:py-24 border-t border-[#eadfcd]"
    >
      <div className="mx-auto max-w-[1180px] rounded-3xl border border-[#eadfcd] bg-brand-cream p-6 sm:p-8 md:p-10 shadow-lg">
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex rounded-full border border-[#eadfcd] bg-white px-6 py-2">
            <img src={logo} alt="VoiceCraft" className="h-8 w-auto" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-purple">
            Enquire Now
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <ProgramEnquiryForm />

          <aside className="flex flex-col justify-between rounded-2xl border border-[#eadfcd] bg-white p-6 sm:p-7 shadow-sm h-full">
            <div>
              <h3 className="font-display text-2xl font-bold text-brand-olive">
                Need to talk?
              </h3>
              <p className="mt-1 text-sm font-bold text-brand-ink">
                We're here to help.
              </p>
              <div className="mt-6 space-y-4">
                <EnquiryContactItem
                  icon={Phone}
                  label="Phone"
                  value="+91 9919911027"
                />
                <EnquiryContactItem
                  icon={Mail}
                  label="Email"
                  value="voicecraftwithjothi@gmail.com"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-[#e5d8bd] pt-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
                <MessageCircle size={20} />
              </span>
              <p className="text-xs sm:text-sm font-bold text-brand-ink">
                We usually respond within 24 hours.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProgramEnquiryForm() {
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });
  const isSubmitting = submitState.status === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const enquiry = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      program: formData.get("program"),
      mode: formData.get("mode"),
      message: formData.get("message"),
    };
    setSubmitState({ status: "submitting", message: "Sending enquiry..." });

    try {
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || "197f0109-a9e0-4029-88e8-63c5461c8801";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `New VoiceCraft Enquiry - ${enquiry.program}`,
          from_name: enquiry.fullName,
          name: enquiry.fullName,
          "Phone / WhatsApp": enquiry.phone,
          "Program Interested In": enquiry.program,
          "Preferred Mode": enquiry.mode,
          Message: enquiry.message || "Not provided",
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Could not send enquiry right now.");
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: "Thank you for your interest! The VoiceCraft team will get back to you shortly.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error.message || "Could not send enquiry right now. Please contact WhatsApp directly.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#e9e2d8] bg-white p-6 shadow-sm"
    >
      <h3 className="font-display text-2xl font-bold text-brand-purple mb-5">
        Choose your course
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          name="fullName"
          label="Full Name"
          placeholder="Enter full name"
          required
        />
        <FormField
          name="phone"
          label="Phone / WhatsApp"
          placeholder="Enter phone / WhatsApp number"
          required
        />
        <FormSelect
          name="program"
          label="Program Interested In"
          options={["Select a program", ...enquiryPrograms]}
          required
        />
        <FormSelect
          name="mode"
          label="Preferred Mode"
          options={["Select preferred mode", "Online", "Offline"]}
          required
        />
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-bold text-brand-ink">
          Message
        </span>
        <textarea
          name="message"
          rows="3"
          placeholder="Type your message here..."
          className="w-full resize-none rounded-2xl border border-[#dcd8df] bg-white px-4 py-3 text-xs sm:text-sm font-medium text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
        />
      </label>

      {/* Strict rounded-full submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-6 text-sm font-bold text-white shadow-md hover:bg-brand-deep transition-all duration-200 cursor-pointer disabled:opacity-60"
      >
        <span>{isSubmitting ? "Sending..." : "Submit Enquiry"}</span>
        <ChevronRight size={18} strokeWidth={2.8} />
      </button>

      {submitState.message ? (
        <p
          className={`mt-4 rounded-full px-4 py-2.5 text-xs text-center font-bold ${
            submitState.status === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}

function FormField({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-brand-ink">
        {label}
        {required ? <span className="ml-1 text-red-600">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-full border border-[#dcd8df] bg-white px-4 text-xs sm:text-sm font-medium text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
      />
    </label>
  );
}

function FormSelect({ name, label, options, required = false }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-brand-ink">
        {label}
        {required ? <span className="ml-1 text-red-600">*</span> : null}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="h-11 w-full rounded-full border border-[#dcd8df] bg-white px-4 text-xs sm:text-sm font-medium text-slate-600 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 cursor-pointer"
      >
        {options.map((option, index) => (
          <option
            key={option}
            value={index === 0 ? "" : option}
            disabled={index === 0}
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function EnquiryContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-purple text-white shadow-sm">
        <Icon size={20} strokeWidth={2.4} />
      </span>
      <div>
        <strong className="block text-xs font-bold text-brand-purple uppercase tracking-wider">
          {label}
        </strong>
        <span className="block text-sm font-bold text-brand-purple/90">
          {value}
        </span>
      </div>
    </div>
  );
}

// 8. FOOTER
function Footer() {
  return (
    <footer className="bg-brand-deep text-white border-t border-brand-purple/20">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-8 px-6 py-12 sm:flex-row sm:items-center">
        <div>
          <a href="#home" className="inline-flex">
            <img
              src={logo}
              alt="VoiceCraft"
              className="h-10 w-auto brightness-110"
            />
          </a>
          <p className="mt-3 text-xs text-white/70 max-w-xs">
            Empowering individuals to speak with confidence, express with clarity, and lead with impact.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-2.5 text-xs text-white/80">
          <h4 className="text-sm font-bold text-brand-gold uppercase tracking-wider mb-1">
            Contact Us
          </h4>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-brand-gold" />
            <span>+91 9919911027</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-brand-gold" />
            <span>voicecraftwithjothi@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-brand-gold" />
            <span>Marathahalli, Bangalore, India</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 pb-8 pt-2 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-brand-olive px-6 py-3.5 text-center text-xs font-bold text-white/90">
        &copy; 2025 VoiceCraft. All Rights Reserved.
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-4">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-2">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-brand-purple">
        {title}
      </h2>
      <div className="w-16 h-1 rounded-full bg-brand-gold mx-auto mt-4" />
    </div>
  );
}
