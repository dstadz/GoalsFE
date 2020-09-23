import React from 'react'

import { HabitSlotContainer } from '../../styles'

const HabitSlot = ({props}) => {
  const {habit, amount, freq, /*goal_id, id*/ } = props

  return (
    <HabitSlotContainer>
      <input type="checkbox"
        onClick={() => console.log('done')}
      />
      <span> {habit} </span>

      <button onClick={()=>
        console.log(`//remove habit from list, reload card w/o reloading whole page`)
      }>X</button>


      <br />
      <span> { /*pulled from habithistory */0} of {amount} done this {freq} </span>
    </HabitSlotContainer>
  )
}

export default HabitSlot
