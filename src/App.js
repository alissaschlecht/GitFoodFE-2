import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListDishes from './pages/ListDishes';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
        <Route path="/">
          <ListDishes />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
