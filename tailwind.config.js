/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1712",
        "ink-soft": "#241d16",
        "ink-card": "#2a2118",
        dusk: "#2c2015",
        palm: "#436b46",
        "palm-deep": "#2f4d33",
        "palm-light": "#6f9a6b",
        gold: "#d69a3f",
        "gold-soft": "#e8bc78",
        coral: "#c1543a",
        cream: "#f7eddd",
        "cream-dim": "#cdbfa2",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["'Work Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(15, 11, 6, 0.55)",
        glow: "0 0 0 1px rgba(214,154,63,0.25), 0 20px 40px -15px rgba(214,154,63,0.35)",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(247,237,221,0.06) 1px, transparent 0)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
