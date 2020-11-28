import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, IconButton, Hidden } from '@material-ui/core';
import UserMenu from './UserMenu';
import styles from './header-jss';

function Header(props) {
  const {
    classes,
    toggleDrawerOpen,
    margin,
    turnDarker,
  } = props;

  return (
    <AppBar
      className={
        classNames(
          classes.appBar,
          margin && classes.appBarShift,
          classes.appbar,
          turnDarker && classes.darker
        )
      }
    >
      <Toolbar disableGutters>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={toggleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.flex}>
          <div className={classes.wrapper}>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <input className={classes.input} placeholder="Search" />
          </div>
        </div>
        <Hidden xsDown>
          <span className={classes.separatorV} />
        </Hidden>
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  margin: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Header);
