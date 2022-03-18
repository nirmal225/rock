import './index.css'

const Result = props => {
  const {resetGame} = props

  const playAgain = () => {
    resetGame()
  }

  return (
    <div className="result-container">
      <div className="images-container">
        <div className="image-container">
          <p className="image-name">You</p>
          <img
            alt="rock"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
          />
        </div>
        <div className="image-container">
          <p className="image-name">Opponent</p>
          <img
            alt="rock"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
          />
        </div>
      </div>
      <h1 className="status-heading">You Won</h1>
      <button type="button" className="play-again-button" onClick={playAgain}>
        PLAY AGAIN
      </button>
    </div>
  )
}
export default Result
