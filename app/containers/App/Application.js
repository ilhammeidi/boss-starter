import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  DashboardV1, Parent,
  SimpleTable, ReduxForm,
  NotFound, BlankPage, Error,
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    return (
      <Dashboard history={this.props.history}>
        <Switch>
          <Route exact path="/app" component={DashboardV1} />
          <Route exact path="/app/pages/blank-page" component={BlankPage} />
          <Route exact path="/app/pages/error" component={Error} />
          { /* Table */ }
          <Route exact path="/app/tables" component={Parent} />
          <Route path="/app/tables/basic-table" component={SimpleTable} />
          { /* Form & Button */ }
          <Route exact path="/app/forms" component={Parent} />
          <Route path="/app/forms/reduxform" component={ReduxForm} />
          { /* Default */ }
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
