import React, { useState, useEffect } from 'react'
// import { useRecoilState } from 'recoil'
import axios from 'axios'

import AddHabitForm from './AddHabitForm'
import HabitSlot from './HabitSlot'
import { GoalCardContainer } from '../../styles'
// import { goalListState, /*habitListState*/ } from '../../utils/store'
import EditGoalForm from './EditGoalForm'


const GoalCard = ({props}) => {
  const { id, goal,  start_date, target_date } = props
  const [form, setForm] = useState('')

  const [habitList, setHabitList] = useState([])

  //get specific habits for goal
  useEffect(() => {
    (async () => {
      await axios.get(`${process.env.REACT_APP_BE}/habits/all/${id}`)//, config)
      .then(res => { setHabitList(res.data)
      console.log(habitList)})
      .catch(err => { console.log(err) })
    })()
  }, [form])

  const renderSwitch = form => {
    switch(form) {
      case 'add':
        return <AddHabitForm setForm={setForm} goal_id={id} />
      case 'edit':
        return <EditGoalForm setForm={setForm} goal={goal} id={id} target_date={target_date}/>
      case 'delete':
      //   return <ul> { habitList.map((h,i) => <HabitSlot props={h} key={i} goal_id={id}/> )} </ul>
      default:
        return;
    }
  }

  return (
    <GoalCardContainer>
      <h4>{goal} {start_date}</h4>
      <div>
        <button onClick={() => setForm('delete')} >Delete</button>
        <button onClick={() => setForm('edit')} >Edit</button>
        {/*<button onClick={() => setForm('add')}> Add new habit </button> */}
        <button onClick={() => { setForm('get')}} > See Habits </button>
      </div>

      {/*<p>{start_date} => {target_date}</p> */}
      {renderSwitch(form)}
      <ul> { habitList.map((h,i) => <HabitSlot props={h} key={i} goal_id={id}/> )} </ul>
    </GoalCardContainer>
  )
}

export default GoalCard
