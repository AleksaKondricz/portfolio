import React from 'react'
import styles from './footer.module.css'

const Footer = ({copyrightLabel}) => (
    <footer>
        <div className={styles.innerFooterBox}>
<p>{copyrightLabel}</p>
        <nav className={styles.socialMediaNav}>
              <a id={styles.socialMediaIcon} href='https://www.linkedin.com/in/aleksandra-kondricz-a5589a13a/' target='_blank'><img src='images/ln.svg'/></a>
              <a id={styles.socialMediaIcon}  href='https://github.com/AleksaKondricz' target='_blank'><img src='images/gh.svg'/> </a>
              <a id={styles.socialMediaIcon} href='https://www.facebook.com/aleksandra.nikolovska.5'  target='_blank'><img src='images/fb.svg'/></a>
        </nav>
        </div>
    </footer>
)

export default Footer
