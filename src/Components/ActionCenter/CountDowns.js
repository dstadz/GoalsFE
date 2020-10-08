import React, { useState } from 'react'
import { CountDownContainer } from '../../styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { goalListState, targetDates } from '../../utils/store'


const Timer = ({ date, interval, time, goal  }) => {
  const [y,m,d] = [date.slice(0,4), date.slice(5,7) - 1, date.slice(8)]
  const now = new Date();
  const then = new Date(y,m,d)
  const diff = Math.round((then - now) / time) ; // difference in ms

  return ( <p> { diff } {interval}s until {goal}</p> )
}


const CountDowns = () => {
  const [interval, setinterval] = useState('sec')
  const goalList =  useRecoilValue(goalListState)

  const msInInterval = {
    sec: 1000,
    min: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7,
    month: 1000 * 60 * 60 * 24 * 30,
    year: 1000 * 60 * 60 * 24 * 365,
    decade: 1000 * 60 * 60 * 24 * 365 * 10,
  }


  return (
    <CountDownContainer>
      {goalList.map(goal => (
        <Timer
          date={goal.target_date}
          interval={interval}
          time={msInInterval[interval]}
          goal={goal.goal}
        /> ))}

      <div>
        <button onClick={() => setinterval('sec')}>sec</button>
        <button onClick={() => setinterval('min')} >min</button>
        <button onClick={() => setinterval('hour')} >hour</button>
        <button onClick={() => setinterval('day')} > day </button>
      </div>
      <div>
        <button onClick={() => setinterval('week')}>week</button>
        <button onClick={() => setinterval('month')} >month</button>
        <button onClick={() => setinterval('year')} >year</button>
        <button onClick={() => setinterval('timeLeft')} > % left </button>
      </div>
    </CountDownContainer>
  )
}

export default CountDowns
