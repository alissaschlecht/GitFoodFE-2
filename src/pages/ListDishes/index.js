import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Search from '../../components/Search';
import List from './components/List';
// import Modal from 'react-modal';
import { Modal, Header } from 'semantic-ui-react';
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
            <Button title="Add Dish" />
          </Link>
        </div>

        <Search 
          type="text" 
          title="Search" 
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

        <Modal
          open={this.state.modalIsOpen}
          onClose={this.closeModal}
          size='small'
          // isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          // onRequestClose={this.closeModal}
          // style={this.customStyles}
          // contentLabel="Example Modal"
        >
          <Header content='Edit dish name' />
          <Modal.Content>
            <form>
              <FormField
                label={`New name for ${editDish.name}`} 
                type="text" 
                placeholder={editDish.name} 
                value={newDishname} 
                onChange={this.editDishName} />

            </form>
          </Modal.Content>
          <Modal.Actions>
            <Button 
              title="Cancel" 
              onClick={this.closeModal} />
            <Button 
              title="Save" 
              onClick={this.updateDishName} />
          </Modal.Actions>

        </Modal>

      </div>
    )
      
  }
}

export default ListDishes;