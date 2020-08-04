import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'

import GoalCard from './GoalCard'
import { userState, goalListState } from '../../utils/store'


const TableThing = () => {
  const [goalList, setGoalList] = useRecoilState(goalListState)
  // const [goalList, setGoalList] = useState([])
  const [user, setUser] = useRecoilState(userState)


    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BE}/goals/all/${user.id}`)
      .then(res => { setGoalList(res.data) })
      .catch(err => { console.log(err) })
    }, [goalList.length, setGoalList])

  console.log({goalList})
  return ( <div style={{background:'#330'}}>
    {goalList && goalList.map(g => ( <GoalCard key={g.id} props={g} /> )) }
  </div> )
}

export default TableThing
