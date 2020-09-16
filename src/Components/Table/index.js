import React, { useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import axios from 'axios'
import { Table } from '../../styles'
import GoalCard from './GoalCard'
import {
  userState,
  goalListState,
} from '../../utils/store'


const TableThing = () => {
  const user = useRecoilValue(userState)
  const [goalList, setGoalList] = useRecoilState(goalListState)

  async function fetchMyAPI() {
  await axios.get(`${process.env.REACT_APP_BE}/goals/all/${user.id}`)
    .then(res => { setGoalList(
        res.data.sort((a,b) => (a.target_date > b.target_date) ? 1 : -1)
      )}) // sort by date
    .catch(err => { console.log(err) })
  }

  useEffect(() => { fetchMyAPI() }, [goalList.length])


    // console.log(user.name, {goalList}, {habitList})
  return ( <Table>
    {goalList && goalList.map(g => ( <GoalCard key={g.id} props={g} /> )) }
  </Table> )
}

export default TableThing
