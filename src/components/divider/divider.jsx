import React from 'react'
import styles from './divider.module.css'

const Divider = ({label}) => {
    return (
    <div className={styles.divider}>
      <h3>{label}</h3>
    </div>  );
}
 
export default Divider;