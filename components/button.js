import React from 'react'

import styles from './button.module.css'
import cn from 'classnames'
function button({ children, className, ...props }) {
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

export default button
