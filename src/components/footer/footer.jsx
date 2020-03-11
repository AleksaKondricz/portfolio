import React from 'react'
import PropTypes from 'prop-types'

import styles from './footer.module.css'

const Footer = ({copyrightLabel}) => (
    <footer>
        <div className={styles.innerFooterBox}>
         <p>{copyrightLabel}</p>
        <nav className={styles.socialMediaNav}>
              <a id={styles.socialMediaIcon} href='https://www.linkedin.com/in/aleksandra-kondricz-a5589a13a/' target='_blank' rel="noopener noreferrer"><img src='images/ln.svg' alt='social media icon'/></a>
              <a id={styles.socialMediaIcon}  href='https://github.com/AleksaKondricz' target='_blank' rel="noopener noreferrer"><img src='images/gh.svg' alt='social media icon'/> </a>
              <a id={styles.socialMediaIcon} href='https://www.facebook.com/aleksandra.nikolovska.5'  target='_blank' rel="noopener noreferrer"><img src='images/fb.svg' alt='social media icon'/></a>
        </nav>
        </div>
    </footer>
)

Footer.propTypes = {
    copyrightLabel: PropTypes.string
}

Footer.defaultProps = {
    copyrightLabel: ''
}

export default Footer
