import React from "react";
import './App.css';
import padWithLeadingZeros from "./AddZeros";
import PropTypes from "prop-types";

Controls.propTypes = {
    timer: PropTypes.number,
    setTimer: PropTypes.func,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    setMinutes: PropTypes.func,
    setSeconds: PropTypes.func
}
let interval;

function Controls({minutes, setMinutes}) {
  
  
  const runTime = () => {
    console.log(interval);
    if (!interval) {
      interval = setInterval(function () {
        if (minutes === 0) clearInterval(interval);
        else {
          minutes -= 1;
          setMinutes(padWithLeadingZeros(minutes, 2));
          console.log("Currently at " + minutes);
        }
      }, 1000);
    } else {
      clearInterval(interval);
      interval = undefined;
    }
  };

  return (
    <span className="controls">
      <i className="fa fa-play" onClick={runTime}></i>
      <i className="fa fa-pause" onClick={() => {
        clearInterval(interval);
        interval = undefined;
      }}></i>
      <i className="fa fa-undo"></i>
    </span>
  );
}

  export default Controls;