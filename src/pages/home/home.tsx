import React, { ComponentProps } from 'react';
import cls from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './home.module.scss';
type HomePageProps = {} & ComponentProps<'div'>;
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div
      className={cls(styles.container, styles['text-center'], styles['mt-2'])}
    >
      {t('Hello, world')}
    </div>
  );
}
