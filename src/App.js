import React from 'react';
import { Route } from 'react-router-dom';

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
