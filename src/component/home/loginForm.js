import React from 'react';
import {Button,ButtonBase, Box, TextField, Typography} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import LOGO from '../../assets/logo@3x.png'
import CSRFToken from "../csrftoken";

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
  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = React.useState({
      username:"",
      password:""
  });
  const {username,password} = inputs;

  const onChange = (e) =>{
      const {name,value} = e.target;
      setInputs({
          ...inputs,
          [name]:value
      });
  };
   const onSubmit = (e) =>{
      e.preventDefault();
       const post = {
           username:username,
           password:password
    };
    console.log(post);
    fetch('http://127.0.0.1:8000/Tech/login/',{
         method: "POST",
         headers:{
             'content-type' : 'application/json'
         },
         body: JSON.stringify(post)
     }).then(res => res.json).then(data => console.log(data));
    //setOpen(false);
  };


  return (
    <div className={classes.root}>
        <Box>
            <Box className={classes.img}>
                <img style={{ marginTop:"15%", marginLeft:"30%", width:"40%", height:"40%"}} src={LOGO} alt={"logo"}/> 
            </Box>
        </Box>

        <Box style={{display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
            <CSRFToken/>
            <TextField
                variant="outlined"
                style={{fontSize:20,marginTop:28,backgroundColor:"#ffffff", width:320, height:44}}
                name="username"
                value={username}
                onChange={onChange}
            >
                
            </TextField>
            <CSRFToken/>
            <TextField
                variant="outlined"
                style={{fontSize:20,marginTop:28,backgroundColor:"#ffffff", width:320, height:44}}
                name="password"
                value={password}
                onChange={onChange}
            >
                
            </TextField>
        </Box>

        <Box style={{display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
            <form onSubmit={onSubmit}>
                <CSRFToken/>
            <ButtonBase style={{marginTop:12, backcolor:"a4a9b3", width:320, height:44}} type='submit'>
              <Typography>
                로그인
              </Typography>
            </ButtonBase>
            </form>
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