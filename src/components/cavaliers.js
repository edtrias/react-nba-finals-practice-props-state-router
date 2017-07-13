import React from 'react';

const Cavaliers = (props) => {

  const cavaliersTeamList = props.cavaliersTeam.map((player, index) => <li className="cavs" key={index}>{player}</li>);
  const cavaliersName = "Cleveland Cavaliers";

  return (
    <div className="cavaliers">
      <h3>{cavaliersName}</h3>
      <ul>
        {cavaliersTeamList}
      </ul>
    </div>
  )
}

export default Cavaliers;
