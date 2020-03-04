import React from 'react'
import styles from './card.module.css'

const Card = ({id, onClick, title, stylingProp, imageSrc}) => {
    return (
      <div onClick={onClick} className={styles.cardWrapper}>
      <div className={stylingProp === 'yellow' ? styles.cardOrnamentYellow : stylingProp === 'red' ? styles.cardOrnamentRed : styles.cardOrnamentBlack  }></div>
    <card className={styles.styledCard}>
      <img src={imageSrc}/>
      <div className={styles.cardContent}>
          <h4>{title}</h4>
      </div>
    </card> 
    </div> );
}
 
export default Card;