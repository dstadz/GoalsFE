import React from 'react'

import { GoalCardContainer } from '../../styles'
const GoalCard = ({props}) => {
  const { id, user_id, goal, ongoing, start_date, goal_date } = props
  return (
    <GoalCardContainer>
      <h4>{goal}</h4>
      <p>{start_date} => {goal_date}</p>
    </GoalCardContainer>
  )
}

export default GoalCard
