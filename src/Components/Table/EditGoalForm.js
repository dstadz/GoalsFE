import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const backend = `http://localhost:8000/api/goals/`

const EditGoalForm = (props) => {
  const { id, goal, ongoing, start_date, target_date,setForm } = props

  const { register, handleSubmit, errors } = useForm()
  const [nextGoal, setNextGoal] = useState(goal)
  const [targetDate, setTargetDate] = useState(target_date.slice(0,10))



  if ( Object.keys(errors).length ) console.log(errors)


  const handleGoalChange = e => { setNextGoal(e.target.value) }
  const handleTargetDateChange = e => { setTargetDate(e.target.value) }


  const onSubmit = data => {
    data = {...data, completed:false}
    axios.put(backend+id,data)
    .then(res => {console.log(res.data)})
    .catch(err => { console.log(err) })

    setForm('')
  }



  return (
    <div style={{background:'blue'}}>

      <h5>Edit {goal}</h5>
      <button onClick={() => setForm('')}> X </button>

      <form onSubmit={handleSubmit(onSubmit)}>
      <label> Goal Name </label>
      <input type="text"
        placeholder={goal}
        name="goal"
        ref={register({required: true, maxLength: 80})}
        value={nextGoal}
        onChange={handleGoalChange}
      />

      <br />

      <label> By:</label>
      <input type='date'
        placeholder={targetDate}
        name="target_date"
        ref={register}
        value={targetDate}
        onChange={handleTargetDateChange}
        />

      <input type="submit" />
    </form>
    </div>
  )
}

export default EditGoalForm
