import React from 'react';
import './App.css';

import Home from './pages/Home';
import Designs from './pages/Designs';
import ModernDesign from './pages/ModernDesign';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path="/" component ={Home}/>
      
      <Route exact path="/designs/"  component ={Designs}/>
      
      <Route exact path="/designs/:slug" component ={ModernDesign}/>

      <Route exact path="/contact" component ={Contact}/>
      
      <Route component={Error}/>
    </Switch>
    </div>
  );
}

export default App;
