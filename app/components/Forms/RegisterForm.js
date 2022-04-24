import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ArrowForward from '@material-ui/icons/ArrowForward';
import AllInclusive from '@material-ui/icons/AllInclusive';
import Brightness5 from '@material-ui/icons/Brightness5';
import People from '@material-ui/icons/People';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './user-jss';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.password) {
    return 'Passwords dont match';
  }
  return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function RegisterFormV3(props) {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event, value) => {
    setTab(value);
  };

  const {
    classes,
    handleSubmit,
    pristine,
    submitting,
  } = props;
  return (
    <div className={classes.formWrap}>
      <PapperBlock whiteBg title="Create New Account" icon="ion-md-contact" desc="">
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
          className={classes.tab}
        >
          <Tab label="With Email" />
          <Tab label="With Social Network" />
        </Tabs>
        {tab === 0
          && (
            <form onSubmit={handleSubmit}>
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="name"
                    component={TextFieldRedux}
                    placeholder="Username"
                    label="Username"
                    required
                    className={classes.field}
                  />
                </FormControl>
              </div>
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
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="password"
                    component={TextFieldRedux}
                    type="password"
                    label="Your Password"
                    required
                    validate={[required, passwordsMatch]}
                    className={classes.field}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="passwordConfirm"
                    component={TextFieldRedux}
                    type="password"
                    label="Re-type Password"
                    required
                    validate={[required, passwordsMatch]}
                    className={classes.field}
                  />
                </FormControl>
              </div>
              <div className={classNames(classes.btnArea, classes.noMargin)}>
                <div className={classes.optArea}>
                  <FormControlLabel control={<Field name="checkbox" component={CheckboxRedux} className={classes.agree} />} label="Agree with" />
                  <a href="#" className={classes.link}>Terms &amp; Condition</a>
                </div>
                <Button variant="contained" color="primary" type="submit">
                Continue
                  <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
                </Button>
              </div>
            </form>
          )
        }
        {tab === 1
          && (
            <div>
              <Button fullWidth variant="contained" size="large" className={classNames(classes.redBtn, classes.socmedFull)} type="button">
                <AllInclusive className={classNames(classes.leftIcon, classes.iconSmall)} />
              Socmed 1
              </Button>
              <Button fullWidth variant="contained" size="large" className={classNames(classes.blueBtn, classes.socmedFull)} type="button">
                <Brightness5 className={classNames(classes.leftIcon, classes.iconSmall)} />
              Socmed 2
              </Button>
              <Button fullWidth variant="contained" size="large" className={classNames(classes.cyanBtn, classes.socmedFull)} type="button">
                <People className={classNames(classes.leftIcon, classes.iconSmall)} />
              Socmed 3
              </Button>
            </div>
          )
        }
      </PapperBlock>
    </div>
  );
}

RegisterFormV3.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: 'registerForm3',
  enableReinitialize: true,
})(RegisterFormV3);

export default withStyles(styles)(RegisterFormReduxed);
