import React, { useState } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Other from './components/littleFooter';
import Home from './components/Home';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contactsection" component={ContactSection} />
        </Switch>

        <Contact />
        <Footer />
        <Other />
      </div>
    </HashRouter>
  );
}

export default App;
