import React from 'react'

const HabitSlot = ({props}) => {
  const { id, habit, amount, freq } = props
  console.log(habit)
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => console.log('done')}
      />

      {habit}

      <button
      onClick={()=> //remove habit from list, reload card w/o reloading whole page
      }>X</button>
    </li>
  )
}

export default HabitSlot
