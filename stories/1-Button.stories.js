import React from 'react'
import Button from '../components/button'
import MenuButton from '../components/menu-button'
import Navigation from '../components/navigation'

export default {
  title: 'Buttons'
}
export const Normal = () => <Button>Normal</Button>
export const Menu = () => <MenuButton>Menu</MenuButton>
export const Nav = () => <Navigation />
