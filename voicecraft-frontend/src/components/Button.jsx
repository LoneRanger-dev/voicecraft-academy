import { ChevronRight } from "lucide-react";

export default function Button({
  children,
  icon: Icon,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  showChevron = false,
  type = "button",
  disabled = false,
}) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs min-h-[40px] gap-2",
    md: "px-6 py-3 text-sm min-h-[48px] gap-2.5",
    lg: "px-8 py-4 text-base min-h-[56px] gap-3 font-bold",
  };

  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none shadow-sm";

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold text-brand-deep font-bold shadow-lg shadow-brand-gold/25 hover:shadow-xl hover:shadow-brand-gold/40 hover:brightness-105 hover:-translate-y-0.5 focus:ring-brand-gold",
    gold:
      "bg-gradient-to-r from-brand-gold via-[#F3DE9C] to-brand-gold text-brand-deep font-bold shadow-lg shadow-brand-gold/25 hover:shadow-xl hover:shadow-brand-gold/40 hover:brightness-105 hover:-translate-y-0.5 focus:ring-brand-gold",
    secondary:
      "bg-[#1D0A20]/90 backdrop-blur-md border border-brand-gold/30 text-white hover:bg-[#2A0F2E] hover:border-brand-gold/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:ring-brand-gold",
    olive:
      "bg-brand-olive text-white shadow-md shadow-brand-olive/25 hover:bg-[#5C752B] hover:shadow-lg hover:-translate-y-0.5 focus:ring-brand-olive",
    glass:
      "bg-white/10 backdrop-blur-xl border border-brand-gold/25 text-white hover:bg-white/15 shadow-glass hover:shadow-glass-hover hover:-translate-y-0.5 focus:ring-brand-gold",
    outline:
      "border-2 border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-deep focus:ring-brand-gold",
    whatsapp:
      "bg-[#25D366] text-white shadow-md shadow-green-500/25 hover:bg-[#20bd5a] hover:shadow-lg hover:-translate-y-0.5 focus:ring-green-500",
  };

  const classes = `${base} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {Icon && <Icon size={size === "lg" ? 20 : 18} className="shrink-0" />}
        <span>{children}</span>
        {showChevron && <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={size === "lg" ? 20 : 18} className="shrink-0" />}
      <span>{children}</span>
      {showChevron && <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
