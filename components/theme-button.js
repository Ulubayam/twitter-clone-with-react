import React from 'react'
import Button from './button'
import styles from './theme-button.module.css'
import cn from 'classnames'
function ThemeButton({ children, big = false, className, ...props }) {
  return (
    <Button
      type="button"
      className={cn(styles.button, big && styles.bigButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ThemeButton
