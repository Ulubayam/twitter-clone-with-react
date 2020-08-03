import React from 'react'
import CONST from '../constants'

import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
  const size = useWindowSize()
  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>{JSON.stringify(size)}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>right</Extra>}
    </Layout>
  )
}

export default HomePage
