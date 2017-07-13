import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();

    this.state = {favoriteTeam: ''}
  }
  render() {
    return (
      <div className="header-wrapper">
        <h1>Whats your favorite team?</h1>
        <input
          value={this.state.favoriteTeam}
          onChange={(event) => this.setState({favoriteTeam: event.target.value})}
        />
        <h4 className="pick">I pick the {this.state.favoriteTeam}</h4>
      </div>
    )
  }
}

export default Header;
