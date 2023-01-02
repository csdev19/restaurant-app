import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import MoonIcon from '@shared/Icons/MoonIcon';
import SunIcon from '@shared/Icons/SunIcon';
import styles from './ThemeToggler.module.css';
import { ThemeTogglerProps } from './ThemeToggler.types';

const ThemeToggler: FunctionComponent<ThemeTogglerProps> = ({
  checked,
  onChange,
}) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div
          className={clsx(
            'mx-2',
            'transition duration-500 ease-in-out rounded-full',
            !checked ? `${styles.sunLight}` : 'scale-0	dark:text-cs-black',
          )}
        >
          <SunIcon />
        </div>
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              checked={checked}
              onChange={() => onChange()}
            />
            <div
              className={`transition duration-500 ease-in-out block bg-gray-600 w-14 h-8 rounded-full ${styles.containerDot}`}
            />
            <div
              className={`${styles.dot} absolute left-1 top-1 bg-cs-yellow w-6 h-6 rounded-full transition duration-500`}
            />
          </div>
        </label>
        <div
          className={clsx(
            'mx-2',
            'transition duration-500 ease-in-out rounded-full',
            checked ? `${styles.moonDark}` : 'scale-0 text-cs-white',
          )}
        >
          <MoonIcon />
        </div>
      </div>
    </>
  );
};

export default ThemeToggler;
