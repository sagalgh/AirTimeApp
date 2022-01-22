import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '120px',
    transition: 'transform .2s',
    '&:hover': { transform: 'scale(1.2)' },
  },
  mapContainer: {
    height: '78vh',
    width: '60vw',
    marginRight: '0px',
    marginLeft: '22px',

    boxShadow: '-2px 2px 16px 2px rgba(0,0,0,0.25)',
    [theme.breakpoints.down('sm')]: {
      height: '80vh',
      marginTop: '20px',
      marginBottom: '20px',
      marginLeft: '22px',
      marginRight: '0px',
    },
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: { color: 'inherit' },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '40ch' },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  directions: {
    marginLeft: '30px',
  },

  appbar: {
    marginTop: '20px',
    width: '60vw',
    marginLeft: '22px',
  },
}));
