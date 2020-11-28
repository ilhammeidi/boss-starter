import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import brand from 'ba-api/brand';
import dummy from 'ba-api/dummyContents';
import logo from 'ba-images/logo.svg';
import {
  Hidden,
  Drawer,
  SwipeableDrawer,
  Avatar
} from '@material-ui/core';
import MainMenu from './MainMenu';
import styles from './sidebar-jss';

const MenuContent = props => {
  const {
    classes,
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition
  } = props;
  return (
    <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
      <div className={classes.drawerHeader}>
        <div className={classNames(classes.brand, classes.brandBar, turnDarker && classes.darker)}>
          <img src={logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </div>
        <div className={classNames(classes.profile, classes.user)}>
          <Avatar
            alt={dummy.user.name}
            src={dummy.user.avatar}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <div>
            <h4>{dummy.user.name}</h4>
            <span>{dummy.user.title}</span>
          </div>
        </div>
      </div>
      <div className={classes.menuContainer}>
        <MainMenu loadTransition={loadTransition} toggleDrawerOpen={toggleDrawerOpen} />
      </div>
    </div>
  );
};

MenuContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
};

MenuContent.defaultProps = {
  turnDarker: false
};

MenuContent.defaultProps = {
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
};

const MenuContentStyle = withStyles(styles)(MenuContent);

function Sidebar(props) {
  const {
    classes,
    open,
    toggleDrawerOpen,
    loadTransition,
    turnDarker
  } = props;

  return (
    <Fragment>
      <Hidden lgUp>
        <SwipeableDrawer
          onClose={toggleDrawerOpen}
          onOpen={toggleDrawerOpen}
          open={!open}
          anchor="left"
        >
          <div className={classes.swipeDrawerPaper}>
            <MenuContentStyle drawerPaper toggleDrawerOpen={toggleDrawerOpen} loadTransition={loadTransition} />
          </div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          onClose={toggleDrawerOpen}
          classes={{
            paper: classNames(classes.drawer, classes.drawerPaper, !open ? classes.drawerPaperClose : ''),
          }}
          open={open}
          anchor="left"
        >
          <MenuContentStyle
            drawerPaper={open}
            turnDarker={turnDarker}
            loadTransition={loadTransition}
          />
        </Drawer>
      </Hidden>
    </Fragment>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  turnDarker: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Sidebar);
