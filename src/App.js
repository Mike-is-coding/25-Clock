import React from "react";
import { useState } from "react";
import "./App.css";
import BreakControls from "./BreakControls";
import SessionControls from "./SessionControls";
import Controls from "./Controls";
import padWithLeadingZeros from "./AddZeros";

//Main App Component
function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [working, setWorking] = useState(true);
  const [minutes, setMinutes] = useState(padWithLeadingZeros(sessionTime, 2));
  const [seconds, setSeconds] = useState(padWithLeadingZeros(0, 2));
  const [timer, setTimer] = useState(
    padWithLeadingZeros(minutes, 2) + ":" + padWithLeadingZeros(seconds, 2)
  );
  let sessionLabel = "Working";
  React.useEffect(() => {
    setTimer(
      padWithLeadingZeros(minutes, 2) + ":" + padWithLeadingZeros(seconds, 2)
    );
  }, [minutes, seconds]);

  React.useEffect(() => {
    if (working) {
      sessionLabel = "Working";
    } else {
      sessionLabel = "Break";
    }
  }, [working]);

  return (
    <div className="background">
      <div className="container">
        <div className="title">
          <h1>25 + 5 Clock</h1>
        </div>
        <div className="set-times">
          <div className="break">
            <h2 id="break-label">Break Length</h2>
            <BreakControls
              breakTime={breakTime}
              setBreakTime={setBreakTime}
              minutes={minutes}
              setMinutes={setMinutes}
            />
          </div>
          <div className="session">
            <h2 id="session-label">Session Length</h2>
            <SessionControls
              sessionTime={sessionTime}
              setSessionTime={setSessionTime}
              minutes={minutes}
              setMinutes={setMinutes}
            />
          </div>
        </div>
        <div className="timer-box">
          <div className="clock-label">
            <span>Current Session</span>
            <span id="timer-label">{sessionLabel}</span>
          </div>
          <div className="timer">
            <span id="time-left">{timer}</span>
          </div>
        </div>
        <div className="controls-container">
          <Controls
            timer={timer}
            setTimer={setTimer}
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
            working={working}
            setWorking={setWorking}
            breakTime={breakTime}
            setBreakTime={setBreakTime}
            setSessionTime={setSessionTime}
          />
        </div>
        <div className="credits">
          <span>
            Designed and Coded by{" "}
            <a
              className="Link"
              href="https://www.freecodecamp.org/Mike_is_coding"
              target="_blank"
              rel="noreferrer"
            >
              Miguel Fierro
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
