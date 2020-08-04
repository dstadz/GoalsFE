import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { goalListState, activeFormState, userState } from '../../utils/store'
import { GoalForm } from '../../styles'

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;



const AddGoalForm = () => {
  const user = useRecoilValue(userState)
  const [activeForm, setActiveForm] = useRecoilState(activeFormState)
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
      setActiveForm(null)
    })
    .catch(err => { console.log(err) })
  }


  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <input type="text" placeholder="goal" name="goal" ref={register} />
  //     <input type="datetime" placeholder="target_date" name="target_date" ref={register} />

  //     <input type="submit" />
  //   </form>
  // );
  return (
    <GoalForm>
      <h5>Add a New {activeForm}</h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> New {activeForm}:</label>
        <input type="text"
          placeholder={activeForm}
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
