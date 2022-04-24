import { alpha, darken } from '@material-ui/core/styles';
const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: 'rgba(0,0,0,0)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $menuButton': {
      color: theme.palette.primary.light,
      boxShadow: 'none',
      zIndex: 10,
    },
    '&$left': {
      '& $headerTitle': {
        left: theme.spacing(2),
      }
    },
  },
  attachedbar: {
    position: 'relative',
    '& $menuButton': {
      margin: 0
    },
    '& $wrapper': {
      [theme.breakpoints.down('lg')]: {
        border: `1px solid ${theme.palette.divider}`
      },
    }
  },
  floatingBar: {
    position: 'fixed'
  },
  appMenu: {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(0.5)}px 0`,
    },
    [theme.breakpoints.up('lg')]: {
      background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.primary.light,
    },
    color: theme.palette.text.primary
  },
  flex: {
    flex: 1,
    textAlign: 'right'
  },
  flexDefault: {
    flex: 1,
    textAlign: 'right'
  },
  left: {},
  leftBig: {},
  right: {},
  appBarShift: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&$left': {
      [theme.breakpoints.up('lg')]: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        paddingLeft: 0
      },
    },
    '& $headerAction': {
      marginLeft: theme.spacing(1)
    },
    '& $menuButton': {
      marginLeft: 0
    }
  },
  menuButton: {
    marginLeft: theme.spacing(2)
  },
  hide: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dark: {},
  light: {},
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: theme.rounded.small,
    display: 'inline-block',
    '&:hover': {
      background: alpha(theme.palette.common.white, 0.25),
    },
    '&$light': {
      background: alpha(theme.palette.common.white, 0.2),
    },
    '&$dark': {
      background: theme.palette.type === 'dark' ? theme.palette.grey[700] : alpha(theme.palette.common.white, 0.8),
      boxShadow: theme.shade.light,
      '& input': {
        color: theme.palette.grey[700],
      },
      '& input::placeholder': {
        color: theme.palette.grey[400],
        opacity: 1 /* Firefox */
      },
      '& input:-ms-input-placeholder': {
        color: theme.palette.grey[400],
      },
      '& input::-ms-input-placeholder': { /* Internet Explorer 10-11 */
        color: theme.palette.grey[400],
      }
    },
    '& $miniInput': {
      width: 70
    },
  },
  searchWrapper: {
    flex: 1,
    textAlign: 'right'
  },
  search: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  miniInput: {
    paddingLeft: 0,
    textIndent: '999999px'
  },
  solidBg: {},
  fixed: {
    position: 'fixed',
    left: 0,
    top: 0,
    boxShadow: 'none !important',
    [theme.breakpoints.up('lg')]: {
      top: theme.spacing(1) * -8,
    }
  },
  separatorV: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    height: 20,
    margin: '0 10px',
    opacity: 0.4
  },
  separatorVInvert: {
    borderLeft: `1px solid ${theme.palette.type === 'dark' ? theme.palette.grey[300] : theme.palette.grey[700]}`,
    height: 20,
    margin: '0 10px',
    opacity: 0.4
  },
  notifMenu: {
    '& li': {
      height: 'auto',
      '& h3': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    }
  },
  badgeMenu: {
    '& span': {
      top: 0,
      right: -30
    }
  },
  textNotif: {
    '& span': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block'
    }
  },
  notifIcon: {
    '& i': {
      width: 28,
      height: 28,
      fontSize: 28
    },
    '&$dark': {
      '& i': {
        color: theme.palette.text.primary,
      }
    },
    '&$light': {
      '& i': {
        color: theme.palette.common.white,
      }
    },
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px 0px 5px',
    flex: 1,
    height: 64,
    position: 'relative',
    width: '100%',
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    '& img': {
      marginRight: 10,
      width: 30
    },
  },
  mainMenu: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
    boxShadow: theme.shadows[3],
    position: 'relative',
    transition: 'padding 0.3s ease',
    '& > div': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  headMenu: {
    fontSize: 12,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px ${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
    minHeight: 'auto',
    margin: `0 ${theme.spacing(0.5)}px`,
    lineHeight: '2em'
  },
  opened: {
    color: theme.palette.primary.main,
    boxShadow: `inset 0 0 0 1px ${theme.palette.primary.main}`,
    '& svg': {
      fill: theme.palette.primary.main,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(0.5),
    opacity: 0.3
  },
  selected: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    '&:hover': {
      background: theme.palette.primary.main,
    },
    '& svg': {
      fill: theme.palette.primary.light,
    },
    '& $rightIcon': {
      opacity: 0.7
    }
  },
  paperMenu: {
    overflow: 'auto',
    maxHeight: 500
  },
  popperClose: {
    pointerEvents: 'none',
    zIndex: 2
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontWeight: 'bold',
    background: theme.palette.background.paper,
    borderRadius: theme.rounded.medium
  },
  dropDownMenu: {
    minWidth: 300,
    marginTop: theme.spacing(1.5),
    position: 'relative'
  },
  active: {},
  menuItem: {
    '& span': {
      fontSize: 14,
    },
    '&$active': {
      borderLeft: `5px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light,
      '& span': {
        color: theme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light,
      }
    }
  },
  megaMenu: {
    '& $title': {
      paddingLeft: theme.spacing(2)
    }
  },
  megaItem: {
    display: 'inline-block',
    width: 'auto',
    margin: theme.spacing(1),
    borderRadius: theme.rounded.big,
    padding: `${theme.spacing(0.25)}px ${theme.spacing(1)}px`,
    '& span': {
      fontSize: 14,
    },
    '& div': {
      padding: 0
    },
    '&$active': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light,
      '& span': {
        color: theme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light,
      }
    }
  },
  bigIcon: {
    display: 'block',
    margin: theme.spacing(5, 0),
    '& > span': {
      fontSize: 100,
      color: theme.palette.primary.main,
      margin: '0 auto',
      display: 'inherit'
    }
  },
  button: {},
  headerProperties: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1
  },
  invert: {},
  headerAction: {
    transition: 'opacity 0.5s ease',
    '& $button': {
      margin: `0 ${theme.spacing(1)}px / 2`,
      '& svg': {
        color: alpha(theme.palette.common.white, 0.87),
        width: 28,
        height: 28,
        fontSize: 28,
      }
    },
    '&$invert': {
      '& $button': {
        '& svg': {
          color: alpha(theme.palette.text.primary, 0.5),
        }
      }
    }
  },
  headerTitle: {
    transition: 'all 0.3s ease',
    fontSize: theme.spacing(3),
    position: 'absolute',
    textTransform: 'capitalize',
    fontWeight: 700,
    top: 60,
    color: theme.palette.common.white,
    opacity: 0,
  },
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  searchHeaderMenu: {
    flex: 1,
    flexDirection: 'row-reverse',
    display: 'flex',
    alignItems: 'center'
  },
  darker: {
    background: theme.palette.primary.dark,
    '&:after': {
      content: '""',
      left: -240,
      width: 'calc(100% + 240px)',
      position: 'absolute',
      bottom: -2,
      height: 1,
      background: '#000',
      filter: 'blur(3px)'
    }
  },
});

export default styles;
