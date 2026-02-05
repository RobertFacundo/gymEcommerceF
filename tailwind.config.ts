export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        testred: '#ff0000',
      },
      fontFamily: {
        heading: ['"Rubik Distressed"', 'system-ui'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
};