import React, { useState } from 'react'
import { CountDownContainer } from '../../styles'
import { useRecoilValue } from 'recoil'
import { userState, goalListState } from '../../utils/store'


const Timer = ({ date, interval, time, goal  }) => {
  const [y,m,d] = [date.slice(0,4), date.slice(5,7) - 1, date.slice(8)]
  const now = new Date();
  const then = new Date(y,m,d)
  const diff = Math.round((then - now) / time) ; // difference in ms

  return ( <p> { diff } {interval}s until {goal}</p> )
}


const CountDowns = () => {
  const [interval, setinterval] = useState('day')
  const goalList =  useRecoilValue(goalListState)
  const { birthday } =  useRecoilValue(userState)
  console.log('birthday', typeof(birthday))

  const y = parseInt(birthday.slice(0,4)) + 100
  const dDay = `${y}-${birthday.slice(5,10)}`
  console.log('dDay', dDay)

  let msInInterval = { sec: 1000 }
  msInInterval['min'] = msInInterval.sec * 60
  msInInterval['hour'] = msInInterval.min * 60
  msInInterval['day'] = msInInterval.hour * 24
  msInInterval['week'] = msInInterval.day * 7
  msInInterval['month'] = msInInterval.day * 30
  msInInterval['year'] = msInInterval.day * 365
  msInInterval['dacade'] = msInInterval.year * 10


  return (
    <CountDownContainer>
      <h4> CountDowns </h4>
      <ul> {goalList.map(goal => (
        <Timer
          date={goal.target_date}
          interval={interval}
          time={msInInterval[interval]}
          goal={goal.goal}
        /> ))}
        <Timer /* 100th birthday  */
          date={dDay}
          interval={interval}
          time={msInInterval[interval]}
          goal={'your centennial '}
        />
      </ul>

      <div>
        <button onClick={() => setinterval('sec')}>sec</button>
        <button onClick={() => setinterval('min')} >min</button>
        <button onClick={() => setinterval('hour')} >hour</button>
        <button onClick={() => setinterval('day')} > day </button>
      {/* </div>
      <div> */}
        <button onClick={() => setinterval('week')}>week</button>
        <button onClick={() => setinterval('month')} >month</button>
        <button onClick={() => setinterval('year')} >year</button>
        {/* <button onClick={() => setinterval('timeLeft')} > % left </button> */}
      </div>
    </CountDownContainer>
  )
}

export default CountDowns
