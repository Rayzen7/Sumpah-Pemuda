/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
      colors: {
        redInfo: "rgb(94, 0, 0)",
        bgNavbar: 'rgba(0,0,0,0.3)'
      },
      animation: {
        moveRight: 'moveRight 1s ease-in-out forwards',
        moveLeft: 'moveLeft 1s ease-in-out forwards',
      },
      keyframes: {
        moveRight: {  
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        moveLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform:'translateX(300%)' }
        },
      },
    },
  },
  plugins: [],
}