import styled from 'styled-components'

export const AppBody = styled.div`
  justify-content: space-between;

  section{
    background: red; }
`

export const Side = styled.div`
  background: silver;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Table = styled.div`
  background: yellow;
  display:flex;
  flex-wrap: wrap;
`

export const LifeContainer = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;

  li{
    display:flex;
    flex-direction:column;
  }
${'' /* 
  li:nth-child(-n+18) div { background: yellow; }
  li:nth-child(n+18):nth-child(-n+35) div { background: red; }
  li:nth-child(n+51) div { background: grey; } */}
`

export const MonthBox = styled.div`
  width: 10px;
  height: 10px;
  margin: 2px;
  border: 2px solid black;

  position: relative;
  display: inline-block;
  :hover{ background:grey; }

  span {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    ${'' /* width: 120px; */}
    position: absolute;
    top: 15px;
    right:-50px;
    z-index: 1;
  }

  ol {
    visibility: hidden;
    padding: 0;
    ${'' /* list-style: none; */}
    ${'' /* position: absolute;
    top: 36px;
    right: -70px;
    z-index: 1; */}
    li {
      background-color: black;
      color: white;
      white-space:nowrap;
    }
  }

  :hover span { visibility: visible; }
  :hover ol { visibility: visible; }
`

export const TopStuff = styled.div`
  display:flex;
  justify-content: space-around;
  ${'' /* div {
    display:flex;
    justify-content: space-around;
  } */}


`

export const AddNewBTN = styled.button`
  width: 200px;
  height: 20px;
  background: cyan;
  border-radius: 1em;
`

export const GoalForm = styled.div`
  button {
    margin :5px 5px 0 auto;
  }

  h5{
    margin: 0;
  }
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const GoalCardContainer = styled.div`
  background: blue;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin:10px;
  width: 240px;
  h4{
    display: inline;
  }

  ul{
    padding-left: 0
  }

`

export const HabitSlotContainer = styled.li`
  background: orange;
  list-style:none;
  margin: 10px;
`