import React from 'react'
import Button from '../components/button'
import MenuButton from '../components/menu-button'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TitleBold from '../components/title-bold'

export default {
  title: 'Buttons'
}
export const Normal = () => <Button>Normal</Button>
export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Big Button
    </ThemeButton>
  </Stack>
)

export const Menu = () => (
  <MenuButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </MenuButton>
)
export const Nav = () => <Navigation selectedKey="home" />
