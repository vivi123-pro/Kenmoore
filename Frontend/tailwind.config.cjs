/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        luxury: {
          charcoal: '#1a1a1a',
          gold: '#D4AF37',
          'gold-light': '#F4E87C',
          'gold-dark': '#B8860B',
          cream: '#F5F5DC',
          'charcoal-light': '#2d2d2d',
          'charcoal-dark': '#0f0f0f',
        },
        accent: {
          earth: '#8B4513',
          'earth-light': '#D2691E',
          sage: '#9CAF88',
          'sage-dark': '#6B8E4B',
        }
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0f0f0f 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4E87C 50%, #B8860B 100%)',
        'cream-gradient': 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)',
        'luxury-hover': '0 30px 60px rgba(0,0,0,0.4), 0 15px 30px rgba(0,0,0,0.3)',
        'gold': '0 10px 30px rgba(212, 175, 55, 0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'luxury-float': 'luxuryFloat 6s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 2s ease-in-out infinite',
        'glass-glow': 'glassGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        luxuryFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glassGlow: {
          '0%, 100%': { boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)' },
          '50%': { boxShadow: '0 8px 32px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)' },
        },
      },
    },
  },
  plugins: [],
}

