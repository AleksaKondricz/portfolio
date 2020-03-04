import React from 'react'

import Slider from 'infinite-react-carousel';
import styles from './navSlider.module.css'

const NavSlider = ({children, updateCardContent}) => {
    return (
    <Slider  afterChange={index=>updateCardContent(index)} dots  centerPadding={100} arrows={false} swipe className={styles.navSlider}>
         {children}
    </Slider>  );
}
 
export default NavSlider;