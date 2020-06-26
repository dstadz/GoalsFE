import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { activeFormState } from '../../utils/store'


const times = ['daily', 'weekly', 'monthly', 'annually']

const AddHabitForm = () => {
  const [activeForm, setActiveForm] = useRecoilState(activeFormState)
  const { register, handleSubmit, errors } = useForm()

  const [nextHabit, setNextHabit] = useState('')
  const [amount, setAmount] = useState(0)
  const [freq, setFreq] = useState('')


  const handleAmount = e => {
    setAmount(e.target.value)
  }




  const backend = `http://localhost:8000/api/habits`
  const goal_id = `1`



  if ( Object.keys(errors).length ) console.log(errors)

  const handleHabitChange = e => { setNextHabit(e.target.value) }

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
          value={nextHabit}
          onChange={handleHabitChange}
        />

        <br />

        <label> Frequency:</label>
        <input type='number'
          name="amount"
          style={{width:"50px"}}
          ref={register({required: true})}
          value={amount}
          onChange={handleAmount}
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
