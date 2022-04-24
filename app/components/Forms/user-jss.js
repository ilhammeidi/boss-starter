import { alpha } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
const rootWraper = {
  display: 'flex',
  width: '100%',
  zIndex: 1,
  position: 'relative'
};

const wrapper = (theme, opacity) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: alpha(theme.palette.background.paper, opacity),
  backgroundRepeat: 'no-repeat',
  color: theme.palette.text.primary,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
});

const styles = theme => ({
  root: {
    ...rootWraper
  },
  rootFull: {
    ...rootWraper,
    height: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
  },
  containerSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
  },
  loginWrap: {
    [theme.breakpoints.up('md')]: {
      width: 860
    },
  },
  paperWrap: {
    ...wrapper(theme, 1),
  },
  sideWrap: {
    ...wrapper(theme, 1),
    height: '100%',
    borderRadius: 0,
    [theme.breakpoints.up('md')]: {
      width: 480,
    },
    '& $topBar': {
      marginBottom: theme.spacing(4)
    }
  },
  fullWrap: {
    ...wrapper(theme, 0.9),
    height: '100%',
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& $topBar': {
      width: '100%'
    }
  },
  icon: {},
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    '& $icon': {
      marginRight: theme.spacing(1)
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginBottom: theme.spacing(3),
      '& a': {
        display: 'none'
      }
    }
  },
  outer: {},
  brand: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    fontSize: 16,
    fontWeight: 500,
    marginBottom: theme.spacing(3),
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&$outer': {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2),
      justifyContent: 'center'
    },
    '& img': {
      width: 30,
      marginRight: 10,
    },
    '& h3': {
      fontSize: 18,
      margin: 0,
      paddingLeft: 10,
      fontWeight: 500,
      color: theme.palette.text.secondary
    }
  },
  formWrap: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    }
  },
  pageFormWrap: {
    width: '100%',
    margin: `${theme.spacing(2)}px auto`,
    [theme.breakpoints.up('sm')]: {
      width: 480,
    },
  },
  pageFormSideWrap: {
    margin: '0 auto',
    [theme.breakpoints.only('sm')]: {
      width: 480,
    },
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(3)
  },
  socmedLogin: {
    [theme.breakpoints.up('sm')]: {
      padding: '24px 60px 1px',
    },
    '& button': {
      padding: '4px 24px'
    }
  },
  socmedSideLogin: {
    padding: '24px 24px 1px',
    margin: '0 auto',
    '& button': {
      padding: '4px 16px',
      margin: `0 ${theme.spacing(1)}px`
    },
    [theme.breakpoints.only('sm')]: {
      width: 480,
    },
  },
  socmedBtnArea: {
    maxWidth: 400,
    margin: '0 auto'
  },
  userFormWrap: {
    width: '94%',
    [theme.breakpoints.up('md')]: {
      width: 640
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    },
  },
  sideFormWrap: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  fullFormWrap: {
    height: '100%',
    width: '100%'
  },
  title: {
    color: theme.palette.primary.main,
  },
  subtitle: {
    fontSize: 14
  },
  titleColor: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.55em'
    }
  },
  opening: {
    color: theme.palette.common.white,
    width: '100%',
    textAlign: 'center',
    '& h1': {
      display: 'block',
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      }
    },
    '& p': {
      color: theme.palette.common.white,
      fontSize: 18,
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
      }
    }
  },
  label: {},
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    fontSize: 12,
    '& $label': {
      fontSize: 12,
      '& span': {
        fontSize: 12
      }
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& button': {
        width: '100%',
        margin: 5
      }
    },
  },
  noMargin: {
    margin: 0
  },
  redBtn: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  blueBtn: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
    '&:hover': {
      backgroundColor: indigo[700],
    },
  },
  cyanBtn: {
    color: theme.palette.getContrastText(cyan[700]),
    backgroundColor: cyan[500],
    '&:hover': {
      backgroundColor: cyan[700],
    },
  },
  buttonLink: {
    background: 'none',
    padding: 0,
    textTransform: 'none',
    transition: 'color ease 0.3s',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '0.875rem',
    '&:hover': {
      background: 'none',
      color: theme.palette.secondary.main
    }
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  footer: {
    textAlign: 'center',
    padding: 5,
    background: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100],
    fontSize: 14,
    position: 'relative',
    marginTop: theme.spacing(2)
  },
  welcomeWrap: {
    position: 'relative',
    height: '100%'
  },
  welcome: {
    background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    width: '100%',
    height: '100%',
    padding: '20px 50px',
    left: 2,
    position: 'relative',
    boxShadow: theme.shadows[5],
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    top: -10,
    [theme.breakpoints.down('md')]: {
      top: -24
    }
  },
  tab: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(1)}px`,
  },
  link: {
    fontSize: '0.875rem',
    display: 'block',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  socmedFull: {
    textAlign: 'center',
    width: '100%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      '& button': {
        width: 400,
      }
    }
  },
  lockWrap: {
    textAlign: 'center',
    padding: theme.spacing(3)
  },
  unlockBtn: {
    top: -4
  },
  avatar: {
    width: 150,
    height: 150,
    margin: '5px auto 30px',
    [theme.breakpoints.up('md')]: {
      margin: '-75px auto 30px',
    },
    boxShadow: theme.shadows[8]
  },
  userName: {
    marginBottom: theme.spacing(3)
  },
  hint: {
    padding: theme.spacing(1)
  },
  brandCenter: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  },
  decoBottom: {
    fontSize: 480,
    position: 'absolute',
    left: 10,
    bottom: -190,
    opacity: 0.1,
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  },
  centerAdornment: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    '& > div': {
      width: '100%'
    },
    '& aside': {
      top: -10,
      [theme.breakpoints.up('sm')]: {
        left: 10,
      },
      position: 'relative'
    },
    '& a i': {
      width: 32,
      height: 32
    }
  },
  centerV: {
    justifyContent: 'center'
  },
  optArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& label': {
      marginRight: 4,
      '& span': {
        fontSize: 14,
      }
    }
  },
});

export default styles;
