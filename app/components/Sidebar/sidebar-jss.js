const drawerWidth = 240;
const styles = theme => ({
  user: {
    justifyContent: 'center'
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    border: 'none',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  opened: {
    background: theme.palette.grey[200],
    '& $primary, & $icon': {
      color: theme.palette.secondary.dark,
    },
  },
  drawerInner: {
    height: '100%',
    position: 'fixed',
    width: drawerWidth,
  },
  drawerPaperClose: {
    width: 66,
    position: 'fixed',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $user': {
      justifyContent: 'flex-start'
    },
    '& $bigAvatar': {
      width: 40,
      height: 40,
    },
    '& li ul': {
      display: 'none'
    },
    '&:hover': {
      width: drawerWidth,
      boxShadow: theme.shadows[6],
      '& li ul': {
        display: 'block'
      }
    },
    '& $menuContainer': {
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
      width: drawerWidth,
    },
    '& $drawerInner': {
      width: 'auto'
    },
    '& $brandBar': {
      opacity: 0
    }
  },
  drawerHeader: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '0',
    ...theme.mixins.toolbar,
    '& h3': {
      color: theme.palette.primary.contrastText,
    }
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
  brandBar: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&:after': {
      transition: theme.transitions.create(['box-shadow'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },
  darker: {
    background: theme.palette.primary.dark,
  },
  nested: {
    paddingLeft: 0,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    '& > div > span': {
      fontSize: '0.8125rem'
    }
  },
  child: {
    '& a': {
      paddingLeft: theme.spacing(3),
    }
  },
  title: {},
  dense: {
    '& > $title:first-child': {
      margin: '0'
    },
    '& $head': {
      paddingLeft: theme.spacing(7)
    }
  },
  active: {
    backgroundColor: theme.palette.primary.light,
    '& $primary, & $icon': {
      color: theme.palette.secondary.dark,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    }
  },
  nolist: {
    listStyle: 'none',
  },
  primary: {},
  iconWrapper: {
    width: theme.spacing(5),
    minWidth: 0,
    marginRight: 0,
    marginLeft: theme.spacing(2)
  },
  icon: {
    marginRight: 0,
    color: theme.palette.secondary.dark,
  },
  head: {
    paddingLeft: 0
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px 5px',
    height: 64,
    position: 'relative',
    '& img': {
      width: 20
    },
    '& h3': {
      fontSize: 16,
      margin: 0,
      paddingLeft: 10,
      fontWeight: 500
    }
  },
  profile: {
    height: 120,
    display: 'flex',
    fontSize: 14,
    padding: 10,
    alignItems: 'center',
    '& h4': {
      fontSize: 18,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110
    },
    '& span': {
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 110,
      display: 'block',
      overflow: 'hidden'
    }
  },
  menuContainer: {
    padding: theme.spacing(1),
    background: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(1.5),
    },
    paddingRight: theme.spacing(1),
    overflow: 'auto',
    height: 'calc(100% - 185px)',
    position: 'relative',
    display: 'block'
  },
  divider: {
    marginTop: theme.spacing(1)
  }
});

export default styles;
