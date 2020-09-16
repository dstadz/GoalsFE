import React from 'react'
import { MonthBox, LifeContainer } from '../../styles'
import { useRecoilValue } from 'recoil'

import { userState, goalListState, targetDates } from '../../utils/store'



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
  const goalList = useRecoilValue(goalListState)
  const timefrag = `${year}-${month - 1 < 10 ? `0${month + 1}` : month + 1}`

  const color = () => {
    //highlight current month
    if (year === thisYear && month === thisMonth) return {background:'gold'}
    //hide months before birth
    else if (year === birthYear && month < birthMonth) return  {visibility:'hidden'}
    //highlights months with goals in them
    if (targetList.some(date => date.substr(0,7) === timefrag)) return {background:'purple'}
  }

  // console.log(goalList)
//on hover over month with goal, shows goal(s)
  return(
    <MonthBox style={color()}
      onClick={()=>{ console.log(month, year) }}
    >
      <span> {months[month]} {year}
      <ol>
        {goalList.filter(goal => goal.target_date.substr(0,7) === timefrag).map(goal => <li>{goal.goal}</li>)}
      </ol>
    </span>
    </MonthBox>
  )
}


const Year = ({ year }) => { return( <li>
  {months.map((_, i) => (
    <Month key={i} month={i} year={year}/>
    ))}
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
      {life.map( y => (
        <Year key={y}  year={y + birthYear}/>
      ))}
      {console.log(life[25][6])}
    </LifeContainer>
  )
}

export default LifeBlocks
