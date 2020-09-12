import { selector } from 'recoil'
import { goalListState } from './atoms'

export const targetDates = selector({
  key: 'targetDates',
  get: ({get}) => {
    const goals = get(goalListState)
    const dates = goals.map(g => g.target_date)
    return dates
  }
});