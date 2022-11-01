module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'Tajawal', 'sans-serif'],
      },
      colors: {
        'primary-soft-blue': 'hsl(231, 69%, 60%)',
        'primary-red': 'hsl(0, 94%, 66%)',
        'neutral-grayish-blue': 'hsl(229, 8%, 60%)',
        'neutral-very-dark-blue': 'hsl(229, 31%, 21%)',
      },
    },
  },
  plugins: [],
}
