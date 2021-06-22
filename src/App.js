import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Register from './components/Register';
import Home from './Home'
import Header from './layout/Header'



function RegisterUser() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}

export default RegisterUser;
