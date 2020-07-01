import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'

import AddHabitForm from './AddHabitForm'
import HabitSlot from './HabitSlot'
import { GoalCardContainer } from '../../styles'
import { goalListState, /*habitListState*/ } from '../../utils/store'


const goals = `http://localhost:8000/api/goals`
const habits = `http://localhost:8000/habits/`

const GoalCard = ({props}) => {
  const { id, goal, /*ongoing, start_date, goal_date */} = props
  const [open, setOpen] = useState(false)
  const [habitFormOpen, setHabitFormOpen] = useState(false)
  const [goalList, setGoalList] = useRecoilState(goalListState)
  const url = habits+id
  const [habitList, setHabitList] = useState([])

  const config = { headers: { access_control_allow_origin: '*' } }

  const [count, setCount] = useState(0)

  useEffect(() => {
    (async () => {
      await axios.get(url, config)
      .then(res => { setHabitList(res.data.data) })
      .catch(err => { console.log(err) })
    })();
  }, [open])

  const deleteGoal = () => {
    axios.delete(goals + `/${id}`)
    .then(() => { setGoalList(goalList.filter(g => g.id !== id)) })
    .catch(err => { console.log(err) })
  }


  return (
    <GoalCardContainer>
    <h4>{goal} #{id}</h4>
    <button onClick={()=> deleteGoal()} >X</button>

      {/*<p>{start_date} => {goal_date}</p> */}
      <div>

        {habitFormOpen
          ? <AddHabitForm setHabitFormOpen={setHabitFormOpen} goal_id={id} />
          : <button onClick={() => setHabitFormOpen(true)} > Add new habit </button>
        }

        <button onClick={()=> setOpen(!open)}
        style={{background:"none", border:'none'}} > { open ? '🔺' : '🔻' } </button>

        {open &&
        <ul>
          { habitList.map((h,i) => <HabitSlot props={h} key={i} goal_id={id}/> )}
        </ul>}
      </div>
    </GoalCardContainer>
  )
}

export default GoalCard
