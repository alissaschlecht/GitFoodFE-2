import React from 'react';
import Button from '../../../../components/Button';
import styles from '../../listDishes.module.scss';

const Dish = (props) => {

  const {dish, index} = props;
  console.log(dish);
  return (
    <div className={styles['list-item']} key={index}>
      <p>{dish.name}</p>
      <p>{dish.versions.length}</p>
      <div>
        <Button title="Edit" />
        <Button title="Delete" />
      </div>

    </div>
  )
}

export default Dish;