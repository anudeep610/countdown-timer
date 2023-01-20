import React, { Fragment } from 'react'
import "./css/timer.css";

export default function Timer({ timerDays, timerHours, timerMinutes, timerSeconds }) {
    return (
        <>
            <div className="timer-container">
                <div className="timer">
                    <div className="clock">
                        <div>
                            <p>{timerHours}</p>
                            <small>Hours</small>
                        </div>{" "}
                        <div>
                            <p>{timerMinutes}</p>
                            <small>Minutes</small>
                        </div>{" "}
                        <div>
                            <p>{timerSeconds}</p>
                            <small>Seconds</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Timer.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
  };
  