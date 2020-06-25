import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GoalCard from './GoalCard'


const backend = `http://localhost:8000/api/goals`


const TableThing = () => {
  const [goalList, setGoalList] = useState([])


    useEffect(() => {
      axios.get(backend)
      .then(res => { setGoalList(res.data.data) })
      .catch(err => { console.log(err) })
    }, [])

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

  // console.log(goalList)
  return (
    <table>
      <thead>
        <tr>
          <th>Things for today</th>
          <th>Things for tomorrow</th>
        </tr>
        <tr>
          {goals.map(g => ( <td key={g.id}> <GoalCard props={g} /> </td> )) }
        </tr>
      </thead>
    </table>
  )
}

export default TableThing
