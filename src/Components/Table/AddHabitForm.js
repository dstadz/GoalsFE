import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const times = ['daily', 'weekly', 'monthly', 'annually']

const AddHabitForm = ({setForm, goal_id}) => {
  const { register, handleSubmit, errors } = useForm()

  if ( Object.keys(errors).length ) console.log(errors)

  const onSubmit = data => {
    axios.post(`${process.env.REACT_APP_BE}/habits/add/${goal_id}`, {...data,goal_id})//, config)
    .then(res => { console.log(res.data) })
    .catch(err => { console.log(err) })
  }


  return (
    <div style={{background:'green'}}>

      <h5>Add a New Habit</h5>
      <button onClick={() => setForm(false)}> X </button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> New Habit:</label>
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
    </div>
  )
}

export default AddHabitForm
