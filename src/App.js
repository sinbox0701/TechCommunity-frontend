import React from 'react';
import { Route } from 'react-router-dom';


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


import Login from './page/beforeLogin';
import Home from './page/home';
import Perf from './page/performance';

export default function App() {
  return (
    <div>
      <Route exact path = "/" component={Login}/>
      <Route path = "/home" component={Home}/>
      <Route path = "/perf" component={Perf}/>
    </div>
  );
}
