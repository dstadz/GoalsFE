import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  background:grey;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  img{
    width:15em;
  }
`

export const Nav = styled.nav`
  background: green;
  display:flex;
  justify-content: space-between;
  width:95%;
  margin: .1rem;
  padding: .1rem;

  ul{
    width:90%;
    display:flex;
    justify-content:space-around;
    li{
      margin:auto;
      list-style:none;
    }
  }

`

export const Hero = styled.div`
  background: white;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  margin: 1rem;

  width: 75%;

`

export const ReviewBox =styled.section`
  background: yellow;
  width:100%;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  margin: 1rem 0;

  ul{
    display: flex;
  }
`

export const Section = styled.section`
  background: white;

  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items:center;

  margin: 1rem;

  width: 940px;

  @media(max-width: 900px){
    width:75%
  }

  div{
    width:500px;
  }

  img{
    background:blue;
    height:200px;
    width:400px;
  }

  ol{
    width:100%;
    display:flex;
    flex-direction: row;

    @media(max-width:766px){
      flex-direction:column;
    }

    li{
      margin: 0 auto;
      list-style: none;
    }
  }
`

export const LetsDoThisBTN = styled.button`
  background: red;
  :before{ content:"Lets Do This" }

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
`