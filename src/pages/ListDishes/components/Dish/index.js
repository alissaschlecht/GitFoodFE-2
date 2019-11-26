import React from 'react';
import Button from '../../../../components/Button';
import { Link } from "react-router-dom";
import styles from '../../listDishes.module.scss';

const Dish = (props) => {
  console.log('grandchild props', props);
  const {dish, index, deleteDish} = props;
  console.log('grandchild props', props);
  return (
    <div className={styles['list-item']} key={index}>
      <p>{dish.name}</p>
      <p>{dish.versions.length}</p>
      <div>
        <Link to={`/edit-dish/${dish.id}`}>
          <Button title="Edit" />
        </Link>
        <Button title="Delete" onClick={() => deleteDish(dish.id)}/>
      </div>

    </div>
  )

}

export default Dish;