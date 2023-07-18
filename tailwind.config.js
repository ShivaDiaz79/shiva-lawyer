module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: '#00FFFF',
        },
      },
      fontFamily: {
        saira: ['Saira Condensed', 'sans-serif'],
        calabacin: ["Calabacín", " cursive"],
       orbitron: ['Orbitron', 'sans-serif'],
       dancing : ['Dancing Script',' cursive'],
       
      },
    },
  },
  plugins: [],
};
