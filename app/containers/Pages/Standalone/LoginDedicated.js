import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from 'ba-api/brand';
import logo from 'ba-images/logo.svg';
import styles from 'ba-containers/Templates/appStyles-jss';
import { Hidden } from '@material-ui/core';
import Login from '../Users/Login';

class LoginDedicated extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appFrameOuter}>
        <main className={classes.outerContent} id="mainContent">
          <Hidden mdUp>
            <div className={classes.brand}>
              <img src={logo} alt={brand.name} />
              <h3>{brand.name}</h3>
            </div>
          </Hidden>
          <Login />
        </main>
      </div>
    );
  }
}

LoginDedicated.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(LoginDedicated));
