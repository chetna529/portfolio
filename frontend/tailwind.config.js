/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: 'var(--cyber-bg)',
          text: 'var(--cyber-text)',
          'text-h': 'var(--cyber-text-h)',
          border: 'var(--cyber-border)',
          card: 'var(--cyber-card)',
          cardBorder: 'var(--cyber-card-border)',
          'card-border': 'var(--cyber-card-border)',
          accentBg: 'var(--cyber-accent-bg)',
          'accent-bg': 'var(--cyber-accent-bg)',
          dark: 'var(--cyber-dark)',
          darker: 'var(--cyber-darker)',
          purple: 'var(--cyber-purple)',
          pink: 'var(--cyber-pink)',
          cyan: 'var(--cyber-cyan)',
          green: 'var(--cyber-green)',
          blue: 'var(--cyber-blue)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Archivo Black', 'Arial Black', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(6, 182, 212, 0.25), 0 0 20px rgba(6, 182, 212, 0.1)',
        'neon-purple': '0 0 10px rgba(168, 85, 247, 0.25), 0 0 20px rgba(168, 85, 247, 0.1)',
        'neon-pink': '0 0 10px rgba(236, 72, 153, 0.25), 0 0 20px rgba(236, 72, 153, 0.1)',
        'neon-green': '0 0 10px rgba(16, 185, 129, 0.25), 0 0 20px rgba(16, 185, 129, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
