import React, {useState} from 'react';
import PropTypes from 'prop-types'

import styles from './textInput.module.css';


const TextInput = ({type, placeholder, name, label, value, onChange, useValidation, validator}) => {
    const[touched, toggleTouch] = useState(false)

    return (
    <label>
          {label}
          <input type={type} onBlur={()=>toggleTouch(true)}  placeholder={placeholder} name={name} value={value} onChange={onChange}/>
           {useValidation && touched && <p className={styles.error}>{!validator.test(value) ? 'error' : ''}</p>}
    </label>  );
}

TextInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    useValidation: PropTypes.bool,
    validator: PropTypes.string
  }
  
  TextInput.defaultProps = {
    placeholder: '',
    name: '',
    value: '',
    label: '',
    useValidation: false,
    validator: ''
  }
 
export default TextInput;