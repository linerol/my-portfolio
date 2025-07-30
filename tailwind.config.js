module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a2233', // bleu nuit
        surface: '#232b3a', // gris anthracite
        accent: '#2ee59d',  // vert menthe
        accent2: '#4fc3f7', // bleu clair moderne
        text: '#fff',       // blanc pur
        text2: '#bfc9d1',   // gris clair
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}; 