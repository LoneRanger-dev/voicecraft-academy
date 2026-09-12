import { useState, useEffect } from "react";
import { Mic, Volume2, Sparkles } from "lucide-react";

export default function VoiceWaveVisualizer({
  isPlaying = false,
  mode = "speaking",
  className = "",
  barCount = 28,
}) {
  // Generate pseudo-random equalizer bar heights
  const [frequencies, setFrequencies] = useState(
    Array.from({ length: barCount }, () => 15)
  );

  useEffect(() => {
    if (!isPlaying) {
      // Gentle idle state
      setFrequencies(Array.from({ length: barCount }, (_, i) => 12 + (i % 5) * 4));
      return;
    }

    const interval = setInterval(() => {
      setFrequencies(
        Array.from({ length: barCount }, (_, i) => {
          // Center bars tend to be higher for voice/speech frequency curves
          const distanceFromCenter = Math.abs(i - barCount / 2) / (barCount / 2);
          const centerBias = 1 - distanceFromCenter * 0.4;
          const randomVal = Math.floor(Math.random() * 70) + 20;
          return Math.min(95, Math.max(15, Math.floor(randomVal * centerBias)));
        })
      );
    }, 110);

    return () => clearInterval(interval);
  }, [isPlaying, barCount]);

  return (
    <div className={`relative flex flex-col items-center justify-center p-4 rounded-3xl bg-brand-deep/90 text-white shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-brand-gold/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-brand-olive/20 blur-2xl pointer-events-none" />

      {/* Top status bar */}
      <div className="w-full flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${isPlaying ? "bg-brand-gold text-brand-plum animate-pulse" : "bg-white/10 text-white/60"}`}>
            <Mic size={14} />
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-brand-gold">
            {isPlaying ? "Voice Diagnostic Live" : "VoiceCraft Sound Lab"}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-white/70 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
          <Sparkles size={12} className="text-brand-gold" />
          <span className="font-mono text-[11px]">44.1 kHz HD</span>
        </div>
      </div>

      {/* Equalizer Frequency Bars */}
      <div className="w-full h-20 flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1">
        {frequencies.map((height, index) => {
          // Color gradient across frequencies
          const isGold = index % 3 === 0;
          const isOlive = index % 5 === 0;
          const barColor = isPlaying
            ? isGold
              ? "bg-gradient-to-t from-brand-gold to-[#f0d486]"
              : isOlive
              ? "bg-gradient-to-t from-brand-olive to-[#a0c25a]"
              : "bg-gradient-to-t from-purple-400 to-pink-300"
            : "bg-white/30";

          return (
            <div
              key={index}
              className="flex-1 flex items-center justify-center h-full max-w-[6px]"
            >
              <div
                className={`w-full rounded-full transition-all duration-100 ease-out ${barColor}`}
                style={{
                  height: `${height}%`,
                  boxShadow: isPlaying ? "0 0 8px rgba(179, 146, 57, 0.4)" : "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Frequency scale markers */}
      <div className="w-full flex justify-between items-center mt-2 px-1 text-[10px] font-mono text-white/40">
        <span>100Hz</span>
        <span>Pacing & Breath</span>
        <span>Tone Modulation</span>
        <span>8kHz</span>
      </div>
    </div>
  );
}
