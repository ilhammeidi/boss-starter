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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import AllInclusive from '@material-ui/icons/AllInclusive';
import Brightness5 from '@material-ui/icons/Brightness5';
import People from '@material-ui/icons/People';
import Icon from '@material-ui/core/Icon';
import brand from 'boss-api/dummy/brand';
import logo from 'boss-images/logo.svg';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
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

function RegisterFormV2(props) {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event, value) => {
    setTab(value);
  };

  const {
    classes,
    handleSubmit,
    pristine,
    submitting
  } = props;
  return (
    <Paper className={classes.sideWrap}>
      <div className={classes.topBar}>
        <NavLink to="/" className={classes.brand}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/login-v2">
          <Icon className={classes.icon}>arrow_forward</Icon>
          Already have account ?
        </Button>
      </div>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Register
      </Typography>
      <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
        Lorem ipsum dolor sit amet
      </Typography>
      <Tabs
        value={tab}
        onChange={handleChangeTab}
        indicatorColor="secondary"
        textColor="secondary"
        centered
        className={classes.tab}
      >
        <Tab label="With Email" />
        <Tab label="With Social Media" />
      </Tabs>
      {tab === 0 && (
        <section>
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
            <div className={classes.optArea}>
              <FormControlLabel
                control={(
                  <Field name="checkbox" component={CheckboxRedux} required className={classes.agree} />
                )}
                label="Agree with"
              />
              <a href="#" className={classes.link}>Terms &amp; Condition</a>
            </div>
            <div className={classes.btnArea}>
              <Button variant="contained" fullWidth color="primary" type="submit">
                Continue
                <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
              </Button>
            </div>
          </form>
        </section>
      )}
      {tab === 1 && (
        <section className={classes.socmedFull}>
          <Button fullWidth variant="outlined" size="large" className={classes.redBtn} type="button">
            <AllInclusive className={classNames(classes.leftIcon, classes.iconSmall)} />
            Socmed 1
          </Button>
          <Button fullWidth variant="outlined" size="large" className={classes.blueBtn} type="button">
            <Brightness5 className={classNames(classes.leftIcon, classes.iconSmall)} />
            Socmed 2
          </Button>
          <Button fullWidth variant="outlined" size="large" className={classes.cyanBtn} type="button">
            <People className={classNames(classes.leftIcon, classes.iconSmall)} />
            Socmed 3
          </Button>
        </section>
      )}
    </Paper>
  );
}

RegisterFormV2.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: 'registerForm2',
  enableReinitialize: true,
})(RegisterFormV2);

export default withStyles(styles)(RegisterFormReduxed);
