import React from 'react'
import Button from './button'
import styles from './menu-button.module.css'
function MenuButton({ children }) {
  return (
    <Button type="button" className={styles.menuButton}>
      {children}
    </Button>
  )
}

export default MenuButton
