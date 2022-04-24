import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from 'containers/Templates/appStyles-jss';
import { ErrorWrap } from 'boss-components';

function NotFoundDedicated(props) {
  const { classes, gradient } = props;
  return (
    <div className={classNames(classes.appFrameOuter, gradient ? classes.gradientBg : classes.solidBg)}>
      <main className={classes.outerContent} id="mainContent">
        <div className={classes.petal} />
        <ErrorWrap title="404" desc="Oops, Page Not Found :(" />
      </main>
    </div>
  );
}

NotFoundDedicated.propTypes = {
  classes: PropTypes.object.isRequired,
  gradient: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  gradient: state.ui.gradient
});

const NotFoundDedicatedMaped = connect(
  mapStateToProps,
)(NotFoundDedicated);

export default (withStyles(styles)(NotFoundDedicatedMaped));
