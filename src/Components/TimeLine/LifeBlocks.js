import React from 'react'
import { MonthBox, LifeContainer } from '../../styles'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { activeMonthState } from '../../utils/store'

import {
  userState,
  goalListState,
  targetDates
} from '../../utils/store'

const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const lifeTime = 101
const today = new Date()
const thisMonth = today.getMonth()
const thisYear = today.getFullYear()
const life = Array(lifeTime).fill().map((_, i) => i);

const Month = ({month, year}) => {
  const { birthday }  = useRecoilValue(userState)
  const bday = new Date(birthday)
  const birthMonth = bday.getMonth()
  const birthYear = bday.getFullYear()
  const goalList = useRecoilValue(goalListState)
  const targetList =  useRecoilValue(targetDates)
  const setActiveMonth = useSetRecoilState(activeMonthState);
  const timefrag = `${year}-${month < 9 ? `0${month + 1}` : month + 1}`
  const theseGoals = goalList.filter(goal => goal.target_date.substr(0,7) === timefrag)

  const color = () => {
    //highlight current month
    if (year === thisYear && month === thisMonth) return {background:'gold'}

    //hide months before birth
    else if (year === birthYear && month < birthMonth) return  {visibility:'hidden'}

    //hide months after 100th birthday
    else if (year === birthYear + 100 && month > birthMonth) return  {visibility:'hidden'}

    //highlights months with goals in them
    if (targetList.some(date => date.substr(0,7) === timefrag)) return {background:'purple'}
  }

  return(
    <MonthBox
      style={color()}
      onClick={()=>{ 
        console.log(months[month],year)
        setActiveMonth(new Date(year, month, 1)) }}
    >
      <span>
        {months[month]} {year}
        <ol> {theseGoals.map(goal => <li key={goal.id}>{goal.goal}</li>)} </ol>
      </span>
    </MonthBox>
  )
}


const Year = ({ year }) => { return( <li>
  {months.map((_, i) => (
    <Month key={i} month={i} year={year} />
  ))}
</li> )}


const LifeBlocks = () => {
  const { birthday }  = useRecoilValue(userState)
  const bday = new Date(birthday)
  const birthYear = bday.getFullYear()
  const birthMonth = bday.getMonth()

  return (
    <LifeContainer birthMonth={birthMonth}>
      {life.map( y => ( <Year key={y}  year={y + birthYear}/> ))}
    </LifeContainer>
  )
}

export default LifeBlocks
