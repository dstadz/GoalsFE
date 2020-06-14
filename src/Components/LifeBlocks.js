import React from 'react'
import { MonthBox, YearRow, LifeContainer } from '../styles'

const Month = () => {

  return(
    <MonthBox>
    
    </MonthBox>
  )
}

const Year = () => {
  
  const monthsInYear = 12
  const months = ['January', 'Febuary', 'March', 'April', 'May','June','July','August','September','October','November', 'December']
  const year = Array(monthsInYear).fill().map((_, i) => months[i]);
  return(
    <YearRow>
      {year.map( m => (
        <Month key={m} m={m}/>
      ))}
    </YearRow>
  )
}

const LifeBlocks = () => {

  const birthYear = 1994 //get from api
  const lifeTime = 80
  const life = Array(lifeTime).fill().map((_, i) => i);
  console.log(life)

  return (
    <div>
      <h3> Your Life Here:</h3>
      <LifeContainer>
        {life.map( y => (<Year key={y+birthYear} />))}
      </LifeContainer>
    </div>
  )
}

export default LifeBlocks
