import React from 'react';
import Button from '../../../../components/Button';
import styles from '../../listDishes.module.scss';

const Dish = (props) => {

  const {dish, index, deleteDish, editDishName } = props;

  return (
    <div className={styles['list-item']} key={index}>
      <p>{dish.name}</p>
      <p>{dish.versions.length}</p>
      <div>
        <Button title="Edit" onClick={() => editDishName(dish)}/>
        <Button title="Delete" onClick={() => deleteDish(dish.id)}/>
      </div>

    </div>
  )

}

export default Dish;