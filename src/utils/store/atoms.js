import { atom } from 'recoil'

export const userState = atom({
  key: ' userState',
  default: {
    // "id": 19,
    // "name": "bob",
    // "email": "green@colors.com",
    // "birthday": "2000-01-01T08:00:00.000Z",
    // "password": "$2a$10$d98VoTFZjMhVd8y/1DV5Qe3SdHW8P1g/wjZRHD59yV6NjyG.NQd7O"
  }
})

export const activeFormState = atom({
  key: 'activeFormState',
  default: null
});

export const goalListState = atom({
  key: 'goalListState',
  default: []
});


// export const habitListState = atom({
//   key: 'habitListState',
//   default: habitList
// });
