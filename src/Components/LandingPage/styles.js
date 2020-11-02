import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
export const Header = styled.header`
  background-color: rgba(255,255,255, 0.94);
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  nav {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: .1em 2em;
    ul {
      padding: 0;
      list-style:none;
      justify-content: space-between;
      @media (min-width:769px) { display:flex }
      @media (max-width:768px) {
        display: ${({ open }) => open ? 'flex' : 'none'};
        flex-direction:column;
        justify-content: space-between;
        align-items: center
      }

      li {
        padding: 1em;
        height:100%;
        justify-content: center;
        cursor: pointer;
        text-align: center;
        a {
          margin: auto;
          color: #333
        }
        @media (max-width:768px) {
          width: 100%;
          font-size: 2em;
          }
        :hover {
          background: #ddd;
          border-bottom: 3px solid blue;
        }
      }

      .spacer {
        before:' ';
        width: 50vw;
        @media (max-width:768px) { display:none; }
        @media (max-width:1023px) { width: 33vw }
        :hover{
          background: none;
          border: none;
          cursor: auto;
        }
      }
    }
  }
}
`

export const StyledBurger = styled.button`
  @media (min-width:769px) { display:none }
  margin: 1rem 2rem 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  ${'' /* z-index: 10; */}
  &:focus { outline: none }


  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'red' : 'black' };
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child { transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'} }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) { transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'} }
  }
`

export const Section = styled.section`
  display:flex;
  justify-content: space-around;
  align-items:center;
  margin: 1rem;
  width: 50%;

  @media(max-width:600px) {
    flex-direction: column;
  }
  @media(max-width: 958px) {
    width:100%
  }

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1120px;
  padding: 2.5rem 1rem;

  div{ text-align: left; }

  img{
    max-width: 375px;
    max-height: 470px;
    @media(min-width:1023px){width: 75vw;}
    @media(min-width:1439px){width: 50vw;}
  }

  h2 { font-size: 2rem;  }

  p {
    font-size: 1.4rem;
    line-height: 1.35;
    margin-right: 1rem;
  }
  @media(max-width: 900px){ width:75% }


  ol{
    width:100%;
    display:flex;
    flex-direction: row;
    list-style: none;
    @media(max-width:766px){ flex-direction:column; }
    li{ margin: 0 auto; }
  }

  @media(max-width:425px){
    h1{ font-size: 3em;}
    h2{ font-size: 2em;}
  }
`

export const Hero = styled(Section)`
  background: white;
  padding-top: 5vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 1rem;
  width: 100%;

  * {
      text-align: center;
      ${'' /* margin: 0; */}
    }

  h1 { font-size: 4em; }

  h2 {
    font-size: 3em;
    margin: 0
  }
  span { font-size: 2em; }
  p {
    margin:0;

    width: 50%;
    @media(max-width: 767px) {
      width: 100%
    }
  }


  img{
    width: 90%;
    max-width: 1256px;
    @media(min-width:1023px){width: 75vw;}
    @media(min-width:1439px){width: 50vw;}
  }




  
`

export const ReviewBox =styled.section`
  background: linear-gradient(172deg, rgba(255,184,0,1) 0%, rgba(249,255,0,1) 100%);
  width:100%;

  display:flex;
  ${'' /* flex-direction: column; */}
  justify-content: space-around;
  align-items:center;

  margin: 1rem 0;

  ul{
    display: flex;
    justify-content: space-around;
    @media(min-width:1000px) {width:66%};


    @media(max-width:375px){
      flex-direction: column;
      width: 100%
      }
    ${'' /* @media(min-width:1439px){width: 50vw;} */}

  }
`
export const FakeReview = styled.li`
  list-style:none;
  white-space: pre-wrap;


  @media(max-width:375px){
    width: 100vw;
    text-align: center;
  }
  * {
    max-width: 300px;
  }

@media(max-width:767px){
  justify-content: center;
}

  h3{}
  span{}
  h4{width: 100%}
`

export const LetsDoThisBTN = styled.button`
  background: blue;
  color:white;
  font-weight: 400;
  :before{ content:"Lets Get Going"; }
  font-size: 1.5rem;
  border-radius: .5rem;
  border: none;
  padding: .5rem 1rem;
`

export const FooterContainer = styled.footer`

  @media(max-width: 766px){
    flex-direction: column;
  }
  display:flex;
  justify-content: space-between;

  ul{
    display:flex;
    border: 1px solid green;
    padding: 0;
    justify-content: space-around;
  }

  ol{
    list-style: none;
    padding: 0;

  }
`

export const SignInUpModal = styled.div`
  border: 2px solid purple;
  border-radius: 1rem;
  background: white;
  position: fixed;
  z-index: 2;
  top: 10rem;
  width: 24rem;
  padding:2rem;

  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  button{
    position: absolute;
    right: 2rem;
    top: 2rem;
    margin-left: auto;
  }

  h3{
    margin-bottom: 0
  }

  form{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    div{
      display:flex;
      flex-direction: row;
      width:100%;
      border: 1px solid blue;
      border-radius: 1rem;
    }

    label{
      width:100%;
      margin-top: 1rem;
    }

    input {
      background:none;
      border:none;
      height:1.25rem;
      width:100%;
    }

    input[type=submit] {
      background: orange;
    }

    input[type=checkbox] {
      width: 20px;
    }
  }
`

export const ButtonBar = styled.ul`

  display:flex;
  justify-content:center;
  align-items:center;

  width:100%;
  justify-content: space-around ;
  padding: 0;
  list-style: none;

  li {
    background: cyan;
    padding: 15px;
  }
`