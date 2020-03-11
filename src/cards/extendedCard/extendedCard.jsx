import React from 'react'
import styles from './extendedCard.module.css'

const ExtendedCard = ({id, title, content, techStack, url}) => {
    return (
        <div key={id} className={styles.extendedCard }>
        <h3><mark className={styles.highlight}>{title}</mark></h3>
        <p>{content}</p>
        <h6>What technologies did I use? </h6>
        <p>{techStack}</p>
        <h6>Visit the site: </h6>
        <a target='_blank' rel="noopener noreferrer" id={styles.projectUrl} href={url}>{url}</a>
      </div>
      );
}
 
export default ExtendedCard;