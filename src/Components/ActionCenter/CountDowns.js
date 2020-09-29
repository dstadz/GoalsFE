import React, { useState } from 'react'
import moment from 'moment'
import { CountDownContainer } from '../../styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { goalListState, targetDates } from '../../utils/store'
// import 


const Timer = ({ date }) => {
  console.log(date)
  return (
    <span> { date } </span>
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
  return (

    <CountDownContainer>
    <p>{Date.now()}</p>
    {targetList.map(date => ( <Timer date={date} /> ))}
    </CountDownContainer>
  )
}

export default CountDowns
