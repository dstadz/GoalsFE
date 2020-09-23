import React, { useState, useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from 'axios'
import { Table } from '../../styles'
import GoalCard from './GoalCard'
import {
  userState,
  goalListState,
} from '../../utils/store'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const GoalTable = () => {
  const user = useRecoilValue(userState)
  const [goalList, setGoalList] = useRecoilState(goalListState)
  const [loading, setLoading] = useState(true)

  const getGoals = async() => {
    await axios.get(`${ process.env.REACT_APP_BE }/goals/all/${ user.id }`)
    .then(res => {
      setGoalList(res.data.sort((a,b) => (a.target_date > b.target_date) ? 1 : -1))
      setLoading(false)
    }) // sort by date
    .catch(err => { console.log(err) })
  }

  useEffect(() => { getGoals() }, [goalList.length])

  return (
    <Table>
      { loading && <PropagateLoader
        css={ override }
        size={ 45 }
        color={ "#123abc" }
        loading={ loading }
      /> }

      { goalList && goalList.map(g => (<GoalCard key={ g.id } props={ g } />)) }
    </Table>
  )
}

export default GoalTable
