
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';

const isLogin = false;

function App() {
  return (
      <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
          <Route path="/login" render={() => isLogin ? <Redirect to="/"></Redirect> : <Login></Login>} ></Route>
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
