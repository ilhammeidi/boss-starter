import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import styles from '../tableStyle-jss';

function Form(props) {
  const {
    handleSubmit,
    children,
    reset,
    pristine,
    submitting,
    classes,
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className={classes.bodyForm}>
          {children}
        </section>
        <div className={classes.buttonArea}>
          <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const FormMapped = reduxForm({
  form: 'editableTbForm',
  enableReinitialize: true,
})(Form);

const FormMappedInit = connect(
  state => ({
    initialValues: state.crudTableForm.formValues
  })
)(FormMapped);

export default withStyles(styles)(FormMappedInit);
