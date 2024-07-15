import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import RaiseGrievance from './pages/RaiseGrievance';
import MyDocument from './pages/MyDocument';
import GrievanceStatus from './pages/GrievanceStatus';
import HelpSupport from './pages/HelpSupport';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/raise-grievance" component={RaiseGrievance} />
      <Route path="/my-document" component={MyDocument} />
      <Route path="/grievance-status" component={GrievanceStatus} />
      <Route path="/help-support" component={HelpSupport} />
    </Switch>
  </Router>
);

export default App;
