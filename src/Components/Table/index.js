import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'

import GoalCard from './GoalCard'
import { goalListState } from '../../utils/store'


const backend = `http://localhost:8000/api/goals`


const TableThing = () => {
  const [goalList, setGoalList] = useRecoilState(goalListState)


    useEffect(() => {
      console.log('main goal useEffect')
      axios.get(backend)
      .then(res => { setGoalList(res.data.data) })
      .catch(err => { console.log(err) })
    }, [goalList.length])

  return ( <div>
    {goalList.map(g => ( <GoalCard key={g.id} props={g} /> )) }
  </div> )
}

export default TableThing
