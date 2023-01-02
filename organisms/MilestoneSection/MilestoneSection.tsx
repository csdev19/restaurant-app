import React, { VoidFunctionComponent } from 'react';
import Section from '@atoms/Section';
import styles from './MilestoneSection.module.css';
import { URL_GNOME } from './MilestionSection.constants';

const MilestoneSection: VoidFunctionComponent = () => {
  return (
    <Section className={styles.milestoneSection}>
      <div>
        <p>
          Empece mi carrera como desarrollador de software en un programa
          llamado Peru Rumbo GSoC 2018 organizado por LinuxAtUNI del cual llegue
          a ser el Top 1.
        </p>
      </div>
      <div className="flex-justify">
        <iframe
          title="PeruRumboGSoC2018"
          height="500"
          width="80%"
          src={URL_GNOME}
        />
      </div>
    </Section>
  );
};

export default MilestoneSection;
