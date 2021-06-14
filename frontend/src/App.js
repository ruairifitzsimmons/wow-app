import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() { 

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;