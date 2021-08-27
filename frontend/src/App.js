import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Classes from './components/pages/Classes/Classes'
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/classes' exact component={Classes}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;