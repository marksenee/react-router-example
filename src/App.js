
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/profile/:id" exact component={Profile}></Route>
          <Route path="/about" exact component={About}></Route>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
