import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Register from './components/Register';
import Home from './components/Home'
import Header from './layout/Header'
import NavBar from './components/NavBar';


function RegisterUser() {
  return (
    <Router>
      <NavBar />
      <Header />
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
  
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}

export default RegisterUser;
