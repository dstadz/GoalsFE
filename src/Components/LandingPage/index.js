import React, { useState } from 'react'


import Footer from './Footer'
import SignInUp from './SignInUp'

import {
  LandingPageContainer,
  Nav,
  Hero,
  ReviewBox,
  Section,
  LetsDoThisBTN,
} from './styles'


import randomArt from '../../assets/randomArt.jpg'
// import screenShot from '../../assets/screenShot.png'
import testimonialPic from '../../assets/testimonialPic.png'
import finalPic from '../../assets/finalPic.png'

const timeList = ['100 years','1200 months','5200 weeks','36500 days']
const fakeReviews = [{
  reviewer:'Goooooooooogle',
  rating:'⭐⭐⭐⭐⭐⭐',
  comment:`I couldn't have made my company without having Goals`
},{
  reviewer:'🍎 store',
  rating:'🍎🍎🍎🍎🍎',
  comment:'4.9 apples, at least 3+ reviews'
},{
  reviewer:'The Splurge',
  rating:'9.9/10',
  comment:`"The best existential`
},
]
const peopleList = ['creatives','developers','students','small businesses','entreprenuers','freelancers']
// todoist.com
const LandingPage = () => {
  // const [time, setTime] = useState(timeList[0])
  const [modalUp, setModalUp] = useState(false)

  const time = timeList[0]
  return (
    <LandingPageContainer>
      <Nav>
        <p>LOGO <a
          href="https://danielstadler.com/"
          target='_blank'
          rel="noopener noreferrer"
          >daniel</a> </p>
        <ul>
          <li>Features</li>
          <li>Premium</li>
          <li>For Teams</li>
          <li>Resources</li>
        </ul>
        <button onClick={()=> setModalUp(!modalUp)}> Sign in/up</button>
      </Nav>

      { modalUp && <SignInUp closeModal={setModalUp}/>}

      <Hero>
        <h1>Accomplish all your goals in life</h1>
        <LetsDoThisBTN onClick={()=> setModalUp(modalUp => !modalUp)}/>
        <img src={randomArt} alt={'random art'}/>

        <h2> Work towards becoming the ideal You </h2>
        <p> You'll be lucky if you get <span>{time}</span> </p>
        <p>
          Gain perspective and awareness by getting all your aspirations and dreams out of your head and onto your goal list (no matter where you are or what device you use).
        </p>
        <span> Browse Goals features </span>
        <span> See Goals in action </span>
      </Hero>

      <ReviewBox>
        <h2>
          100 BILLION HUMANS HAVE HAD GOALS BEFORE. WILL YOU JOIN THE FEW THAT HAVE ACHIEVED THEM?
        </h2>
        <ul>
          {fakeReviews.map(r => ( <li key={r.reviewer}>{r.reviewer} {r.rating} {r.comment} </li>))}
        </ul>
      </ReviewBox>

      <Section>{/*1- */}
        <div>
          <p> Goals has helped me and </p>
          <h4> a bunch of other people do finish a lot of goals</h4>
          <h6>nile, fakebook, wetwerk mickey</h6>
        </div>
        <img src={testimonialPic} alt={'testimonial'}/>
      </Section>

      <Section>{/*2- */}
        <div>
          <p>
            "I was literally a barely functional person who struggled to work towards any form of self improvement or betterment until I started using Goals"
          </p>
        </div>
        <img src={testimonialPic} alt='testiminial'/>
        <ol>
          {peopleList.map((p,i) => (<li key={i}> { p } </li>))}
        </ol>
      </Section>

      <Section>{/*3- */}
        <div>
          <h2>
          A goal manager you can trust for life
          </h2>
          <p>
          In the {'timeSinceInit'} that I've been making Goals, I've been looking for someone to give me a lot of money to work on something else.
          </p>
          <p>
          I am committed to improving my life by getting a job in tech, and earning your trust through this high quality app helps me and you with our goals.
          </p>
        </div>
        <img src={finalPic} alt='final'/>
      </Section>

      <Section>{/*4- */}
        <img src={finalPic} alt='final'/>
        <div>
          <h2> Get your life together with Goals</h2>
          <LetsDoThisBTN onClick={()=> setModalUp(!modalUp)}/>
        </div>
      </Section>




      <Footer/>
    </LandingPageContainer>
  )
}

export default LandingPage
