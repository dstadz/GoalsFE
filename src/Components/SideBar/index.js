import React from 'react'
import { useRecoilValue } from 'recoil'
import moment from 'moment'
import { userState } from '../../utils/store'
import LifeBlocks from './LifeBlocks'
import { Side } from '../../styles'






const SideBar = () => {
  const { name, id, birthday, email }  = useRecoilValue(userState)

  return (
    <Side>
      <div> above nav things </div>
      <nav> nav stuff </nav>
      <h3> Hey { name }! You have {100} years until you 'retire' </h3>
      <LifeBlocks />
    </Side>
  )
}

export default SideBar
