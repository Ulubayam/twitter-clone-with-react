import React from 'react'

import TileBold from '../components/title-bold'

export default {
  title: 'Typography'
}
export const Title = () => (
  <div>
    <TileBold>Merhaba Dünya</TileBold>
    <TileBold bold={false}>Merhaba Dünya</TileBold>
  </div>
)
