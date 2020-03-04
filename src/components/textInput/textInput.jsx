import React, {useState} from 'react';
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
 
export default TextInput;