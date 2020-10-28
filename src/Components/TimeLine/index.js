import React from 'react'
// import { useRecoilValue } from 'recoil'
// import moment from 'moment'
// import { userState } from '../../utils/store'
import MemoizedLifeBlocks from './LifeBlocks'
import { Top } from '../../styles'

const TimeLine = () => {
  return (
    <Top>
      {/* <h3> Your Life Here:</h3> */}
      <MemoizedLifeBlocks />
    </Top>
  )
}

export default TimeLine
