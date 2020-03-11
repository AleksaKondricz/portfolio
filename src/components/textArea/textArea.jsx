import React from 'react';
import PropTypes from 'prop-types'

import styles from './textArea.module.css';

const TextArea = ({type, placeholder, name, value, onChange}) => {
    return (
        <div className={styles.framedTextArea}>
         <img src='images/graphics.svg' alt=''/>
          <textarea type={type} name={name} value={value} onChange={onChange} rows={17} placeholder={placeholder}/>
          </div>
  );
}

TextArea.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

TextArea.defaultProps = {
  placeholder: '',
  name: '',
  value: ''
}
export default TextArea;