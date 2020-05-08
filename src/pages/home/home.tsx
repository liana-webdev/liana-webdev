import React, { ComponentProps } from 'react';
import styles from './home.module.scss';
type HomePageProps = {} & ComponentProps<'div'>;
export default function HomePage({}: HomePageProps) {
  return <div className={styles.main}>Home page</div>;
}
