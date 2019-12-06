import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../../../components/Button';
import styles from '../../listDishes.module.scss';


const Dish = (props) => {

  const {dish, index, deleteDish, editDishName } = props;

  return (
    <Row className={styles['list-item']} key={index}>
      <Col><Link to={`/dish/${dish.id}`}>{dish.name}</Link></Col>
      <Col><p>{dish.versions.length}</p></Col>
      <Col>
        <Button title="Edit" variant="secondary" onClick={() => editDishName(dish)}/>
        <Button title="Delete" variant="danger" onClick={() => deleteDish(dish.id)}/>
      </Col>
    </Row>
  )

}

export default Dish;