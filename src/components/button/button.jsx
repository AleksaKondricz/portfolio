import React from 'react';
import PropTypes from 'prop-types'
import styles from './button.module.css'

const Button = ({label, onClick, type}) => {
return (<button  className={styles[type]} onClick={onClick}>{label}</button>  );
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string
}
Button.defaultProps = {
    label: '',
    type: 'primary'
}
 
export default Button;