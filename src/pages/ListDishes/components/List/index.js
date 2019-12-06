import React from 'react';
import Dish from '../Dish';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../../../components/Button';
import Logo from '../../../../components/Logo';
import styles from '../../listDishes.module.scss';

const List = (props) => {

  const { dishes, deleteDish, editDishName } = props;
  
  return (
    <div className={styles['list-container']}>
      { dishes
        ? <Container>
            <Row>
              <Col><h5>Name</h5></Col>
              <Col><h5>Version</h5></Col>
              <Col><h5>Actions</h5></Col>
            </Row>
            {dishes.map( (dish, index) => 
              <Dish 
                dish={dish} 
                key={index}  
                deleteDish={deleteDish} 
                editDishName={editDishName} />
            )}
          </Container>
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