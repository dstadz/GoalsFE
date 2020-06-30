import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'

import AddHabitForm from './AddHabitForm'
import HabitSlot from './HabitSlot'
import { GoalCardContainer } from '../../styles'
import { goalListState, habitListState } from '../../utils/store'


const goals = `http://localhost:8000/api/goals`
const habits = `http://localhost:8000/api/habits/`

const GoalCard = ({props}) => {
  const { id, goal, /*ongoing, start_date, goal_date */} = props
  const [habitList, setHabitList] = useState([])
  const [url, setUrl] = useState(habits)
  const [open, setOpen] = useState(true)

  const [goalList, setGoalList] = useRecoilState(goalListState)
  // const [habitList, setHabitList] = useRecoilState(habitListState)
  
  const [habitFormOpen, setHabitFormOpen] = useState(false)
  
  // const habitListURL = `http://localhost:8000/api/habits/18`

  // console.log(habitList)
  
  useEffect(() => { setUrl(url+id) }, [])




  useEffect(() => {
    // console.log('goal:', id)
    axios.get(url)
    .then(res => { setHabitList(res.data.data)
    // console.log('then',habitList)
  })
    .catch(err => { console.log(err) })
    // console.log('finally', habitList)
  }, [habitList.length, setHabitList])


  // setHabitList( habitList.filter(h => h.goal_id === id))

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
        <button onClick={()=> setOpen(!open)}
        style={{background:"none", border:'none'}} > { open ? '🔺' : '🔻' } </button>
        {open && <ul>
          { habitList.map((h,i) => <HabitSlot props={h} key={i} /> )}
        </ul>}
      </div>

      { habitFormOpen
        ? <AddHabitForm setHabitFormOpen={setHabitFormOpen}/>
        : <button onClick={() => setHabitFormOpen(true)} > Add new habit </button>
      }
    </GoalCardContainer>
  )
}

export default GoalCard
