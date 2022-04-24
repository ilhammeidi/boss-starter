import { alpha } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';

const drawerWidth = 240;
const styles = theme => ({
  user: {
    justifyContent: 'center'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    border: 'none',
    background: 'none',
    color: theme.palette.text.primary,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

  },
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  opened: {
    '& $primary, & $icon': {
      color: theme.palette.primary.main,
    },
  },
  drawerPaperClose: {
    width: theme.spacing(8),
    position: 'absolute',
    overflow: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $user': {
      justifyContent: 'flex-start'
    },
    '& $bigAvatar': {
      width: 50,
      height: 50,
    },
    '& nav': {
      display: 'none'
    },
    '&:hover': {
      width: drawerWidth,
      background: theme.palette.background.default,
      boxShadow: theme.shadows[6],
      '& nav': {
        display: 'block'
      }
    },
    '& $brand': {
      opacity: 0,
      zIndex: -1
    },
    '& $profile': {
      flexDirection: 'row',
      top: theme.spacing(6),
      padding: theme.spacing(0.5),
      textAlign: 'left',
      '& button': {
        width: 'auto'
      }
    },
    '& $avatar': {
      marginRight: theme.spacing(3)
    },
    '& $menuContainer': {
      '&$menuContainer': {
        paddingBottom: 0,
      }
    },
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    position: 'fixed',
  },
  drawerInnerMobile: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    background: theme.palette.background.paper
  },
  drawerHeader: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
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
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(4),
    '& > div > span': {
      fontSize: 14
    }
  },
  child: {
    '& a': {
      paddingLeft: theme.spacing(6),
    }
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    paddingLeft: theme.spacing(4),
    marginTop: theme.spacing(2),
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontWeight: 'bold'
  },
  dense: {
    paddingLeft: theme.spacing(1.5),
    '& > $title:first-child': {
      margin: '0'
    },
    '& $head': {
      paddingLeft: theme.spacing(4),
      '& > div > span': {
        fontSize: 14
      }
    }
  },
  active: {
    backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.primary.main, 0.24) : theme.palette.primary.light,
    '& $primary': {
      color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.primary.dark,
    },
    '& $icon': {
      color: theme.palette.primary.dark,
    },
    '&:hover, &:focus': {
      backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.primary.main, 0.24) : theme.palette.primary.light,
    }
  },
  nolist: {
    listStyle: 'none',
  },
  primary: {
    whiteSpace: 'nowrap'
  },
  icon: {
    minWidth: 36,
    fontSize: 24
  },
  iconed: {},
  head: {
    margin: `${theme.spacing(1)}px 0`,
    borderRadius: `0 ${theme.spacing(3)}px ${theme.spacing(3)}px 0`,
    padding: theme.spacing(1),
  },
  headCapital: {
    position: 'relative',
    textTransform: 'uppercase',
    borderRadius: theme.spacing(1),
    '& span': {
      fontSize: 14
    }
  },
  copyright: {
    color: theme.palette.text.secondary,
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    position: 'fixed',
    bottom: 0,
    [theme.breakpoints.up('lg')]: {
      background: 'none',
      position: 'absolute',
    },
    left: theme.spacing(3),
    lineHeight: '24px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px 5px',
    height: 64,
    position: 'relative',
    textDecoration: 'none',
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    color: theme.palette.common.white,
    '& img': {
      width: 20,
      marginRight: 10,
    },
  },
  brandBig: {
    position: 'relative',
    textAlign: 'center',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '& img': {
      width: 24,
      marginRight: theme.spacing(1),
    },
    '& h3': {
      fontSize: 18,
      margin: theme.spacing(2, 0),
      fontWeight: 500,
      color: theme.palette.common.white,
    }
  },
  profile: {
    height: 115,
    width: '100%',
    display: 'flex',
    fontSize: 14,
    padding: 10,
    alignItems: 'center',
    zIndex: 0,
    '& h4': {
      fontSize: 18,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110
    },
    '& p': {
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 110,
      display: 'block',
      overflow: 'hidden',
      marginBottom: 0
    },
    '& button': {
      fontSize: 12,
      color: theme.palette.common.white,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 'auto',
      display: 'block',
      overflow: 'hidden',
      textTransform: 'capitalize',
      padding: theme.spacing(0, 0.5),
      minHeight: 20,
      marginTop: 4,
      '& span': {
        display: 'flex',
        justifyContent: 'flex-start'
      }
    }
  },
  statusMenu: {
    '& li': {
      width: 100
    }
  },
  dotStatus: {
    width: theme.spacing(1),
    height: theme.spacing(1),
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: theme.spacing(0.5)
  },
  online: {
    backgroundColor: lightGreen[500]
  },
  bussy: {
    backgroundColor: red[500]
  },
  idle: {
    backgroundColor: amber[500]
  },
  offline: {
    backgroundColor: grey[500]
  },
  rounded: {},
  landingNav: {},
  menuContainer: {
    overflow: 'auto',
    height: 'calc(100% - 192px)',
    width: drawerWidth,
    position: 'relative',
    display: 'block',
    padding: `${theme.spacing(1)}px 0`,
    '&$landingNav': {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(1),
      [theme.breakpoints.down('lg')]: {
        height: 'calc(100% - 164px)',
      }
    },
    '&$rounded': {
      paddingLeft: theme.spacing(2.5),
      '& > div': {
        paddingRight: theme.spacing(1)
      },
      '& a': {
        borderRadius: theme.rounded.small
      },
      '& $opened': {
        '&:before': {
          background: theme.palette.primary.main
        }
      }
    },
    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.4)',
      }
    },
    '& a:hover': {
      background: theme.palette.type === 'dark' ? 'rgba(80,80,80, 0.9)' : 'rgba(80,80,80, 0.1)'
    }
  },
  divider: {
    marginTop: theme.spacing(1)
  },
  badge: {
    height: 'auto'
  }
});

export default styles;
