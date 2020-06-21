import React, { useState } from 'react'

import { GoalCardContainer } from '../../styles'
const GoalCard = ({props}) => {
  const { id, user_id, goal, ongoing, start_date, goal_date } = props
  const [habitList, setHabitList]  = useState([])

  return (
    <GoalCardContainer>
      <h4>{goal}</h4>
      <p>{start_date} => {goal_date}</p>
      <ul>


      <li>
        <input id='checkbox'
        type="checkbox"
        value={ongoing}
        onClick={() => console.log('done')}
        />do push ups
        </li>


      </ul>
      <button> Add new habit </button>
    </GoalCardContainer>
  )
}

export default GoalCard
