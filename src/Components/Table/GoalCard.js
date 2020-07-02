import React, { useState, useEffect } from 'react'
// import { useRecoilState } from 'recoil'
import axios from 'axios'

import AddHabitForm from './AddHabitForm'
import HabitSlot from './HabitSlot'
import { GoalCardContainer } from '../../styles'
// import { goalListState, /*habitListState*/ } from '../../utils/store'
import EditGoalForm from './EditGoalForm'

// const goals = `http://localhost:8000/api/goals`
const config = { headers: { access_control_allow_origin: '*' } }
const habits = `http://localhost:8000/habits/`

const GoalCard = ({props}) => {
  const { id, goal,  start_date, target_date } = props
  const [form, setForm] = useState('')
  const [listOpen, setListOpen] = useState(false)



  const [habitList, setHabitList] = useState([])


  //get specific habits for goal
  useEffect(() => {
    listOpen && !habitList.length && (async () => {
      await axios.get(habits+id, config)
      .then(res => { setHabitList(res.data.data) })
      .catch(err => { console.log(err) })
    })()
  }, [form, listOpen])


  const renderSwitch = form => {
    switch(form) {
      case 'foo':
        return 'bar'
      case 'add':
        return <AddHabitForm setForm={setForm} props={props} />
      case 'edit':
        return <EditGoalForm setForm={setForm} goal={goal} id={id} target_date={target_date}/>
      case 'get':
        return <ul> { habitList.map((h,i) => <HabitSlot props={h} key={i} goal_id={id}/> )} </ul>
      default:
        return;
    }
  }


  return (
    <GoalCardContainer>
    <h4>{goal} {start_date}</h4>
      <div>
      <button onClick={() => setForm('delete')} >X</button>
      <button onClick={() => setForm('edit')} >Edit</button>
      <button onClick={() => setForm('add')}> Add new habit </button>
      <button onClick={() => {
        setListOpen(true)
        setForm('get')}}
        > See Habits </button>
      </div>

      {/*<p>{start_date} => {target_date}</p> */}
      {renderSwitch(form)}
    </GoalCardContainer>
  )
}

export default GoalCard
