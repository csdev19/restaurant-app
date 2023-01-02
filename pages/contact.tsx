import React, { VoidFunctionComponent } from 'react';
import { withTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContactTemplate from '@templates/ContactTemplate';

const ContactPage: VoidFunctionComponent = () => <ContactTemplate />;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default withTranslation()(ContactPage);
