import React from 'react'
import Button from '../components/button'
import MenuButton from '../components/menu-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TitleBold from '../components/title-bold'

export default {
  title: 'Buttons'
}
export const Normal = () => <Button>Normal</Button>
export const Menu = () => (
  <MenuButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </MenuButton>
)
export const Nav = () => <Navigation selectedKey="home" />
