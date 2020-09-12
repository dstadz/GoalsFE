import React from 'react'
// import { useRecoilValue } from 'recoil'
// import moment from 'moment'
// import { userState } from '../../utils/store'
import LifeBlocks from './LifeBlocks'
import { Side } from '../../styles'






const SideBar = () => {
  // const { name, id, birthday, email }  = useRecoilValue(userState)

  return (
    <Side>
      {/* <h3> Your Life Here:</h3> */}
      <LifeBlocks />
    </Side>
  )
}

export default SideBar
