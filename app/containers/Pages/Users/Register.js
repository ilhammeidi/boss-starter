import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Type from 'ba-styles/Typography.scss';
import ArrowForward from '@material-ui/icons/ArrowForward';
import brand from 'ba-api/brand';
import logo from 'ba-images/logo.svg';
import { RegisterForm } from 'ba-components';
import styles from 'ba-components/Forms/user-jss';

import { Grid, Hidden, Typography } from '@material-ui/core';

class Login extends React.Component {
  state = {
    valueForm: []
  }

  submitForm(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      console.log(`You submitted:\n\n${this.state.valueForm}`);
      window.location.href = '/app';
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Register';
    const description = brand.desc;
    const { classes } = this.props;
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
          <Grid container spacing={3} alignItems="center" direction="row" justify="center">
            <Grid item container justify="center" spacing={0} className={classes.loginWrap}>
              <Hidden smDown>
                <Grid item md={6} className={classes.welcomeWrap}>
                  {/* Welcome Login */}
                  <div className={classes.welcome}>
                    <div className={classes.welcomeContent}>
                      <div className={classes.brand}>
                        <img src={logo} alt={brand.name} />
                        <h3>{brand.name}</h3>
                      </div>
                      <Typography variant="h4">
                        <span className={Type.light}>Nice to meet You :)</span>
                      </Typography>
                    </div>
                    <ArrowForward className={classes.decoBottom} />
                  </div>
                </Grid>
              </Hidden>
              <Grid item md={6} sm={8} xs={11}>
                {/* ----------------------------------------------------------------------*/}
                {/* Load Register Form */}
                <RegisterForm onSubmit={(values) => this.submitForm(values)} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
