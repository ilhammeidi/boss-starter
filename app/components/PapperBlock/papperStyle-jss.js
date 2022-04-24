import { lighten } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    '&$noMargin': {
      margin: 0
    },
  },
  descBlock: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    }
  },
  titleText: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  title: {
    marginBottom: theme.spacing(2),
    position: 'relative',
    paddingBottom: theme.spacing(1),
    textTransform: 'capitalize',
    fontSize: 24,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 40,
      borderBottom: `4px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.down('xs')]: {
        left: 'calc(50% - 20px)'
      }
    },
  },
  description: {
    maxWidth: 960,
    paddingTop: theme.spacing(0.5),
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  content: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: theme.rounded.medium,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2)
    }
  },
  whiteBg: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
  },
  noMargin: {},
  colorMode: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    '& $title': {
      color: theme.palette.grey[100],
      '&:after': {
        borderBottom: `5px solid ${theme.palette.primary.light}`
      }
    },
    '& $description': {
      color: theme.palette.grey[100],
    }
  },
  overflowX: {
    width: '100%',
    overflowX: 'auto',
  },
  iconTitle: {
    borderRadius: theme.rounded.small,
    background: theme.palette.type === 'dark' ? theme.palette.primary.main : lighten(theme.palette.primary.light, 0.5),
    width: 48,
    height: 48,
    textAlign: 'center',
    lineHeight: '44px',
    verticalAlign: 'middle',
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 28,
      verticalAlign: 'baseline',
      color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.primary.main
    }
  }
});

export default styles;
