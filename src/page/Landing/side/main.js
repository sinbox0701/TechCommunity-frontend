import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {ButtonBase, Grid, Box} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import AddIcon from '@material-ui/icons/Add';

import OnProj from '../../../component/main/OnProj';
import OffProj from '../../../component/main/OffProj';
import Orders from '../../../component/main/Orders';


const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  content: {
    width:window.innerWidth+'px',
    minHeight:"1024",
    flexGrow: 1,
    overflowX: 'hidden',
    backgroundColor: "#ffffff"
  },

  container: {
    
    width:'100%',
    overflow: 'hidden',
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
    position:"absolute",
    right:0,
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
    height:180,
  },
  menuIcon:{
    backgroundColor:"#ffffff",
    color:"#6a6d74",
    boxShadow: "0 2px 14px -6px #a4a9b3"
  }
}));

export default function main(props) {
  const classes = styles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightSidePaper = clsx(classes.sidepaper, classes.fixedHeight);

  return (
    <div className={classes.root}>
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
              <Box className={classes.sidepaper} style={ {  border : '1px solid #e0e4ee' }}>
                <Calendar style={{height:180}}/> 
                <Box style={{ height:180 }}>
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
                <Box style={{height:60}}>
                  <Typography align="center" style={{
                      fontFamily: 'NotoSansCJKkr',
                      fontSize: 20,
                      fontWeight: 550,
                      fontStretch: 'normal',
                      fontStyle: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#232426',
                      height: 60, border : '1px solid #e0e4ee', paddingTop:16 } }>
                    메모
                  </Typography>
                </Box>
                <Box style={ { display:'flex', alignItems:'center',justifyItems:'center', height:180, border : '1px solid #e0e4ee' } }>
                  <ButtonBase className={classes.new} >
                    <AddIcon />
                      메모 추가
                  </ButtonBase>
                </Box>
              </Box>
              
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}