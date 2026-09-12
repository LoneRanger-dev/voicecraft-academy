import { useState, useRef } from "react";
import {
  Mic,
  Volume2,
  BookOpen,
  Globe,
  Star,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Calendar,
  Send,
  Check,
} from "lucide-react";

// Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import AudioSamplePlayer from "../components/AudioSamplePlayer.jsx";
import VoiceDiagnosticQuiz from "../components/VoiceDiagnosticQuiz.jsx";
import ReviewCard from "../components/ReviewCard.jsx";

// Assets
import logo from "../assets/logo.png";
import heroBg from "../assets/herobg.png";
import ieltsLogo from "../assets/icons/ielts-cropped.png";
import frenchLogo from "../assets/icons/fr-cropped.png";
import eloquenceLogo from "../assets/icons/Eloquent-cropped.png";
import englingoLogo from "../assets/icons/eng-cropped.png";
import authorPic from "../assets/gallery/authorpic.png";

// Gallery Images
import g1 from "../assets/gallery/g1.jpeg";
import g2 from "../assets/gallery/g2.jpeg";
import g3 from "../assets/gallery/g3.jpeg";
import g4 from "../assets/gallery/g4.jpeg";
import g5 from "../assets/gallery/g5.jpeg";
import g6 from "../assets/gallery/g6.jpeg";
import wa1 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.04.09 AM.jpeg";
import wa2 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.04.20 AM (1).jpeg";
import wa3 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.04.20 AM.jpeg";
import wa4 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.12.52 AM.jpeg";
import wa5 from "../assets/gallery/WhatsApp Image 2026-07-27 at 11.12.53 AM.jpeg";

const galleryImages = [g1, g2, g3, g4, g5, g6, wa1, wa2, wa3, wa4, wa5];

const programDetails = [
  {
    id: "ielts",
    title: "IELTS & PTE with VoiceCraft",
    category: "Exam Mastery",
    logo: ieltsLogo,
    badge: "Band 7.5+ Focus",
    tagline: "Comprehensive Academic & General Training with 1-on-1 Mock Speaking Interviews",
    overview:
      "Designed for students and professionals targeting top universities and PR in Canada, the UK, Australia, and New Zealand. Our proprietary rubric pinpoints your lexical range, fluency barriers, and pronunciation markers.",
    highlights: [
      "1-on-1 Daily Speaking Evaluations with Real-time Scoring",
      "Band 8.0+ Model Essay Frameworks & Task 1/2 Blueprints",
      "Computer-Delivered & Paper-Based Full Length Mock Tests",
      "Special Focus on Cambridge Practice Tests 15–19",
      "PTE Core & Academic Modules Included",
    ],
    mode: "Classroom in Marathahalli & Live Online",
    duration: "4 to 8 Weeks Flexible Cohorts",
    color: "purple",
  },
  {
    id: "bonjour",
    title: "Bonjour by VoiceCraft",
    category: "French Language",
    logo: frenchLogo,
    badge: "CEFR A1 to B2",
    tagline: "Immersive French Learning for Beginners, DELF Certification & Canada PR (TEF/TCF)",
    overview:
      "Master the French language naturally through phonetics, interactive dialogue roleplays, and structured grammar. Whether starting from scratch (A1) or preparing for Canada PR points (B2/TEF), we guide you to native-like fluency.",
    highlights: [
      "DELF A1, A2, B1, B2 Structured Exam Preparation",
      "Canada PR Additional Points Pathway (TEF Canada / TCF)",
      "Native Phonetics Lab: R-Sound, Liaison, and Nasal Vowels",
      "Interactive Speaking Circles & Cultural Immersion",
      "Official Alliance Française Syllabus Alignment",
    ],
    mode: "Weekend & Weekday Batches (Offline/Online)",
    duration: "Level-wise (6 to 10 Weeks per Level)",
    color: "gold",
  },
  {
    id: "eloquence",
    title: "Eloquence by VoiceCraft",
    category: "Leadership & Speaking",
    logo: eloquenceLogo,
    badge: "Public Speaking",
    tagline: "Conquer Stage Anxiety, Inspire Any Audience & Master Executive Presence",
    overview:
      "Public speaking is not just about words; it is about energy, cadence, body language, and voice modulation. Eloquence empowers students, executives, and youth leaders to speak with authority on any stage.",
    highlights: [
      "The 3-Second Rule: Overcoming Stage Fright & Nervous Tremors",
      "Vocal Projection, Pacing, and Intentional Silence (The Power Pause)",
      "Storytelling Structures: The Hero's Journey & Keynote Delivery",
      "Impromptu Speaking Drills (Table Topics & Panel Discussions)",
      "Video Recorded Stage Speeches with Frame-by-Frame Critiques",
    ],
    mode: "Studio Stage Sessions in Marathahalli & Online",
    duration: "6 Weeks Intensive Bootcamp",
    color: "olive",
  },
  {
    id: "englingo",
    title: "EngLingo by VoiceCraft",
    category: "Corporate & Fluency",
    logo: englingoLogo,
    badge: "Everyday English",
    tagline: "Workplace Communication, Accent Clarity, Fluency & Confident Conversations",
    overview:
      "Break free from translation hesitation and mother tongue influence. EngLingo is engineered for professionals, job seekers, and homemakers who want crisp, spontaneous English in daily meetings and social life.",
    highlights: [
      "Accent Neutralization & MTI (Mother Tongue Influence) Reduction",
      "Corporate Phrasing: Emails, Negotiations, and Standups",
      "Spontaneous Thinking Drills without Internal Translation",
      "Small Group Practice with Safe, Constructive Feedback",
      "Grammar in Action: Natural Usage without Rote Memorization",
    ],
    mode: "Classroom in Marathahalli & Live Evening Online",
    duration: "4 to 8 Weeks",
    color: "purple",
  },
];

const testimonials = [
  {
    name: "Dr. Arvind Menon",
    role: "Medical Professional, NHS UK",
    rating: 5,
    program: "IELTS with VoiceCraft",
    result: "Band 8.0 First Attempt",
    review:
      "Trainer Jothi’s personalized speaking feedback completely eliminated my nervous pacing. She diagnosed exact lexical patterns holding me back at Band 6.5. Within 5 weeks, I scored Band 8.0 overall!",
  },
  {
    name: "Priyanka Deshmukh",
    role: "Software Architect, Bengaluru",
    rating: 5,
    program: "Eloquence by VoiceCraft",
    result: "Keynote Speaker",
    review:
      "Before Eloquence, presenting to directors felt paralyzing. The vocal projection drills and stage simulations gave me unmatched composure. Last month, I delivered our annual tech keynote to 400+ attendees!",
  },
  {
    name: "Rohan Kulkarni",
    role: "Canada Express Entry Candidate",
    rating: 5,
    program: "Bonjour by VoiceCraft",
    result: "DELF B2 Cleared",
    review:
      "Learning French from scratch seemed daunting, but Bonjour's phonetic approach made pronunciation intuitive. The mock TEF interviews were the golden key to achieving my extra 50 Canada PR points!",
  },
  {
    name: "Sneha Reddy",
    role: "Product Marketing Manager",
    rating: 5,
    program: "EngLingo by VoiceCraft",
    result: "Promoted to Lead",
    review:
      "EngLingo transformed my workplace confidence. I stopped translating Telugu to English in my head. My articulation is crisp, clear, and respected in international stakeholder calls.",
  },
  {
    name: "Vikram Shenoy",
    role: "Civil Engineering Student",
    rating: 5,
    program: "IELTS with VoiceCraft",
    result: "Band 7.5 (Speaking 8.0)",
    review:
      "The classroom energy at Marathahalli is electrifying. Mock tests on Saturdays feel exactly like the real IDP exam. VoiceCraft is the best investment I made for my Australian Masters journey.",
  },
  {
    name: "Meera Nair",
    role: "High School Debater",
    rating: 5,
    program: "Eloquence by VoiceCraft",
    result: "Best Speaker Trophy",
    review:
      "The trainer helped me structure arguments logically under time limits. From stuttering during school assemblies to winning the inter-school debate trophy, Eloquence changed my life!",
  },
];

export default function Home() {
  const [selectedProgramTab, setSelectedProgramTab] = useState("ielts");
  const [enquiryProgram, setEnquiryProgram] = useState("IELTS & PTE with VoiceCraft");
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: "" });

  const enquiryFormRef = useRef(null);

  const handleSelectProgramFromNavbar = (programName) => {
    const found = programDetails.find((p) =>
      p.title.toLowerCase().includes(programName.toLowerCase())
    );
    if (found) {
      setSelectedProgramTab(found.id);
      setEnquiryProgram(found.title);
    }
  };

  const handleEnrollClick = (programTitle) => {
    setEnquiryProgram(programTitle);
    const element = document.getElementById("enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmitEnquiry = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: "" });

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || "197f0109-a9e0-4029-88e8-63c5461c8801";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `VoiceCraft Enquiry: ${data.fullName} - ${data.program}`,
          from_name: "VoiceCraft Academy Website",
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ submitting: false, success: true, error: "" });
        e.target.reset();
      } else {
        setFormStatus({
          submitting: false,
          success: false,
          error: result.message || "Failed to submit. Please try WhatsApp directly.",
        });
      }
    } catch (err) {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Network issue. Please contact via WhatsApp at +91 99199 11027.",
      });
    }
  };

  const currentProgram =
    programDetails.find((p) => p.id === selectedProgramTab) || programDetails[0];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink selection:bg-brand-purple selection:text-white">
      {/* Floating Pill Navbar */}
      <Navbar
        programs={programDetails.map((p) => p.title)}
        onSelectProgram={handleSelectProgramFromNavbar}
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Ambient liquid orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full liquid-orb-purple blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full liquid-orb-gold blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-60 left-10 w-96 h-96 rounded-full liquid-orb-olive blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow badge with pulse dot */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-pill border border-brand-purple/20 text-brand-purple text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-purple -ml-5" />
            <span>Bengaluru’s Premier Language & Voice Institute • Marathahalli</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-brand-purple tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Speak with Power. <br />
            <span className="bg-gradient-to-r from-brand-purple via-brand-gold to-brand-olive bg-clip-text text-transparent">
              Inspire Every Stage.
            </span>{" "}
            Achieve Band 7.5+.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed font-normal">
            Specialized coaching in <span className="font-bold text-brand-purple">IELTS / PTE</span>,{" "}
            <span className="font-bold text-brand-gold">French (DELF/TEF)</span>,{" "}
            <span className="font-bold text-brand-olive">Public Speaking (Eloquence)</span>, and{" "}
            <span className="font-bold text-brand-purple">Corporate English Fluency</span>. 
            Experience 1-on-1 voice modulation drills with personalized feedback.
          </p>

          {/* CTA Buttons (strictly rounded-full) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#enquiry"
              variant="primary"
              size="lg"
              showChevron
            >
              Book Free Trial Session
            </Button>

            <Button
              href="#sound-lab"
              variant="secondary"
              size="lg"
              icon={Volume2}
            >
              Experience Sound Lab
            </Button>

            <a
              href="https://wa.me/919919911027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] text-white text-base font-bold shadow-lg shadow-green-500/20 hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us (+91 99199 11027)</span>
            </a>
          </div>

          {/* Trust Metric Badges (strictly rounded-full) */}
          <div className="mt-16 pt-10 border-t border-brand-purple/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-2xl glass-card">
              <div className="flex items-center gap-1 text-brand-gold mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold" />
                ))}
              </div>
              <span className="text-xl font-bold text-brand-purple">4.9 / 5.0</span>
              <span className="text-xs text-brand-muted">150+ Verified Google Reviews</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl glass-card">
              <Award size={24} className="text-brand-purple mb-1" />
              <span className="text-xl font-bold text-brand-purple">Band 7.5+</span>
              <span className="text-xs text-brand-muted">89% First Attempt Pass Rate</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl glass-card">
              <Users size={24} className="text-brand-olive mb-1" />
              <span className="text-xl font-bold text-brand-purple">1,200+</span>
              <span className="text-xs text-brand-muted">Students & Executives Coached</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl glass-card">
              <ShieldCheck size={24} className="text-brand-gold mb-1" />
              <span className="text-xl font-bold text-brand-purple">1-on-1 Focus</span>
              <span className="text-xs text-brand-muted">Individual Diagnostics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. INTERACTIVE SOUND LAB & VOICE DEMONSTRATION            */}
      {/* ========================================================= */}
      <section id="sound-lab" className="py-20 md:py-28 relative overflow-hidden bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Acoustic & Voice Demonstration"
            title="Interactive VoiceCraft Sound Lab"
            subtitle="Great speakers aren't born; they are calibrated. Listen to actual speech samples illustrating pronunciation clarity, intonation, and executive stage presence."
          />

          {/* Interactive Player Component */}
          <AudioSamplePlayer />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. THE 4 CORE PROGRAMS (OFFICIAL LOGOS & CURRICULUM)      */}
      {/* ========================================================= */}
      <section id="programs" className="py-20 md:py-28 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full liquid-orb-purple blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full liquid-orb-gold blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Specialized Academies"
            title="Our 4 Flagship Learning Programs"
            subtitle="Whether preparing for international exams, foreign language fluency, or executive public speaking, each program is led with rigorous standards."
          />

          {/* Program Selector Tabs (strictly rounded-full) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {programDetails.map((prog) => {
              const isActive = selectedProgramTab === prog.id;
              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => setSelectedProgramTab(prog.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/25 scale-105"
                      : "glass-card text-brand-ink hover:bg-white hover:text-brand-purple border border-brand-purple/10"
                  }`}
                >
                  <img
                    src={prog.logo}
                    alt={prog.title}
                    className="w-5 h-5 object-contain rounded-full bg-white p-0.5"
                  />
                  <span>{prog.title.split(" ")[0]} {prog.title.split(" ")[1] || ""}</span>
                </button>
              );
            })}
          </div>

          {/* Active Program Card */}
          <div className="max-w-5xl mx-auto rounded-3xl glass-card p-6 sm:p-10 lg:p-12 border border-white shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-purple/10 text-brand-purple border border-brand-purple/15">
                    {currentProgram.category}
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-gold/15 text-[#85610D] border border-brand-gold/30">
                    {currentProgram.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-brand-purple leading-tight">
                  {currentProgram.title}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-brand-gold mt-2">
                  {currentProgram.tagline}
                </p>

                <p className="mt-4 text-sm text-brand-ink/80 leading-relaxed">
                  {currentProgram.overview}
                </p>

                {/* Highlights */}
                <div className="mt-6 w-full">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3">
                    Curriculum Inclusions:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-brand-ink/90 font-medium">
                    {currentProgram.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-brand-olive shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery Mode & Duration Badges */}
                <div className="mt-6 pt-6 border-t border-brand-purple/10 flex flex-wrap gap-4 text-xs text-brand-muted">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={15} className="text-brand-purple" />
                    <span>{currentProgram.mode}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={15} className="text-brand-gold" />
                    <span>{currentProgram.duration}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <Button
                    onClick={() => handleEnrollClick(currentProgram.title)}
                    variant="primary"
                    size="lg"
                    showChevron
                    className="w-full sm:w-auto"
                  >
                    Enroll in {currentProgram.title.split(" ")[0]}
                  </Button>

                  <a
                    href="https://wa.me/919919911027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-sm font-bold shadow-md hover:bg-[#20bd5a] transition-all w-full sm:w-auto"
                  >
                    <MessageCircle size={17} />
                    <span>Ask Batch Timings</span>
                  </a>
                </div>
              </div>

              {/* Right Official Logo & Visual Badge */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-white to-brand-cream/60 border border-brand-purple/15 shadow-inner text-center">
                <div className="w-44 h-44 sm:w-56 sm:h-56 p-4 rounded-full bg-white shadow-xl border-4 border-brand-gold/20 flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300">
                  <img
                    src={currentProgram.logo}
                    alt={currentProgram.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-base font-bold text-brand-purple">
                  Official VoiceCraft Certification
                </h4>
                <p className="text-xs text-brand-muted mt-1 max-w-xs">
                  Course materials, mock tests, and certificates aligned to global standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. 60-SECOND SPEAKING DIAGNOSTIC QUIZ                     */}
      {/* ========================================================= */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-brand-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Interactive Self-Assessment"
            title="Discover Your Speaking Blueprint"
            subtitle="Take 60 seconds to identify your primary speaking obstacle and get an immediate recommended coaching roadmap."
          />

          <VoiceDiagnosticQuiz />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHY VOICECRAFT / MASTER TRAINER JOTHI                  */}
      {/* ========================================================= */}
      <section id="about" className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Trainer Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative">
                {/* Glowing halo behind portrait */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-purple via-brand-gold to-brand-olive blur-xl opacity-40 transform -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md">
                  <img
                    src={authorPic}
                    alt="Trainer Jothi - Founder & Master Coach"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-display font-bold text-brand-purple">
                  Trainer Jothi
                </h3>
                <p className="text-sm font-semibold text-brand-gold">
                  Founder & Master Voice Coach
                </p>
                <p className="text-xs text-brand-muted mt-1 max-w-xs">
                  IELTS Band 8.5 Specialist • Certified Public Speaking Mentor • DELF Coach
                </p>
              </div>
            </div>

            {/* Right: The 4-Pillar Methodology */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive/15 text-brand-olive text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>The VoiceCraft Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-purple leading-tight">
                "Speaking is not just a language; it is the projection of your identity."
              </h2>

              <p className="mt-4 text-sm sm:text-base text-brand-ink/80 leading-relaxed">
                At VoiceCraft Academy, we don't believe in generic lectures. Every student carries a unique voice texture, confidence threshold, and communication goal. That is why our Marathahalli classroom is structured as a laboratory for spoken excellence.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
                <div className="p-4 rounded-2xl glass-card border border-white">
                  <div className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold text-xs mb-2">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-brand-ink mb-1">
                    Diagnostic Baseline
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    We map your baseline fluency, filler words, mother tongue bias, and pacing habits before starting.
                  </p>
                </div>

                <div className="p-4 rounded-2xl glass-card border border-white">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold text-xs mb-2">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-brand-ink mb-1">
                    Acoustic Voice Calibration
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Diaphragmatic breathing, tone modulation, and resonance exercises to sound authoritative.
                  </p>
                </div>

                <div className="p-4 rounded-2xl glass-card border border-white">
                  <div className="w-8 h-8 rounded-full bg-brand-olive/15 text-brand-olive flex items-center justify-center font-bold text-xs mb-2">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-brand-ink mb-1">
                    Real Simulation Pressure
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Full-length IDP mock exams, stage debates, and panel discussions under timer conditions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl glass-card border border-white">
                  <div className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold text-xs mb-2">
                    04
                  </div>
                  <h4 className="text-sm font-bold text-brand-ink mb-1">
                    Personalized Rubric Feedback
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Sentence-by-sentence corrections after every drill to compound your growth exponentially.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href="#enquiry"
                  variant="primary"
                  size="md"
                  showChevron
                >
                  Meet Trainer Jothi for a 1-on-1 Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. VERIFIED STUDENT REVIEWS & GOOGLE SOCIAL PROOF         */}
      {/* ========================================================= */}
      <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Student Transformations"
            title="Real Success Stories, Genuine Scores"
            subtitle="Read how our students achieved their Band 8.0 targets, conquered public speaking phobias, and earned global language credentials."
          />

          {/* Google Review Badge Banner */}
          <div className="max-w-xl mx-auto mb-12 p-4 rounded-full glass-card border border-brand-gold/30 flex items-center justify-center gap-3 text-center shadow-md">
            <div className="flex items-center gap-1 text-brand-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-brand-gold" />
              ))}
            </div>
            <span className="text-sm font-bold text-brand-purple">
              4.9 / 5.0 Star Rating on Google Reviews
            </span>
            <span className="hidden sm:inline text-xs text-brand-muted">• Marathahalli, Bengaluru</span>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((test, index) => (
              <ReviewCard key={index} {...test} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. CLASSROOM MOMENTS & GALLERY                            */}
      {/* ========================================================= */}
      <section id="gallery" className="py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Life at VoiceCraft"
            title="Classroom Moments & Stage Trophies"
            subtitle="A glimpse inside our smart training rooms in Marathahalli: interactive speaking circles, debate tournaments, and celebration of results."
          />

          {/* Continuous Gallery Marquee */}
          <div className="relative w-full overflow-hidden marquee-wrapper py-4">
            <div className="flex gap-6 marquee-track w-max">
              {[...galleryImages, ...galleryImages].map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="w-64 sm:w-80 h-48 sm:h-56 rounded-3xl overflow-hidden shadow-lg border-2 border-white shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={imgSrc}
                    alt={`VoiceCraft Classroom Moment ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. ENQUIRY & CONTACT FORM (WITH WEB3FORMS INTEGRATION)     */}
      {/* ========================================================= */}
      <section id="enquiry" className="py-20 md:py-28 relative overflow-hidden bg-brand-purple/5">
        {/* Background gradient bubbles */}
        <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full liquid-orb-purple blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full liquid-orb-gold blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Take The First Step"
            title="Book Your Free Diagnostic Session"
            subtitle="Speak directly with Trainer Jothi. Get an honest appraisal of your current score, weak areas, and a personalized roadmap."
          />

          <div className="max-w-4xl mx-auto rounded-3xl glass-card p-6 sm:p-10 md:p-12 border border-white shadow-2xl relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Form Info Col */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-purple mb-2">
                    Start Your Journey
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    Fill out this quick form. Our admissions team will reach out via WhatsApp or call within 2 hours.
                  </p>

                  <div className="space-y-4 text-xs text-brand-ink/90">
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-white">
                      <div className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-brand-purple">Campus Location</p>
                        <p className="text-brand-muted">Marathahalli, Bengaluru, Karnataka</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-white">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-brand-purple">Operating Hours</p>
                        <p className="text-brand-muted">Mon – Sun: 08:00 AM – 08:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-white">
                      <div className="w-8 h-8 rounded-full bg-brand-olive/15 text-brand-olive flex items-center justify-center shrink-0">
                        <Phone size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-brand-purple">Direct Phone Line</p>
                        <p className="text-brand-muted font-mono">+91 99199 11027</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Help */}
                <div className="pt-6 border-t border-brand-purple/10 mt-6">
                  <p className="text-xs text-brand-muted mb-2">Prefer instant answers?</p>
                  <a
                    href="https://wa.me/919919911027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20bd5a] transition-all"
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp (+91 99199 11027)</span>
                  </a>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="md:col-span-7">
                {formStatus.success ? (
                  <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                      <Check size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-green-900 mb-1">
                      Enquiry Received!
                    </h4>
                    <p className="text-sm text-green-700 max-w-sm mb-6">
                      Thank you! Trainer Jothi and our academic team have received your details. We will contact you shortly on WhatsApp.
                    </p>
                    <Button
                      onClick={() => setFormStatus({ submitting: false, success: false, error: "" })}
                      variant="primary"
                      size="sm"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                    {formStatus.error && (
                      <div className="p-3 rounded-2xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                        {formStatus.error}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-5 py-3.5 rounded-full bg-white/90 border border-brand-purple/20 text-brand-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/40 placeholder:text-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full px-5 py-3.5 rounded-full bg-white/90 border border-brand-purple/20 text-brand-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/40 placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="ananya@example.com"
                          className="w-full px-5 py-3.5 rounded-full bg-white/90 border border-brand-purple/20 text-brand-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/40 placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple mb-1.5">
                          Program Interested In *
                        </label>
                        <select
                          name="program"
                          value={enquiryProgram}
                          onChange={(e) => setEnquiryProgram(e.target.value)}
                          className="w-full px-5 py-3.5 rounded-full bg-white/90 border border-brand-purple/20 text-brand-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/40 cursor-pointer"
                        >
                          {programDetails.map((p) => (
                            <option key={p.id} value={p.title}>
                              {p.title}
                            </option>
                          ))}
                          <option value="Custom 1-on-1 Consultation">
                            Custom 1-on-1 Consultation
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple mb-1.5">
                          Preferred Mode *
                        </label>
                        <select
                          name="mode"
                          defaultValue="Classroom @ Marathahalli"
                          className="w-full px-5 py-3.5 rounded-full bg-white/90 border border-brand-purple/20 text-brand-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/40 cursor-pointer"
                        >
                          <option value="Classroom @ Marathahalli">
                            Classroom @ Marathahalli
                          </option>
                          <option value="Live Interactive Online">
                            Live Interactive Online
                          </option>
                          <option value="Weekend Batch">Weekend Batch</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-purple mb-1.5">
                        Your Target Score or Speaking Challenge
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us what target score you need (e.g. Band 7.5) or if you want to improve fluency/stage confidence..."
                        className="w-full px-5 py-3.5 rounded-2xl bg-white/90 border border-brand-purple/20 text-brand-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/40 placeholder:text-gray-400 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={formStatus.submitting}
                        className="w-full text-base font-bold shadow-xl"
                        icon={Send}
                      >
                        {formStatus.submitting ? "Sending Details..." : "Confirm Free Assessment Booking"}
                      </Button>
                      <p className="text-[11px] text-center text-brand-muted mt-2">
                        🔒 100% Privacy. We never share your phone number.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
