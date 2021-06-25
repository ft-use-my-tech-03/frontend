import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Details from './components/Details'
import Register from './components/Register';
import Home from './components/Home';
import Header from './layout/Header';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TechForm from './components/TechForm';
import PrivateRoute from './components/PrivateRoute';
import Products from './components/Products';
import EditTech from './components/EditTech';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <Router>
      <NavBar />
      {/* <Header /> */}
      <Switch>
      <PrivateRoute path="/edittech/:id" component={EditTech} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/techform" component={TechForm} />
        <Route path="/register" component={Register}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/details/:id" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products}/>
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
