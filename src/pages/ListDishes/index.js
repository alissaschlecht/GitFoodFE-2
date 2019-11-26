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
      value: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ dishes: json.dishes, isLoading: false }));
  }

  onChange = (e) => {
    this.setState({ value: e.target.value.toLowerCase() });
  }

  deleteDish = (id) => {
    //TODO: add fetch method to delete
    console.log(`${url}/${id}`);
  }

  render() {
    
    const { dishes, value, isLoading } = this.state;

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
          : <List
              deleteDish={this.deleteDish}
              dishes={ value === '' 
              ? dishes 
              : dishes.filter(dish => dish.name.toLowerCase().includes(value))} />
        }

      </div>
    )
      
  }
}

export default ListDishes;