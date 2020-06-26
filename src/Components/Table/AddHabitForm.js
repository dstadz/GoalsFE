import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const times = ['daily', 'weekly', 'monthly', 'annually']

const AddHabitForm = () => {
  const { register, handleSubmit, errors } = useForm()

  const backend = `http://localhost:8000/api/habits`
  const goal_id = `1`



  if ( Object.keys(errors).length ) console.log(errors)


  const onSubmit = data => {
    data = {...data, goal_id}
    console.log(data)
    axios.post(backend,data)
    .then(res => {
      //reload goal list
      console.log(res.data)
    })
    .catch(err => { console.log(err) })
  }



  return (
    <div style={{background:'blue'}}>

      <h5>Add a New Habit</h5>

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
