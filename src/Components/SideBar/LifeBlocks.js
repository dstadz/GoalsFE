import React from 'react'
import { MonthBox, LifeContainer } from '../../styles'
import { useRecoilValue } from 'recoil'

import { userState, targetDates } from '../../utils/store'



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
  const targetList =  useRecoilValue(targetDates)

  const color = () => {
    //highlight current month
    if (year === thisYear && month === thisMonth) return {background:'gold'}
    //hide months before birth
    else if (year === birthYear && month < birthMonth) return  {visibility:'hidden'}
    //highlights months with goals in them
    let timefrag = `${year}-${month < 10 ?`0${month}` : month}`
    if (targetList.some(date => date.substr(0,7) === timefrag)) return {background:'purple'}
  }


  return(
    <MonthBox style={color()}
      onClick={()=>{
        console.log(month, year)
        }}
    >
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
  const targetList =  useRecoilValue(targetDates)


  console.log(targetList)


  return (
    <LifeContainer birthMonth={birthMonth}>
      {life.map( y => (<Year key={y}  year={y + birthYear}/>))}
    </LifeContainer>
  )
}

export default LifeBlocks
