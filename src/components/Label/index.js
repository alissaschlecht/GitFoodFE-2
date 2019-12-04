import React from 'react';
import styles from './label.module.scss';
import { Label as SULabel } from 'semantic-ui-react';

const Label = (props) => {

  const { title } = props;

  return (
    <SULabel className={styles.className}>{title}</SULabel>
  )

}

export default Label;