import React, { useState } from 'react'

import { GoalCardContainer } from '../../styles'




const habits = [{
  id: 1,
  goal_id: 1,
  habit: 'Apply to jobs',
  frequency_num: 5,
  frequncy_den: 'weekly'
},{
  id: 2,
  goal_id: 1,
  habit: 'work on project',
  frequency_num: 1,
  frequncy_den: 'daily'
},{
  id: 3,
  goal_id: 2,
  habit: 'do push-ups',
  frequency_num: 5,
  frequncy_den: 'weekly'
},{
  id: 4,
  goal_id: 2,
  habit: 'go for a run',
  frequency_num: 1,
  frequncy_den: 'weekly'
},{
  id: 5,
  goal_id: 3,
  habit: 'live a life',
  frequency_num: 1,
  frequncy_den: 'daily'
},{
  id: 6,
  goal_id: 3,
  habit: 'use this app',
  frequency_num: 1,
  frequncy_den: 'weekly'
}]


const GoalCard = ({props}) => {
  const { id, user_id, goal, ongoing, start_date, goal_date } = props
  const [habitList, setHabitList]  = useState([])

  return (
    <GoalCardContainer>
      <h4>{goal} {id}</h4>
      <p>{start_date} => {goal_date}</p>
      <ul>
        {habits
          .filter(h => h.goal_id === id)
          .map(l =>
            <li>
              <input id='checkbox'
              type="checkbox"
              value={ongoing}
              onClick={() => console.log('done')}
              />{l.habit}
            </li>
          )}


      </ul>
      <button> Add new habit </button>
    </GoalCardContainer>
  )
}

export default GoalCard
