module.exports = {
  content: ['./views/pages/*.{hbs,js}'],
  theme: {
    extend: {},
    colors: {
      primary: '#009688',
      'primary-dark': '#00695f',
      'primary-light': '#33ab9f',

      secondary: '#ff3d00',
      'secondary-dark': '#b22a00',
      'secondary-light': '#ff6333',

      white: '#fff',
      black: '#000'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
  variants: {
    colors: ['active'],
    extend: {
      padding: ['ferst', 'last', 'hover', 'focus', 'avtive']
    }
  }
};
