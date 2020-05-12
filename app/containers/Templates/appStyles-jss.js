import bg from 'ba-images/material_bg.svg';
import { fade } from '@material-ui/core/styles/colorManipulator';

const appFrame = {
  display: 'flex',
  width: '100%',
  minHeight: '100%',
  zIndex: 1,
};

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  },
  appFrameInner: {
    ...appFrame,
    flexDirection: 'row'
  },
  appFrameOuter: {
    ...appFrame,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing(1.5),
    paddingLeft: 0,
    minHeight: '100%',
    overflow: 'hidden',
  },
  outerContent: {
    background: `url(${bg}) no-repeat ${theme.palette.primary.main} left bottom`,
    width: '100%',
    backgroundSize: 'cover',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '20px 0'
    },
  },
  bgbar: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    position: 'fixed',
    height: 184,
    top: 0,
    left: 0
  },
  mainWrap: {
    position: 'relative',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(1.5),
    height: '100%',
    '& > div': {
      paddingBottom: theme.spacing(4),
      willChange: 'inherit !important' // hack for floating form issue whne expaded
    }
  },
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    background: 'transparent',
    height: 3,
  },
  materialBg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    opacity: 0.5
  },
  contentPadding: {
    paddingLeft: 80
  },
  hideApp: {
    display: 'none'
  },
  circularProgress: {
    position: 'absolute',
    top: 'calc(50% - 100px)',
    left: 'calc(50% - 100px)',
  },
  brand: {
    height: 54,
    display: 'flex',
    padding: '10px 10px 5px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: 20
    },
    '& h3': {
      margin: 0,
      fontSize: 16,
      fontWeight: 500,
      paddingLeft: 10,
      color: theme.palette.common.white,
    }
  },
  btn: {},
  icon: {},
  btnPicker: {
    position: 'fixed',
    zIndex: 2000,
    right: 0,
    top: 200,
    background: fade(theme.palette.background.paper, 0.8),
    borderRadius: '30px 0 0 30px',
    padding: '4px 8px 4px 4px',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.grey[300]}`,
    '& $btn': {
      background: theme.palette.secondary.main,
      borderRadius: 30,
      padding: 8,
      boxShadow: theme.shadows[4],
      display: 'flex',
      alignItems: 'center',
      width: 40,
      height: 40,
      textCenter: 'cener',
      overflow: 'hidden',
      color: 'transparent',
      transition: 'all 0.3s ease',
      '& $icon': {
        color: theme.palette.background.paper,
      },
      '&:hover': {
        color: theme.palette.background.paper,
        width: 90
      }
    }
  }
});

export default styles;
