import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// Menu Object
import MenuContent from 'ba-api/menu';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Icon } from '@material-ui/core';
import styles from './sidebar-jss';

function sortByKey(array, key) {
  return array.sort((a, b) => {
    const x = a[key]; const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MainMenu(props) {
  const {
    classes,
    toggleDrawerOpen,
    loadTransition,
    openSubMenu,
    open,
  } = props;

  const handleClick = () => {
    toggleDrawerOpen();
    loadTransition(false);
  };

  const getMenus = menuArray => menuArray.map((item, index) => {
    if (item.child) {
      return (
        <div key={index.toString()}>
          <ListItem
            button
            className={classNames(classes.head, open.indexOf(item.key) > -1 ? classes.opened : '')}
            onClick={() => openSubMenu(item.key, item.keyParent)}
          >
            {item.icon
              && (
                <ListItemIcon className={classes.iconWrapper}>
                  <Icon className={classes.icon}>{item.icon}</Icon>
                </ListItemIcon>
              )
            }
            <ListItemText classes={{ primary: classes.primary }} variant="inset" primary={item.name} />
            { open.indexOf(item.key) > -1 ? <ExpandLess /> : <ExpandMore /> }
          </ListItem>
          <Collapse
            component="li"
            className={classNames(
              classes.nolist,
              (item.keyParent ? classes.child : ''),
            )}
            in={open.indexOf(item.key) > -1}
            timeout="auto"
            unmountOnExit
          >
            <List className={classes.dense} dense>
              { getMenus(sortByKey(item.child, 'key')) }
            </List>
          </Collapse>
        </div>
      );
    }
    return (
      <ListItem
        key={index.toString()}
        button
        exact
        className={classes.nested}
        activeClassName={classes.active}
        component={LinkBtn}
        to={item.link}
        onClick={handleClick}
      >
        {item.icon
          && (
            <ListItemIcon>
              <Icon className={classes.icon}>{item.icon}</Icon>
            </ListItemIcon>
          )
        }
        <ListItemText classes={{ primary: classes.primary }} inset primary={item.name} />
      </ListItem>
    );
  });
  return (
    <div>
      {getMenus(MenuContent)}
    </div>
  );
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.object.isRequired,
  openSubMenu: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
};

const openAction = (key, keyParent) => ({ type: 'OPEN_SUBMENU', key, keyParent });
const reducer = 'ui';

const mapStateToProps = state => ({
  force: state, // force active class for sidebar menu
  open: state.getIn([reducer, 'subMenuOpen'])
});

const mapDispatchToProps = dispatch => ({
  openSubMenu: bindActionCreators(openAction, dispatch)
});

const MainMenuMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);

export default withStyles(styles)(MainMenuMapped);
