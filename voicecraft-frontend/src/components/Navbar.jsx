import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "./Button.jsx";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Programs", id: "programs" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Gallery", id: "gallery" },
  { label: "Enquiry", id: "enquiry" },
];

export default function Navbar({ programs = [], onSelectProgram }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const programsMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 120;
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
    const elem = document.getElementById("programs");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 border-b border-[#eadfcd]/80 bg-white/92 backdrop-blur-2xl shadow-[0_4px_25px_rgba(74,21,75,0.06)] transition-all duration-300">
      <nav className="mx-auto flex min-h-[72px] lg:min-h-[76px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="flex items-center shrink-0"
        >
          <img
            src={logo}
            alt="VoiceCraft Academy"
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-brand-ink/80">
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
                      ? "bg-brand-purple text-white shadow-sm font-bold"
                      : "hover:bg-brand-purple/10 hover:text-brand-purple"
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
                      className="w-5 h-5 rounded-full hover:bg-brand-purple/10 flex items-center justify-center text-brand-purple cursor-pointer transition-transform"
                      aria-label="Toggle programs menu"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isProgramsOpen && (
                      <div className="absolute top-10 left-0 w-64 rounded-2xl bg-white/95 backdrop-blur-xl border border-brand-purple/10 shadow-xl py-2 z-50">
                        {programs.map((prog) => (
                          <button
                            key={prog}
                            type="button"
                            onClick={() => handleProgramClick(prog)}
                            className="w-full text-left px-4 py-2.5 text-xs font-semibold text-brand-ink hover:bg-brand-purple/10 hover:text-brand-purple transition-colors cursor-pointer"
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
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://wa.me/919919911027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/15 text-[#1eab52] hover:bg-[#25D366] hover:text-white transition-all duration-200 shadow-sm"
            aria-label="WhatsApp VoiceCraft"
          >
            <MessageCircle size={18} />
          </a>

          <Button
            href="#enquiry"
            variant="primary"
            size="sm"
            className="shadow-sm"
          >
            Free Trial Class
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center hover:bg-brand-purple/20 transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-brand-purple/15 shadow-2xl flex flex-col gap-2">
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
                  ? "bg-brand-purple text-white"
                  : "text-brand-ink hover:bg-brand-purple/10 hover:text-brand-purple"
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className="pt-3 border-t border-brand-purple/10 flex flex-col gap-2">
            <Button
              href="#enquiry"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Free Trial Class
            </Button>
            <a
              href="https://wa.me/919919911027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold shadow-md hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp (+91 99199 11027)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
