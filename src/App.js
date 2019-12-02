import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListDishes from './pages/ListDishes';
import AddDish from './pages/AddDish';
import Dish from './pages/Dish';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ListDishes} />
        <Route exact path="/add-dish" component={AddDish} />
        <Route exact path="/dish/:id"component={Dish} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
