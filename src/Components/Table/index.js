import React from 'react'

import GoalCard from './GoalCard'

const TableThing = () => {

  /*api call to get data
    goals, etc
  */

const goals = [{
  id: 1,
  user_id:1,
  goal:'Get a New Job',
  ongoing: false,
  start_date:'04/20/2020',
  goal_date:'ASAP'
},{
  id: 2,
  user_id:1,
  goal:'Get a 6-pack',
  ongoing: true,
  start_date:'06/01/2020',
  goal_date:'06/30/2020'
},{
  id: 3,
  user_id:1,
  goal:'Die happy',
  ongoing: '',
  start_date:'06/15/2020',
  goal_date:'01/01/2100'
}]

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
}]

const habitHistory = [{
  id:1,
  habit_id:1,
  date:'', //added when user completes as done, or end of day passes without check as false
  done: null
}]

  return (
    <table>
      <thead>
        <tr>
          <th>Things for today</th>
          <th>Things for tomorrow</th>
        </tr>
        <tr>
          {goals.map(g => ( <td> <GoalCard props={g} /> </td> )) }
        </tr>
      </thead>
    </table>
  )
}

export default TableThing
