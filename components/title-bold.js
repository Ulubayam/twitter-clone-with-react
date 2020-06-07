import React from 'react'
import styles from './title-bold.module.css'
import cn from 'classnames'
function TitleBold({ bold = true, children }) {
  return <h2 className={cn([styles.title, bold && styles.bold])}>{children}</h2>
}
export default TitleBold
