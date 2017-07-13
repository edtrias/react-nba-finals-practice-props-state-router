import React from 'react';

import Warriors from './warriors';
import Cavaliers from './cavaliers';

const App = () => {

  const warriorsTeam = [
    'Kevin Durant', 'Stephen Curry', 'Klay Thompson', 'Draymond Green', 'Andre Igoudala'
  ]
  const cavaliersTeam = [
    'LeBron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Richard Jefferson', 'Tristan Thompson'
  ]

  return (
    <div>
      <Warriors warriorsTeam={warriorsTeam}/>
      <Cavaliers cavaliersTeam={cavaliersTeam}/>
    </div>
  )
}

export default App;
