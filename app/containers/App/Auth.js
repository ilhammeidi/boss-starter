import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Outer from '../Templates/Outer';
import {
  Login,
  Register,
  ResetPassword,
  NotFound,
  Maintenance,
} from '../pageListAsync';

function Auth() {
  return (
    <Outer>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/maintenance" component={Maintenance} />
        <Route component={NotFound} />
      </Switch>
    </Outer>
  );
}

export default Auth;
