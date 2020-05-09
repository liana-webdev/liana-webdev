import React, { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import './home.scss';
type HomePageProps = {} & ComponentProps<'div'>;
export default function HomePage() {
  const { t } = useTranslation();
  return <div>{t('Hello, world')}</div>;
}
