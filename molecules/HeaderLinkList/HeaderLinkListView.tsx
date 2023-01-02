import { HeadeLinkListViewProps } from '@molecules/HeaderLinkList/HeaderLinkList.types';
import useOnScroll from '@shared/hooks/useOnScroll';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';

const HeaderLinkListView: FunctionComponent<HeadeLinkListViewProps> = ({
  navigationUrls,
}) => {
  const { locale, asPath } = useRouter();
  const gradient = useOnScroll();
  return (
    <>
      <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
        {navigationUrls.map((item, idx) => (
          <li className="mr-3 " key={idx}>
            <Link href={`${locale && '/' + locale}${item.path}`}>
              <a
                className={clsx(
                  'inline-block',
                  'dark:text-cs-white',
                  'no-underline',
                  item.path === asPath
                    ? 'text-white bg-cs-rose'
                    : gradient === 100
                    ? 'text-white hover:text-cs-rose'
                    : 'text-gray-600 hover:text-cs-rose',
                  'rounded-full',
                  'py-2',
                  'px-4',
                )}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderLinkListView;
