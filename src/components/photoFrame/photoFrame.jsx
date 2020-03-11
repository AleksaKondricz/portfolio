import React from 'react'
import styles from './photoFrame.module.css'

import {OptImage} from '../components'

const PhotoFrame = () => {
    return (
        <>
        <figure className={ styles.frame }>
            <OptImage className={styles.portraitImage} imageKey="aleksaKondricz.webp" alt='Developer portrait'/>
        </figure>
        <div className={styles.darkCircle}></div>
        </>
    );
}

export default PhotoFrame;
