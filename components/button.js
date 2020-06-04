import React from 'react'

import styles from './button.module.css'
function button({ children, ...props }) {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default button
