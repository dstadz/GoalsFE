import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { activeFormState } from '../../utils/store'
import { AddFormContainer } from '../../styles'

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;


const backend = `http://localhost:8000/api/goals/`
const user_id = `1`

const AddForm = () => {
  const [activeForm, setActiveForm] = useRecoilState(activeFormState)
  const [nextGoal, setNextGoal] = useState('')
  const [targetDate, setTargetDate] = useState(today)
  const { register, handleSubmit, errors } = useForm()


  if ( Object.keys(errors).length ) console.log(errors)

  const handleGoalChange = e => { setNextGoal(e.target.value) }
  const handleTargetDateChange = e => { setTargetDate(e.target.value) }
  const onSubmit = data => {
    data = {...data, user_id,completed:false}
    console.log(data);
    axios.post(backend,data)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => { console.log(err) })
    setActiveForm(null)
  }


  return (
    <AddFormContainer>
      <button onClick={()=> setActiveForm(null)} >X</button>

      <h5>Add a New {activeForm}</h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> New {activeForm}:</label>
        <input type="text"
          placeholder="Goal"
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
    </AddFormContainer>
  )
}

export default AddForm
