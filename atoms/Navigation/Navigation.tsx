import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import useOnScroll from '@shared/hooks/useOnScroll';
import { NavigationProps } from './Navigation.types';

const Navigation: FunctionComponent<NavigationProps> = ({ children }) => {
  const gradient = useOnScroll();

  return (
    <nav
      className={clsx(
        'transition duration-500 ease-linear',
        'dark:bg-cs-hard-black',
        'bg-cs-white',
        gradient <= 10 ? 'opacity-100' : 'opacity-95',
        'p-2',
        'md:p-4',
        'mt-0',
        'fixed',
        gradient == 100 ? 'bg-cs-hard-black' : 'bg-white',
        'w-full',
        'top-0',
      )}
      style={{
        zIndex: 20,
      }}
    >
      {children}
    </nav>
  );
};

export default Navigation;
