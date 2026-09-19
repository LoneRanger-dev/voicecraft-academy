import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import Button from "./Button.jsx";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Programs", id: "programs" },
  { label: "Why Us", id: "why-us" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Gallery", id: "gallery" },
  { label: "Enquiry", id: "enquiry" },
];

export default function Navbar({ programs = [], onSelectProgram, onNavigateSection }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const programsMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;
      const current = sections
        .filter((sec) => sec.offsetTop <= scrollPosition)
        .at(-1);

      if (current?.id) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeProgramsMenu = (event) => {
      if (!programsMenuRef.current?.contains(event.target)) {
        setIsProgramsOpen(false);
      }
    };
    document.addEventListener("click", closeProgramsMenu);
    return () => document.removeEventListener("click", closeProgramsMenu);
  }, []);

  const handleProgramClick = (program) => {
    setIsProgramsOpen(false);
    setIsMobileMenuOpen(false);
    onSelectProgram?.(program);
    onNavigateSection?.("programs");
    window.dispatchEvent(new CustomEvent("voicecraft:navigate", { detail: { id: "programs" } }));
    const elem = document.getElementById("programs");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
    setActiveSection(id);
    onNavigateSection?.(id);
    window.dispatchEvent(new CustomEvent("voicecraft:navigate", { detail: { id } }));
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* 1. Consen IT Solution 02 Top Contact Info Strip */}
      <div
        className={`bg-brand-deep text-white border-b border-white/10 text-xs transition-all duration-300 ${
          isScrolled ? "hidden md:hidden" : "block"
        }`}
      >
        <div className="w-full flex h-10 items-center justify-between px-4 sm:px-8 lg:px-14">
          {/* Welcome Message & Contact Details */}
          <div className="flex items-center gap-4 sm:gap-6 text-white/85 text-[11px] sm:text-xs">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-brand-gold font-semibold">
              <span>👋 Welcome! To VoiceCraft Academy</span>
              <span className="text-white/40">•</span>
            </span>
            <a
              href="tel:+919919911027"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Phone size={13} className="text-brand-gold shrink-0" />
              <span>+91 99199 11027</span>
            </a>
            <a
              href="mailto:voicecraftwithjothi@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Mail size={13} className="text-brand-gold shrink-0" />
              <span>voicecraftwithjothi@gmail.com</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-white/70">
              <MapPin size={13} className="text-brand-gold shrink-0" />
              <span>Marathahalli, Bangalore, India</span>
            </div>
          </div>

          {/* Social Links & Mode Badge */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-[11px] font-semibold text-brand-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              Classroom & Live Online
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/60 hidden md:inline">Follow Us:</span>
              <a
                href="https://www.facebook.com/profile.php?id=61591796930292"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-deep flex items-center justify-center text-white/80 transition-all text-[11px]"
              >
                <FaFacebookF size={11} />
              </a>
              <a
                href="https://www.instagram.com/voicecraftacademy_india"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-deep flex items-center justify-center text-white/80 transition-all text-[11px]"
              >
                <FaInstagram size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <nav className="border-b border-brand-gold/20 bg-[#120614]/92 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="w-full flex min-h-[68px] lg:min-h-[74px] items-center justify-between px-4 sm:px-8 lg:px-14">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={logo}
              alt="VoiceCraft Academy"
              className="h-10 sm:h-12 w-auto object-contain brightness-110"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-white/80">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isPrograms = item.id === "programs";

              return (
                <div key={item.id} className="relative" ref={isPrograms ? programsMenuRef : undefined}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold text-brand-deep shadow-md font-bold"
                        : "text-white/80 hover:bg-white/10 hover:text-brand-gold"
                    }`}
                  >
                    {item.label}
                  </a>

                  {/* Dropdown for Programs */}
                  {isPrograms && programs.length > 0 && (
                    <div className="inline-block ml-0.5">
                      <button
                        type="button"
                        onClick={() => setIsProgramsOpen((prev) => !prev)}
                        className="w-5 h-5 rounded-full hover:bg-white/10 flex items-center justify-center text-brand-gold cursor-pointer transition-transform"
                        aria-label="Toggle programs menu"
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isProgramsOpen && (
                        <div className="absolute top-10 left-0 w-64 rounded-2xl bg-[#1D0A20]/98 backdrop-blur-xl border border-brand-gold/25 shadow-2xl py-2 z-50">
                          {programs.map((prog) => (
                            <button
                              key={prog}
                              type="button"
                              onClick={() => handleProgramClick(prog)}
                              className="w-full text-left px-4 py-2.5 text-xs font-semibold text-white/90 hover:bg-brand-gold/15 hover:text-brand-gold transition-colors cursor-pointer"
                            >
                              {prog}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Header CTA Buttons (strictly rounded-full) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919919911027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200 shadow-sm border border-[#25D366]/30"
              aria-label="WhatsApp VoiceCraft"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="#enquiry"
              className="px-5 py-2 rounded-full text-xs xl:text-sm font-bold bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold text-brand-deep shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              Join a Session
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-brand-gold flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden p-4 mx-3 mb-3 rounded-3xl bg-[#180B1A]/98 backdrop-blur-2xl border border-brand-gold/25 shadow-2xl flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`px-4 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold text-brand-deep shadow-sm"
                    : "text-white/85 hover:bg-white/10 hover:text-brand-gold"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 border-t border-brand-gold/15 flex flex-col gap-2">
              <a
                href="https://wa.me/919919911027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-sm"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp (+91 99199 11027)</span>
              </a>
              <a
                href="#enquiry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center py-2.5 rounded-full bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold text-brand-deep text-xs font-bold shadow-sm"
              >
                Join a Session
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
