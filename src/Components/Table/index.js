import React, { useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import axios from 'axios'

import GoalCard from './GoalCard'
import {
  userState,
  goalListState,
} from '../../utils/store'


const TableThing = () => {
  const user = useRecoilValue(userState)
  const [goalList, setGoalList] = useRecoilState(goalListState)


  useEffect(async () => {
    await axios.get(`${process.env.REACT_APP_BE}/goals/all/${user.id}`)
    .then(res => {
      setGoalList(res.data)
    })
    .catch(err => { console.log(err) })
  },[user.id, setGoalList])


    // console.log(user.name, {goalList}, {habitList})
  return ( <div style={{background:'green'}}>
    {goalList && goalList.map(g => ( <GoalCard key={g.id} props={g} /> )) }
  </div> )
}

export default TableThing
