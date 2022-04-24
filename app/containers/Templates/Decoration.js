import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './appStyles-jss';

function Decoration(props) {
  const { classes, bigger } = props;

  return (
    <div className={classes.bgWrap}>
      <div className={classNames(classes.bgbar, classes.solidBg, bigger ? classes.bigger : classes.medium)} />
    </div>
  );
}

Decoration.propTypes = {
  classes: PropTypes.object.isRequired,
  bigger: PropTypes.bool
};

Decoration.defaultProps = {
  classes: PropTypes.object.isRequired,
  bigger: false
};

export default (withStyles(styles)(Decoration));
