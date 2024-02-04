import {Component} from 'react'
import './index.css'

const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imageUrl: headUrl, headCount: 0, tailCount: 0}

  onCoinTossed = () => {
    const {imageUrl, headCount, tailCount} = this.state
    let latestHeadCount = headCount
    let latestTailCount = tailCount
    let latestImageUrl = imageUrl

    const num = Math.floor(Math.random() * 2)
    if (num === 0) {
      latestHeadCount += 1
      latestImageUrl = headUrl
    } else {
      latestImageUrl = tailUrl
      latestTailCount += 1
    }
    this.setState({
      imageUrl: latestImageUrl,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {imageUrl, headCount, tailCount} = this.state
    const total = headCount + tailCount
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-coin" />
          <button className="button" type="button" onClick={this.onCoinTossed}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
