import { Browser } from '../types/browser.type';

export const checkBrowser = (navigator: Navigator): Browser => {
  const chrome = navigator.userAgent.search('Chrome');
  const firefox = navigator.userAgent.search('Firefox');
  const m8 = navigator.userAgent.search('MSIE 8.0');
  const m9 = navigator.userAgent.search('MSIE 9.0');
  if (chrome > -1) {
    return 'Chrome';
  } else if (firefox > -1) {
    return 'Firefox';
  } else if (m9 > -1) {
    return 'MSIE 9.0';
  } else if (m8 > -1) {
    return 'MSIE 8.0';
  } else {
    return 'NaB';
  }
};
