import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, Link } from 'react-router-dom';

import { Typography, Button } from '@material-ui/core';

const styles = theme => ({
  errorWrap: {
    background: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    borderRadius: '50%',
    width: 500,
    height: 500,
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 300,
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    margin: `${theme.spacing(3)}px auto`,
  },
  title: {
    color: theme.palette.primary.main,
    textShadow: `10px 6px 50px ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem'
    },
  },
  deco: {
    boxShadow: theme.shadows[2],
    position: 'absolute',
    borderRadius: 2,
  },
  button: {
    marginTop: 50
  }
});

const ErrorWrap = (props) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404; // eslint-disable-line
      }
      const { classes, title, desc } = props;
      return (
        <div className={classes.errorWrap}>
          <Typography className={classes.title} variant="h1">{title}</Typography>
          <Typography variant="h5">{desc}</Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to="/app/"
          >
            Go To Dashboard
          </Button>
        </div>
      );
    }}
  />
);

ErrorWrap.propTypes = {
  classes: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ErrorWrap);
