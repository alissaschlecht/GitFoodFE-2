import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListDishes from './pages/ListDishes';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ListDishes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
