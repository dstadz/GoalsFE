import React from 'react'

import LifeBlocks from './LifeBlocks'
import { Side } from '../../styles'

const SideBar = () => {
  return (
    <Side>
      <div>
        above nav things
      </div>
      <nav>
      nav stuff
      </nav>

      <LifeBlocks />
    </Side>
  )
}

export default SideBar
