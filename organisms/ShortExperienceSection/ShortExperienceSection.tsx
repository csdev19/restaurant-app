import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@atoms/Container/Container';
import Section from '@atoms/Section';
import ShortExperienceCard, {
  IShortExperience,
} from '@molecules/ShortExperienceCard';
import styles from './ShortExperienceSection.module.css';
import clsx from 'clsx';

const ShortExperienceSection: VoidFunctionComponent = () => {
  const [experienceData, setExperienceData] = useState<IShortExperience[]>([]);
  const { t } = useTranslation();

  const experienceMock: IShortExperience[] = [
    {
      title: t('short.experience.globaltask.title'),
      description: t('short.experience.globaltask.desc'),
      endStart: new Date(),
      startDate: new Date(),
      image:
        'https://s3.us-east-2.amazonaws.com/csdev19.personal/globaltask.jpg',
      provisionalDate: t('short.experience.globaltask.date'),
    },
    {
      title: t('short.experience.pamer.title'),
      description: t('short.experience.pamer.desc'),
      endStart: new Date(),
      startDate: new Date(),
      image: 'https://s3.us-east-2.amazonaws.com/csdev19.personal/pamer.jpg',
      provisionalDate: t('short.experience.pamer.date'),
    },
    {
      title: t('short.experience.cedhinfo.title'),
      description: t('short.experience.cedhinfo.desc'),
      endStart: new Date(),
      startDate: new Date(),
      image: 'https://s3.us-east-2.amazonaws.com/csdev19.personal/cedhinfo.jpg',
      provisionalDate: t('short.experience.cedhinfo.date'),
    },
    {
      title: t('short.experience.smiledu.title'),
      description: t('short.experience.smiledu.desc'),
      endStart: new Date(),
      startDate: new Date(),
      image: 'https://s3.us-east-2.amazonaws.com/csdev19.personal/smiledu.jpg',
      provisionalDate: t('short.experience.smiledu.date'),
    },
  ];

  useEffect(() => {
    setExperienceData(experienceMock);
  }, []);

  return (
    <Section className="relative flex">
      <Container className="z-10">
        <h2
          className={clsx(
            'text-center text-2xl my-8 relative text-cs-white',
            styles.title,
          )}
        >
          {t('short.experience.title')}
        </h2>

        {experienceData.map((experience, index) => (
          <ShortExperienceCard
            description={experience.description}
            image={experience.image}
            provisionalDate={experience.provisionalDate}
            title={experience.title}
            key={index}
          />
        ))}
      </Container>

      <div className="absolute w-full h-full" style={{ top: 0 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2077 1267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2076.5 0V212.5L0 1267V1042L2076.5 0Z"
            fill="url(#paint0_linear_120:33)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_120:33"
              x1="-3.53906e-05"
              y1="973.771"
              x2="1213.55"
              y2="-389.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Section>
  );
};

export default ShortExperienceSection;
