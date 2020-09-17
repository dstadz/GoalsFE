import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useRecoilState, useRecoilValue } from 'recoil'

import { goalListState, userState } from '../../utils/store'
import { GoalForm } from '../../styles'

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;



const AddGoalForm = () => {
  const user = useRecoilValue(userState)
  const [nextGoal, setNextGoal] = useState('')
  const [targetDate, setTargetDate] = useState(today)
  const { register, handleSubmit, errors } = useForm()
  const [goalList, setGoalList] = useRecoilState(goalListState)




  if ( Object.keys(errors).length ) console.log(errors)

  const handleGoalChange = e => { setNextGoal(e.target.value) }
  const handleTargetDateChange = e => { setTargetDate(e.target.value) }


  const onSubmit = data => {
    data = {...data, completed:false}
    axios.post(`${process.env.REACT_APP_BE}/goals/add/${user.id}`,data)//, config)
    .then(res => {
      console.log(res.data)
      setGoalList([...goalList, data])
    })
    .catch(err => { console.log(err) })
  }

  return (
    <GoalForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"
          name="goal"
          ref={register({required: true, maxLength: 80})}
          value={nextGoal}
          onChange={handleGoalChange}
        />

        <br />

        <label> By:</label>
        <input type='date'
          placeholder="Target Date"
          name="target_date"
          ref={register}
          value={targetDate}
          onChange={handleTargetDateChange}
          />

        <input type="submit" />
      </form>
    </GoalForm>
  )
}

export default AddGoalForm
