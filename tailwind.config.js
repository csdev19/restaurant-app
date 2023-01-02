// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

const focusedSiblingPlugin = plugin(({ addVariant }) => {
  addVariant('focused-sibling', ({ container }) => {
    container.walkRules((rule) => {
      // eslint-disable-next-line no-param-reassign
      rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

module.exports = {
  mode: 'jit',
  purge: [
    './shared/**/*.{js,ts,jsx,tsx}',
    './atoms/**/*.{js,ts,jsx,tsx}',
    './molecules/**/*.{js,ts,jsx,tsx}',
    './organisms/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cs-primary-color': 'var(--primary-color)',
        'cs-secondary-color': 'var(--secondary-color)',
        'cs-tertiary-color': 'var(--tertiary-color)',
        'cs-quaternary-color': 'var(--quaternary-color)',
        'cs-background': 'var(--background-color)',
        'cs-text': 'var(--text-color)',
        'cs-gray': '#B6B6B6',
        'cs-soft-gray': '#f2f2f2',
        'cs-red': '#B6B6B6',
        'cs-blue': '#157FFF',
        'cs-black': 'var(--black-color)',
        'cs-white': 'var(--white-color)',
        'cs-hard-black': '#000E1F',
        'cs-rose': 'var(--primary-color)', // '#FF338F',
        'cs-yellow': '#F6AE13',
        'cs-pink': 'var(--primary-color)', //'#E91E63',
        'cs-orange': '#E91E63',
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focused-sibling'],
    },
  },
  plugins: [focusedSiblingPlugin],
};
