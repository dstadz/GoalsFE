import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'

import GoalCard from './GoalCard'
import { userState, goalListState } from '../../utils/store'


const backend = `http://localhost:8000/api/goals`


const TableThing = () => {
  const [goalList, setGoalList] = useRecoilState(goalListState)
  // const [goalList, setGoalList] = useState([])
  const [user, setUser] = useRecoilState(userState)


    useEffect(() => {
      axios.get(backend+`/${user.id}`)
      .then(res => { setGoalList(res.data.data) })
      .catch(err => { console.log(err) })
    }, [goalList.length, setGoalList])


  return ( <div>
    {goalList.map(g => ( <GoalCard key={g.id} props={g} /> )) }
  </div> )
}

export default TableThing
