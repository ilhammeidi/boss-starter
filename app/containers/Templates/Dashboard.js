import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Header, Sidebar, BreadCrumb } from 'ba-components';
import { toggleAction, openAction, playTransitionAction } from 'ba-actions/UiActions';
import { Fade } from '@material-ui/core';
import styles from './appStyles-jss';

class Dashboard extends React.Component {
  state = {
    transform: 0,
  };

  componentDidMount = () => {
    // Scroll content to top
    window.addEventListener('scroll', this.handleScroll);

    // Set expanded sidebar menu
    const currentPath = this.props.history.location.pathname;
    this.props.initialOpen(currentPath);

    // Play page transition
    this.props.loadTransition(true);

    // Execute all arguments when page changes
    this.unlisten = this.props.history.listen(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.props.loadTransition(true);
      }, 500);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    this.setState({
      transform: scroll
    });
  }

  render() {
    const {
      classes,
      children,
      toggleDrawer,
      sidebarOpen,
      loadTransition,
      pageLoaded
    } = this.props;
    const darker = true;
    return (
      <div className={classes.appFrameInner}>
        <Header toggleDrawerOpen={toggleDrawer} turnDarker={this.state.transform > 30 && darker} margin={sidebarOpen} />
        <Sidebar
          open={sidebarOpen}
          toggleDrawerOpen={toggleDrawer}
          loadTransition={loadTransition}
          turnDarker={this.state.transform > 30 && darker}
        />
        <main className={classNames(classes.content, !sidebarOpen && classes.contentPadding)} id="mainContent">
          <div className={classes.bgbar} />
          <section className={classes.mainWrap}>
            <BreadCrumb separator=" › " theme="light" location={this.props.history.location} />
            <Fade
              in={pageLoaded}
              mountOnEnter
              unmountOnExit
              {...(pageLoaded ? { timeout: 700 } : {})}
            >
              <div className={!pageLoaded ? classes.hideApp : ''}>
                {children}
              </div>
            </Fade>
          </section>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  initialOpen: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired
};

const reducer = 'ui';
const mapStateToProps = state => ({
  sidebarOpen: state.getIn([reducer, 'sidebarOpen']),
  pageLoaded: state.getIn([reducer, 'pageLoaded'])
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAction),
  initialOpen: bindActionCreators(openAction, dispatch),
  loadTransition: bindActionCreators(playTransitionAction, dispatch),
});

const DashboardMaped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default (withStyles(styles)(DashboardMaped));
