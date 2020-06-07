import React from 'react'
import MenuButton from './menu-button'
import TitleBold from './title-bold'
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
function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <MenuButton>
        <Twitter />
      </MenuButton>

      <MenuButton selected={selectedKey === 'home'}>
        <Home />
        <TitleBold>Home</TitleBold>
      </MenuButton>

      <MenuButton selected={selectedKey === 'explore'}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </MenuButton>

      <MenuButton notify={17} selected={selectedKey === 'notification'}>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </MenuButton>

      <MenuButton selected={selectedKey === 'messages'}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </MenuButton>

      <MenuButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </MenuButton>

      <MenuButton selected={selectedKey === 'lists'}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </MenuButton>

      <MenuButton selected={selectedKey === 'profile'}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </MenuButton>

      <MenuButton selected={selectedKey === 'more'}>
        <More />
        <TitleBold>More</TitleBold>
      </MenuButton>
    </nav>
  )
}

export default Navigation
