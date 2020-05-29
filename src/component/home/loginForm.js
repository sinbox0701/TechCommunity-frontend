import React from 'react';
import {Button,ButtonBase, Box, TextField, Typography} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import LOGO from '../../assets/logo@3x.png'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#ffffff",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
    },

    img: {
        marginTop: "30%"
    },

    textFeild: {
        width: "100%"
    },

    buttonBox: {
      width: "100%"

    },
    loginButton: {
      width: 320,
      height: 44,
      border: "solid 1px #e3e7f0",
      borderRadius: 5,
      backgroundColor:"#a4a9b3",
      color:"#a4a9b3"
    },
    googleButton: {
      width: 320,
      height: 36,
      border: "solid 1px #e3e7f0",
      backgroundColor: "#ffffff",
      borderRadius: 5,
    },
    button: {
      width: "100%",
      height: "100%",
    }
  },

}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Box>
            <Box className={classes.img}>
                <img style={{ marginTop:"15%", marginLeft:"30%", width:"40%", height:"40%"}} src={LOGO} alt={"logo"}/> 
            </Box>
        </Box>

        <Box style={{display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
            <TextField variant="outlined" style={{fontSize:20,marginTop:28,backgroundColor:"#ffffff", width:320, height:44}}>
                
            </TextField>
            <TextField variant="outlined" style={{fontSize:20,marginTop:28,backgroundColor:"#ffffff", width:320, height:44}}>
                
            </TextField>
        </Box>

        <Box style={{display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
            <ButtonBase style={{marginTop:12, backcolor:"a4a9b3", width:320, height:44}}>
              <Typography>
                로그인
              </Typography>
            </ButtonBase>
            <Typography style={{marginTop:12}}>또는</Typography>
            <ButtonBase style={{marginTop:12,marginBottom:16,color:"a4a9b3", width:320, height:44}}>
              <Typography>
                Google로 로그인
              </Typography>
            </ButtonBase>
        </Box>

        <ButtonGroup variant="text" color="primary" aria-label="text primary button group"
        style={{border:"solid 1px #e3e7f0", width:350}}>
              <Button style={{width:"33%"}}>아이디 찾기</Button>
              <Button style={{width:"33%"}}>비밀번호 찾기</Button>
              <Button style={{width:"33%"}}>회원가입</Button>
        </ButtonGroup>
    </div>
  );
}