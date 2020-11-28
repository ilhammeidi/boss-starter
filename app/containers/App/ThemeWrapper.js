import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Loading from 'react-loading-bar';
import { bindActionCreators } from 'redux';
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import 'ba-styles/vendors/react-loading-bar/index.css';
import { changeThemeAction } from 'ba-actions/UiActions';
import themePallete from 'ba-api/themePalette';
import styles from '../Templates/appStyles-jss';

function ThemeWrapper(props) {
  const {
    classes,
    children,
    color,
  } = props;

  const [pageLoaded, setPageLoaded] = useState(true);
  const [theme] = useState(
    createMuiTheme(themePallete(color))
  );

  useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      setPageLoaded(false);
    }, 500);
    return () => {
      setPageLoaded(true);
    };
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Loading
          show={pageLoaded}
          color="rgba(255,255,255,.9)"
          showSpinner={false}
        />
        {children}
      </div>
    </MuiThemeProvider>
  );
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  ...state,
  color: state.getIn([reducer, 'theme']),
  palette: state.getIn([reducer, 'palette']),
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withStyles(styles)(ThemeWrapperMapped);
