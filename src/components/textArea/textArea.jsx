import React from 'react';
import styles from './textArea.module.css';

const TextArea = ({type, placeholder, name, value, onChange}) => {
    return (
        <div className={styles.framedTextArea}>
         <img src='images/graphics.svg'/>
          <textarea type={type} name={name} value={value} onChange={onChange} rows={17} placeholder={placeholder}/>
          </div>
  );
}
 
export default TextArea;