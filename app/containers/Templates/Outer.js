import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from 'ba-api/brand';
import logo from 'ba-images/logo.svg';
import { Hidden } from '@material-ui/core';
import styles from './appStyles-jss';

function Outer(props) {
  const {
    classes,
    children,
  } = props;
  return (
    <div className={classes.appFrameOuter}>
      <main className={classes.outerContent} id="mainContent">
        <Hidden mdUp>
          <div className={classes.brand}>
            <img src={logo} alt={brand.name} />
            <h3>{brand.name}</h3>
          </div>
        </Hidden>
        {children}
      </main>
    </div>
  );
}

Outer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default (withStyles(styles)(Outer));
