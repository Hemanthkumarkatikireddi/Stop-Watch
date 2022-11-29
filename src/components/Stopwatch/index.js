// Write your code here

// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {time: 0, timeSeconds: 0, timeRunning: false}

class Stopwatch extends Component {
  state = initialState

  clearTimeInterval = () => clearInterval(this.startedTime)

  secondsRunning = () => {
    this.setState(pre => ({timeSeconds: pre.timeSeconds - 1}))
  }

  startTimer = () => {
    this.startedTime = setInterval(() => {
      this.setState(pre => ({timeSeconds: pre.timeSeconds - 1}))
    }, 1000)
    this.setState({timeRunning: true})
  }

  stopTimer = () => {
    this.clearTimeInterval()
    this.setState({timeRunning: false})
  }

  resetTimer = () => {
    this.clearTimeInterval()
    this.setState(initialState)
    this.setState({timeRunning: false})
  }

  timer = () => {
    const {time, timeSeconds} = this.state
    const totalTime = time * 60 - timeSeconds

    const minutes = Math.floor(totalTime / 60)
    const seconds = Math.floor(totalTime % 60)

    const stringMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${stringMinutes}:${stringSeconds}`
  }

  render() {
    const {timeRunning} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="watch-container">
            <div className="watch-box">
              <div className="watch-title">
                <img
                  className="watch-img"
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                <p>Timer</p>
              </div>
              <h1 className="timer">{this.timer()}</h1>
              <div className="btn-box">
                <button
                  type="button"
                  className="btn start"
                  disabled={timeRunning}
                  onClick={this.startTimer}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="btn stop"
                  onClick={this.stopTimer}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="btn reset"
                  onClick={this.resetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
