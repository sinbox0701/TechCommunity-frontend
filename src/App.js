import React,{Component} from 'react';
import {  BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';


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

import Nav from './component/Nav';
import LoginForm from './component/home/LoginForm';
import SignupForm from './component/home/SignupForm';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/Tech/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
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
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/Tech/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }
    console.log(this.state.displayed_form)
    console.log(localStorage.getItem('token'))
    console.log(this.state.logged_in)
    return (
           <div className="App">
        {form}
          <BrowserRouter>
          {this.state.logged_in
            ? <WrappedLoggedInRoutes />
            : <WrappedLoggedOutRoutes />}
            </BrowserRouter>
           </div>
    );
  }
}

export default App;

const LoggedInRoutes = (props) => (
      <Switch key={props.location.key}>
       <Route path = "/home" component={Home}/>
        <Route path = "/perf" component={Perf}/>
        <Redirect from={'*'} to={'/home'} />
      </Switch>
);

const WrappedLoggedInRoutes = withRouter(LoggedInRoutes);


const LoggedOutRoutes = (props) => (
      <Switch key={props.location.key}>
        <Route exact path = "/" component={Login}/>
      </Switch>
);

const WrappedLoggedOutRoutes = withRouter(LoggedOutRoutes);

// export default function App() {
//   return (
//     <div>
//       <Route exact path = "/" component={Login}/>
//       <Route path = "/home" component={Home}/>
//       <Route path = "/perf" component={Perf}/>
//     </div>
//   );
//}
