import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { goalListState, activeFormState } from '../../utils/store'
import { AddGoalFormContainer } from '../../styles'

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;



const AddGoalForm = () => {
  const [activeForm, setActiveForm] = useRecoilState(activeFormState)
  const [nextGoal, setNextGoal] = useState('')
  const [targetDate, setTargetDate] = useState(today)
  const { register, handleSubmit, errors } = useForm()
  const [goalList, setGoalList] = useRecoilState(goalListState)



  const backend = `http://localhost:8000/api/${activeForm}s`
  const user_id = `1`

  if ( Object.keys(errors).length ) console.log(errors)

  const handleGoalChange = e => { setNextGoal(e.target.value) }
  const handleTargetDateChange = e => { setTargetDate(e.target.value) }
  const onSubmit = data => {
    data = {...data, user_id,completed:false}
    axios.post(backend,data)
    .then(res => { console.log(res.data) })
    .catch(err => { console.log(err) })
    setActiveForm(null)
    setGoalList([...goalList, data])
  }


  return (
    <AddGoalFormContainer>

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
    </AddGoalFormContainer>
  )
}

export default AddGoalForm
