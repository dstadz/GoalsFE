import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { GoalForm } from '../../styles'

const times = ['daily', 'weekly', 'monthly', 'annually']

const AddHabitForm = ({setForm, goal_id, habitList, setHabitList}) => {
  const { register, handleSubmit, errors } = useForm()

  if ( Object.keys(errors).length ) console.log(errors)

  const onSubmit = data => {
    console.log({...data, goal_id})
    axios.post(`${process.env.REACT_APP_BE}/habits/add/${goal_id}`, {...data,goal_id})//, config)
    .then(res => {
      console.log(res.data)
      setHabitList(habitList.concat(res.data))
    })
    .catch(err => { console.log(err) })
  }


  return (
    <GoalForm>
      <button onClick={() => setForm(false)}> X </button>
      <h5>New Habit</h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"
          placeholder="New Habit"
          name="habit"
          ref={register({required: true, maxLength: 80})}
        />

        <br />

        <label> Frequency:</label>
        <input type='number'
          style={{width:"50px"}}
          name="amount"
          ref={register({required: true})}
        />

        <select name="freq" ref={register}>
          {times.map(t => ( <option key={t} value={t}>{t}</option> ))}
        </select>

        <br />

        <input type="submit" />
      </form>
    </GoalForm>
  )
}

export default AddHabitForm
