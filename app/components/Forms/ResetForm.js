import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form/immutable';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Button, FormControl } from '@material-ui/core';
import styles from './user-jss';
import PapperBlock from '../PapperBlock/PapperBlock';
import { TextFieldRedux } from './ReduxFormMUI';


// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

class ResetForm extends React.Component {
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      submitting
    } = this.props;
    return (
      <div className={classes.formWrap}>
        <PapperBlock whiteBg title="Reset Password" desc="We will send reset password link to Your Email">
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="email"
                  component={TextFieldRedux}
                  placeholder="Your Email"
                  label="Your Email"
                  required
                  validate={[required, email]}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div className={classes.btnArea}>
              <Button variant="contained" color="primary" type="submit">
                Send ResetLink
                <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
              </Button>
            </div>
          </form>
        </PapperBlock>
      </div>
    );
  }
}

ResetForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const ResetFormReduxed = reduxForm({
  form: 'immutableEResetFrm',
  enableReinitialize: true,
})(ResetForm);

export default withStyles(styles)(ResetFormReduxed);
