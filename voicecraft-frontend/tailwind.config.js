/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#4A154B",
          deep: "#320D33",
          plum: "#210922",
          olive: "#6E8934",
          "olive-light": "#E9F0DB",
          gold: "#B39239",
          "gold-light": "#F7ECCF",
          cream: "#FAF9F6",
          surface: "#FFFFFF",
          ink: "#1D1420",
          muted: "#6B5E70",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Montserrat"', '"Poppins"', "system-ui", "sans-serif"],
        display: ['"Times New Roman"', "Times", "Georgia", "serif"],
        serif: ['"Times New Roman"', "Times", "Georgia", "serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(74, 21, 75, 0.07)",
        "glass-hover": "0 16px 40px 0 rgba(74, 21, 75, 0.14)",
        "glass-gold": "0 8px 30px 0 rgba(179, 146, 57, 0.12)",
        soft: "0 10px 30px -5px rgba(33, 9, 34, 0.06)",
        card: "0 4px 20px rgba(74, 21, 75, 0.08)",
        floating: "0 20px 45px -10px rgba(74, 21, 75, 0.18)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "wave-bar-1": "waveBar 1.2s ease-in-out infinite alternate",
        "wave-bar-2": "waveBar 0.8s ease-in-out 0.2s infinite alternate",
        "wave-bar-3": "waveBar 1.4s ease-in-out 0.4s infinite alternate",
        "wave-bar-4": "waveBar 0.9s ease-in-out 0.1s infinite alternate",
        "wave-bar-5": "waveBar 1.1s ease-in-out 0.3s infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        waveBar: {
          "0%": { height: "20%" },
          "100%": { height: "95%" },
        },
      },
    },
  },
  plugins: [],
};
