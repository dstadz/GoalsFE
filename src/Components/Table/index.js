import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'

import GoalCard from './GoalCard'
import {
  userState,
  goalListState,
  habitListState
} from '../../utils/store'


const TableThing = () => {
  const [user, setUser] = useRecoilState(userState)
  const [goalList, setGoalList] = useRecoilState(goalListState)
  // const [habitList, setHabitlist] = useRecoilState(habitListState)

  // const [goalIds, setGoalIds] = useState([])

    useEffect(async () => {
      await axios.get(`${process.env.REACT_APP_BE}/goals/all/${user.id}`)
      .then(res => { setGoalList(res.data) })
      .catch(err => { console.log(err) })
    },[])//, [goalList.length, setGoalList])

    // let goalIdCol = []
    // console.log(goalIdCol)
    // console.log({ goalIds })



    // console.log(user.name, {goalList}, {habitList})
  return ( <div style={{background:'#3f0'}}>
    {goalList && goalList.map(g => ( <GoalCard key={g.id} props={g} /> )) }
  </div> )
}

export default TableThing
