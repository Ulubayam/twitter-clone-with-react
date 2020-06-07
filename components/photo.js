import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({
  src = 'https://yt3.ggpht.com/a-/AOh14GgZ86AHSWoMOSV99mmESSc4lW6YCkQUkkZp7cjpJQ=s88-c-k-c0xffffffff-no-rj-mo',
  alt
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={cn([styles.img])} src={src} alt={alt} />
    </div>
  )
}

export default Photo
