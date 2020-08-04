import styled from 'styled-components'

export const AppBody = styled.div`
  display: flex;

  section{
    margin:auto;
  }
`

export const Side = styled.div`
  background: gold;
  position: fixed;
  top: 0;
  left:0;
  bottom:0;
  width: 300px;
`

export const OtherSideContainer = styled.div`
  background: silver;
  position: fixed;
  top: 0;
  right:0;
  bottom:0;
  width: 300px;
`

export const LifeContainer = styled.ol`
  background:white;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding:0;

  overflow:scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }

  li{
    display:flex;
  }

  li:nth-child(-n+18) div { border: 2px solid red; }
  li:nth-child(n+18):nth-child(-n+40) div { border: 2px solid green; }
  li:nth-child(n+41) div { border: 2px solid grey; }
`

export const MonthBox = styled.div`
  width: 5px;
  height: 5px;
  margin: 2px;
  position: relative;
  display: inline-block;
  :hover{ background:grey; }

  span {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    width: 120px;
    position: absolute;
    top: 15px;
    right:-50px;
    z-index: 1;
  }

  :hover span {
    visibility: visible;
  }
`

export const TopStuff = styled.div`
  div{
    display:flex;
    justify-content: space-around;

    div{
      flex-direction: column;

    }
  }


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