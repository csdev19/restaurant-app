import React, { VoidFunctionComponent } from 'react';
import HeaderSection from '@organisms/HeaderSection';
import MainSection from '@organisms/MainSection';
import ShortExperienceSection from '@organisms/ShortExperienceSection';
import ShortInformation from '@organisms/ShortInformation';
import TechnologiesSection from '@organisms/TechnologiesSection';
import TrophySection from '@organisms/TrophySection';
import PageTemplate from '@templates/PageTemplate';

const HomeTemplate: VoidFunctionComponent = () => {
  return (
    <PageTemplate title="Home | Cristian Sotomayor">
      <HeaderSection />

      <div className="pt-40 md:pt-0">
        <MainSection />

        <ShortInformation />

        <ShortExperienceSection />

        <TechnologiesSection />

        <TrophySection />
      </div>
    </PageTemplate>
  );
};

export default HomeTemplate;
