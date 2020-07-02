import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const times = ['daily', 'weekly', 'monthly', 'annually']
const backend = `http://localhost:8000/api/goals`

const EditGoalForm = ({setForm, goal_id}) => {
  const { register, handleSubmit, errors } = useForm()



  if ( Object.keys(errors).length ) console.log(errors)


  const onSubmit = data => {
    data = {...data, goal_id}
    console.log(data)
    axios.post(backend,data)
    .then(res => {
      //reload goal list
      console.log(res.data.data)
    })
    .catch(err => { console.log(err) })
    console.log('submit done')
  }



  return (
    <div style={{background:'blue'}}>

      <h5>Edit Goal</h5>
      <button onClick={() => setForm('')}> X </button>

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

export default EditGoalForm
