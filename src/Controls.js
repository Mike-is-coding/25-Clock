/*
This component handles all timing functions including: timer 
decrement, timer controls, and alarm sound on time end.
*/


import React from "react";
import "./App.css";
import padWithLeadingZeros from "./AddZeros";
import PropTypes from "prop-types";

Controls.propTypes = {
  timer: PropTypes.string,
  setTimer: PropTypes.func,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  setMinutes: PropTypes.func,
  setSeconds: PropTypes.func,
  working: PropTypes.bool,
  setWorking: PropTypes.func,
  setBreakTime: PropTypes.func,
  breakTime: PropTypes.number,
  setSessionTime: PropTypes.func,
  sessionTime: PropTypes.number,
};
let interval;

function Controls({
  minutes,
  setMinutes,
  working,
  setWorking,
  seconds,
  setSeconds,
  breakTime,
  setBreakTime,
  sessionTime,
  setSessionTime,
  setTimer,
}) {
  const runTime = () => {
    let alarm = document.getElementById("beep");
    alarm.volume = 0.2;
    // console.log(interval);
    if (!interval) {
      interval = setInterval(function () {
        if (minutes < 1 && seconds < 1) {
          if (working) {
            working = false;
            setWorking(working);
            seconds = 0;
            minutes = breakTime;
            setSeconds(padWithLeadingZeros(seconds, 2));
            setMinutes(padWithLeadingZeros(minutes, 2));
            alarm.play();
          } else if (!working) {
            working = true;
            setWorking(working);
            seconds = 0;
            minutes = sessionTime;
            setSeconds(padWithLeadingZeros(seconds, 2));
            setMinutes(padWithLeadingZeros(minutes, 2));
            alarm.play();
          }
        } else if (seconds < 1) {
          seconds = 59;
          setSeconds(padWithLeadingZeros(seconds, 2));
          setMinutes(padWithLeadingZeros((minutes -= 1), 2));
          // console.log("Currently at " + minutes + " minutes");
        } else {
          seconds -= 1;
          setSeconds(padWithLeadingZeros(seconds, 2));
          // console.log("Currently at " + seconds + " seconds");
        }
      }, 1000);
    } else {
      clearInterval(interval);
      interval = undefined;
    }
  };

  return (
    <span className="controls">
      <i
        className="fa fa-play"
        id="start_stop"
        title="Play/Pause"
        onClick={runTime}
      ></i>
      <i
        className="fa fa-pause"
        title="Pause"
        onClick={() => {
          clearInterval(interval);
          interval = undefined;
        }}
      ></i>
      <i
        className="fa fa-undo"
        id="reset"
        title="Reset"
        onClick={() => {
          let alarm = document.getElementById("beep");
          alarm.volume = 0.2;
          clearInterval(interval);
          interval = undefined;
          setWorking(true);
          setBreakTime(5);
          setSessionTime(25);
          setMinutes(padWithLeadingZeros(25, 2));
          setSeconds(padWithLeadingZeros(0, 2));
          setTimer(padWithLeadingZeros(minutes, 2) + ":" + seconds);
          alarm.pause();
          alarm.currentTime = 0;
        }}
      >

      {/* Used 'uc?export=download&id=' in google drive link to direct 
      code to download immediately */}
        <audio id="beep" volume="0.5">
          <source
            src="https://drive.google.com/uc?export=download&id=1ptHq2899D1z1JjZ-QHhY9shVlqouMMk1"
            type="audio/mpeg"
          />
        </audio>
      </i>
    </span>
  );
}

export default Controls;
