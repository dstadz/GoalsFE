import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
export const Header = styled.header`
  background-color: rgba(255,255,255, 0.94); /* Black w/opacity/see-through */
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  ${'' /* filter: blur(5px); */}
    nav {
      display: flex;
      justify-content: space-around;
      position: relative;
      align-items: center;
      flex: 1;
      padding: .1em 2em;
      div{

        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 2vh;
          a {
          }
        }
      }
        ul {
          display: flex;
          padding: 0;
          li {
            height:100%;
            margin:auto;
            list-style:none;
            cursor: pointer;
            margin: 0 1em;
            a {
              color: #333
            }

          }
          li:hover {
            border-bottom: 3px solid red;
          }
        }
    }
  }
`

export const Hero = styled.div`
  background: white;
  padding-top: 5vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 1rem;
  width: 50%;

  img{
    width: 100vw;
    @media(min-width:1023px){width: 75vw;}
    @media(min-width:1439px){width: 50vw;}
  }
  h1 {
    font-size: 4em;
    text-align: center;
  };

  h2 {
    font-size: 3rem;
    margin:0;
  }

  p {
    margin: 0;
    text-align: center;

  }

`

export const ReviewBox =styled.section`
  background: orange;
  width:100%;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  margin: 1rem 0;

  ul{
    display: flex;
    width:66%;
    justify-content: space-around;


    @media(max-width:375px){
      flex-direction: column;
      width: 100%
      }
    ${'' /* @media(min-width:1439px){width: 50vw;} */}

  }
`
export const FakeReview = styled.li`

@media(max-width:375px){
  justify-content: center;
}
  list-style:none;
  ${'' /* display: flex;
  flex-direction: column;
  width: 15vw; */}
  h3{}
  span{}
  h4{width: 100%}
`

export const Section = styled.section`

  background: white;
  padding-top: 5vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 1rem;
  width: 50%;

  img{
    width: 100vw;
    @media(min-width:1023px){width: 75vw;}
    @media(min-width:1439px){width: 50vw;}
  }
  h1 {
    font-size: 4em;
    text-align: center;
  };

  h2 {
    font-size: 3rem;
    margin:0;
  }

  p {
    margin: 0;
    text-align: center;

  }

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