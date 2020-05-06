import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import ButtonBase from '@material-ui/core/ButtonBase';
import AddIcon from '@material-ui/icons/Add';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { mainListItems } from './component/listItems';
import OnProj from './component/OnProj';
import OffProj from './component/OffProj';
import Orders from './component/Orders';

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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minWidth: 1340,
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
    backgroundColor: "#c9c9c9",
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
    backgroundColor: "#d3d3d3"
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color : "#6a6d74",
    fontWeight : "Bold",
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    overflow: 'auto',
    backgroundColor: "#ffffff"
  },

  container: {
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
}));


function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightSidePaper = clsx(classes.sidepaper, classes.fixedHeight);

  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} >
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
              협업지원플랫폼
            </Typography>

            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <PeopleAltTwoToneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Divider variant="middle" orientation="vertical" flexItem />

            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography color="textSecondary" variant="button" noWrap>
              사용자명
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
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Box className={classes.container}>
            <Grid container >
              {/* 진행중인 공연 */}
              <Grid item xs={9}>
                <Box className={fixedHeightPaper}>
                  <OnProj />
                </Box>
                <Box className={fixedHeightPaper}>
                  <Orders />
                </Box>
                <Box className={fixedHeightPaper}>
                  <OffProj />
                </Box>
              </Grid>
              
              {/* calendar */}
              <Grid item xs={3}>
                <Box className={classes.sidepaper} style={ { border : '1px solid #e0e4ee' }}>
                  <Calendar className={classes.new}/>  
                  <Typography>
                    다가오는 일정
                  </Typography>
                  <Typography>
                    일정1
                  </Typography>
                  <Typography>
                    일정1
                  </Typography>
                </Box>
                <Box>
                  <Typography align="center" style={ {fontSize:25, height: 40, border : '1px solid #e0e4ee' } }>
                    메모
                  </Typography>
                </Box>
                <Box className={fixedHeightSidePaper} style={ { border : '1px solid #e0e4ee' } }>
                  <ButtonBase className={classes.new} >
                    <AddIcon />
                    메모 추가
                  </ButtonBase>
                </Box>
              </Grid>
            </Grid>

            <Box pt={4}>
              <Copyright />
            </Box>
          </Box>
        </main>
      </div>
    );
}

export default App;
