import React, { useState, VoidFunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '@atoms/Section';
import { DataTechnology } from '@organisms/TechnologiesSection/TechnologiesSection.types';
import ProgressImg from '@molecules/ProgressImg';
import TechnologiesModal from '@molecules/TechnologiesModal/TechnologiesModal';
import Background1 from '@shared/svg/Background1';
import styles from './TechnologiesSection.module.css';
import clsx from 'clsx';
import Container from '@atoms/Container';

const TechnologiesSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();

  const [technologieSelected, settechnologieSelected] = useState(null);
  const dataTechnologies: DataTechnology[] = [
    {
      radius: 60,
      stroke: 8,
      image: '/images/git.png',
      color: '#F05133',
      title: t('tech.git.title'),
      technologies: t('tech.git.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/mongo.png',
      color: '#70B35E',
      title: t('tech.mongo.title'),
      technologies: t('tech.mongo.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/node.png',
      color: '#83CD29',
      title: t('tech.node.title'),
      technologies: t('tech.node.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/typescript.png',
      color: '#007ACD',
      title: t('tech.ts.title'),
      technologies: t('tech.ts.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/css.png',
      color: '#2965F1',
      title: t('tech.css.title'),
      technologies: t('tech.css.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/sass.png',
      color: '#CD6799',
      title: t('tech.sass.title'),
      technologies: t('tech.sass.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/sql.png',
      color: '#157EFB',
      title: t('tech.sql.title'),
      technologies: t('tech.sql.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/react.png',
      color: '#00D8FF',
      title: t('tech.react.title'),
      technologies: t('tech.react.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/vue.png',
      color: '#00C887',
      title: t('tech.vue.title'),
      technologies: t('tech.vue.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/angular.png',
      color: '#DD0031',
      title: t('tech.angular.title'),
      technologies: t('tech.angular.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/aws.png',
      color: '#FF9900',
      title: t('tech.aws.title'),
      technologies: t('tech.aws.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/figma.png',
      color: '#A259FF',
      title: t('tech.figma.title'),
      technologies: t('tech.figma.tech'),
    },
  ];

  const [opened, setOpened] = useState(false);

  const handleClick = (data) => {
    settechnologieSelected(data);
    setOpened(true);
  };

  const handleClose = () => {
    settechnologieSelected(null);
    setOpened(false);
  };

  return (
    <Section className="py-12 md:py-0 relative md:h-screen flex">
      <Container className="z-10">
        <h2
          className={clsx(
            'text-center text-2xl my-8 relative text-cs-white',
            styles.title,
          )}
        >
          {t('tech.title')}
        </h2>

        <div className="m-auto w-3/4 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {dataTechnologies.map((data) => (
              <ProgressImg
                radius={data.radius}
                stroke={data.stroke}
                color={data.color}
                image={data.image}
                key={data.image}
                onClick={() => handleClick(data)}
              />
            ))}
          </div>
        </div>
      </Container>
      <TechnologiesModal
        data={technologieSelected}
        onClose={handleClose}
        open={opened}
      />
      <div className="absolute w-full h-full">
        <Background1 />
      </div>
    </Section>
  );
};

export default TechnologiesSection;
