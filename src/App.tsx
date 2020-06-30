import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// Style
import './App.scss';

// Components
import { Views } from './views/Views';

const App: React.FunctionComponent = () => (
  <Suspense fallback={<div>Загрузка</div>}>
    <Switch>
      <Route exact path={'/'}>
        <Views.SignUp />
      </Route>
      <Route exact path="/login">
        <Views.Login />
      </Route>
      {/* <Route exact path="/signup">
        <Views.SignUp />
      </Route> */}
      <Route exact path="/confirmemail">
        <Views.ConfirmEmail />
      </Route>
      <Route exact path="/confirmsuccessfully">
        <Views.ConfirmSuccessfully />
      </Route>
    </Switch>
  </Suspense>
);

export default withRouter(App);
