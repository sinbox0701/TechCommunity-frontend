import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Typography, Link, ButtonBase, Box} from '@material-ui/core';

import LoginForm from '../component/home/LoginForm'

import BGIMG from '../assets/login-bg.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f7f8fa',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(10),
        },
    },
    loginBox:{
        marginTop:"8%",
        marginBottom:"8%",
        marginLeft:"20%",
        maxWidth: 360,
        height: "80%"
    },
    bgimgBox: {
        marginTop:"8%",
        marginBottom:"8%",
        width: 585,
        height: "80%"
    },
    img: {
        width:"100%",
        height:"100%"
    }
}));



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

export default function App() {
    const  [state, setState] = React.useState({
    logged_in: localStorage.getItem('token') ? true : false,
    username: '',
    password: ''
  });
    React.useEffect(()=>{
        if (state.logged_in) {
            fetch('http://localhost:8000/Tech/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            }).then(res => res.json()).then(json => {
            setState({ username: json.username });
            });
        }
    });
    const handle_login = (e, data) => {
    e.preventDefault();
     fetch('http://localhost:8000/api-token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
          console.log(json.user)

        localStorage.setItem('token', json.token);
        setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  const classes = useStyles();
  const form = <LoginForm handle_login={handle_login}/>;
  return (
        <React.Fragment>
            <div className={classes.root}>
                <Box className= {classes.loginBox}>
                    {form}
                </Box>
                <Box className= {classes.bgimgBox}>
                    <img src={BGIMG} alt={"logo"}/> 
                </Box>
            </div>
            <ButtonBase href="/home">
                로그인
            </ButtonBase>
            <Box className={classes.container}>
                <Box pt={4}>
                <Copyright />
                </Box>
            </Box>
        </React.Fragment>
     );
}