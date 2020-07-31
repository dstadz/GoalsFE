import React from 'react'
import { useRecoilValue } from 'recoil'
import moment from 'moment'
import { userState } from '../../utils/store'
import LifeBlocks from './LifeBlocks'
import { Side } from '../../styles'






const SideBar = () => {
  console.log(userState)
  const { name, id, birthday, email }  = useRecoilValue(userState)

  //{id: 1, name: "clack Wayne", email: "Bmoney@bats.com", birth: "1982-06-25T07:00:00.000Z"}
  // const Birthday = moment(birthday)._i
  // console.log(moment().subtract(birthday))
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
