import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { GoalCardContainer } from '../../styles'


const goals = `http://localhost:8000/api/goals`
const habits = `http://localhost:8000/api/habits`


const softHabitList = [{
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
  const { id, goal, ongoing, start_date, goal_date } = props
  const [habitList, setHabitList]  = useState(habits)


  useEffect(() => {
    axios.get(goals)
    .then(res => { console.log(res.data) })
    .catch(err => { console.log(err) })
  }, [habitList])

  //console.log(habitList)

  const handleAddHabit = e => {
    e.preventDefault();
    console.log(goal)
    setHabitList(habitList)


  }

  const deleteGoal = () => {
    console.log(`delete goal ${id}`)
    console.log(goals + `/${id}`)
    axios.delete(goals + `/${id}`)
    .then(res => { console.log(res.data) })
    .catch(err => { console.log(err) })
  }

  return (
    <GoalCardContainer>
      <h4>{goal}</h4>
      <button onClick={()=> deleteGoal()} >X</button>

      {/*<p>{start_date} => {goal_date}</p> */}
      <ul>
        {softHabitList
          .filter(h => h.goal_id === id)
          .map(l =>
            <li key={l.id}>
              <input
                type="checkbox"
                value={ongoing}
                onClick={() => console.log('done')}
              />
            {l.habit}</li>
        )}
      </ul>

      <button
        onClick={handleAddHabit}
      > Add new habit </button>

    </GoalCardContainer>
  )
}

export default GoalCard
