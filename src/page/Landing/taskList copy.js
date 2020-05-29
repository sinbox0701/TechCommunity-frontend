import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const [category, setCategory] = React.useState([]);
  const [tasks,setTasks] = React.useState([]);

  const perfNum = (window.location.href.split("=?")[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(()=>{
    fetch(`http://127.0.0.1:8000/Tech/catask/${perfNum}`)
      .then(response => response.json())
      .then(data => {
          setTasks(data);
      })
  },[]);

  React.useEffect(()=>{
    Object.keys(tasks).map(
        id => {
            tasks.push
            tasks[id]
        }
    )

  },[tasks]);

  return (
    <div>
        {
            tasks.map( (t,index) => {
                <Button key={index} variant="outlined" color="primary" onClick={handleClickOpen}>
                    {t}
                </Button>          
            }
            )
        }
      <Dialog style={{ paper: {height: '100%',maxHeight: '200vh'} }}
      open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar elevation={0} className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}