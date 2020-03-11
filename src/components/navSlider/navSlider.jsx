import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'infinite-react-carousel';

import styles from './navSlider.module.css'

const NavSlider = ({children, updateCardContent}) => {
    return (
    <Slider  afterChange={index=>updateCardContent(index)} dots  centerPadding={100} arrows={false} swipe className={styles.navSlider}>
         {children}
    </Slider>  );
}

NavSlider.propTypes = {
    children: PropTypes.object,
    updateCardContent: PropTypes.func.isRequired
}

NavSlider.defaultProps = {
    children: {}
}
 
export default NavSlider;