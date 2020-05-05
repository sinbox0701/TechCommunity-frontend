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

import { mainListItems, secondaryListItems } from './component/listItems';
import OnProj from './component/OnProj';
import OffProj from './component/OffProj';
import Orders from './component/Orders';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    color : "#a3a3a3",
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
    height: '100vh',
    overflow: 'auto',
    backgroundColor: "#ffffff"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
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

  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
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
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* 진행중인 공연 */}
              <Grid item xs={12} md={8} lg={9}>
                <Box className={fixedHeightPaper}>
                  <OnProj />
                </Box>
              </Grid>
              {/* calendar */}
              <Grid item xs={12} md={4} lg={3}>
                <Box className={classes.paper}>
                  <Calendar/>
                </Box>
              </Grid>
              {/* 나의 업무 */}
              <Grid item xs={12} md={8} lg={9}>
                <Box className={classes.paper}>
                  <Orders />
                </Box>
              </Grid>
              {/* 메모 */}
              <Grid item xs={12} md={4} lg={3}>
                <Box className={fixedHeightPaper}>
                  <Typography>
                    메모
                  </Typography>
                  <ButtonBase className={classes.new}>
                    <AddIcon />
                    새로운 공연
                  </ButtonBase>
                </Box>
              </Grid>
              {/* 종료된 공연 */}
              <Grid item xs={12} md={8} lg={9}>
                <Box className={classes.paper}>
                  <OffProj />
                </Box>
              </Grid>
            </Grid>

            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
}

export default App;
