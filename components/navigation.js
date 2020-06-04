import React from 'react'
import MenuButton from './menu-button'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'
import styles from './navigation.module.css'
function Navigation() {
  return (
    <nav className={styles.nav}>
      <MenuButton>
        <Twitter />
      </MenuButton>
      <MenuButton>
        <Home />
        <span>Home</span>
      </MenuButton>
      <MenuButton>
        <Explore />
        <span>Explore</span>
      </MenuButton>

      <MenuButton>
        <Notification />
        <span>Notification</span>
      </MenuButton>

      <MenuButton>
        <Messages />
        <span>Messages</span>
      </MenuButton>

      <MenuButton>
        <Bookmark />
        <span>Bookmark</span>
      </MenuButton>

      <MenuButton>
        <Lists />
        <span>Lists</span>
      </MenuButton>

      <MenuButton>
        <Profile />
        <span>Profile</span>
      </MenuButton>

      <MenuButton>
        <More />
        <span>More</span>
      </MenuButton>
    </nav>
  )
}

export default Navigation
