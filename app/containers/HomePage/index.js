import React from 'react';
import moment from 'moment';
import FormControl from '../../components/FormControl';
import Button from '../../components/Button';

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '',
      endTime: '',
      countTime: 0,
    };
  }

  render() {
    return (
      <div id="container">
        <div onSubmit={this.handleSubmit} className="form-container">
          <h1>Simple Countdown Timer</h1>
          <FormControl
            label="Start time"
            invalid={this.checkIsValid(this.state.startTime)}
            value={this.state.startTime}
            placeholder="hh:mm:ss"
            onChange={text => this.setState({ startTime: text })}
          />
          <FormControl
            label="End time"
            invalid={this.checkIsValid(this.state.endTime)}
            value={this.state.endTime}
            placeholder="hh:mm:ss"
            onChange={text => this.setState({ endTime: text })}
          />
          <Button
            label="Start Countdown"
            onClick={() => this.handleSubmit()}
            disabled={this.isButtonEnable()}
          />
        </div>
        <div className="timer-display">
          <div
            className="box"
            style={{
              padding: '12px 20px',
            }}
          >
            {this.populateCountTime()}
          </div>
        </div>
      </div>
    );
  }

  populateCountTime() {
    const { countTime } = this.state;
    let hours = Math.floor(countTime / 3600);
    let minutes = Math.floor((countTime - hours * 3600) / 60);
    let seconds = countTime - hours * 3600 - minutes * 60;
    hours = hours.toString().length === 1 ? `0${hours}` : hours;
    minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
    seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;
    return `${hours}:${minutes}:${seconds}`;
  }

  isButtonEnable() {
    const { startTime, endTime } = this.state;
    if (this.checkIsValid(endTime) && this.checkIsValid(startTime)) {
      return false;
    }
    return true;
  }

  calcCountTime() {
    const { startTime, endTime } = this.state;
    const startInSecond = moment(startTime, 'HH:mm:ss').diff(
      moment().startOf('day'),
      'seconds',
    );
    const endInSecond = moment(endTime, 'HH:mm:ss').diff(
      moment().startOf('day'),
      'seconds',
    );

    if (endInSecond < startInSecond) {
      alert('End time must be more bigger then Start time');
    }
    return endInSecond - startInSecond;
  }

  handleSubmit() {
    // 1. Verify both inputs' validity... (Do this every user change input value)
    // 2. Reset the countdown counter output div/text/span
    this.setState({
      countTime: 0,
    });
    // 3. Calculate the number of seconds difference between start time and end time, and display it as the output's initial state
    const countSecond = this.calcCountTime();
    // 4. Start decreasing the output by one for every second (behave like a countdown timer)
    if (countSecond) {
      this.setState({
        countTime: countSecond,
      });
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        const newCount = this.state.countTime - 1;
        this.setState({
          countTime: newCount >= 0 ? newCount : 0,
        });
      }, 1000);
    }
  }

  checkIsValid(time) {
    return moment(time, 'HH:mm:ss', true).isValid();
  }
}
