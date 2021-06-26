import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
  media: {
    height: 0.2,
    paddingTop: '60%',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  editBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'black',
    background: 'brown',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    color: 'black',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    background:'brown',
    width: '20%',
  },
});
