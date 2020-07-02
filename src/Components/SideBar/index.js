import React from 'react'
import { useRecoilValue } from 'recoil'

import { userState } from '../../utils/store'
import LifeBlocks from './LifeBlocks'
import { Side } from '../../styles'






const SideBar = () => {
  const user = useRecoilValue(userState)
  const { name } = user
  //{id: 1, name: "clack Wayne", email: "Bmoney@bats.com", birth: "1982-06-25T07:00:00.000Z"}





  return (
    <Side>
      <div>
        above nav things
      </div>
      <nav>
      nav stuff
      </nav>
      Hey { name }
      You have {100} years until you 'retire'
      <LifeBlocks />
    </Side>
  )
}

export default SideBar
