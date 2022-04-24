import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'boss-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Type from 'boss-styles/Typography.scss';
import ArrowForward from '@material-ui/icons/ArrowForward';
import logo from 'boss-images/logo.svg';
import { LoginForm } from 'boss-components';
import styles from 'boss-components/Forms/user-jss';

function Login(props) {
  const [valueForm, setValueForm] = useState(null);

  const submitForm = values => {
    setTimeout(() => {
      setValueForm(values);
      console.log(`You submitted:\n\n${valueForm}`);
      window.location.href = '/app';
    }, 500); // simulate server latency
  };

  const title = brand.name + ' - Login Version';
  const description = brand.desc;
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.container}>
        <Grid container spacing={3} direction="row" justify="center">
          <Grid item container justifyContent="center" alignItems="center" spacing={0} className={classes.loginWrap}>
            <Hidden smDown>
              <Grid item md={6} className={classes.welcomeWrap}>
                {/* Welcome Login */}
                <div className={classes.welcome}>
                  <div className={classes.welcomeContent}>
                    <div className={classes.brand}>
                      <img src={logo} alt={brand.name} />
                      <h3>{brand.name}</h3>
                    </div>
                    <Typography variant="h3">
                      <span className={Type.light}>Hello there,</span>
                    </Typography>
                    <Typography variant="h6" className={classes.brandText}>
                      <span className={Type.regular}>
                        welcome to
                        {' '}
                        {brand.name}
                      </span>
                    </Typography>
                  </div>
                  <ArrowForward className={classes.decoBottom} />
                </div>
              </Grid>
            </Hidden>
            <Grid item md={6} sm={8} xs={11}>
              {/* ----------------------------------------------------------------------*/}
              {/* Load Login Form */}
              <LoginForm onSubmit={(values) => submitForm(values)} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
