import { MapPin, Phone, Mail, Clock, MessageCircle, Heart } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-plum text-white relative overflow-hidden pt-16 pb-12 border-t border-brand-gold/20">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-purple/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="inline-block mb-4">
              <img
                src={logo}
                alt="VoiceCraft Academy"
                className="h-10 w-auto bg-white/95 px-3 py-1.5 rounded-full"
              />
            </a>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
              VoiceCraft Academy is Bengaluru’s premier institute for IELTS Band 7.5+ mastery, French language certifications, executive public speaking, and English fluency.
            </p>
            <a
              href="https://wa.me/919919911027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20bd5a] transition-all duration-200"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct (+91 99199 11027)</span>
            </a>
          </div>

          {/* Col 2: The 4 Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
              Signature Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="#programs" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  IELTS with VoiceCraft (Band 7.5+)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Bonjour by VoiceCraft (French A1–B2)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Eloquence by VoiceCraft (Public Speaking)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  EngLingo by VoiceCraft (Spoken English)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#sound-lab" className="hover:text-brand-gold transition-colors">Sound Lab & Speech Demo</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">About Trainer Jothi</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-gold transition-colors">Student Reviews (4.9★)</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-gold transition-colors">Classroom Moments</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-brand-gold transition-colors">Book Free Consultation</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Academy Location */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
              Campus Location
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Marathahalli, Bengaluru, Karnataka 560037, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <a href="tel:+919919911027" className="hover:text-brand-gold transition-colors font-mono">
                  +91 99199 11027
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <a href="mailto:voicecraftwithjothi@gmail.com" className="hover:text-brand-gold transition-colors">
                  voicecraftwithjothi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-brand-gold shrink-0" />
                <span>Mon – Sun: 08:00 AM – 08:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} VoiceCraft Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Marathahalli, Bengaluru</span>
            <span>•</span>
            <span>Certified Language Coaching</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
