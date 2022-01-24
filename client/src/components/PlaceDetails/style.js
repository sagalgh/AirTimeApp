import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '3px',
    fontSize: 19,
    fontWeight: 900,
    '&:hover': { boxShadow: '-2px 2px 7px 1px rgba(2,22,92,0.43)' },
  },
  subtitle: {
    display: 'flex',
    padding: '5px',
    marginTop: '10px',
    fontSize: 25,
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '5px',
    fontSize: 25,
  },
}));
