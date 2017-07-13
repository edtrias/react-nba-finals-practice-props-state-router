import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './nav';
import Warriors from './warriors';
import Cavaliers from './cavaliers';
import Header from './header';


const App = () => {

  const warriorsTeam = [
    'Kevin Durant', 'Stephen Curry', 'Klay Thompson', 'Draymond Green', 'Andre Igoudala'
  ]
  const cavaliersTeam = [
    'LeBron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Richard Jefferson'
  ]

  return (
    <Router>
      <div className="container">
        <Header />
        <Nav />
        
        <div className="team-wrapper">
          <Route exact path="/" render={() => <Warriors warriorsTeam={warriorsTeam}/> } />
          <Route path="/cavaliers" render={() => <Cavaliers cavaliersTeam={cavaliersTeam}/> } />
        </div>

      </div>
    </Router>
  )
}

export default App;
