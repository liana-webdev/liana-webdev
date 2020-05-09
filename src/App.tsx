import React, { Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Routes from './Routes';
import HomePage from './pages/home';
import ContactsPage from './pages/contacts';
import WorkPage from './pages/work';
import './i18n';

export default function App() {
  return (
    <Suspense fallback="Загрузка">
      <HashRouter hashType="slash">
        <Switch>
          <Route exact path={Routes.INDEX} component={HomePage} />
          <Route exact path={Routes.WORK} component={WorkPage} />
          <Route exact path={Routes.CONTACT} component={ContactsPage} />
        </Switch>
      </HashRouter>
    </Suspense>
  );
}
