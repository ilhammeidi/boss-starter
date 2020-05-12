const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    display: 'block',
    margin: `${theme.spacing(2)}px 0`,
    background: 'none'
  },
  sliderWrap: {
    position: 'relative',
    display: 'block',
    boxShadow: theme.shadows[1],
    width: '100%',
    borderRadius: 4
  },
  dividerMini: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: 'none'
  },
  noPadding: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    [theme.breakpoints.up('sm')]: {
      padding: '0 !important'
    }
  }
});

export default styles;
