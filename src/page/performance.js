import React from "react"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase, Grid, ListItem,CssBaseline,Drawer,Box,AppBar,Toolbar,List,Typography,Divider,IconButton,Badge,Link,Avatar,Chip} from '@material-ui/core';

import Process from './Landing/taskList';
import Context from './Landing/context';
import Main from './Landing/side/main';
import Files from './Landing/side/files';
import Members from './Landing/side/members';
import Temlpate from './Landing/side/template';
import Grabage from './Landing/side/garbage';


import ReplayIcon from '@material-ui/icons/Replay';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LayersIcon from '@material-ui/icons/Layers';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link component='a' color="inherit" href="https://www.kitech.re.kr/main/">
        KITECH
      </Link>{' & '}
      <Link component='a' color="inherit" href="https://www.uxidstudio.com/">
        UCID
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 180;

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: window.innerWidth ,
    minHeight: 1,
    maxHeight: window.innerHeight ,
    overflow: "hidden",
  },

  drawer: {
    backgroundColor:"#fbfcfe",
    flexGrow: 1,
    width:540,
  },
  
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: "#ffffff",
  },

  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: "#ffffff",
    ...theme.mixins.toolbar,
  },

  toolbarDiv:{
    mariginTop: "5%",
    height:"90%"
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    backgroundColor: "#cacfdb"
  },
  menuButtonHidden: {
    display: 'none',
  },

  title: {
    flexGrow: 1,
    color : "#232426",
    fontWeight : "Bold",
  },
  drawerPaper: {
    backgroundColor: '#f7f8fa',
    height: "100%",
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    backgroundColor: '#f7f8fa',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(9)
  },
  appBarSpacer: theme.mixins.toolbar,

  content: {
    height:"1024",
    flexGrow: 1,
    overflow: 'auto',
    backgroundColor: "#ffffff"
  },

  container: {
    marginTop:150,
    width:"auto",
    overflow: 'auto',
  },

  paper: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  sidepaper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fbfcfe'
  },

  schedheight:{
    height: 360,
  },
  memoheight:{
    height: 260,
  },
  fixedHeight: {
    height: 300,
  },
  new:{
    width:"100%",
    height:"100%",
  },
  menuIcon:{
    backgroundColor:"#ffffff",
    color:"#6a6d74",
    boxShadow: "0 2px 14px -6px #a4a9b3"
  },
  drawerSideColse:{height:'calc(100% - 64px)', top:65, left: drawerWidth ,overflow:"visible"},
  //drawerSideColse:{height:'calc(100% - 64px)', top:65, left: theme.spacing(9) ,overflow:"visible"},
}));

export default function App() {
  const classes = styles();
  const perfNum = (window.location.href.split("=?")[1]);
  const [open, setOpen] = React.useState(false);
  const [tasks,setTasks] = React.useState([]);
  
  const [sideopen, setSideopen] = React.useState(false);
  const [sidewidth, setSidewidth] = React.useState(72)

  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState([]);
  const [username, setUsername] = React.useState([]);

  const [sidetitle, setSidetitle] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleSelectSide = (event,s,stitle) => {
    console.log(event)
    setSidetitle(stitle)
    setSideopen(true);
  };
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightSidePaper = clsx(classes.sidepaper, classes.fixedHeight);

  React.useEffect(()=>{
    fetch(`http://127.0.0.1:8000/Tech/catask/${perfNum}`,{
         method:"GET",
         headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);

          setTitle(data[0].title);
          setTasks(data);
      })
  },[]);
  React.useEffect(()=>{

            fetch('http://localhost:8000/Tech/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            }).then(res => res.json()).then(json => {
              console.log(json)
              setUsername(json.username);
            });

    },[username]);
  React.useEffect(()=>{
    console.log(sidewidth)
    if(open === true){
      setSidewidth(180)
    }
    else{
      setSidewidth(72)
    }
  },[open]);

  const toggleDrawer = (s) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log(s);
    setSideopen(s);
  };

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" elevation={1} className={clsx(classes.appBar, open && classes.appBarShift)} >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" noWrap className={classes.title}>
              {title}             
            </Typography>

            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <Avatar className={classes.menuIcon}>
                  <NotificationsIcon />
                </Avatar>
              </Badge>
            </IconButton>

            <Divider variant="middle" orientation="vertical" flexItem />

            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography color="textSecondary" variant="button" noWrap>
              {username}
            </Typography>
        
            
            <Divider variant="middle" orientation="vertical" flexItem />

            <Chip
              variant="outlined"
              label="지식공유 플랫폼"
              color="primary"
              clickable
              component="a"
              href="https://video-platform-93f91.firebaseapp.com"
              icon={<ArrowForwardIosIcon/>}
            />

          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List style={{marginTop:5}}>
            <ListItem button component="a" href="/home"> 
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <ReplayIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="처음으로" style={{color:'#6a6d74'}}/>
            </ListItem>
            <ListItem button component="a" onClick={ (event) => handleSelectSide(event,0,"Team")} style={{marginTop:40}} > 
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <PeopleAltTwoToneIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Team" style={{color:'#6a6d74'}}/>
            </ListItem>
            <ListItem button component="a" onClick={ (event) => handleSelectSide(event,1,"Files")} >
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <FolderOpenRoundedIcon/>
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Files" style={{color:'#6a6d74'}}/>
            </ListItem>
            <ListItem button component="a" onClick={ (event) => handleSelectSide(event,2,"Template" )} >
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <LayersIcon/>
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Template" style={{color:'#6a6d74'}}/>
            </ListItem>
            <ListItem button component="a"  onClick={ (event) => handleSelectSide(event,3,"Recycle Bin")} >
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <DeleteForeverIcon/>
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Recycle Bin" style={{color:'#6a6d74'}}/>
            </ListItem>
          </List>
        </Drawer>
        
        <Drawer variant="temporary" anchor={"left"} open={sideopen} onClose={toggleDrawer(false)}
        elevation={5}
        PaperProps={{ style: { position: "absolute", overflow:"hidden"}}}
        BackdropProps={{ style: { position: "absolute"}}}
        style={{height:'calc(100% - 64px)', top:65, left: sidewidth ,overflow:"visible"}}
        >
            <Box className={classes.drawer}>
                <Grid container>
                    <Grid>
                        <Box style={{  borderBottom:'solid 1px #e3e7f0',backgroundColor: '#ffffff',
                            width:1080, height:56}}>
                                <Box>
                                    <Typography style={{  fontSize:25,  
                                                          fontWeight: 'bold',
                                                          fontStretch: 'normal',
                                                          fontStyle: 'normal',
                                                          lineHeight: 'normal',
                                                          letterSpacing: 0,
                                                          color: "#6a6d74", 
                                        marginLeft:20, marginTop:20 ,display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                                        {sidetitle} 
                                    </Typography>
                                </Box>
                        </Box>
                    </Grid>
                    
                    <Grid>
                        <Box style={{borderBottom:'solid 1px #e3e7f0', 
                            borderRight:'solid 1px #e3e7f0', backgroundColor: '#ffffff'
                            ,height:48}}>
                            
                        </Box>
                        <Box style={{  height:'auto'}}>
                            
                        </Box>
                        <Box style={{  backgroundColor: '#ffffff',
                            borderTop:'solid 1px #e3e7f0', 
                            borderBottom:'solid 1px #e3e7f0', 
                            position: 'absolute', width:540, height:100, right:0,bottom:0}}>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
          </Drawer>

        <Box className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <div>
          <Router>
            <Switch>
              <Route path={"/perf"} component={Process}/> 
            </Switch>
          </Router>
          </div>

          <Box className={classes.container}>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Box>
        </Box>
        
      </Box>
    </React.Fragment>
  );
}

