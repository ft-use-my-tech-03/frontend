import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Register from './components/Register';
import Home from './components/Home'
import Header from './layout/Header'
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TechForm from './components/TechForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Header /> */}
      <Switch>
      <PrivateRoute path="/techform" component={TechForm} />
        <Route path="/register" component={Register}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
