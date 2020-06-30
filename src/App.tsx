import React, { Suspense } from 'react';
import './App.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import SignIn from './components/Modals/SignIn';

const App: React.FunctionComponent = () => (
  <Suspense fallback={<div>Загрузка</div>}>
    <Switch>
      <Route exact path={'/'}>
        <SignIn />
      </Route>
    </Switch>
  </Suspense>
);

export default withRouter(App);
