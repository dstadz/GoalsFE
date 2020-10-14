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



const AddGoalForm = (props) => {
  const { open, setOpen } = props
  const { id } = useRecoilValue(userState)
  const [newGoal, setnewGoal] = useState('')
  const [targetDate, setTargetDate] = useState(today)
  const [goalList, setGoalList] = useRecoilState(goalListState)
  const { register, handleSubmit, errors } = useForm()
  if ( Object.keys(errors).length ) console.log(errors)
  const handleGoalChange = e => { setnewGoal(e.target.value) }
  const handleTargetDateChange = e => { setTargetDate(e.target.value) }


  const onSubmit = data => {
    data = {...data, completed:false}
    axios.post(`${process.env.REACT_APP_BE}/goals/add/${id}`,data)//, config)
    .then(res => {
      setGoalList([...goalList, data])
      setOpen(open => !open)
    })
    .catch(err => { console.log(err) })
  }

  return (
    <GoalForm onSubmit={handleSubmit(onSubmit)}>
      <input type="text"
        placeholder="What do you want to do?"
        name="goal"
        ref={register({required: true, maxLength: 80})}
        value={newGoal}
        onChange={handleGoalChange}
      />

      <br />

      <label> By:</label>
      <input type='date'
        name="target_date"
        ref={register}
        value={targetDate}
        onChange={handleTargetDateChange}
        />

      <input type="submit" />
    </GoalForm>
  )
}

export default AddGoalForm
