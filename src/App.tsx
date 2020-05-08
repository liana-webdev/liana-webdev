import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Routes from './Routes';
import HomePage from './pages/home';
import ContactsPage from './pages/contacts';
import WorkPage from './pages/work';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={Routes.INDEX} component={HomePage} />
        <Route exact path={Routes.WORK} component={WorkPage} />
        <Route exact path={Routes.CONTACT} component={ContactsPage} />
      </Switch>
    </HashRouter>
  );
}
