import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { CsdevIcon } from '@shared/Icons';
import useWindowSize from '@shared/hooks/useWindowSize';
import { URL_CV } from '@shared/constants';
import Section from '@atoms/Section';
import Container from '@atoms/Container/Container';
import LinkButton from '@atoms/LinkButton/LinkButton';
import styles from './MainSection.module.css';
import { DEV_NAME_PER_SIZE } from './MainSection.constants';
import Button from '@atoms/Button';

const MainSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();

  const [devName, setDevName] = useState('Cristian Sotomayor');
  const [size, widthStates] = useWindowSize();

  useEffect(() => {
    setDevName(DEV_NAME_PER_SIZE[widthStates]);
  }, [size]);

  return (
    <Section>
      <Container>
        <div
          className={clsx(
            'grid',
            'grid-cols-1',
            'md:grid-cols-12',
            'sm:mt-0',
            'xl:mt-4',
            'md:h-screen',
          )}
        >
          <div
            className={clsx(
              'relative',
              'flex',
              'flex-col',
              'justify-center',
              'mt-8',
              'md:mt-0',
              'order-last',
              'md:order-first',
              'md:col-span-7',
            )}
          >
            <div className="text-lg">{t('main.greeting')}</div>

            <div className="flex">
              <div className={styles.typingEffect}>
                <h1 className="my-4 text-2xl lg:text-2xl font-bold word-break">
                  &#60;
                  {devName}
                  /&#62;
                </h1>
              </div>
            </div>

            <p className="text-lg mb-2">
              <span
                className={styles.introduction}
                dangerouslySetInnerHTML={{ __html: t('main.introduction') }}
              ></span>
              <span>&#128293;</span>
            </p>

            <LinkButton type="external" href={URL_CV}>
              {t('main.button')}
            </LinkButton>
          </div>
          <div
            className={clsx(
              'w-4/5',
              'flex',
              'xl:w-4/5',
              'm-auto',
              'sm:my-auto',
              'md:mr-0',
              'md:col-span-5',
            )}
          >
            <CsdevIcon width="100%" height="100%" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MainSection;
