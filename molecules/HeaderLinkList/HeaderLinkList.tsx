import React, { VoidFunctionComponent } from 'react';
import HeaderLinkListView from '@molecules/HeaderLinkList/HeaderLinkListView';
import { useTranslation } from 'next-i18next';

const HeaderLinkList: VoidFunctionComponent = () => {
  const { t } = useTranslation();
  const navigationUrls = [
    {
      path: '/',
      name: t('link.home'),
      active: false,
    },
    {
      path: '/contact',
      name: t('link.contact'),
      active: false,
    },
  ];

  return <HeaderLinkListView navigationUrls={navigationUrls} />;
};

export default HeaderLinkList;
