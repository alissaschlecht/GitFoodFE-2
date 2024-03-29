import React from 'react';
import styles from './label.module.scss';
import { Label as SULabel } from 'semantic-ui-react';

const Label = (props) => {

  const { content } = props;

  return (
    <SULabel className={styles.className}>{content}</SULabel>
  )

}

export default Label;