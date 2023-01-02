import React, { VoidFunctionComponent } from 'react';
import TrophyResponsive from '@molecules/TrophyResponsive/TrophyResponsive';
import Section from '@atoms/Section';
import styles from './TrophySection.module.css';
import clsx from 'clsx';
import Container from '@atoms/Container';

const TrophySection: VoidFunctionComponent = () => (
  <Section className="py-12">
    <Container>
      <h2
        className={clsx(
          'text-center text-2xl my-8 text-cs-white',
          styles.title,
        )}
      >
        Github
      </h2>
      <div className="w-11/12 m-auto">
        <TrophyResponsive />
      </div>
    </Container>
  </Section>
);

export default TrophySection;
