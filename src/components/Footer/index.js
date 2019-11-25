import React from 'react';
import styles from './footer.module.scss';
import Heart from '../../images/heart.png';


const Footer = () => {
  return(
    <div className={styles.footer}>
      <img className={styles.img} src={ Heart } alt="" />
      <p>Made with good taste</p>
    </div>
  )
}

export default Footer;