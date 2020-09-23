import React, { useState } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { useForm } from 'react-hook-form'
import { GoalForm } from '../../styles'
import { goalListState } from '../../utils/store'

const EditGoalForm = (props) => {
  const { id, goal, target_date, setForm } = props
  const [nextGoal, setNextGoal] = useState(goal)
  const { register, handleSubmit, errors } = useForm()
  if ( Object.keys(errors).length ) console.log(errors)
  const [goalList,  setGoalList] = useRecoilState(goalListState)
  const [targetDate, setTargetDate] = useState(target_date.slice(0,10))
  const handleGoalChange = e => { setNextGoal(e.target.value) }
  const handleTargetDateChange = e => { setTargetDate(e.target.value) }


  const onSubmit = data => {
    data = { ...props, ...data, completed:false}
    axios.put(`${process.env.REACT_APP_BE}/goals/`+id, data)
    .then(res => {
      const changed = goalList.findIndex(goal => goal.id === id);
      const newList = [...goalList].splice(changed,1,data)
      setGoalList(newList)
    })
    .catch(err => { console.log(err) })

    setForm('')
  }



  return (
    <GoalForm onSubmit={handleSubmit(onSubmit)}>
      <h5>Edit {goal} <button onClick={() => setForm('')}> X </button> </h5>

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
    </GoalForm>
  )
}

export default EditGoalForm
