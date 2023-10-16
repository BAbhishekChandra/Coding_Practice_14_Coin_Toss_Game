/* Write your CSS here */

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, isHead: true}

  onClickRandomChangeHeadsTails = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({isHead: true})
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState({isHead: false})
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }

  render() {
    const {headsCount, tailsCount, isHead} = this.state
    const trueImageUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss-description">Heads (or) Tails</p>
          <img className="coin-image" src={trueImageUrl} alt="toss result" />
          <button
            className="coin-button"
            type="button"
            onClick={this.onClickRandomChangeHeadsTails}
          >
            Toss Coin
          </button>
          <div className="count-result-container">
            <p className="count-result">Total: {headsCount + tailsCount}</p>
            <p className="count-result">Heads: {headsCount}</p>
            <p className="count-result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
