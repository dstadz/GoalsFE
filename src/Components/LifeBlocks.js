import React from 'react'
import { MonthBox, YearRow, LifeContainer } from '../styles'


const birthYear = 1994 //get from api

const Month = () => {

  return( <MonthBox /> )
}

const Year = ({ date }) => {

  const monthsInYear = 12
  const months = ['January', 'Febuary', 'March', 'April', 'May','June','July','August','September','October','November', 'December']
  const year = Array(monthsInYear).fill().map((_, i) => months[i]);
  return(
    <YearRow>
      {date%10
        ?<span>-----</span>
        :<span>{date+birthYear}</span>}
      {year.map( m => ( <Month key={m} m={m}/> ))}
    </YearRow>
  )
}

const LifeBlocks = () => {

  const lifeTime = 81
  const life = Array(lifeTime).fill().map((_, i) => i);

  return (
    <LifeContainer>
      <h3> Your Life Here:</h3>
      <ol>
        {life.map( y => (<Year key={y+birthYear}  date={y}/>))}
      </ol>
    </LifeContainer>
  )
}

export default LifeBlocks
