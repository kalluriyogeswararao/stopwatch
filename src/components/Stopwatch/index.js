import {Component} from 'react'

import './index.css'

const initialState = {isRunning: true, isSeconds: 0, isMinutes: 0}

class Stopwatch extends Component {
  state = initialState

  onStopTimer = () => {
    this.clearTimerInterval()
    this.setState({isRunning: true})
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onStartTimer = () => {
    const {isRunning} = this.state
    if (isRunning) {
      this.intervalId = setInterval(this.incrementTimeInSeconds, 1000)
      this.setState({isRunning: false})
    }
  }

  incrementTimeInSeconds = () => {
    this.setState(prevState => ({isSeconds: prevState.isSeconds + 1}))
  }

  watchRunningFormat = () => {
    const {isSeconds} = this.state
    const isTimerDetails = isSeconds
    const minutes = Math.floor(isTimerDetails / 60)
    const seconds = Math.floor(isTimerDetails % 60)
    const stringifyMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifySeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifyMinutes}:${stringifySeconds}`
  }

  render() {
    const {isSeconds} = this.state
    console.log(isSeconds)
    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch"
            />

            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="timer">{this.watchRunningFormat()}</h1>
          <div>
            <button
              type="button"
              className="start-btn"
              onClick={this.onStartTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-btn"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
