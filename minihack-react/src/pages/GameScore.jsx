import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

class GameScore extends React.Component {
  state = {
    _id: '',
    players: [],
    scores: [],
  };
  componentDidMount () {
    // get gameid
    const pathname = this.props.location.pathname;
    const gameId = pathname.split('/')[pathname.split('/').length - 1];

    // cal ajax
    axios({
      url: `${config.baseUrl}/api/games/${gameId}`,
      method: `get`,
    })
      .then((response) => {
        this.setState({
          _id: response.data._id,
          players: response.data.players,
          scores: response.data.scores,
        });
      })
      .catch((error) => console.log(error));
  }

  render () {
    return (
      <div className='game-score'>
        Game Score
      </div>
    );
  }
}

export default withRouter(GameScore);