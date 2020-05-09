import React, { ComponentProps } from 'react';

import './contacts.scss';

type ContactsPageProps = {} & ComponentProps<'div'>;

export default function ContactsPage({}: ContactsPageProps) {
  return <div>Home page</div>;
}
