import React, { useState } from 'react'
import moment from 'moment'
import { CountDownContainer } from '../../styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { goalListState, targetDates } from '../../utils/store'
// import 










const Timer = ({ date }) => {
  const [y,m,d] = [date.slice(0,4), date.slice(5,7) - 1, date.slice(8)]
  let now = new Date();
  let then = new Date(y,m,d)




  let diff = then - now; // difference in ms
  console.log('diff', Math.round(diff / 1000))
  return Math.round(diff / 1000 / 60); // convert to seconds





  return (
    <p> { diff } </p>
  )
}


const CountDowns = () => {
  const targetList =  useRecoilValue(targetDates)
  console.log(targetList)
  // Parse a date and get it as Unix time

  //get goalList dates
  //calculate time between noww and then
  //display `${time} until {goal}
  //also display holidays and 100th birthday

  let today = moment([new Date().getFullYear(),new Date().getMonth(),new Date().getDay()])
  console.log(today)
  
  return (

    <CountDownContainer>
    <p>{Date.now()}</p>
    {targetList.map(date => ( <Timer date={date} /> ))}
    </CountDownContainer>
  )
}

export default CountDowns
