/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       fontFamily: {
         sans: ['"Scheherazade New"', 'serif'],
        arabic: ['"Scheherazade New"', 'serif'], // خط عربي من جوجل
        diwani: ['"Diwani"', 'cursive'], // لو هترفع خطك بنفسك
      }
    },
  },
  plugins: [],
};
