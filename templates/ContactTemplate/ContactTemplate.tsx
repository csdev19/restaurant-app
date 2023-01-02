import React, { VoidFunctionComponent } from 'react';
import HeaderSection from '@organisms/HeaderSection';
import SocialSection from '@organisms/SocialSection';
import PageTemplate from '@templates/PageTemplate';

const ContactTemplate: VoidFunctionComponent = () => {
  return (
    <PageTemplate title="Contact | Cristian Sotomayor">
      <HeaderSection />

      <div className="container mx-auto sm:px-0 px-8 pb-40 pt-40">
        <SocialSection />
      </div>
    </PageTemplate>
  );
};

export default ContactTemplate;
