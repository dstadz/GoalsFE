import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { GoalForm } from '../../styles'
import { useRecoilState } from 'recoil'
import { goalListState } from '../../utils/store'

const EditGoalForm = (props) => {
  const { id, goal, target_date, setForm } = props
  const { register, handleSubmit, errors } = useForm()
  const [nextGoal, setNextGoal] = useState(goal)
  const [targetDate, setTargetDate] = useState(target_date.slice(0,10))
  const [goalList,  setGoalList] = useRecoilState(goalListState)

  if ( Object.keys(errors).length ) console.log(errors)


  const handleGoalChange = e => { setNextGoal(e.target.value) }
  const handleTargetDateChange = e => { setTargetDate(e.target.value) }


  const onSubmit = data => {
    console.log(data)
    data = { ...props, ...data, completed:false}
    console.log(data, goalList)
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
    <GoalForm>

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
    </GoalForm>
  )
}

export default EditGoalForm
