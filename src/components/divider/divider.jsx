import React from 'react'
import PropTypes from 'prop-types'
import styles from './divider.module.css'

const Divider = ({label}) => {
    return (
    <div className={styles.divider}>
      <h3>{label}</h3>
    </div>  );
}

Divider.propTypes = {
  label: PropTypes.string
}

Divider.defaultProps = {
  label: ''
}

export default Divider;