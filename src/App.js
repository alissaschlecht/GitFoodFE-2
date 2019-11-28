import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListDishes from './pages/ListDishes';
import addDish from './pages/addDish';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ListDishes} />
        <Route exact path="/add-dish" component={addDish} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
