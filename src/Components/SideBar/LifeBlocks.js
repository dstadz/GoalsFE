import React from 'react'
import { MonthBox, YearRow, LifeContainer } from '../../styles'


const birthYear = 2015 //get from api
const birthMonth = 7 //get from api

const months = ['January', 'Febuary', 'March', 'April', 'May','June','July','August','September','October','November', 'December']

const today = new Date()
const thisYear = today.getFullYear()
const thisMonth = today.getMonth()

const lifeTime = 81
const life = Array(lifeTime).fill().map((_, i) => i);

const Month = ({month, year}) => {

  return(
    <MonthBox
      style={
      (year === thisYear && month === thisMonth)
      ? {background:'blue'}
      : (year === birthYear && month < birthMonth)
        ? {visibility:'hidden'}
        : {}
    }>
      <span> {months[month]} {year} </span>
    </MonthBox>
  )
}


const Year = ({ year }) => {

  return(
    <YearRow>
      {months.map((_, i)=> ( <Month key={i} month={i} year={year}/> ))}
    </YearRow>
  )
}


const LifeBlocks = () => {

  return (
    <LifeContainer birthMonth={birthMonth}>
      <h3> Your Life Here:</h3>
      <ol> {life.map( y => (<Year key={y}  year={y + birthYear}/>))} </ol>
    </LifeContainer>
  )
}

export default LifeBlocks
