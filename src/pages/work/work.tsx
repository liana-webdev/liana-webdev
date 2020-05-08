import React, { ComponentProps } from 'react';

import styles from './work.module.scss';
type WorkPageProps = {} & ComponentProps<'div'>;
export default function WorkPage({}: WorkPageProps) {
  return <div className={styles.main}>Home page</div>;
}
