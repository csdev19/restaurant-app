import React, {
  useContext,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react';
import { useRouter } from 'next/router';
import ThemeContext from '@contexts/theme/theme.context';
import { ThemeActionTypes } from '@contexts/theme/theme.reducer';
import useOnScroll from '@shared/hooks/useOnScroll';
import { LANGUAGES } from '@organisms/HeaderSection/Header.constants';
import HeaderView from '@organisms/HeaderSection/HeaderView';

const HeaderSection: VoidFunctionComponent = () => {
  const router = useRouter();
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const [checked, setChecked] = useState(themeState?.theme === 'dark');
  const gradient = useOnScroll();

  useEffect(() => {
    if (themeState) {
      setChecked(themeState?.theme === 'dark');
    }
  }, [themeState]);

  const handleChange = () => {
    themeDispatch({ type: ThemeActionTypes.changeTheme, payload: null });
    setChecked(!checked);
  };

  const path = `/${router.basePath}${router.locale == 'en' ? 'es' : 'en'}${
    router.pathname
  }`;
  const locale = router.locale == 'en' ? 'es' : 'en';
  const nativeName = LANGUAGES[router.locale].nativeName;

  return (
    <HeaderView
      checked={checked}
      gradient={gradient}
      handleChange={handleChange}
      locale={locale}
      path={path}
      nativeName={nativeName}
    />
  );
};

export default HeaderSection;
