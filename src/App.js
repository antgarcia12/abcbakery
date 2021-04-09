import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Other from './components/littleFooter';
import Home from './components/Home';
import Free from './components/Free';
import Flavors from './components/Flavors';
import Terms from './components/Terms';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/free" component={Free} />
          <Route path="/flavors" component={Flavors} />
          <Route path="/terms" component={Terms} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contactsection" component={ContactSection} />
        </Switch>

        <Contact />
        <Footer />
        <Other />
        <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
        />
      </div>
    </HashRouter>
  );
}

export default App;
