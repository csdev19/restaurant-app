import React, { ReactElement } from 'react';
import '../styles/variables.css';
import '../styles/globals.css';

import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
