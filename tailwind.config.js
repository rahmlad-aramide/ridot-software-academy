/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020181",
        lightPrimary: '#37478d',
        secondary: "#fe0002"
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      animation: {
        'bounce': 'bounce 5s linear infinite',
        'shake': 'shake 5s linear infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(-2%)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      backgroundImage: {
        'acbg': "url('./src/assets/images/background.jpg')"
      }
    },
  },
  plugins: [],
}