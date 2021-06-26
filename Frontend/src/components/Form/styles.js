import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.4),
    },
  },
  paper: {
    padding: theme.spacing(1),
    background: 'brown',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    background: 'white',
    justifyContent: 'center',
  },
  fileInput: {
    margin: '10px 0',
    fontSize: 'large',
    color: 'black',
    position: 'relative',
    float: 'left',
  },
  buttonSubmit: {
    marginBottom: 4,
    width: '30%',
    right: '10%',
    color: 'white',
    background: 'brown',
    fontSize: 'large',
    fontStyle: 'italic',
  },
}));