import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListDishes from './pages/ListDishes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={ListDishes} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
