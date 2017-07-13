import React from 'react';

const Warriors = (props) => {

  const warriorsTeamList = props.warriorsTeam.map((player, index) => <li className="warrs" key={index}>{player}</li>);
  const warriorsName = "Golden State Warriors";

  return (
    <div className="warriors">
      <h3>{warriorsName}</h3>
      <ul>
        {warriorsTeamList}
      </ul>
    </div>
  )
}


export default Warriors
