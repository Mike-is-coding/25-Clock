import React from "react";
import './App.css';
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
    setWorking: PropTypes.func
}
let interval;

function Controls({minutes, setMinutes, working, setWorking, seconds, setSeconds}) {
  
  
  const runTime = () => {
    console.log(interval);
    if (!interval) {
      interval = setInterval(function () {
        console.log(minutes + ":" + seconds, `\n${interval}`);
        if (minutes < 1 && seconds < 1) {
          clearInterval(interval);
          interval = undefined;
        } 
        else if (seconds < 1) {
          seconds = 59;
          setSeconds(padWithLeadingZeros(seconds, 2));
          setMinutes(padWithLeadingZeros(minutes -= 1, 2));
          console.log("Currently at " + minutes + " minutes");
        }
        else {
          seconds -= 1
          setSeconds(padWithLeadingZeros(seconds, 2));
          console.log("Currently at " + seconds + " seconds");
        }
      }, 1000);
    } else {
      clearInterval(interval);
      interval = undefined;
    }
  };

  return (
    <span className="controls">
      <i className="fa fa-play" id="start_stop" onClick={runTime}></i>
      <i className="fa fa-pause" onClick={() => {
        clearInterval(interval);
        interval = undefined;
      }}></i>
      <i className="fa fa-undo"></i>
    </span>
  );
}

  export default Controls;