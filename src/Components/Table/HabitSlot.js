import React from 'react'

import { HabitSlotContainer } from '../../styles'

const HabitSlot = ({props}) => {
  const { id, habit, amount, freq } = props
  return (
    <HabitSlotContainer>
      <input type="checkbox"
        onClick={() => console.log('done')}
      />

      {habit}

      <button onClick={()=>
        console.log(`//remove habit from list, reload card w/o reloading whole page`)
      }>X</button>

      <br />

      { /*pulled from habithistory */} of {amount} done this {freq}
    </HabitSlotContainer>
  )
}

export default HabitSlot
