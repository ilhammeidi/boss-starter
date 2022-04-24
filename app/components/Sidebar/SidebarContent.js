import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import brand from 'boss-api/dummy/brand';
import dummy from 'boss-api/dummy/dummyContents';
import logo from 'boss-images/logo.svg';
import MainMenu from './MainMenu';
import styles from './sidebar-jss';

function SidebarContent(props) {
  const {
    classes,
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    status,
    anchorEl,
    openMenuStatus,
    closeMenuStatus,
    changeStatus
  } = props;

  const setStatus = st => {
    switch (st) {
      case 'online':
        return classes.online;
      case 'idle':
        return classes.idle;
      case 'bussy':
        return classes.bussy;
      default:
        return classes.offline;
    }
  };

  return (
    <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
      <div className={classes.drawerHeader}>
        <NavLink to="/app" className={classNames(classes.brand, classes.brandBar, turnDarker && classes.darker)}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
        <div className={classNames(classes.profile, classes.user)}>
          <Avatar
            alt={dummy.user.name}
            src={dummy.user.avatar}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <div>
            <h4>{dummy.user.name}</h4>
            <p>{dummy.user.title}</p>
            <Button size="small" onClick={openMenuStatus}>
              <i className={classNames(classes.dotStatus, setStatus(status))} />
              {status}
            </Button>
            <Menu
              id="status-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenuStatus}
              className={classes.statusMenu}
            >
              <MenuItem onClick={() => changeStatus('online')}>
                <i className={classNames(classes.dotStatus, classes.online)} />
                Online
              </MenuItem>
              <MenuItem onClick={() => changeStatus('idle')}>
                <i className={classNames(classes.dotStatus, classes.idle)} />
                Idle
              </MenuItem>
              <MenuItem onClick={() => changeStatus('bussy')}>
                <i className={classNames(classes.dotStatus, classes.bussy)} />
                Bussy
              </MenuItem>
              <MenuItem onClick={() => changeStatus('offline')}>
                <i className={classNames(classes.dotStatus, classes.offline)} />
                Offline
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div
        id="sidebar"
        className={
          classNames(
            classes.menuContainer,
            leftSidebar && classes.rounded
          )
        }
      >
        <MainMenu loadTransition={loadTransition} dataMenu={dataMenu} toggleDrawerOpen={toggleDrawerOpen} />
      </div>
    </div>
  );
}

SidebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
};

export default withStyles(styles)(SidebarContent);
