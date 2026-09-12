import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Award, CheckCircle2, Sparkles, UserCheck } from "lucide-react";
import VoiceWaveVisualizer from "./VoiceWaveVisualizer.jsx";
import Button from "./Button.jsx";

const voiceSamples = [
  {
    id: "services",
    title: "Welcome to VoiceCraft: Our Academy & Services",
    program: "About Our Academy",
    speaker: "Trainer Jothi (Founder & Master Coach)",
    voiceBadge: "Native Indian Woman Voice",
    audioSrc: "/audio/services-speech.mp3",
    tagline: "Personalized 1-on-1 language coaching in Marathahalli, Bengaluru",
    speechText:
      "Hello and welcome to VoiceCraft Academy, located in Marathahalli, Bengaluru. I am delighted to introduce our premier language coaching programs: IELTS and PTE exam training, authentic French certifications, executive public speaking, and corporate English fluency. Experience our personalized 1-on-1 voice diagnostics and transform your communication today.",
    highlights: ["4 Flagship Programs", "1-on-1 Voice Diagnostics", "Classroom & Live Online"],
  },
  {
    id: "ielts",
    title: "IELTS Band 8.5 Speech: The Greatness of India",
    program: "IELTS & PTE Training",
    speaker: "Trainer Jothi (IELTS 8.5 Specialist)",
    voiceBadge: "Native Indian Woman Voice",
    audioSrc: "/audio/ielts-speech.mp3",
    tagline: "Demonstrating Band 8.5 lexical richness, smooth cadence, and zero hesitation",
    speechText:
      "India is a majestic civilization of unmatched cultural heritage, rich traditions, and visionary innovation. To present such profound ideas with eloquence and clarity in your IELTS exam, VoiceCraft Academy trains you to speak spontaneously, eliminate hesitation, and achieve a Band 8.5 score with pride.",
    highlights: ["Band 8.5 Vocabulary", "Fluent Pacing", "No Fillers / MTI"],
  },
  {
    id: "eloquence",
    title: "Eloquence Keynote: Stage Presence & Leadership",
    program: "Eloquence by VoiceCraft",
    speaker: "Trainer Jothi (Leadership Coach)",
    voiceBadge: "Native Indian Woman Voice",
    audioSrc: "/audio/eloquence-speech.mp3",
    tagline: "Commanding vocal projection, intentional pauses, and inspiring delivery",
    speechText:
      "Public speaking is the art of moving hearts and inspiring nations. From the profound words of our visionary Indian leaders to modern corporate boardrooms, speaking with conviction transforms your career. VoiceCraft's Eloquence program trains you to conquer stage fear, master vocal projection, and command every room with authority.",
    highlights: ["TEDx Pacing", "Power Pause Technique", "100% Stage Confidence"],
  },
  {
    id: "bonjour",
    title: "Bonjour French Immersion: Global Horizons",
    program: "Bonjour by VoiceCraft",
    speaker: "Native French Mentor",
    voiceBadge: "Authentic Parisian French",
    audioSrc: "/audio/french-speech.mp3",
    tagline: "Authentic French phonetics for DELF certification and Canada PR TEF points",
    speechText:
      "Bienvenue à VoiceCraft Academy! La langue française est la clé de votre avenir pour le Canada et l'Europe. Avec nous, vous maîtrisez la prononciation authentique et réussissez vos examens DELF et TEF avec confiance.",
    translation:
      "Translation: Welcome to VoiceCraft Academy! The French language is the key to your future in Canada and Europe. With us, you master authentic pronunciation and pass your DELF and TEF exams with confidence.",
    highlights: ["Authentic French Accent", "DELF A1–B2 Prep", "Canada PR Points"],
  },
];

export default function AudioSamplePlayer() {
  const [activeSample, setActiveSample] = useState(voiceSamples[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    // Create or re-assign audio instance
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.src = activeSample.audioSrc;
    audio.load();

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setCurrentTime(0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, [activeSample]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio playback error:", err));
    }
  };

  const handleSelectSample = (sample) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveSample(sample);
  };

  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs <= 0) return "0:00";
    const mins = Math.floor(secs / 60);
    const remSecs = Math.floor(secs % 60);
    return `${mins}:${remSecs < 10 ? "0" : ""}${remSecs}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl glass-card p-6 md:p-10 border border-white/80 shadow-2xl relative overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full liquid-orb-purple pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full liquid-orb-gold pointer-events-none -ml-20 -mb-20" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-brand-purple/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2 border border-brand-purple/15 shadow-sm">
            <UserCheck size={14} className="text-brand-gold" />
            <span>Voice of Trainer Jothi • Studio Quality Audio</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-purple">
            Listen to Spoken Language Training
          </h3>
          <p className="text-sm text-brand-muted mt-1">
            Crystal-clear, natural Indian female voice demonstrating our academy’s training programs and speaking methodology.
          </p>
        </div>

        {/* Tab Selector Pills (strictly rounded-full) */}
        <div className="flex flex-wrap gap-2">
          {voiceSamples.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSelectSample(sample)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeSample.id === sample.id
                  ? "bg-brand-purple text-white shadow-md shadow-brand-purple/30 scale-105"
                  : "bg-white/80 text-brand-ink/70 hover:bg-white hover:text-brand-purple border border-brand-purple/10"
              }`}
            >
              {sample.program.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Player Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Waveform Visualizer & Audio Controls */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <VoiceWaveVisualizer isPlaying={isPlaying} />

          {/* Player Controls Bar */}
          <div className="flex items-center gap-4 p-3 rounded-full bg-white/95 border border-brand-purple/15 shadow-md">
            <button
              type="button"
              onClick={togglePlay}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shrink-0 ${
                isPlaying
                  ? "bg-brand-gold text-white animate-pulse"
                  : "bg-gradient-to-r from-brand-purple to-brand-deep text-white hover:scale-105"
              }`}
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
            </button>

            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-brand-purple truncate">
                  {isPlaying ? "Playing Studio Voice..." : "Click to Play Voice Sample"}
                </span>
                <span className="font-mono text-xs text-brand-muted shrink-0 ml-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Seek Bar */}
              <div
                onClick={handleSeek}
                className="w-full h-2 rounded-full bg-brand-purple/10 overflow-hidden relative cursor-pointer group"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-purple via-brand-gold to-brand-olive transition-all duration-100"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Mute Button */}
            <button
              type="button"
              onClick={toggleMute}
              className="w-10 h-10 rounded-full hover:bg-brand-purple/10 text-brand-purple flex items-center justify-center cursor-pointer shrink-0 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>

        {/* Right: Speaker & Spoken Transcript */}
        <div className="lg:col-span-6 flex flex-col gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brand-gold tracking-wide uppercase flex items-center gap-1.5">
              <Sparkles size={13} />
              {activeSample.program}
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-olive/15 text-brand-olive text-xs font-bold flex items-center gap-1.5">
              <Award size={13} />
              {activeSample.voiceBadge}
            </span>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-ink leading-snug">
              {activeSample.title}
            </h4>
            <p className="text-xs font-semibold text-brand-purple mt-0.5">
              Speaker: {activeSample.speaker}
            </p>
          </div>

          {/* Transcript Box */}
          <div className="p-4 rounded-2xl bg-brand-cream border border-brand-purple/10 relative">
            <span className="text-[11px] font-bold text-brand-purple block mb-1 uppercase tracking-wider">
              Spoken Speech Transcript:
            </span>
            <p className="text-xs sm:text-sm text-brand-ink/90 leading-relaxed font-normal">
              "{activeSample.speechText}"
            </p>
            {activeSample.translation && (
              <p className="text-xs text-brand-muted mt-2 pt-2 border-t border-brand-purple/10 italic">
                {activeSample.translation}
              </p>
            )}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 pt-1">
            {activeSample.highlights.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-brand-purple border border-brand-purple/15 shadow-sm"
              >
                <CheckCircle2 size={13} className="text-brand-olive" />
                {item}
              </span>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex items-center gap-3">
            <Button
              href="#enquiry"
              variant="primary"
              size="sm"
              className="w-full sm:w-auto"
            >
              Book Free Speech Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
