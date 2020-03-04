import React from 'react'
import styles from './photoFrame.module.css'

const PhotoFrame = () => {
    return (
        <>
        <figure className={ styles.frame }>
            <img src='images/aleksaKondricz.jpg'/>
        </figure>
        <div className={styles.darkCircle}></div>
        </>
    );
}

export default PhotoFrame;
