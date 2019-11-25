import React from 'react';
import LogoImg from '../../images/GitFoodLogo.png';
import styles from './logo.module.scss';

const Logo = () => {
  return(
    <img 
      src={ LogoImg }
      className={ styles.logo }
      alt="Git Food Logo"  />
  )
}

export default Logo;