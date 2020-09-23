import styled from 'styled-components'

const round = '10px';
const borderLine = `border: 2px solid black;`;

export const AppBody = styled.div`
  justify-content: space-between;

  section{ background: red; }
`

export const Top = styled.div`
  background: silver;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Table = styled.div`
  ${borderLine}
  display: flex;
  align-items: flex-start;
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
  ${borderLine}

  width: ${round};
  height: ${round};
  margin: 1px;
  border-radius: ${round};


  position: relative;
  display: inline-block;
  :hover{ background:grey; }

  span {
    visibility: hidden;
    background-color: silver;
    color: blue;
    text-align: center;
    border-radius: ${round};
    ${'' /* width: 120px; */}
    position: absolute;
    top: 15px;
    right:-50px;
    z-index: 1;

    ol {
      visibility: hidden;
      padding: 0;
      li {
        white-space:nowrap;
      }
    }
  }


  :hover span { visibility: visible; }
  :hover ol { visibility: visible; }
`

export const ActionCenter = styled.div`
  display:flex;
  justify-content: space-around;
  ${'' /* div {
    display:flex;
    justify-content: space-around;
  } */}


`

export const AddNewBTN = styled.button`
  ${'' /* width: 200px; */}
  height: 20px;
  background: cyan;
  border-radius: 1em;
`

export const GoalForm = styled.form`
  ${borderLine}
  button {
    margin: 5px 5px 0 auto;
  }

  h5{
    margin: 0;
  }
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const GoalCardContainer = styled.div`
  ${borderLine}
  border-radius: ${round};
  background: #cce;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  margin:${round};
  width: 240px;

  h4{
    display: inline;
  }

  ul{
    padding-left: 0
  }

`

export const HabitSlotContainer = styled.li`
  ${borderLine}

  background: orange;
  list-style:none;
  margin: ${round};
`

export const CountDownContainer = styled.ul`
  ${borderLine}

`