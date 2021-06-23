import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Register from './components/Register';
import Home from './Home'
import Header from './layout/Header'
import NavBar from './components/NavBar';


function RegisterUser() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register}/>
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
