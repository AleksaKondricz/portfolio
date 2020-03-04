import React, {useState, useEffect} from 'react'
import {Link, animateScroll as scroll} from 'react-scroll';
import Slide from 'react-reveal/Slide';

import linksData from '../../constants/navLinks'

import styles from './header.module.css';

const Header = () => {
  const [headerClass, setHeaderClass] = useState('headerTop')
  const [mobileMenu, toggleMobileMenu] = useState(false)

  const listenScrollEvent = () => {
    if (window.pageYOffset >= 100) {
      const scrolled = setHeaderClass( 'headerScrolled')
      return JSON.stringify(scrolled)
    } 
    if(window.pageYOffset < 100) {
      const scrolledBack = setHeaderClass( 'headerTop')
      return JSON.stringify(scrolledBack)
    }
    }

    useEffect(()=>{
      window.addEventListener('scroll', listenScrollEvent);
     }, [])

return(
  <>
    <header className={styles[headerClass]}>
        <ul>
          {linksData.map(l => (<li><Link
                key={l.id}
                className={styles.mobLink}
                activeClass="active"
                to={l.id}
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}> {l.label}</Link></li>))}
        </ul>
    </header>
    <img src='images/menu.png' className={styles.hamburgerMenu} alt='Hamburger Menu' onClick={() => toggleMobileMenu(!mobileMenu)}/>
    {mobileMenu && (
       <>
       <Slide right>
       <div className={styles.closeButton} onClick={() => toggleMobileMenu(!mobileMenu)}> X </div>
       <div className={styles.mobMenu}>
       <ul>
          {linksData.map(l => (<li>
            <Link
                onClick={() => toggleMobileMenu(!mobileMenu)}
                key={l.id}
                className={styles.Link}
                activeClass="active"
                to={l.id}
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}> {l.label}
            </Link>
          </li>))}
        </ul>
       </div>
       </Slide>
      </>
    )}
    </>
   
)}

export default Header


