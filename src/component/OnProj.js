import React from 'react';
import Popup from 'reactjs-popup'
import { makeStyles } from '@material-ui/core/styles';

import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';

import Title from './Title';
import { Divider } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    items: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(2),
        },
      },
  
    root: {
    width: 250,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  new:{
      width:"100%",
      height:"100%",
  },
  progress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },

  cardHead:{
      height: "60%"
  },

  menuItem:{
    fontSize:"15px",
      cursor: 'pointer',
    padding: '5px'
  },

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [completed, setCompleted] = React.useState(74);
  const [performance, setPerformance] = React.useState([]);
  const [value, setValue] = React.useState([]);
  //const [performance, setPerformance] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  // const [title, setTitle] = React.useState('');
  // const [genre, setGenre] = React.useState('');
  // const [concept, setConcept] = React.useState('');
  const [inputs, setInputs] = React.useState({
     title:"",
     genre:"",
     concept:""
  });
  const {title, genre, concept} = inputs;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onChange = (e) =>{
      const {name,value} = e.target;
      setInputs({
          ...inputs,
          [name]:value
      });
  };
   const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (e) =>{
      e.preventDefault();
       const post = {
        title: title,
        genre: genre,
        concept: concept
    };
    console.log(post);
    fetch('http://127.0.0.1:8000/Performance/add/',{
         method: "POST",
         headers:{
             'content-type' : 'application/json'
         },
         body: JSON.stringify(post)
     }).then(res => res.json).then(data => console.log(data));
    setOpen(false);
  };

  React.useEffect(()=>{
     fetch('http://127.0.0.1:8000/Performance')
         .then(response => response.json())
         .then(data => {
             console.log(data);
             setPerformance(data);
         })

  },[]);

  const handleChange = (event) => {
    setValue({value: event.target.value});
  };

  const handleSubmit = (event) =>{
    alert('A name was submitted: ' + setValue(value));
    event.preventDefault();
  }
return (
        <div>
            <Title>진행중인 공연</Title>
            <div className={classes.items}>
                {
                    performance === undefined ? "" :
                        performance.map(p => {
                            return (
                                <Card className={classes.root} key={p.id}>
                                    <CardHeader
                                        className={classes.cardHead}
                                        action={
                                            <IconButton aria-label="settings">
                                                    <Popup
                                                        trigger={<MoreVertIcon/>}
                                                        position="bottom center"
                                                        on="hover"
                                                         closeOnDocumentClick
                                                         mouseLeaveDelay={300}
                                                         mouseEnterDelay={0}
                                                        contentStyle={{ padding: "0px", border: "none",  width:"150%"}}
                                                        arrow={false}
                                                    >
                                                       <div className="menu">
                                                            <div className={classes.menuItem}> modify</div>
                                                            <div className={classes.menuItem}> delete</div>
                                                        </div>
                                                    </Popup>
                                            </IconButton>
                                        }
                                        title={p.title}
                                        subheader={p.genre}
                                    />
                                    <Divider />
                                    <CardContent className={classes.progress}>
                                        <Typography color="primary">{`${15}%`}</Typography>
                                        <LinearProgress variant="determinate" value={15} />
                                    </CardContent>
                                </Card>
                            );
                        })
                }
                <Card className={classes.root}>
                   <ButtonBase className={classes.new} onClick={handleClickOpen}>
                       <AddIcon/>
                       새로운 공연
                    </ButtonBase>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <form onSubmit={onSubmit}>
                    <DialogTitle id="form-dialog-title">Performance</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        공연 정보를 기입하세요
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="title"
                        name="title"
                        value={title}
                        onChange={onChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="genre"
                        label="Genre"
                        type="genre"
                        name="genre"
                        value={genre}
                        onChange={onChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="concept"
                        label="Concept"
                        type="concept"
                        name="concept"
                        value={concept}
                        onChange={onChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="story"
                        label="Story"
                        type="story"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="start"
                        label="시작일"
                        type="start"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="finish"
                        label="종료일"
                        type="finish"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button type="submit" color="primary">
                    Subscribe
                </Button>
                </DialogActions>
                 </form>
                </Dialog>
                </Card>
            </div>
        </div>
    );

}