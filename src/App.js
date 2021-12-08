
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';

function App() {
  return (
      <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
          <Route path="/profile/:id" component={Profile}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
