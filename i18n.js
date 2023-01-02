// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  otherLanguages: ['es'],
  defaultNS: 'common',
  localeSubpaths: {
    en: 'en',
    es: 'es',
  },
  localePath: 'public/locales',
});
