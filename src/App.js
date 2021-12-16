import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { HashRouter } from 'react-router-dom'
import { Nav, Home, About, Myport, Contact } from "./components"
import './App.css'
import Footer from './components/Footer'

const App=()=>{
  return(
    <HashRouter basename="/">
          <div className="app">
       <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/portfolio" exact component={() => <Myport />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        
        <Footer />
      </Router>
    </div>
    </HashRouter>
  )
}
export default App

