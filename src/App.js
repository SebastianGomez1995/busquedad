import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Notes from './components/Notes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/notas" component={Notes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;