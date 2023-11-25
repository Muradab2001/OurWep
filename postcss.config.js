module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: require('tailwindcss'),
    autoprefixer: require('tailwindcss'),
  },
};
