import React from 'react'
import { MonthBox, LifeContainer } from '../../styles'
import { useRecoilValue } from 'recoil'

import { userState } from '../../utils/store'



const months = ['January', 'Febuary', 'March', 'April', 'May','June','July','August','September','October','November', 'December']

const today = new Date()
const thisYear = today.getFullYear()
const thisMonth = today.getMonth()

const lifeTime = 101
const life = Array(lifeTime).fill().map((_, i) => i);

const Month = ({month, year}) => {
  const { birthday }  = useRecoilValue(userState)
  const bday = new Date(birthday)
  const birthYear = bday.getFullYear()
  const birthMonth = bday.getMonth()

  return(
    <MonthBox style={
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


const Year = ({ year }) => {return( <li>
  {months.map((_, i)=> ( <Month key={i} month={i} year={year}/> ))}
</li> )}


const LifeBlocks = () => {
  const { birthday }  = useRecoilValue(userState)
  const bday = new Date(birthday)
  const birthYear = bday.getFullYear()
  const birthMonth = bday.getMonth()

  return (
    <LifeContainer birthMonth={birthMonth}>
      {life.map( y => (<Year key={y}  year={y + birthYear}/>))}
    </LifeContainer>
  )
}

export default LifeBlocks
