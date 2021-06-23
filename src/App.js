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
import Dashboard from './components/Dashboard';
import EditTech from './components/EditTech';
import './App.css'

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      {/* <Header /> */}
      <Switch>
      <PrivateRoute path="/techform" component={TechForm} />
      <PrivateRoute path="/edittech/:id" component={EditTech} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
