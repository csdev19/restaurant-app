import Navigation from '@atoms/Navigation';
import ProgressGradient from '@atoms/ProgressGradient';
import HeaderLinkList from '@molecules/HeaderLinkList';
import ThemeToggler from '@molecules/ThemeToggler';
import { HeaderViewProps } from '@organisms/HeaderSection/HeaderView.types';
import clsx from 'clsx';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const HeaderView: FunctionComponent<HeaderViewProps> = ({
  gradient,
  checked,
  handleChange,
  path,
  locale,
  nativeName,
}) => {
  return (
    <Navigation>
      <div className="container mx-auto flex flex-wrap items-center mb-4 md:mb-0">
        <div className="flex w-full md:w-1/3 justify-center md:justify-start text-white font-extrabold">
          <Link href="/">
            <a className="text-white no-underline hover:text-white hover:no-underline">
              <span
                className={clsx(
                  'hidden',
                  'lg:block',
                  gradient === 100 ? 'text-cs-white' : 'text-cs-black',
                  'dark:text-cs-white',
                  'text-2xl',
                  'pl-2',
                )}
              >
                &#60;Cristian Sotomayor /&#62;
              </span>
              <span
                className={clsx(
                  'block',
                  'lg:hidden',
                  gradient === 100 ? 'text-cs-white' : 'text-cs-black',
                  'dark:text-cs-white',
                  'text-2xl',
                  'pl-2',
                )}
              >
                &#60;Cristian /&#62;
              </span>
            </a>
          </Link>
        </div>
        <div className="flex w-full content-center justify-between md:w-1/3 md:justify-center hidden md:block">
          <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
            <li className="mr-3">
              <ThemeToggler checked={checked} onChange={handleChange} />
            </li>
            <li className="mr-3">
              <Link href={path} locale={locale}>
                <a
                  className={clsx(
                    'inline-block',
                    'no-underline',
                    'rounded-full',
                    'py-2',
                    'px-4',
                    'border-2',
                    locale == 'en'
                      ? 'border-cs-blue text-cs-blue'
                      : 'border-red-500 text-red-500',
                  )}
                >
                  {nativeName}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full content-center justify-between md:w-1/3 md:justify-end hidden md:block">
          <HeaderLinkList />
        </div>
      </div>
      <ProgressGradient gradient={gradient} />
    </Navigation>
  );
};

export default HeaderView;
