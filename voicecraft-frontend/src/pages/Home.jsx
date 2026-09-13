import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
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
  ArrowRight,
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
    subtitle: "Public Speaking & Youth Leadership",
    description: "Find your voice, speak confidently, and inspire an audience.",
    highlights: ["Stage Presence", "Audience Engagement", "Speech Structuring", "Overcoming Fear"],
    icon: Mic,
    iconImage: speakIcon,
    tone: "olive",
  },
  {
    title: "EngLingo by VoiceCraft",
    subtitle: "Spoken English & Fluency",
    description: "Build strong language skills for everyday fluency and professional use.",
    highlights: ["Grammar Foundation", "Workplace English", "Vocabulary Building", "Writing Skills"],
    icon: BookOpen,
    iconImage: engIcon,
    tone: "purple",
  },
  {
    title: "Bonjour by VoiceCraft",
    subtitle: "French Language (A1 to B2)",
    description: "Learn French with ease and speak with confidence.",
    highlights: ["Pronunciation Coaching", "Conversational French", "DELF / TEF Prep", "6 Level Pathway"],
    icon: BookOpen,
    iconImage: frIcon,
    tone: "olive",
  },
  {
    title: "IELTS & PTE Training",
    subtitle: "Global Proficiency Test Preparation",
    description: "Expert coaching to help you achieve your desired band score.",
    highlights: ["All 4 Modules Covered", "Mock Speaking Tests", "Writing Evaluations", "Score Strategies"],
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
  const [activeSection, setActiveSection] = useState("home");
  const [navKey, setNavKey] = useState(0);
  const currentSectionRef = useRef("home");

  const handleNavigateSection = (id) => {
    currentSectionRef.current = id;
    setActiveSection(id);
    setNavKey((k) => k + 1);
  };

  useEffect(() => {
    const handleNavEvent = (e) => {
      const id = e.detail?.id;
      if (id) {
        currentSectionRef.current = id;
        setActiveSection(id);
        setNavKey((k) => k + 1);
      }
    };
    window.addEventListener("voicecraft:navigate", handleNavEvent);
    return () => window.removeEventListener("voicecraft:navigate", handleNavEvent);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            const id = entry.target.id;
            if (id && currentSectionRef.current !== id) {
              currentSectionRef.current = id;
              setActiveSection(id);
              setNavKey((k) => k + 1);
            }
          }
        });
      },
      { threshold: [0.25, 0.5] }
    );

    const sectionIds = ["home", "about", "programs", "why-us", "testimonials", "gallery", "enquiry"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const selectProgram = (courseTitle) => {
    setSelectedCourse(courseTitle);
    handleNavigateSection("programs");
    window.setTimeout(() => {
      document
        .getElementById("programs")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] overflow-hidden bg-brand-cream pt-[68px] lg:pt-[114px] shadow-soft sm:border sm:border-[#e8dfd7]">
      <Navbar
        programs={programs.map((program) => program.title)}
        onSelectProgram={selectProgram}
        onNavigateSection={handleNavigateSection}
      />
      <HeroSection
        isAnimated={activeSection === "home"}
        animKey={navKey}
      />
      <FeatureHighlightStrip />
      <About
        isAnimated={activeSection === "about"}
        animKey={navKey}
        onSelectProgram={selectProgram}
      />
      <Programs
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        isAnimated={activeSection === "programs"}
        animKey={navKey}
      />
      <CounterStrip />
      <WhyChoose
        isAnimated={activeSection === "why-us" || activeSection === "about"}
        animKey={navKey}
      />
      <Testimonials
        isAnimated={activeSection === "testimonials"}
        animKey={navKey}
      />
      <Gallery
        isAnimated={activeSection === "gallery"}
        animKey={navKey}
      />
      <Enquiry
        isAnimated={activeSection === "enquiry"}
        animKey={navKey}
      />
      <Footer />
    </main>
  );
}

// 1. HERO SECTION (Consen IT Solution 03-2 Two-Column Modern Layout)
function HeroSection({ isAnimated, animKey }) {
  return (
    <section
      id="home"
      data-section="home"
      aria-label="Home section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE6] scroll-mt-28 px-4 sm:px-6 lg:px-10 py-12 lg:py-20 flex items-center"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left Column: Consen Typography, Headline, Buttons & Trust Badges */}
          <div key={`hero-content-${animKey}`} className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-olive/15 border border-brand-olive/30 text-brand-olive text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 anim-hero-badge shadow-sm">
              <Sparkles size={14} className="text-brand-gold animate-pulse" />
              <span>MANY PATHS TO ONE CONFIDENT VOICE</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.14] tracking-tight text-brand-purple">
              <span className="inline-block anim-hero-title-1">Unlock your confidence.</span> <br />
              <span className="inline-block text-brand-olive anim-hero-title-2">Communicate with power.</span>
            </h1>

            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-gold to-brand-olive anim-hero-line" />

            <p className="mt-5 text-base sm:text-lg font-medium leading-relaxed text-brand-ink/90 max-w-xl anim-hero-desc">
              From confident speaking to developing fluency, we help you express,
              connect and succeed in every stage of life.
            </p>

            {/* Strict rounded-full action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 anim-hero-buttons">
              <Button
                href="#enquiry"
                variant="primary"
                size="lg"
                icon={CalendarDays}
                className="rounded-full shadow-lg shadow-brand-purple/20 hover:scale-105 transition-all duration-300"
              >
                Join a Session
              </Button>
              <Button
                href="#programs"
                variant="secondary"
                size="lg"
                className="rounded-full shadow-sm hover:scale-105 transition-all duration-300"
              >
                Explore Programs
              </Button>
            </div>

            {/* Consen Trust Indicators */}
            <div className="mt-10 pt-6 border-t border-brand-purple/10 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-sm font-bold text-brand-purple/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-olive shrink-0" />
                <span>1-on-1 & Small Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-olive shrink-0" />
                <span>Practical Speech Exercises</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-olive shrink-0" />
                <span>Classroom & Live Online</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait of DTM Jothi + 3 Floating Stat Badges */}
          <div key={`hero-image-${animKey}`} className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px] pt-6 pb-8">
            {/* Background Aesthetic Ring */}
            <div className="absolute inset-0 rounded-[42px] bg-gradient-to-tr from-brand-purple/15 via-brand-gold/15 to-brand-olive/15 blur-2xl transform scale-95 pointer-events-none" />
            <div className="absolute -inset-3 rounded-[40px] border-2 border-dashed border-brand-gold/40 pointer-events-none" />

            {/* Framed DTM Jothi Portrait Card */}
            <div className="relative z-10 w-full aspect-[4/4.9] overflow-hidden rounded-[32px] border-4 border-white bg-gradient-to-b from-white to-[#F5EFE6] shadow-[0_20px_50px_rgba(74,21,75,0.16)]">
              <img
                src={authorpic}
                alt="DTM Jothi - Founder & Master VoiceCraft Coach"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-deep/90 via-brand-deep/40 to-transparent flex items-end p-5">
                <div>
                  <p className="text-white font-display text-xl font-bold leading-tight">
                    DTM Jothi
                  </p>
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mt-0.5">
                    Founder & Master Coach
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 1: 1000+ Students Trained (Top Left) */}
            <div className="absolute -top-2 -left-2 sm:-left-6 z-20 animate-float">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-white shadow-[0_12px_32px_rgba(74,21,75,0.14)] hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-deep flex items-center justify-center text-white shadow-sm shrink-0">
                  <Users size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <strong className="font-display text-base sm:text-lg font-extrabold text-brand-purple leading-tight">
                    1000+
                  </strong>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-brand-ink/80 whitespace-nowrap leading-tight">
                    Students Trained
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 2: 20+ Years Experience (Mid/Bottom Left) */}
            <div className="absolute bottom-12 -left-2 sm:-left-8 z-20 animate-float-delayed">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-white shadow-[0_12px_32px_rgba(179,146,57,0.18)] hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-[#987625] flex items-center justify-center text-white shadow-sm shrink-0">
                  <Star size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <strong className="font-display text-base sm:text-lg font-extrabold text-brand-gold leading-tight">
                    20+ Years
                  </strong>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-brand-ink/80 whitespace-nowrap leading-tight">
                    Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 3: Personalized Mentorship (Bottom Right) */}
            <div className="absolute -bottom-3 -right-2 sm:-right-6 z-20 animate-float">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-white shadow-[0_12px_32px_rgba(110,137,52,0.18)] hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-olive to-[#556d25] flex items-center justify-center text-white shadow-sm shrink-0">
                  <Sparkles size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <strong className="font-display text-base sm:text-lg font-extrabold text-brand-olive leading-tight">
                    Personalized
                  </strong>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-brand-ink/80 whitespace-nowrap leading-tight">
                    Mentorship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. CONSEN 3 FEATURE HIGHLIGHT CARDS STRIP (Directly below hero)
function FeatureHighlightStrip() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-10 pb-16">
      <div className="mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="rounded-3xl bg-white p-7 border border-[#eadfcd] shadow-card hover:-translate-y-1.5 hover:shadow-floating transition-all duration-300 flex flex-col items-start group">
          <div className="w-14 h-14 rounded-2xl bg-brand-olive/15 text-brand-olive flex items-center justify-center mb-5 group-hover:bg-brand-olive group-hover:text-white transition-colors">
            <Presentation size={26} strokeWidth={2.2} />
          </div>
          <h3 className="font-display text-xl font-bold text-brand-purple">
            Classroom & Live Online
          </h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-brand-ink/80">
            Interactive speaking sessions conducted at Marathahalli, Bangalore, plus interactive live online sessions globally.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="rounded-3xl bg-white p-7 border border-[#eadfcd] shadow-card hover:-translate-y-1.5 hover:shadow-floating transition-all duration-300 flex flex-col items-start group">
          <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-5 group-hover:bg-brand-gold group-hover:text-white transition-colors">
            <Award size={26} strokeWidth={2.2} />
          </div>
          <h3 className="font-display text-xl font-bold text-brand-purple">
            20+ Years of Mentorship
          </h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-brand-ink/80">
            Guided directly by DTM Jothi, Master VoiceCraft Coach with structured speech frameworks and individualized feedback.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="rounded-3xl bg-white p-7 border border-[#eadfcd] shadow-card hover:-translate-y-1.5 hover:shadow-floating transition-all duration-300 flex flex-col items-start group">
          <div className="w-14 h-14 rounded-2xl bg-brand-purple/15 text-brand-purple flex items-center justify-center mb-5 group-hover:bg-brand-purple group-hover:text-white transition-colors">
            <Globe size={26} strokeWidth={2.2} />
          </div>
          <h3 className="font-display text-xl font-bold text-brand-purple">
            Global Student Community
          </h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-brand-ink/80">
            Proud learners across India, Bahrain, and overseas achieving speaking confidence, clarity, and top exam scores.
          </p>
        </div>
      </div>
    </section>
  );
}

// 3. ABOUT SECTION (Consen 2-Column Split)
function About({ isAnimated, animKey, onSelectProgram }) {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24 border-t border-[#eadfcd]"
    >
      <div
        key={`about-${animKey}`}
        className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
      >
        {/* Left Column: Framed Portrait + Quote */}
        <div className={`mx-auto w-full max-w-[380px] flex flex-col items-center text-center ${isAnimated ? "section-card-enter" : ""}`}>
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[30px] border-4 border-[#fff] bg-[#f9f5f0] shadow-xl">
            <img
              src={authorpic}
              alt="DTM Jothi from VoiceCraft"
              className="h-full w-full object-cover object-top"
            />
            {/* Experience Pill Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-deep/90 backdrop-blur-md text-white text-xs font-bold shadow-md border border-white/20">
                <Award size={14} className="text-brand-gold" />
                20+ Years Mentorship
              </span>
            </div>
          </div>

          <blockquote className="mt-5 text-lg font-semibold italic text-brand-olive sm:text-xl">
            “Reading is rewarding”
          </blockquote>
          <p className="mt-1 font-display text-3xl font-extrabold text-brand-purple">
            DTM Jothi
          </p>
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-0.5">
            Founder & Master Coach
          </span>
        </div>

        {/* Right Column: Consen Content & Checklist */}
        <div className={isAnimated ? "section-text-enter" : ""}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-extrabold uppercase tracking-wider mb-4">
            <span>ABOUT THE FOUNDER & MASTER COACH</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-brand-purple">
            About VoiceCraft
          </h2>

          <div className="mt-3 h-1 w-20 rounded-full bg-brand-gold" />

          <p className="mt-6 text-base sm:text-lg font-medium leading-relaxed text-brand-ink/90">
            Founded and led by DTM Jothi, VoiceCraft is dedicated to empowering
            individuals to speak with clarity, confidence, and impact. With
            decades of experience in mentoring speakers and language learners,
            her work helps students, professionals, and aspiring leaders communicate
            effectively at every stage of life.
          </p>

          {/* Consen 4 Highlights Checklist */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-cream border border-[#eadfcd]">
              <div className="w-8 h-8 rounded-full bg-brand-olive/20 text-brand-olive flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} strokeWidth={2.6} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-purple">
                Structured & Engaging Curriculum
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-cream border border-[#eadfcd]">
              <div className="w-8 h-8 rounded-full bg-brand-olive/20 text-brand-olive flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} strokeWidth={2.6} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-purple">
                Fear-Free Speaking Environment
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-cream border border-[#eadfcd]">
              <div className="w-8 h-8 rounded-full bg-brand-olive/20 text-brand-olive flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} strokeWidth={2.6} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-purple">
                Personalized Guidance & Feedback
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-cream border border-[#eadfcd]">
              <div className="w-8 h-8 rounded-full bg-brand-olive/20 text-brand-olive flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} strokeWidth={2.6} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-purple">
                Practical Real-World Exercises
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button
              href="#programs"
              variant="primary"
              size="md"
              className="rounded-full shadow-md hover:scale-105 transition-all"
            >
              Explore Our Programs
            </Button>
            <Button
              href="#enquiry"
              variant="secondary"
              size="md"
              className="rounded-full hover:scale-105 transition-all"
            >
              Contact Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. PROGRAMS SECTION (Consen 4-Box Service Layout)
function Programs({ selectedCourse, setSelectedCourse, isAnimated, animKey }) {
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
      className="scroll-mt-28 bg-[#FAF9F6] px-4 py-16 sm:px-6 md:px-8 md:py-24 border-t border-[#eadfcd]"
    >
      <div key={`programs-${animKey}`} className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="OUR SIGNATURE PROGRAMS"
          title="Tailored Programs for Every Communicator"
          isAnimated={isAnimated}
        />
        <p className="text-center text-sm sm:text-base font-medium text-brand-ink/80 max-w-2xl mx-auto -mt-2 mb-10">
          Structured courses designed for students, working professionals, and language enthusiasts.
        </p>

        {/* Consen 4 Service Cards Grid */}
        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${isAnimated ? "section-card-enter" : ""}`}>
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              {...program}
              isActive={selectedCourse === program.title}
              onLearnMore={() => setSelectedCourse(program.title)}
            />
          ))}
        </div>

        {/* Expandable Course Details Panel */}
        {selectedProgram ? (
          <CourseDetailPanel
            panelRef={detailRef}
            title={selectedCourse}
            iconImage={
              programs.find((program) => program.title === selectedCourse)
                ?.iconImage
            }
            details={selectedProgram}
            onClose={() => setSelectedCourse(null)}
          />
        ) : null}
      </div>
    </section>
  );
}

function ProgramCard({
  title,
  subtitle,
  description,
  highlights = [],
  icon: Icon,
  iconImage,
  isActive,
  onLearnMore,
}) {
  return (
    <article
      className={`flex min-h-[380px] flex-col items-start rounded-3xl border bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-floating ${
        isActive
          ? "border-brand-olive ring-2 ring-brand-olive/30 shadow-lg"
          : "border-[#eadfcd]"
      }`}
    >
      {/* Icon / Official Cropped Logo Container */}
      <div className="grid h-[100px] w-full place-items-center rounded-2xl bg-brand-cream/80 p-3 mb-5 border border-[#eadfcd]/60">
        {iconImage ? (
          <img
            src={iconImage}
            alt={title}
            className="max-h-[85px] max-w-[90%] object-contain"
          />
        ) : (
          <Icon className="h-16 w-16 text-brand-purple" />
        )}
      </div>

      <span className="text-[11px] font-bold text-brand-olive uppercase tracking-wider">
        {subtitle}
      </span>

      <h3 className="mt-1 font-display text-xl font-extrabold text-brand-purple">
        {title}
      </h3>

      <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-brand-ink/80 min-h-[44px]">
        {description}
      </p>

      {/* Syllabus Highlights Badges */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {highlights.slice(0, 3).map((item, i) => (
          <span
            key={i}
            className="px-2.5 py-0.5 rounded-full bg-brand-cream text-[10px] font-semibold text-brand-purple/90 border border-[#eadfcd]"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Strict rounded-full button */}
      <button
        type="button"
        aria-expanded={isActive}
        onClick={onLearnMore}
        className={`mt-auto pt-6 inline-flex items-center justify-center gap-2 rounded-full w-full py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
          isActive
            ? "bg-brand-olive text-white hover:bg-[#5e6b26]"
            : "bg-brand-purple text-white hover:bg-brand-deep"
        }`}
      >
        <span>{isActive ? "Viewing Syllabus" : "View Details & Syllabus"}</span>
        <ChevronRight size={16} strokeWidth={2.8} />
      </button>
    </article>
  );
}

function CourseDetailPanel({ panelRef, title, iconImage, details, onClose }) {
  const [isMoreDetailsOpen, setIsMoreDetailsOpen] = useState(false);
  useEffect(() => setIsMoreDetailsOpen(false), [title]);

  return (
    <article
      ref={panelRef}
      className="mt-10 overflow-hidden rounded-3xl border border-[#d8cc8b] bg-white shadow-2xl transition-all"
    >
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.4fr]">
        <div className="relative overflow-hidden bg-brand-deep px-6 py-8 text-white md:px-10 md:py-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="grid h-[100px] w-[180px] place-items-center overflow-hidden rounded-2xl bg-white p-3 shadow-md">
                {iconImage ? (
                  <img
                    src={iconImage}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                  />
                ) : null}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-white/70 hover:text-white text-xs font-bold underline cursor-pointer"
              >
                Close Syllabus
              </button>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-gold">
              Course Details & Curriculum
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

          <div className="mt-8 pt-6 border-t border-white/15">
            <p className="text-xs text-brand-gold font-semibold">
              Master Mentorship by DTM Jothi
            </p>
          </div>
        </div>

        <div className="bg-[#FFFDF9] p-6 md:p-10 flex flex-col justify-between">
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
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand-olive bg-white px-6 py-2.5 text-xs font-bold text-brand-olive shadow-sm transition hover:bg-brand-cream cursor-pointer"
              >
                <span>{isMoreDetailsOpen ? "Hide Advanced Details" : "View Full Course Structure & Options"}</span>
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
                Enroll or book a trial class today.
              </p>
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-brand-deep transition-colors shrink-0"
              >
                <span>Enquire For This Program</span>
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
        Course Structure & Modules
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

// 5. CONSEN DARK COUNTER / METRICS STRIP
function CounterStrip() {
  const metrics = [
    { value: "1000+", label: "Students Trained", icon: Users },
    { value: "20+", label: "Years Coaching Experience", icon: Award },
    { value: "4", label: "Specialized Signature Programs", icon: BookOpen },
    { value: "100%", label: "Interactive Live Practice", icon: Sparkles },
  ];

  return (
    <section className="bg-brand-deep py-14 px-4 sm:px-6 lg:px-10 border-t border-brand-purple/30 text-white relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-32 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1240px] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold mb-3">
                <Icon size={22} />
              </div>
              <strong className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-gold">
                {item.value}
              </strong>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-white/80">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// 6. WHY CHOOSE SECTION (Consen 6-Grid Feature Section)
function WhyChoose({ isAnimated, animKey }) {
  const benefits = [
    {
      title: "Stage Presence",
      description: "To overcome the 'phobia' of speaking in public, build stage presence, engage any audience with confidence and poise.",
      icon: Presentation,
    },
    {
      title: "Build Confidence",
      description: "To build confidence. Speak without fear, self-doubt, or hesitation in any setting.",
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
    <section id="why-us" className="scroll-mt-28 bg-white px-5 py-16 text-center text-brand-ink md:px-8 md:py-24 border-t border-[#eadfcd]">
      <div key={`why-${animKey}`} className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="THE VOICECRAFT ADVANTAGE"
          title="Why Choose VoiceCraft?"
          isAnimated={isAnimated}
        />
        <p className="text-center text-sm sm:text-base font-medium text-brand-ink/80 max-w-2xl mx-auto -mt-2 mb-12">
          Transform from a hesitant speaker into a captivating communicator through proven methodology.
        </p>

        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ${isAnimated ? "section-card-enter" : ""}`}>
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="flex flex-col items-center rounded-3xl border border-[#eadfcd] bg-brand-cream/60 p-6 text-center shadow-sm hover:bg-white hover:shadow-floating hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-4 text-brand-purple">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <h3 className="font-display text-base font-bold text-brand-purple">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-brand-ink/80">
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

// 7. TESTIMONIALS SECTION (Consen 3-Column Grid)
function Testimonials({ isAnimated, animKey }) {
  return (
    <section
      id="testimonials"
      className="scroll-mt-28 bg-[#FAF9F6] px-4 py-16 sm:px-6 md:px-10 md:py-24 border-t border-[#eadfcd]"
    >
      <div key={`testi-${animKey}`} className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="STUDENT SUCCESS STORIES"
          title="From her years of teaching across Bahrain and India, her students say..."
          isAnimated={isAnimated}
        />
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isAnimated ? "section-card-enter" : ""}`}>
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
    <figure className="flex flex-col justify-between rounded-3xl border border-[#eadfcd] bg-white p-7 shadow-card hover:-translate-y-1.5 hover:shadow-floating transition-all duration-300">
      <div>
        <div className="flex gap-1 mb-4" aria-label="5 star rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-brand-gold text-brand-gold"
            />
          ))}
        </div>
        <blockquote className="text-sm font-medium italic leading-relaxed text-brand-ink/90">
          "{quote}"
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3.5 pt-4 border-t border-brand-purple/10">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-purple/10 text-brand-purple text-sm font-extrabold uppercase shadow-sm">
          {initials}
        </div>
        <strong className="text-sm font-bold text-brand-purple">
          {name}
        </strong>
      </figcaption>
    </figure>
  );
}

// 8. GALLERY SECTION (Consen Showcase Marquee)
function Gallery({ isAnimated, animKey }) {
  return (
    <section
      id="gallery"
      className="scroll-mt-28 bg-white px-4 py-16 sm:px-6 md:px-10 md:py-20 border-t border-[#eadfcd]"
    >
      <div key={`gallery-${animKey}`} className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="OUR CLASSROOM MOMENTS"
          title="Life at VoiceCraft Academy"
          isAnimated={isAnimated}
        />
        <div className={`marquee-wrapper mt-8 overflow-hidden py-4 ${isAnimated ? "section-card-enter" : ""}`}>
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

// 9. ENQUIRY SECTION (Consen Split Layout)
function Enquiry({ isAnimated, animKey }) {
  return (
    <section
      id="enquiry"
      className="scroll-mt-28 bg-[#FAF9F6] px-4 py-16 sm:px-6 md:px-8 md:py-24 border-t border-[#eadfcd]"
    >
      <div key={`enquiry-${animKey}`} className={`mx-auto max-w-[1240px] rounded-3xl border border-[#eadfcd] bg-brand-cream p-6 sm:p-8 md:p-12 shadow-lg ${isAnimated ? "section-card-enter" : ""}`}>
        <div className={`mb-10 text-center ${isAnimated ? "section-text-enter" : ""}`}>
          <div className="mb-3 inline-flex rounded-full border border-[#eadfcd] bg-white px-6 py-2 shadow-sm">
            <img src={logo} alt="VoiceCraft" className="h-8 w-auto" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-1">
            GET IN TOUCH WITH OUR MASTER COACH
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-purple">
            Enquire Now
          </h2>
          <div className="w-16 h-1 rounded-full bg-brand-gold mx-auto mt-3" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <ProgramEnquiryForm />

          {/* Consen Contact Info Card */}
          <aside className="flex flex-col justify-between rounded-3xl border border-[#eadfcd] bg-white p-7 sm:p-8 shadow-sm h-full">
            <div>
              <h3 className="font-display text-2xl font-bold text-brand-olive">
                Need to talk?
              </h3>
              <p className="mt-1 text-sm font-bold text-brand-ink">
                We're here to help guide your communication journey.
              </p>
              <div className="mt-6 space-y-4">
                <EnquiryContactItem
                  icon={Phone}
                  label="Phone / WhatsApp"
                  value="+91 99199 11027"
                  href="tel:+919919911027"
                />
                <EnquiryContactItem
                  icon={Mail}
                  label="Email"
                  value="voicecraftwithjothi@gmail.com"
                  href="mailto:voicecraftwithjothi@gmail.com"
                />
                <EnquiryContactItem
                  icon={MapPin}
                  label="Classroom Location"
                  value="Marathahalli, Bangalore, India"
                />
                <EnquiryContactItem
                  icon={Clock}
                  label="Operating Hours"
                  value="Mon – Sat: 9:00 AM – 7:00 PM"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-purple/10">
              <a
                href="https://wa.me/919919911027"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-md hover:bg-[#20bd5a] transition-all duration-200"
              >
                <MessageCircle size={18} />
                <span>Chat Instantly on WhatsApp</span>
              </a>
              <p className="mt-2 text-center text-[11px] font-semibold text-brand-ink/70">
                Direct reply within 24 hours.
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
      className="rounded-3xl border border-[#e9e2d8] bg-white p-7 sm:p-8 shadow-sm"
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
          options={["Select preferred mode", "Classroom (Marathahalli, Bangalore)", "Live Online"]}
          required
        />
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-bold text-brand-ink">
          Message (Optional)
        </span>
        <textarea
          name="message"
          rows="3"
          placeholder="Tell us about your learning goals..."
          className="w-full resize-none rounded-2xl border border-[#dcd8df] bg-white px-4 py-3 text-xs sm:text-sm font-medium text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
        />
      </label>

      {/* Strict rounded-full submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-6 text-sm font-bold text-white shadow-md hover:bg-brand-deep hover:scale-[1.01] transition-all duration-200 cursor-pointer disabled:opacity-60"
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

function EnquiryContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3.5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-cream border border-[#eadfcd] text-brand-purple shadow-sm">
        <Icon size={19} strokeWidth={2.2} />
      </span>
      <div>
        <strong className="block text-[11px] font-bold text-brand-olive uppercase tracking-wider">
          {label}
        </strong>
        <span className="block text-xs sm:text-sm font-bold text-brand-purple">
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
}

// 10. FOOTER (Consen 4-Column Modern Footer)
function Footer() {
  return (
    <footer className="bg-brand-deep text-white border-t border-brand-purple/20">
      <div className="mx-auto max-w-[1240px] px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div>
            <a href="#home" className="inline-flex">
              <img
                src={logo}
                alt="VoiceCraft"
                className="h-11 w-auto brightness-110"
              />
            </a>
            <p className="mt-4 text-xs sm:text-sm text-white/75 leading-relaxed">
              Empowering individuals to speak with confidence, express with clarity, and lead with impact across every stage of life.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-deep flex items-center justify-center text-white transition-all text-xs"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About VoiceCraft</a></li>
              <li><a href="#programs" className="hover:text-brand-gold transition-colors">Our Programs</a></li>
              <li><a href="#why-us" className="hover:text-brand-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-brand-gold transition-colors">Student Reviews</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Classroom Gallery</a></li>
              <li><a href="#enquiry" className="hover:text-brand-gold transition-colors">Enquire Now</a></li>
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div>
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">
              Our Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li><a href="#programs" className="hover:text-brand-gold transition-colors">Eloquence by VoiceCraft</a></li>
              <li><a href="#programs" className="hover:text-brand-gold transition-colors">EngLingo by VoiceCraft</a></li>
              <li><a href="#programs" className="hover:text-brand-gold transition-colors">Bonjour by VoiceCraft</a></li>
              <li><a href="#programs" className="hover:text-brand-gold transition-colors">IELTS & PTE Training</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Marathahalli, Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <a href="tel:+919919911027" className="hover:text-brand-gold transition-colors">
                  +91 99199 11027
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <a href="mailto:voicecraftwithjothi@gmail.com" className="hover:text-brand-gold transition-colors break-all">
                  voicecraftwithjothi@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-brand-gold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Classroom & Live Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#1b051c] px-6 py-4 text-center text-xs text-white/60">
        &copy; 2025 VoiceCraft Academy. All Rights Reserved. Master Coaching by DTM Jothi.
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, isAnimated }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-4 ${isAnimated ? "section-text-enter" : ""}`}>
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
