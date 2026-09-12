import { Star, CheckCircle, Quote } from "lucide-react";

export default function ReviewCard({
  name,
  role,
  rating = 5,
  program,
  result,
  review,
  avatar,
}) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-3xl glass-card glass-card-hover border border-white/90 h-full relative">
      {/* Decorative quote mark */}
      <Quote
        size={36}
        className="absolute top-5 right-5 text-brand-purple/10 pointer-events-none"
      />

      <div>
        {/* Top: Program & Score Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-purple/10 text-brand-purple border border-brand-purple/15">
            {program}
          </span>
          {result && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-gold/15 text-[#87630E] border border-brand-gold/30 flex items-center gap-1">
              <CheckCircle size={12} className="text-brand-gold" />
              {result}
            </span>
          )}
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < rating
                  ? "fill-brand-gold text-brand-gold"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="ml-1 text-xs font-bold text-brand-ink/70">5.0</span>
        </div>

        {/* Review Quote */}
        <p className="text-sm text-brand-ink/85 leading-relaxed italic mb-6">
          "{review}"
        </p>
      </div>

      {/* Author Footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-brand-purple/10">
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-brand-purple to-brand-gold flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
          )}
        </div>
        <div>
          <h4 className="text-sm font-bold text-brand-ink flex items-center gap-1.5">
            {name}
            <CheckCircle size={13} className="text-brand-olive inline" />
          </h4>
          <p className="text-xs text-brand-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}
