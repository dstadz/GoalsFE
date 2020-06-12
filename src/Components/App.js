import React from 'react';

import SideBar from './SideBar'
import LandingPage from './LandingPage'



const App = ()  => {

  const signedIn = true
  if (!signedIn ) return <LandingPage />

  return (
    <div className="App">
      <SideBar/>
    </div>
  );
}

export default App;
