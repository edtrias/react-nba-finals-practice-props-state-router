import React from 'react';

const Cavaliers = (props) => {

  const cavaliersTeamList = props.cavaliersTeam.map((player) => <li>{player}</li>)

  return (
    <div>
      <ul>
        {cavaliersTeamList}
      </ul>
    </div>
  )
}

export default Cavaliers;
