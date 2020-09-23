import { selector } from 'recoil'
import { goalListState } from './atoms'

export const targetDates = selector({
  key: 'targetDates',
  get: ({get}) => {
    const goals = get(goalListState)
    const dates = goals.map(g => g.target_date)
    return dates

    // if (goals.length > 0){
    //   const dates = goals.map(d => [d.target_date.slice(0,4),d.target_date.slice(5,7),d.target_date.slice(8)])
    //   return dates
    // }
  }
});