import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'

import AddHabitForm from './AddHabitForm'
import HabitSlot from './HabitSlot'
import { GoalCardContainer } from '../../styles'
import { goalListState } from '../../utils/store'


const goals = `http://localhost:8000/api/goals`
const habitListURL = `http://localhost:8000/api/habitList`


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
  const { id, goal, ongoing, /*start_date, goal_date */} = props
  const [habitList, setHabitList] = useState([softHabitList])
  const [goalList, setGoalList] = useRecoilState(goalListState)

  const [habitFormOpen, setHabitFormOpen] = useState(false)


  useEffect(() => {
    axios.get(habitListURL+`/${id}`)
    .then(res => { setHabitList(res.data.data) })
    .catch(err => { console.log(err) })
  }, [habitList.length])

  const deleteGoal = () => {
    axios.delete(goals + `/${id}`)
    .then(res => {
      console.log(res.data)
      //reload goal list
      setGoalList(goalList.filter(g => g.id !== id))
      console.log(goalList)
    })
    .catch(err => { console.log(err) })
  }

  return (
    <GoalCardContainer>
    <h4>{goal} #{id}</h4>
    <button onClick={()=> deleteGoal()} >X</button>

      {/*<p>{start_date} => {goal_date}</p> */}
      <ul>
        {habitList.map((h,i) => <HabitSlot props={h} key={i} /> )}
      </ul>
      { habitFormOpen
        ? <AddHabitForm setHabitFormOpen={setHabitFormOpen}/>
        : <button onClick={() => setHabitFormOpen(true)} > Add new habit </button>
      }
    </GoalCardContainer>
  )
}

export default GoalCard
