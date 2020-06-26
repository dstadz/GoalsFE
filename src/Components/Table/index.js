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
    }, [goalList.length])



  // console.log(goalList)
  return (
    <table>
      <thead>
        <tr>
          <th>Things for today</th>
          <th>Things for tomorrow</th>
        </tr>
        <tr>
          {goalList.map(g => ( <td key={g.id}> <GoalCard props={g} /> </td> )) }
        </tr>
      </thead>
    </table>
  )
}

export default TableThing
