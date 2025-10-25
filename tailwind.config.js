module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        neonBlue: '#32d6ff',
        neonPurple: '#9b5cff'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'neon': '0 4px 30px rgba(155,92,255,0.12), 0 0 18px rgba(50,214,255,0.06)'
      }
    },
  },
  plugins: [],
}
