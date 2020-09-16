import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AddHabitForm from '../Forms/AddHabitForm'
import HabitSlot from './HabitSlot'
import { GoalCardContainer } from '../../styles'
import EditGoalForm from '../Forms/EditGoalForm'


const GoalCard = ({props}) => {
  const { id, goal, target_date } = props
  const [form, setForm] = useState('')
  const [habitList, setHabitList] = useState([])

  //get specific habits for goal
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BE}/habits/all/${id}`)//, config)
      .then(res => { setHabitList(res.data) })
      .catch(err => { console.log(err) })
  }, [])

  const deleteGoal = () => {
    axios.delete(`${process.env.REACT_APP_BE}/goal/${id}`)//, config)
    .then(res => { console.log(res.data) })
    .catch(err => { console.log(err) })
  }

  const renderSwitch = form => {
    switch(form) {
      case 'add':
        return <AddHabitForm
          goal_id={id}
          setForm={setForm}
          habitList={habitList}
          setHabitList={setHabitList}
        />
      case 'edit':
        return <EditGoalForm
        id={id}
        goal={goal}
        setForm={setForm}
        target_date={target_date}
        />
      case 'delete':
        return <div>
          are you sure?
          <button onClick={()=> deleteGoal()}> remove it </button>
          <button onClick={() => setForm('')}> nvm </button>
        </div>
      default:
        return;
    }
  }

  // console.log(goal)

  return (
    <GoalCardContainer>
      <h3>{goal} {id}</h3>
      <span>By: {target_date}</span>
      <div>
        <button onClick={() => setForm('add')}> Add new habit </button>
        <button onClick={() => setForm('edit')} >Edit</button>
        <button onClick={() => setForm('delete')} >Delete</button>
    {/* <button onClick={() => { setForm('get')}} > See Habits </button> */}
      </div>

      {renderSwitch(form)}
      <ul> { habitList.map((h,i) => <HabitSlot props={h} key={i} goal_id={id}/> )} </ul>
    </GoalCardContainer>
  )
}

export default GoalCard
