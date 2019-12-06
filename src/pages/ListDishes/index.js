import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Search from '../../components/Search';
import List from './components/List';
import Modal from 'react-bootstrap/Modal';
import styles from './listDishes.module.scss';

const url = "https://git-food-api.herokuapp.com/api/dishes";

class ListDishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: null,
      searchValue: '',
      isLoading: false,
      modalIsOpen: false,
      editDish: {},
      newDishname: ''
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(url)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .then(json => this.setState({ dishes: json.dishes, isLoading: false }));
  }

  searchDishes = (e) => this.setState({ searchValue: e.target.value.toLowerCase() })

  deleteDish = id => {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    }).then(() => {
      const newArr = this.state.dishes.filter(dish => dish.id !== id );
      this.setState({ dishes: newArr });
    }).catch(err => {
      console.log(err);
    })
  }

  openModal = dish => this.setState({ modalIsOpen: true, editDish: dish })
  closeModal = () => this.setState({ modalIsOpen: false })

  editDishName = (e) => this.setState({ newDishname: e.target.value })

  updateDishName = () => {

    const updatedDish = this.state.editDish;
    updatedDish.name = this.state.newDishname;
    const dish = {
      'dish' : updatedDish
    }

    return fetch(`${url}/${this.state.editDish.id}`, {
      method: 'PUT',
      body: JSON.stringify(dish),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(this.setState({ modalIsOpen: false }))
    .catch(err => console.log(err));

  }

  render() {
    const { dishes, searchValue, isLoading, editDish, newDishname } = this.state;

    return(
      <div className={`container ${styles['list-dishes']}`}>

        <div className={styles['list-dishes-header']}>
          <h2>Alissa's Dishes</h2>
          <Link to="/add-dish">
            <Button variant="primary" title="Add Dish" />
          </Link>
        </div>

        <Search 
          type="text" 
          label="Search" 
          onChange={this.searchDishes} />

        { isLoading 
          ? <p>Loading...</p> 
          : <List
              editDishName={this.openModal}
              deleteDish={this.deleteDish}
              dishes={ searchValue === '' 
              ? dishes 
              : dishes.filter(dish => dish.name.toLowerCase().includes(searchValue))} />
        }

        <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit dish name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormField
              value={newDishname}
              label={`Update ${editDish.name}`}
              onChange={this.editDishName}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button 
              title="close" 
              variant="secondary" 
              onClick={this.closeModal} />
            <Button 
              title="Save changes"
              variant="primary" 
              onClick={this.updateDishName} />
          </Modal.Footer>
        </Modal>
      </div>
    )
      
  }
}

export default ListDishes;