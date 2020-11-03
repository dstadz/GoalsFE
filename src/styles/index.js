import styled from "styled-components"

const round = "10px";
const borderLine = `border: 2px solid black;`;

export const AppBody = styled.div`
  justify-content: space-between;
  }
`

export const Table = styled.div`
  ${borderLine}
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const Top = styled.div`
  background: silver;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LifeContainer = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  list-style: none;
`
export const YearCol = styled.li`
  display:flex;
  flex-direction:column;
`
const curve = x => ((1-(x/100)**2)**.5)*100
export const MonthBox = styled.div`
  border: ${({ age }) => `2px solid hsla(225,${curve(age)}%, 50%,1)`};

  width: ${round};
  height: ${round};
  margin: 2px;
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
    ${"" /* width: 120px; */}
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
  align-items: center;

  .actions {
    align-self: start;
    background: yellow;
    ${"" /* display:flex;
    felx-direction: column; */}
    justify-content: space-around;
  }
`

export const AddNewBTN = styled.button`
  ${"" /* width: 200px; */}
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
  ${"" /* background: #cce; */}
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  margin:${round};
  width: 240px;

  h4{display: inline;}
  ul{padding-left: 0}

`

export const HabitSlotContainer = styled.li`
  ${borderLine}
  background: orange;
  list-style:none;
  margin: ${round};
`

export const CountDownContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 265px;
  width: 350px;
  ${borderLine}
  justify-content:space-between;
  align-items:center;

  div {
    background: green;
    align-items: center
  }

`

export const NavBarContainer = styled.nav`
background: linear-gradient(172deg, rgba(25,0,255,1) 0%, rgba(0,112,255,1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center
`