import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import { HeaderMenu, BreadCrumb } from 'boss-components';
import dataMenu from 'boss-api/ui/menu';
import Decoration from '../Decoration';
import styles from '../appStyles-jss';

function DropMenuLayout(props) {
  const {
    classes,
    children,
    pageLoaded,
    mode,
    history,
    changeMode,
    titleException,
    toggleDrawer,
    sidebarOpen,
    loadTransition
  } = props;
  return (
    <Fragment>
      <HeaderMenu
        type="mega-menu"
        dataMenu={dataMenu}
        changeMode={changeMode}
        mode={mode}
        history={history}
        toggleDrawerOpen={toggleDrawer}
        openMobileNav={sidebarOpen}
        loadTransition={loadTransition}
        logoLink="/app"
      />
      <main
        className={
          classNames(
            classes.content,
            classes.highMargin
          )
        }
        id="mainContent"
      >
        <Decoration bigger />
        <section className={classNames(classes.mainWrap, classes.topbarLayout)}>
          {titleException.indexOf(history.location.pathname) < 0 && (
            <div className={classes.pageTitle}>
              <BreadCrumb separator=" › " theme="light" location={history.location} />
            </div>
          )}
          { !pageLoaded && (<img src="/images/spinner.gif" alt="spinner" className={classes.circularProgress} />) }
          <Fade
            in={pageLoaded}
            {...(pageLoaded ? { timeout: 700 } : {})}
          >
            <div className={!pageLoaded ? classes.hideApp : ''}>
              {/* Application content will load here */}
              { children }
            </div>
          </Fade>
        </section>
      </main>
    </Fragment>
  );
}

DropMenuLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  changeMode: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  titleException: PropTypes.array.isRequired,
};

export default (withStyles(styles)(DropMenuLayout));
