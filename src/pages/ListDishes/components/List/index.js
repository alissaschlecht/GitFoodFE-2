import React from 'react';
import Dish from '../Dish';
import Button from '../../../../components/Button';
import Logo from '../../../../components/Logo';
import styles from '../../listDishes.module.scss';

const List = ({dishes}) => {

  return (
    <div className={styles['list-container']}>
      { dishes
        ? <>
          <div className={styles['list-labels']}>
            <h5>Name</h5>
            <h5>Version</h5>
            <h5>Actions</h5>
          </div>
          {dishes.map( (dish, index) => 
            <Dish dish={dish} key={index} />
          )}
          </>
        : <>
            <p>Looks like it's empty!</p>
            <Logo />
            <Button title="Add your first dish" />
          </>
      }
    </div>
  )

}

export default List;