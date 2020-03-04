import React from 'react';
import styles from './button.module.css'

const Button = ({label, onClick, type}) => {
return (<button  className={styles[type]} onClick={onClick}>{label}</button>  );
}
 
export default Button;