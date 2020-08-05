import React, { useState, useEffect } from 'react'
// import { useRecoilState } from 'recoil'
import axios from 'axios'

import AddHabitForm from './AddHabitForm'
import HabitSlot from './HabitSlot'
import { GoalCardContainer } from '../../styles'
// import { goalListState, habitListState } from '../../utils/store'
import EditGoalForm from './EditGoalForm'


const GoalCard = ({props}) => {
  const { id, goal,  start_date, target_date } = props
  const [form, setForm] = useState('')

  const [habitList, setHabitList] = useState([])

  //get specific habits for goal
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BE}/habits/all/${id}`)//, config)
      .then(res => { setHabitList(res.data) })
      .catch(err => { console.log(err) })
  }, [id])

  const renderSwitch = form => {
    switch(form) {
      case 'add':
        return <AddHabitForm setForm={setForm} goal_id={id} setHabitList={setHabitList} habitList={habitList} />
      case 'edit':
        return <EditGoalForm setForm={setForm} goal={goal} id={id} target_date={target_date} />
      case 'delete':
        break
      //   return <ul> { habitList.map((h,i) => <HabitSlot props={h} key={i} goal_id={id}/> )} </ul>
      default:
        return;
    }
  }

  // console.log(goal)

  return (
    <GoalCardContainer>
      <h3>{goal} {start_date}</h3>
      <div>
        <button onClick={() => setForm('add')}> Add new habit </button>
        <button onClick={() => setForm('edit')} >Edit</button>
        <button onClick={() => setForm('delete')} >Delete</button>
    {/* <button onClick={() => { setForm('get')}} > See Habits </button> */}
      </div>

      {/*<p>{start_date} => {target_date}</p> */}
      {renderSwitch(form)}
      {console.log(habitList)}
      <ul> { habitList.map((h,i) => <HabitSlot props={h} key={i} goal_id={id}/> )} </ul>
    </GoalCardContainer>
  )
}

export default GoalCard
