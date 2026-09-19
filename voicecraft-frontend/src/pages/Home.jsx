import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  CalendarDays,
  Check,
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
  ArrowUp,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// Assets
import studentHero from "../assets/gallery/student_hero.jpg";
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
    id: "eloquence",
    number: "01",
    title: "Eloquence by VoiceCraft",
    subtitle: "Public Speaking & Youth Leadership",
    description: "Find your voice, speak confidently, and inspire an audience.",
    highlights: ["Audience Engagement & Poise", "Speech Structuring & Delivery", "Overcoming Stage Fright", "Voice Modulation & Body Language"],
    duration: "3 Months Fast Track / 1 Year Pathway",
    mode: "1-on-1 & Small Batches • Offline & Online",
    category: "Public Speaking",
    icon: Mic,
    iconImage: speakIcon,
    accent: "olive",
  },
  {
    id: "englingo",
    number: "02",
    title: "EngLingo by VoiceCraft",
    subtitle: "Spoken English & Fluency",
    description: "Build strong language skills for everyday fluency and professional use.",
    highlights: ["Wren & Martin Grammar Foundations", "Workplace Communication & Meetings", "Vocabulary Expansion & Articulation", "Professional Email & Writing Skills"],
    duration: "Customized Pace & Modules",
    mode: "School Students, Homemakers & Working Professionals",
    category: "Spoken English",
    icon: BookOpen,
    iconImage: engIcon,
    accent: "purple",
  },
  {
    id: "bonjour",
    number: "03",
    title: "Bonjour by VoiceCraft",
    subtitle: "French Language (A1 to B2)",
    description: "Learn French with ease and speak with confidence.",
    highlights: ["Pronunciation & Phonetics Coaching", "Practical Conversational French", "DELF & TEF Canada Exam Readiness", "6 Progressive Skill Levels"],
    duration: "6 Progressive Modular Levels",
    mode: "Study Abroad, Relocation, Work & Cultural Learning",
    category: "French Language",
    icon: Globe,
    iconImage: frIcon,
    accent: "gold",
  },
  {
    id: "ielts",
    number: "04",
    title: "IELTS & PTE Training",
    subtitle: "Global Test Preparation",
    description: "Expert coaching to help you achieve your desired band score.",
    highlights: ["All 4 Modules (Listening, Reading, Writing, Speaking)", "Individual Speaking Mock Evaluations", "Detailed Essay & Writing Structure Reviews", "Proven Band 7.5+ Strategies"],
    duration: "Targeted Intensive & Comprehensive Batches",
    mode: "Study Abroad & Immigration Applicants",
    category: "IELTS & PTE",
    icon: Award,
    iconImage: ieltsIcon,
    accent: "plum",
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
  const [activeCategory, setActiveCategory] = useState("all");
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
    <main className="w-full min-h-screen overflow-hidden bg-[#120614] text-[#F8F5EE] pt-[68px] lg:pt-[114px]">
      <ReadingProgressBar />
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
      <ProgramsSection
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isAnimated={activeSection === "programs"}
        animKey={navKey}
      />
      <CallToActionStrip />
      <WhyChooseSection
        isAnimated={activeSection === "why-us" || activeSection === "about"}
        animKey={navKey}
      />
      <CounterStrip />
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
      <ScrollToTopButton />
      <FloatingWhatsApp />
    </main>
  );
}

// 1. HERO SECTION (Executive Masterclass Style: Dark Obsidian Plum + Student Girl Hero Image + Gold Accents + Times New Roman)
function HeroSection({ isAnimated, animKey }) {
  return (
    <section
      id="home"
      data-section="home"
      aria-label="Home section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#120614] via-[#1A081C] to-[#210922] scroll-mt-28 px-4 sm:px-8 lg:px-14 py-12 lg:py-24 flex items-center"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#4A154B]/25 blur-3xl pointer-events-none liquid-orb-purple" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-brand-gold/15 blur-3xl pointer-events-none liquid-orb-gold" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-10 items-center">
          {/* Content Column: 2nd on mobile, 1st on desktop */}
          <div key={`hero-content-${animKey}`} className="order-2 lg:order-1 flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-brand-gold/30 text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 anim-hero-badge shadow-sm backdrop-blur-md">
              <Sparkles size={14} className="text-brand-gold animate-pulse" />
              <span>✦ EXECUTIVE MASTERCLASS COACHING</span>
            </div>

            <h1 className="font-display font-serif text-4xl sm:text-5xl md:text-5xl lg:text-[62px] font-bold leading-[1.12] tracking-tight text-white">
              <span className="inline-block gold-text-gradient">Unlock your confidence.</span> <br />
              <span className="inline-block text-white/95">Communicate with power.</span>
            </h1>

            <div className="mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-olive" />

            <p className="mt-5 text-base sm:text-lg font-medium leading-relaxed text-white/80 max-w-xl">
              From confident speaking to developing fluency, we help you express,
              connect and succeed in every stage of life.
            </p>

            {/* Strict rounded-full action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="#enquiry"
                variant="primary"
                size="lg"
                icon={CalendarDays}
                className="rounded-full shadow-lg shadow-brand-gold/20 hover:scale-105 transition-all duration-300"
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

            {/* Trust Indicators */}
            <div className="mt-10 pt-6 border-t border-brand-gold/15 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-sm font-bold text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                <span>1-on-1 & Small Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                <span>Practical Speech Exercises</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                <span>Classroom & Live Online</span>
              </div>
            </div>
          </div>

          {/* Student Girl Image Column: 1st on mobile, 2nd on desktop */}
          <div key={`hero-image-${animKey}`} className="order-1 lg:order-2 relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] pt-4 lg:pt-6 pb-10 lg:pb-12">
            {/* Background Aesthetic Ring */}
            <div className="absolute inset-0 rounded-[44px] bg-gradient-to-tr from-brand-purple/30 via-brand-gold/25 to-brand-olive/20 blur-2xl transform scale-95 pointer-events-none" />
            <div className="absolute -inset-3.5 rounded-[42px] border-2 border-dashed border-brand-gold/40 pointer-events-none" />

            {/* Framed Student Girl Portrait Card */}
            <div className="relative z-10 w-full aspect-[3/4] overflow-hidden rounded-[36px] border-2 border-brand-gold/40 bg-[#1A081C] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <img
                src={studentHero}
                alt="VoiceCraft Academy Student"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#120614]/95 via-[#120614]/60 to-transparent flex items-end justify-center p-4 pb-8 sm:pb-9 text-center">
                <div>
                  <p className="text-white font-display font-serif text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                    Empowering Confident Voices
                  </p>
                  <p className="text-brand-gold text-[11px] sm:text-xs font-semibold tracking-wide mt-0.5 drop-shadow-sm">
                    Students • Teenagers • Professionals
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 1: 1000+ Students Trained (Top Left) */}
            <div className="absolute -top-3 -left-3 sm:-left-6 z-20 animate-float">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#1A081C]/90 backdrop-blur-xl border border-brand-gold/35 shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-[#987625] flex items-center justify-center text-brand-deep shadow-sm shrink-0">
                  <Users size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <strong className="font-display font-serif text-base sm:text-lg font-bold gold-text-gradient leading-tight">
                    1000+
                  </strong>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-white/75 whitespace-nowrap leading-tight">
                    Students Trained
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 2: 20+ Years Experience (Bottom Left) */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-8 z-20 animate-float-delayed">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#1A081C]/90 backdrop-blur-xl border border-brand-gold/35 shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-[#987625] flex items-center justify-center text-brand-deep shadow-sm shrink-0">
                  <Star size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <strong className="font-display font-serif text-base sm:text-lg font-bold gold-text-gradient leading-tight">
                    20+ Years
                  </strong>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-white/75 whitespace-nowrap leading-tight">
                    Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 3: Personalized Mentorship (Bottom Right) */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 z-20 animate-float">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#1A081C]/90 backdrop-blur-xl border border-brand-gold/35 shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-olive to-[#556d25] flex items-center justify-center text-white shadow-sm shrink-0">
                  <Sparkles size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <strong className="font-display font-serif text-base sm:text-lg font-bold text-brand-olive leading-tight">
                    Personalized
                  </strong>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-white/75 whitespace-nowrap leading-tight">
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

// 2. EXECUTIVE MASTERCLASS "OUR FEATURES" STRIP (Dark Obsidian Glass Cards)
function FeatureHighlightStrip() {
  return (
    <section className="relative z-20 pt-10 sm:pt-14 pb-16 px-4 sm:px-8 lg:px-14 bg-[#120614]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Feature 1 */}
          <div className="relative overflow-hidden h-full rounded-3xl bg-[#1B091E]/80 backdrop-blur-md p-8 border border-brand-gold/25 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group">
            {/* Subtle Animated Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-olive/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-olive transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="relative z-10 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-brand-olive/20 text-brand-olive border border-brand-olive/30 flex items-center justify-center mb-5 group-hover:bg-brand-olive group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0">
                <Presentation size={26} strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-serif text-2xl font-bold text-white leading-snug">
                Classroom & Live Online
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/75">
                Interactive speaking sessions conducted at Marathahalli, Bangalore, plus interactive live online sessions globally.
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-2">
              <a href="#programs" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold group-hover:text-white transition-colors">
                <span>Explore Options</span>
                <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative overflow-hidden h-full rounded-3xl bg-[#1B091E]/80 backdrop-blur-md p-8 border border-brand-gold/25 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group">
            {/* Subtle Animated Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-[#987625] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="relative z-10 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 text-brand-gold border border-brand-gold/30 flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-brand-gold group-hover:to-[#987625] group-hover:text-brand-deep group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0">
                <Award size={26} strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-serif text-2xl font-bold text-white leading-snug">
                20+ Years of Mentorship
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/75">
                Guided directly by DTM Jothi, Master VoiceCraft Coach with structured speech frameworks and individualized feedback.
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-2">
              <a href="#about" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold group-hover:text-white transition-colors">
                <span>Meet Founder</span>
                <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative overflow-hidden h-full rounded-3xl bg-[#1B091E]/80 backdrop-blur-md p-8 border border-brand-gold/25 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group">
            {/* Subtle Animated Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#7A2880]/[0.1] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="relative z-10 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-brand-purple/30 text-brand-gold border border-brand-gold/30 flex items-center justify-center mb-5 group-hover:bg-brand-gold group-hover:text-brand-deep group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0">
                <Globe size={26} strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-serif text-2xl font-bold text-white leading-snug">
                Global Student Community
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/75">
                Proud learners across India, Bahrain, and overseas achieving speaking confidence, clarity, and top exam scores.
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-2">
              <a href="#testimonials" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold group-hover:text-white transition-colors">
                <span>Read Stories</span>
                <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. ABOUT US SECTION (Executive Masterclass Style: DTM Jothi Portrait + Bio + Credentials + Quote)
function About({ isAnimated, animKey, onSelectProgram }) {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-gradient-to-b from-[#180B1A] to-[#120614] px-4 sm:px-8 lg:px-14 py-20 lg:py-28 border-t border-brand-gold/15"
    >
      <div
        key={`about-${animKey}`}
        className="w-full max-w-7xl mx-auto grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
      >
        {/* Left Column: Framed DTM Jothi Portrait + Badges */}
        <div className={`mx-auto w-full max-w-[400px] flex flex-col items-center text-center ${isAnimated ? "section-card-enter" : ""}`}>
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[34px] border-2 border-brand-gold/40 bg-[#1D0A20] shadow-2xl">
            <img
              src={authorpic}
              alt="DTM Jothi from VoiceCraft"
              className="h-full w-full object-cover object-top"
            />
            {/* Experience Pill Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#120614]/90 backdrop-blur-md text-white text-xs font-bold shadow-md border border-brand-gold/40">
                <Award size={14} className="text-brand-gold" />
                20+ Years Mentorship
              </span>
            </div>
          </div>

          <blockquote className="mt-5 font-serif text-xl font-semibold italic text-brand-gold sm:text-2xl">
            “Reading is rewarding”
          </blockquote>
          <p className="mt-1 font-display font-serif text-3xl sm:text-4xl font-bold text-white">
            DTM Jothi
          </p>
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-1">
            Founder & Master Coach
          </span>
        </div>

        {/* Right Column: Masterclass Content & Checklist */}
        <div className={isAnimated ? "section-text-enter" : ""}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-extrabold uppercase tracking-wider mb-4">
            <span>ABOUT THE FOUNDER & MASTER COACH</span>
          </div>

          <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Fastest Pathway Reaching <br className="hidden sm:inline" />Communication Mastery
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-brand-gold" />

          <p className="mt-6 text-base sm:text-lg font-medium leading-relaxed text-white/85">
            Founded and led by DTM Jothi, VoiceCraft is dedicated to empowering
            individuals to speak with clarity, confidence, and impact. With
            decades of experience in mentoring speakers and language learners,
            her work helps students, professionals, and aspiring leaders communicate
            effectively at every stage of life.
          </p>

          {/* Masterclass Checkmark Features */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="relative overflow-hidden group flex items-start gap-3.5 p-4 rounded-2xl bg-[#1E0A22]/70 hover:bg-[#280E2D]/80 border border-brand-gold/20 hover:border-brand-gold/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="relative z-10 w-7 h-7 rounded-full bg-gradient-to-br from-brand-gold to-[#987625] text-brand-deep flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300 font-bold">
                <Check size={14} strokeWidth={3} />
              </div>
              <div className="relative z-10">
                <strong className="block text-sm font-bold text-white">Structured Curriculum</strong>
                <p className="text-xs text-white/70 mt-0.5">Engaging frameworks tailored to each learner's age and goals.</p>
              </div>
            </div>

            <div className="relative overflow-hidden group flex items-start gap-3.5 p-4 rounded-2xl bg-[#1E0A22]/70 hover:bg-[#280E2D]/80 border border-brand-gold/20 hover:border-brand-gold/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="relative z-10 w-7 h-7 rounded-full bg-gradient-to-br from-brand-gold to-[#987625] text-brand-deep flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300 font-bold">
                <Check size={14} strokeWidth={3} />
              </div>
              <div className="relative z-10">
                <strong className="block text-sm font-bold text-white">Fear-Free Environment</strong>
                <p className="text-xs text-white/70 mt-0.5">A safe, encouraging space to practice without hesitation.</p>
              </div>
            </div>

            <div className="relative overflow-hidden group flex items-start gap-3.5 p-4 rounded-2xl bg-[#1E0A22]/70 hover:bg-[#280E2D]/80 border border-brand-gold/20 hover:border-brand-gold/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="relative z-10 w-7 h-7 rounded-full bg-gradient-to-br from-brand-gold to-[#987625] text-brand-deep flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300 font-bold">
                <Check size={14} strokeWidth={3} />
              </div>
              <div className="relative z-10">
                <strong className="block text-sm font-bold text-white">Personalized Mentorship</strong>
                <p className="text-xs text-white/70 mt-0.5">Direct guidance and evaluation from DTM Jothi herself.</p>
              </div>
            </div>

            <div className="relative overflow-hidden group flex items-start gap-3.5 p-4 rounded-2xl bg-[#1E0A22]/70 hover:bg-[#280E2D]/80 border border-brand-gold/20 hover:border-brand-gold/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="relative z-10 w-7 h-7 rounded-full bg-gradient-to-br from-brand-gold to-[#987625] text-brand-deep flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300 font-bold">
                <Check size={14} strokeWidth={3} />
              </div>
              <div className="relative z-10">
                <strong className="block text-sm font-bold text-white">Real-World Exercises</strong>
                <p className="text-xs text-white/70 mt-0.5">Practical speeches, debates, workplace meetings, and mocks.</p>
              </div>
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

// 4. "WHAT WE DO" / OUR PROGRAMS SECTION (Executive Masterclass Bento Program Grid)
function ProgramsSection({
  selectedCourse,
  setSelectedCourse,
  activeCategory,
  setActiveCategory,
  isAnimated,
  animKey,
}) {
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

  const filteredPrograms =
    activeCategory === "all"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section
      id="programs"
      className="scroll-mt-28 bg-[#120614] px-4 sm:px-8 lg:px-14 py-20 lg:py-28 border-t border-brand-gold/15"
    >
      <div key={`programs-${animKey}`} className="w-full max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Tailored Programs for Every Communicator"
          isAnimated={isAnimated}
        />
        <p className="text-center text-sm sm:text-base font-medium text-white/75 max-w-2xl mx-auto -mt-2 mb-10">
          Structured courses designed for students, working professionals, and language enthusiasts.
        </p>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { label: "✦ All Programs", value: "all" },
            { label: "Public Speaking", value: "Public Speaking" },
            { label: "Spoken English", value: "Spoken English" },
            { label: "French Language", value: "French Language" },
            { label: "IELTS & PTE", value: "IELTS & PTE" },
          ].map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
                activeCategory === cat.value
                  ? "bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold text-brand-deep font-bold shadow-md scale-105"
                  : "bg-[#1D0A20] text-white/80 border border-brand-gold/25 hover:border-brand-gold/60 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Executive Masterclass Bento Program Cards */}
        <div className={`grid gap-8 md:grid-cols-2 ${isAnimated ? "section-card-enter" : ""}`}>
          {filteredPrograms.map((program) => (
            <ConsenProgramCard
              key={program.title}
              program={program}
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

function ConsenProgramCard({ program, isActive, onLearnMore }) {
  const { number, title, subtitle, description, highlights, duration, mode, iconImage } = program;

  return (
    <article
      className={`relative overflow-hidden group flex flex-col justify-between rounded-[32px] border bg-[#1B091E]/90 p-7 sm:p-9 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-brand-gold/60 transition-all duration-300 ${
        isActive
          ? "border-brand-gold ring-2 ring-brand-gold/40 shadow-lg"
          : "border-brand-gold/25"
      }`}
    >
      {/* Subtle Animated Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-olive transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Top Meta Bar with Number Tag */}
      <div className="relative z-10 flex items-center justify-between pb-5 border-b border-brand-gold/20">
        <span className="text-xs font-extrabold uppercase tracking-wider text-brand-gold">
          {subtitle}
        </span>
        <span className="font-display font-serif text-2xl font-bold text-brand-gold/30 group-hover:text-brand-gold/70 transition-colors">
          {number}
        </span>
      </div>

      {/* Main Content Area: Split Logo + Info */}
      <div className="relative z-10 mt-6 flex flex-col sm:flex-row items-start gap-6">
        {/* Logo Container */}
        <div className="grid h-[100px] w-[150px] shrink-0 place-items-center rounded-2xl bg-white p-3 border border-brand-gold/30 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
          <img
            src={iconImage}
            alt={title}
            className="max-h-[85px] max-w-[90%] object-contain"
          />
        </div>

        {/* Title & Description */}
        <div className="flex-1">
          <h3 className="font-display font-serif text-2xl font-bold text-white leading-snug">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-white/75">
            {description}
          </p>
        </div>
      </div>

      {/* Core Syllabus Checklist */}
      <div className="relative z-10 mt-6 grid sm:grid-cols-2 gap-2.5 py-4 border-y border-brand-gold/20">
        {highlights.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-white/85">
            <CheckCircle2 size={14} className="text-brand-gold shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Format strip & Action Button */}
      <div className="relative z-10 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-[11px] text-white/70">
          <span className="font-bold text-brand-gold">Format: </span>
          <span>{duration}</span>
        </div>

        <button
          type="button"
          aria-expanded={isActive}
          onClick={onLearnMore}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm shrink-0 ${
            isActive
              ? "bg-brand-olive text-white hover:bg-[#5e6b26]"
              : "bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold text-brand-deep font-bold hover:brightness-105 hover:scale-105"
          }`}
        >
          <span>{isActive ? "Viewing Syllabus" : "View Details & Syllabus"}</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}

function CourseDetailPanel({ panelRef, title, iconImage, details, onClose }) {
  const [isMoreDetailsOpen, setIsMoreDetailsOpen] = useState(false);
  useEffect(() => setIsMoreDetailsOpen(false), [title]);

  return (
    <article
      ref={panelRef}
      className="mt-12 overflow-hidden rounded-3xl border border-brand-gold/35 bg-[#1B091E] shadow-2xl transition-all"
    >
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.4fr]">
        <div className="relative overflow-hidden bg-[#280E2D] px-6 py-8 text-white md:px-10 md:py-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-gold/20">
          <div>
            <div className="flex items-center justify-between">
              <div className="grid h-[100px] w-[180px] place-items-center overflow-hidden rounded-2xl bg-white p-3 shadow-md border border-brand-gold/30">
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
                className="text-brand-gold hover:text-white text-xs font-bold underline cursor-pointer"
              >
                Close Syllabus
              </button>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-gold">
              Course Details & Curriculum
            </p>
            <h3 className="mt-2 font-display font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
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

          <div className="mt-8 pt-6 border-t border-brand-gold/20">
            <p className="text-xs text-brand-gold font-semibold">
              Master Mentorship by DTM Jothi
            </p>
          </div>
        </div>

        <div className="bg-[#180B1A] p-6 md:p-10 flex flex-col justify-between text-white">
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
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/50 bg-[#1D0A20] px-6 py-2.5 text-xs font-bold text-brand-gold shadow-sm transition hover:bg-brand-gold hover:text-brand-deep cursor-pointer"
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

          <div className="mt-8 rounded-2xl border border-brand-gold/25 bg-[#210922] p-5 shadow-sm">
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-white/85">
              <strong className="text-brand-gold">Best for:</strong>{" "}
              {details.bestFor}
            </p>
            <div className="mt-4 flex flex-col gap-3 border-t border-brand-gold/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-bold text-white">
                Enroll or book a trial class today.
              </p>
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold px-6 py-3 text-xs font-bold text-brand-deep shadow-md hover:brightness-105 transition-all shrink-0"
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
    <div className="mb-6 rounded-2xl border border-brand-gold/25 bg-[#210922] p-6 shadow-sm">
      <h4 className="font-display font-serif text-xl font-bold text-white mb-4">
        Course Structure & Modules
      </h4>
      <div className="grid gap-5">
        {details.map((section, idx) => (
          <section key={idx}>
            <h5 className="text-sm font-bold text-brand-gold">
              {section.title}
            </h5>
            <div className="mt-2 grid gap-2">
              {section.paragraphs?.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-xs sm:text-sm font-medium leading-relaxed text-white/80"
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
      <h4 className="text-sm font-bold text-brand-gold mb-3">{title}</h4>
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
    <li className="flex items-start gap-2.5 text-xs sm:text-sm font-medium leading-relaxed text-white/85">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
      <span>{children}</span>
    </li>
  );
}

// 5. CALL TO ACTION STRIP (Executive Masterclass Luxury Banner)
function CallToActionStrip() {
  return (
    <section className="bg-gradient-to-r from-[#210922] via-[#350E38] to-[#210922] py-14 lg:py-16 px-4 sm:px-8 lg:px-14 border-t border-brand-gold/30 text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#7A2880]/30 blur-3xl pointer-events-none liquid-orb-purple" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-gold/20 blur-3xl pointer-events-none liquid-orb-gold" />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-3 shadow-sm backdrop-blur-md">
            <Sparkles size={13} className="text-brand-gold" />
            <span>READY TO TRANSFORM YOUR VOICE?</span>
          </div>
          <h3 className="font-display font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Book Your Free Trial Session with DTM Jothi
          </h3>
          <p className="mt-3 text-sm sm:text-base text-white/80 font-medium">
            Personalized 1-on-1 speech assessment, structured feedback, and a tailored learning roadmap.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
          <Button
            href="#enquiry"
            variant="primary"
            size="lg"
            className="rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Book Free Trial Class
          </Button>
          <a
            href="https://wa.me/919919911027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-brand-gold/40 hover:border-brand-gold text-white font-bold text-xs transition-all hover:bg-white/10"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// 6. WHY CHOOSE SECTION (Executive Masterclass Split Pattern)
function WhyChooseSection({ isAnimated, animKey }) {
  const benefits = [
    {
      title: "Stage Presence",
      description: "To overcome the 'phobia' of speaking in public, build stage presence, engage any audience with confidence and poise.",
      icon: Presentation,
    },
    {
      title: "Build Confidence",
      description: "To build confidence. Speak without fear, self-doubt, or hesitation in any personal or professional setting.",
      icon: Star,
    },
    {
      title: "Improve Fluency",
      description: "To improve fluency. Express your thoughts clearly, naturally, and precisely with rich vocabulary.",
      icon: MessageCircle,
    },
    {
      title: "Conquer Fear",
      description: "To overcome stage fear. Conquer anxiety and stand tall in front of any crowd with structured breathing and modulation.",
      icon: Shield,
    },
    {
      title: "Speak & Lead",
      description: "To speak, lead and be heard. Inspire others and command attention with executive speech delivery.",
      icon: Users,
    },
    {
      title: "Unleash Potential",
      description: "To unleash your potential. Unlock new personal, academic, and global professional opportunities.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="why-us" className="scroll-mt-28 bg-gradient-to-b from-[#120614] to-[#180B1A] px-4 sm:px-8 lg:px-14 py-20 lg:py-28 border-t border-brand-gold/15 text-white">
      <div key={`why-${animKey}`} className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-14 items-start">
          {/* Left Column: Master Coach Quote & Rating Banner */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
              <span>✦ THE VOICECRAFT ADVANTAGE</span>
            </div>

            <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Why Choose <br />VoiceCraft Academy?
            </h2>

            <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-gold" />

            {/* Quote Card */}
            <blockquote className="mt-6 p-6 rounded-3xl bg-[#1E0A22]/90 border border-brand-gold/25 text-white/90 font-serif italic text-base leading-relaxed">
              “Language learning should fit the learner's needs rather than being the other way around. We build for every learner a bespoke learning pathway that fits their goals.”
              <span className="block not-italic font-sans text-xs font-bold text-brand-gold mt-3">
                — DTM Jothi • Founder & Master Coach
              </span>
            </blockquote>

            {/* Rating Stat Card */}
            <div className="mt-6 w-full p-5 rounded-3xl bg-[#1E0A22]/90 border border-brand-gold/25 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                <Star size={24} className="fill-brand-gold" />
              </div>
              <div>
                <strong className="block text-base font-bold text-white">
                  4.9 / 5.0 Star Rating
                </strong>
                <span className="text-xs font-semibold text-white/75">
                  Over 150+ verified student success reviews
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Button
                href="#enquiry"
                variant="primary"
                size="md"
                className="rounded-full shadow-md hover:scale-105 transition-all"
              >
                Enroll For Next Batch
              </Button>
            </div>
          </div>

          {/* Right Column: Spacious 2x3 Benefit Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="relative overflow-hidden flex flex-col items-start rounded-3xl border border-brand-gold/25 bg-[#1B091E]/90 p-6 shadow-2xl hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:border-brand-gold/60 transition-all duration-300 group"
                >
                  {/* Subtle Animated Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-olive transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="relative z-10 w-full">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30 flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-brand-deep group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display font-serif text-xl font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-white/75">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. COUNTER STRIP (Executive Masterclass Metrics Banner)
function CounterStrip() {
  const metrics = [
    { value: "1000+", label: "Students Trained", icon: Users },
    { value: "20+", label: "Years Coaching Experience", icon: Award },
    { value: "4", label: "Specialized Signature Programs", icon: BookOpen },
    { value: "100%", label: "Interactive Live Practice", icon: Sparkles },
  ];

  return (
    <section className="bg-[#0A020C] py-14 px-4 sm:px-8 lg:px-14 border-y border-brand-gold/20 text-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-3">
                <Icon size={22} />
              </div>
              <strong className="font-display font-serif text-3xl sm:text-4xl lg:text-5xl font-bold gold-text-gradient">
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

// 8. TESTIMONIALS SECTION (Executive Masterclass Reviews)
function Testimonials({ isAnimated, animKey }) {
  return (
    <section
      id="testimonials"
      className="scroll-mt-28 bg-[#120614] px-4 sm:px-8 lg:px-14 py-20 lg:py-28 border-t border-brand-gold/15 text-white"
    >
      <div key={`testi-${animKey}`} className="w-full max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="STUDENT TESTIMONIALS"
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
    <figure className="relative overflow-hidden flex flex-col justify-between rounded-3xl border border-brand-gold/25 bg-[#1B091E]/90 p-8 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-brand-gold/60 transition-all duration-300 group">
      {/* Subtle Animated Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-[#987625] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="relative z-10">
        <div className="flex gap-1 mb-4" aria-label="5 star rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-brand-gold text-brand-gold group-hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
        <blockquote className="font-serif italic text-sm sm:text-base font-medium leading-relaxed text-white/85">
          "{quote}"
        </blockquote>
      </div>
      <figcaption className="relative z-10 mt-6 flex items-center gap-3.5 pt-4 border-t border-brand-gold/20">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-sm font-extrabold uppercase shadow-sm group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-deep group-hover:shadow-md transition-all duration-300">
          {initials}
        </div>
        <strong className="text-sm font-bold text-white">
          {name}
        </strong>
      </figcaption>
    </figure>
  );
}

// 9. GALLERY SECTION (Executive Masterclass Moments)
function Gallery({ isAnimated, animKey }) {
  return (
    <section
      id="gallery"
      className="scroll-mt-28 bg-gradient-to-b from-[#180B1A] to-[#120614] px-4 sm:px-8 lg:px-14 py-20 border-t border-brand-gold/15 text-white"
    >
      <div key={`gallery-${animKey}`} className="w-full max-w-7xl mx-auto">
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
                className="w-64 sm:w-80 aspect-[4/3] shrink-0 overflow-hidden rounded-2xl border-2 border-brand-gold/30 bg-[#1B091E] shadow-xl hover:border-brand-gold/70 hover:scale-105 transition-all duration-300"
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

// 10. ENQUIRY SECTION (Executive Masterclass Booking Suite)
function Enquiry({ isAnimated, animKey }) {
  return (
    <section
      id="enquiry"
      className="scroll-mt-28 bg-[#120614] px-4 sm:px-8 lg:px-14 py-20 lg:py-28 border-t border-brand-gold/15 text-white"
    >
      <div key={`enquiry-${animKey}`} className={`w-full max-w-7xl mx-auto rounded-3xl border border-brand-gold/30 bg-[#180B1A]/95 backdrop-blur-xl p-5 sm:p-10 md:p-14 shadow-2xl ${isAnimated ? "section-card-enter" : ""}`}>
        <div className={`mb-10 text-center ${isAnimated ? "section-text-enter" : ""}`}>
          <div className="mb-3 inline-flex rounded-full border border-brand-gold/30 bg-white/10 px-6 py-2 shadow-sm backdrop-blur-md">
            <img src={logo} alt="VoiceCraft" className="h-8 w-auto brightness-110" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">
            GET IN TOUCH WITH OUR MASTER COACH
          </p>
          <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Enquire Now
          </h2>
          <div className="w-16 h-1 rounded-full bg-brand-gold mx-auto mt-3" />
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <ProgramEnquiryForm />

          {/* Contact Info Card */}
          <aside className="relative overflow-hidden flex flex-col justify-between rounded-3xl border border-brand-gold/25 bg-[#1E0A22]/90 p-5 sm:p-7 md:p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-brand-gold/50 transition-all duration-300 h-full group">
            {/* Subtle Animated Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-olive transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="relative z-10">
              <h3 className="font-display font-serif text-2xl font-bold text-brand-gold">
                Need to talk?
              </h3>
              <p className="mt-1 text-sm font-medium text-white/80">
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

            <div className="mt-8 pt-6 border-t border-brand-gold/20">
              <a
                href="https://wa.me/919919911027"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-3 sm:px-4 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-md hover:bg-[#20bd5a] transition-all duration-200"
              >
                <MessageCircle size={18} />
                <span>Chat Instantly on WhatsApp</span>
              </a>
              <p className="mt-2 text-center text-[11px] font-semibold text-white/60">
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
      className="rounded-3xl border border-brand-gold/25 bg-[#1E0A22]/90 p-5 sm:p-8 md:p-9 shadow-xl"
    >
      <h3 className="font-display font-serif text-2xl font-bold text-white mb-5">
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
        <span className="mb-1.5 block text-xs font-bold text-white/90">
          Message (Optional)
        </span>
        <textarea
          name="message"
          rows="3"
          placeholder="Tell us about your learning goals..."
          className="w-full resize-none rounded-2xl border border-brand-gold/30 bg-[#140616] px-4 py-3 text-xs sm:text-sm font-medium text-white placeholder:text-white/40 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
        />
      </label>

      {/* Strict rounded-full submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold px-6 text-sm font-bold text-brand-deep shadow-lg shadow-brand-gold/25 hover:brightness-110 hover:scale-[1.01] transition-all duration-200 cursor-pointer disabled:opacity-60"
      >
        <span>{isSubmitting ? "Sending..." : "Submit Enquiry"}</span>
        <ChevronRight size={18} strokeWidth={2.8} />
      </button>

      {submitState.message ? (
        <p
          className={`mt-4 rounded-full px-4 py-2.5 text-xs text-center font-bold ${
            submitState.status === "success"
              ? "bg-green-950/80 text-green-300 border border-green-800/50"
              : "bg-red-950/80 text-red-300 border border-red-800/50"
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
      <span className="mb-1.5 block text-xs font-bold text-white/90">
        {label}
        {required ? <span className="ml-1 text-brand-gold">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-full border border-brand-gold/30 bg-[#140616] px-4 text-xs sm:text-sm font-medium text-white placeholder:text-white/40 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
      />
    </label>
  );
}

function FormSelect({ name, label, options, required = false }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-white/90">
        {label}
        {required ? <span className="ml-1 text-brand-gold">*</span> : null}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="h-11 w-full rounded-full border border-brand-gold/30 bg-[#140616] px-4 text-xs sm:text-sm font-medium text-white outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 cursor-pointer"
      >
        {options.map((option, index) => (
          <option
            key={option}
            value={index === 0 ? "" : option}
            disabled={index === 0}
            className="bg-[#1D0A20] text-white"
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function EnquiryContactItem({ icon: Icon, label, value, href }) {
  const isEmail = typeof value === "string" && value.includes("@") && !value.includes(" ");

  // Natural break opportunity at @ for narrow mobile screens without changing underlying text
  const displayValue = isEmail ? (
    <>
      {value.slice(0, value.indexOf("@") + 1)}
      <wbr />
      {value.slice(value.indexOf("@") + 1)}
    </>
  ) : (
    value
  );

  const content = (
    <div className="flex items-center gap-3 sm:gap-3.5">
      <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-2xl bg-brand-gold/15 border border-brand-gold/30 text-brand-gold shadow-sm">
        <Icon size={18} strokeWidth={2.2} className="sm:w-[19px] sm:h-[19px]" />
      </span>
      <div className="min-w-0 flex-1">
        <strong className="block text-[10px] sm:text-[11px] font-bold text-brand-gold uppercase tracking-wider">
          {label}
        </strong>
        <span className="contact-email-text block text-xs sm:text-sm font-bold text-white break-words [overflow-wrap:anywhere] [word-break:break-word] leading-snug">
          {displayValue}
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

// 11. FOOTER (Executive Masterclass 4-Column Footer)
function Footer() {
  return (
    <footer className="bg-[#0A020C] text-white border-t border-brand-gold/20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
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
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-deep border border-brand-gold/20 flex items-center justify-center text-white transition-all text-xs"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About VoiceCraft</a></li>
              <li><a href="#programs" className="hover:text-brand-gold transition-colors">Our Programs</a></li>
              <li><a href="#why-us" className="hover:text-brand-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-brand-gold transition-colors">Student Reviews</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Classroom Moments</a></li>
              <li><a href="#enquiry" className="hover:text-brand-gold transition-colors">Enquire Now</a></li>
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">
              Our Services
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
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">
              Contact Info
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
                <a href="mailto:voicecraftwithjothi@gmail.com" className="contact-email-text hover:text-brand-gold transition-colors break-words [overflow-wrap:anywhere] [word-break:break-word]">
                  voicecraftwithjothi@<wbr />gmail.com
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-brand-gold border border-brand-gold/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Classroom & Live Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-gold/15 bg-[#060107] px-6 py-4 text-center text-xs text-white/50">
        &copy; 2025 VoiceCraft Academy. All Rights Reserved. Master Coaching by DTM Jothi.
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, isAnimated }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-4 ${isAnimated ? "section-text-enter" : ""}`}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-gold/15 text-brand-gold text-xs font-bold uppercase tracking-wider mb-3 border border-brand-gold/30 shadow-sm backdrop-blur-md">
          <Sparkles size={13} className="text-brand-gold shrink-0" />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
        {title}
      </h2>
      <div className="w-20 h-1 rounded-full bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-olive mx-auto mt-4" />
    </div>
  );
}

// Executive Masterclass Reading Progress Bar
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress((scrollTop / docHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-[68px] lg:top-[114px] left-0 h-[3px] bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-olive z-50 transition-[width] duration-150 ease-out pointer-events-none"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin="0"
      aria-valuemax="100"
    />
  );
}

// Floating Scroll-to-Top Button
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1D0A20] hover:bg-[#2A0F2E] text-brand-gold border-2 border-brand-gold/40 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}

// Floating WhatsApp Direct Access
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919919911027"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-2xl transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle size={18} className="animate-pulse shrink-0" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
