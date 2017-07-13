import React from 'react';

const Warriors = (props) => {

  const warriorsTeamList = props.warriorsTeam.map((player) => <li>{player}</li>)

  return (
    <div>
      <ul>
        {warriorsTeamList}
      </ul>
    </div>
  )
}


export default Warriors
