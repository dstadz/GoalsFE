import React from 'react'
// import { useRecoilValue } from 'recoil'
// import moment from 'moment'
// import { userState } from '../../utils/store'
import LifeBlocks from './LifeBlocks'
import { Top } from '../../styles'

const TimeLine = () => {
  return (
    <Top>
      {/* <h3> Your Life Here:</h3> */}
      <LifeBlocks />
    </Top>
  )
}

export default TimeLine
