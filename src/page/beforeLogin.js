import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Typography, Link, ButtonBase, Box} from '@material-ui/core';

import LoginForm from '../component/home/loginForm'

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
  const classes = useStyles();
  return (
        <React.Fragment>
            <div className={classes.root}>
                <Box className= {classes.loginBox}>
                    <LoginForm/> 
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