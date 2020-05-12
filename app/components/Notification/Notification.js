import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { Snackbar, IconButton } from '@material-ui/core';

const styles = theme => ({
  close: {
    width: theme.spacing(4),
  },
});

class Notification extends React.Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.close('crudTableDemo');
  };

  render() {
    const { classes, message } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={message !== ''}
        autoHideDuration={3000}
        onClose={() => this.handleClose()}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={message}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={() => this.handleClose()}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(Notification);
