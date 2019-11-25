import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import Search from '../../components/Search';
import List from './components/List';
import styles from './listDishes.module.scss';

const url = "https://git-food-api.herokuapp.com/api/dishes";

class ListDishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: null,
      filteredDishes: null,
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ dishes: json.dishes, filteredDishes: json.dishes, isLoading: false }));
  }

  onChange = (e) => {
    let value = e.target.value.toLowerCase();
    if(value) {
      let matchingDishes = this.state.dishes.filter(dish => dish.name.toLowerCase().includes(value));
      this.setState({ filteredDishes: matchingDishes });
    } else {
      this.setState({ filteredDishes: this.state.dishes });
    }

    

  }
  

  render() {
    
    const { dishes, filteredDishes, isLoading } = this.state;

    return(
      <div className={styles['list-dishes']}>

        <div className={styles['list-dishes-header']}>
          <h2>Alissa's Dishes</h2>
          <Link to="/add-dish">
            <Button title="Add Dish" />
          </Link>
        </div>

        <Search 
          type="text" 
          title="Search" 
          onChange={this.onChange} />

        { isLoading 
          ? <p>Loading...</p> 
          : <List dishes={filteredDishes} />
        }

      </div>
    )
      
  }
}

export default ListDishes;