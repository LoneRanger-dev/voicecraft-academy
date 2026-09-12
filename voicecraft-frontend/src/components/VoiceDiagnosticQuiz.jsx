import { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, Check, Compass, MessageSquare } from "lucide-react";
import Button from "./Button.jsx";

const questions = [
  {
    id: "goal",
    title: "Step 1: What is your primary learning goal?",
    subtitle: "Select the area you want to master first",
    options: [
      { id: "ielts", label: "IELTS / PTE Band 7.5+ for Immigration or Study", program: "IELTS with VoiceCraft" },
      { id: "french", label: "Learn French (DELF / Canada TEF Exam)", program: "Bonjour by VoiceCraft" },
      { id: "public_speaking", label: "Conquer Stage Fear & Master Public Speaking", program: "Eloquence by VoiceCraft" },
      { id: "fluency", label: "Fluency & Corporate English Communication", program: "EngLingo by VoiceCraft" },
    ],
  },
  {
    id: "challenge",
    title: "Step 2: What is your biggest challenge right now?",
    subtitle: "Be honest — our diagnostic identifies your root barrier",
    options: [
      { id: "hesitation", label: "Hesitation, pausing, and translating in my head" },
      { id: "accent", label: "Pronunciation clarity & mother tongue influence" },
      { id: "anxiety", label: "Stage fright, rapid heartbeat, and going blank" },
      { id: "structure", label: "Structuring thoughts quickly under pressure" },
    ],
  },
  {
    id: "mode",
    title: "Step 3: What learning mode do you prefer?",
    subtitle: "We offer both classroom and high-touch online cohorts",
    options: [
      { id: "offline", label: "Offline Classroom @ Marathahalli, Bengaluru", desc: "Interactive group drills & stage practice" },
      { id: "online", label: "Live Interactive 1-on-1 Online", desc: "Flexible timings for busy professionals & global students" },
      { id: "hybrid", label: "Hybrid (Weekend Classroom + Weekday Online)", desc: "Best of both worlds" },
    ],
  },
];

export default function VoiceDiagnosticQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    goal: null,
    challenge: null,
    mode: null,
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (key, option) => {
    const nextAnswers = { ...answers, [key]: option };
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({ goal: null, challenge: null, mode: null });
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const recommendedProgram = answers.goal?.program || "IELTS with VoiceCraft";

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl glass-card p-6 sm:p-10 border border-white/90 shadow-2xl relative overflow-hidden">
      {/* Decorative badges */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-purple/10">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center">
            <Compass size={16} />
          </span>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-purple">
              60-Second Speaking Diagnostic
            </h4>
            <p className="text-xs text-brand-muted">Personalized curriculum roadmap</p>
          </div>
        </div>

        {!isCompleted && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-brand-gold">
              Step {currentStep + 1} of {questions.length}
            </span>
            <div className="w-20 h-2 bg-brand-purple/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-gold rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {!isCompleted ? (
        <div className="transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-ink mb-1 font-display">
            {questions[currentStep].title}
          </h3>
          <p className="text-sm text-brand-muted mb-6">
            {questions[currentStep].subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {questions[currentStep].options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() =>
                  handleSelect(
                    questions[currentStep].id,
                    opt
                  )
                }
                className="flex flex-col text-left p-4 rounded-2xl border border-brand-purple/15 bg-white/70 hover:bg-white hover:border-brand-gold hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <span className="text-sm font-bold text-brand-ink group-hover:text-brand-purple flex items-center justify-between">
                  {opt.label}
                  <ArrowRight size={16} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                {opt.desc && (
                  <span className="text-xs text-brand-muted mt-1">
                    {opt.desc}
                  </span>
                )}
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="text-xs font-semibold text-brand-muted hover:text-brand-purple underline cursor-pointer"
            >
              ← Back to previous question
            </button>
          )}
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-brand-olive/20 text-brand-olive flex items-center justify-center mx-auto mb-4 animate-bounce">
            <Sparkles size={28} />
          </div>

          <span className="px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider">
            Diagnostic Complete
          </span>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-purple mt-3 mb-2">
            Recommended Program: {recommendedProgram}
          </h3>

          <p className="max-w-xl mx-auto text-sm text-brand-ink/80 leading-relaxed mb-6">
            Based on your focus on <span className="font-bold text-brand-purple">{answers.challenge?.label}</span>, our curriculum targets 1-on-1 vocal modulation drills, diagnostic feedback, and structured speech practice.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href={`#enquiry`}
              variant="primary"
              size="lg"
              showChevron
            >
              Claim Your Free Diagnostic Session
            </Button>
            <Button
              onClick={handleReset}
              variant="secondary"
              size="lg"
              icon={RotateCcw}
            >
              Retake Quiz
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
