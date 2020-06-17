import React from 'react'
import { MonthBox, YearRow, LifeContainer } from '../styles'


const birthYear = 1994 //get from api
const birthMonth = 7 //get from api

const months = ['January', 'Febuary', 'March', 'April', 'May','June','July','August','September','October','November', 'December']

const today = new Date()
const thisYear = today.getFullYear()
const thisMonth = today.getMonth()

const lifeTime = 81
const life = Array(lifeTime).fill().map((_, i) => i);
console.log(thisMonth, thisYear)

const currentMonth =''

const Month = ({month, year}) => {

  return(
    <MonthBox style={
      (month==thisMonth && year==thisYear)
      ? {background:'blue'}
      : {}
    }>
      <span> {months[month]} {year} </span>
    </MonthBox>
  )
}

const Year = ({ year }) => {

  return(
    <YearRow>
      {/*date%10 ? '' : <span> {date + birthYear} </span>*/}
      {months.map((m, i)=> ( <Month key={m} month={i} year={year}/> ))}
    </YearRow>
  )
}

const LifeBlocks = () => {

  return (
    <LifeContainer age={thisYear - birthYear + 1} bmth={8} >
      <h3> Your Life Here:</h3>
      <ol> {life.map( y => (<Year key={y}  year = {y + birthYear}/>))} </ol>
    </LifeContainer>
  )
}

export default LifeBlocks
