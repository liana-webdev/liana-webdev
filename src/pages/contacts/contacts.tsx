import React, { ComponentProps } from 'react';

import styles from './contacts.module.scss';

type ContactsPageProps = {} & ComponentProps<'div'>;

export default function ContactsPage({}: ContactsPageProps) {
  return <div className={styles.main}>Home page</div>;
}
