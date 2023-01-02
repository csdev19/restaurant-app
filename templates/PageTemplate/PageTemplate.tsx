import React, {
  FunctionComponent,
  useEffect,
  useReducer,
  useState,
} from 'react';
import Head from 'next/head';
import ThemeReducer, { ThemeActionTypes } from '@contexts/theme/theme.reducer';
import ThemeContext from '@contexts/theme/theme.context';
import FooterSection from '@organisms/FooterSection';
import { PageTemplateProps } from './PageTemplate.types';

const PageTemplate: FunctionComponent<PageTemplateProps> = ({
  children,
  title,
}) => {
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setInitialState({ theme });
  }, []);

  const [themeState, themeDispatch] = useReducer(ThemeReducer, initialState);

  useEffect(() => {
    themeDispatch({
      type: ThemeActionTypes.setTheme,
      payload: initialState?.theme,
    });
  }, [initialState]);

  useEffect(() => {
    localStorage.setItem('theme', themeState?.theme);
  }, [themeState]);

  return (
    <ThemeContext.Provider
      value={{
        themeState,
        themeDispatch,
      }}
    >
      <div className={themeState?.theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <meta name="author" content="Cristian Sotomayor" />
          <meta
            name="description"
            content="I'm Cristian Sotomayor a fullstack Developer with more than 3 years of experience developing software, leading development teams, implementing new fancy technologies and giving techinal advice to IT teams"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="google-site-verification"
            content="SaLWWG_X7F-2w-dvQKuG1paAgqxczjU91YaIkci0tQY"
          />
        </Head>

        <main className="dark:bg-cs-black dark:text-white bg-cs-white transition duration-500 ease-linear">
          {children}
        </main>

        <FooterSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default PageTemplate;
