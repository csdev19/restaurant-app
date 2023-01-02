import React, { VoidFunctionComponent } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  YoutubeIcon,
  CsdevIcon,
  GithubIcon,
  LinkedinIcon,
} from '@shared/Icons';
import LinkButton from '@atoms/LinkButton';
import {
  GITHUB_URL,
  LINKEDIN_URL,
  URL_CV,
  YOUTUBE_URL,
} from '@shared/constants';
import styles from './FooterSection.module.css';
import Container from '@atoms/Container';

const FooterSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <footer
      className={clsx(
        'w-full',
        'min-h-screen',
        'flex',
        'items-center',
        'justify-center',
        'bg-cs-hard-black',
        'dark:bg-cs-hard-black',
        'w-full',
      )}
    >
      <Container className="flex-wrap items-center text-white flex flex-col w-full">
        <div className="md:flex w-full">
          <div className="w-full">
            <div className="w-full text-6xl font-bold mt-8">
              <h2
                className={clsx('w-full md:w-2/3 break-words', styles.contact)}
                dangerouslySetInnerHTML={{ __html: t('footer.contact') }}
              ></h2>
            </div>
            <div className="w-full flex mt-8 flex-col md:flex-row md:justify-between">
              <p className="w-full md:w-2/3 text-gray-400">
                {t('footer.contact.text')}
              </p>
            </div>
          </div>
          <div className="w-full md:w-44 pt-6 md:pt-0 m-auto">
            <LinkButton
              type="external"
              href={URL_CV}
              className="text-lg w-full"
            >
              {t('main.button')}
            </LinkButton>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex mt-24 mb-12 flex-row justify-between items-center">
            <div className="">
              <CsdevIcon height={40} width={40} />
            </div>
            <Link href="/">
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                {t('link.home')}
              </a>
            </Link>
            <Link href="/contact">
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                {t('link.contact')}
              </a>
            </Link>

            <div className="flex flex-row space-x-8 items-center justify-between">
              <a
                target="_blank"
                href={GITHUB_URL}
                className="bg-white border rounded"
              >
                <GithubIcon />
              </a>
              <a target="_blank" href={LINKEDIN_URL}>
                <LinkedinIcon />
              </a>
              <a target="_blank" href={YOUTUBE_URL}>
                <YoutubeIcon />
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-gray-600">
            Copyright © 2021 Cristian Sotomayor
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;
