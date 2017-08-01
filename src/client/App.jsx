import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const App = () => (
  <div className="App">
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginPage} />
    <Route path="/dashboard" component={Dashboard} />
  </div>
);

export default App;
