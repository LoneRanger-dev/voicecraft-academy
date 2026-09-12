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
      "bg-gradient-to-r from-brand-purple to-brand-deep text-white shadow-lg shadow-brand-purple/25 hover:shadow-xl hover:shadow-brand-purple/35 hover:-translate-y-0.5 focus:ring-brand-purple",
    gold:
      "bg-gradient-to-r from-brand-gold to-[#987625] text-white shadow-lg shadow-brand-gold/25 hover:shadow-xl hover:shadow-brand-gold/40 hover:-translate-y-0.5 focus:ring-brand-gold",
    secondary:
      "bg-white/80 backdrop-blur-md border border-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white hover:border-brand-purple shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:ring-brand-purple",
    olive:
      "bg-brand-olive text-white shadow-md shadow-brand-olive/25 hover:bg-[#5C752B] hover:shadow-lg hover:-translate-y-0.5 focus:ring-brand-olive",
    glass:
      "bg-white/70 backdrop-blur-xl border border-white/90 text-brand-ink hover:bg-white/90 shadow-glass hover:shadow-glass-hover hover:-translate-y-0.5 focus:ring-brand-purple",
    outline:
      "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white focus:ring-brand-purple",
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
