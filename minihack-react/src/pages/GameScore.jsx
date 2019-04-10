import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import { Container, Table, Button } from 'reactstrap';
import calculateSumOfScores from '../helpers/calculateSumOfScores';
import TableRow from '../components/GameScore/TableRow';

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
        console.log(response.data);
        this.setState({
          _id: response.data._id,
          players: response.data.players,
          scores: response.data.scores,
        });
      })
      .catch((error) => console.log(error));
  }

  addRound = async () => {
    // axios
    axios({
      method: 'put',
      url: `${config.baseUrl}/api/games/${this.state._id}`,
      data: {
        type: 'add_round',
      },
    })
      .catch((error) => console.log(error));

    // setState
    this.setState({
      scores: [...this.state.scores, [0, 0, 0, 0]],
    });
  }

  handleInputChange = async (value, row, col) => {
    // send axios to update database
    await axios({
      url: `${config.baseUrl}/api/games/${this.state._id}`,
      method: `put`,
      data: {
        type: 'update_scores',
        value: value,
        row: row,
        col: col,
      },
    })
      .catch((error) => console.log(error));

    // setState
    this.setState({
      scores: this.state.scores.map((item, index) => {
        if (index === row) {
          // update
          const newRow = item.map((score, i) => {
            if (i === col) {
              // update
              return value;
            } else {
              return score;
            }
          });

          return newRow;
        } else {
          return item;
        }
      }),
    });
  }

  render () {
    const sumOfScores = calculateSumOfScores(this.state.scores);
    const totalScore = sumOfScores.reduce((item, currentValue) => Number(item) + Number(currentValue), 0);
    return (
      <div className='game-score'>
        <Container>
          <h2>Scrore Keeper</h2>

          <Table>
            <thead>
              <tr>
                <td></td>
                {this.state.players.map((player, index) => {
                  return <td key={index}>{player}</td>;
                })}
              </tr>

              <tr>
                <td>Sum of Score ({totalScore})</td>
                {sumOfScores.map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
              </tr>
            </thead>

            <tbody>
              {this.state.scores.map((round, index) => (
                <TableRow
                  key={index}
                  values={round}
                  rowIndex={index}
                  handleInputChange={this.handleInputChange}
                />
              ))}
            </tbody>
          </Table>

          <div>
            <Button onClick={this.addRound}>Add Round</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(GameScore);