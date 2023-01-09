import React from "react";
import './App.css';
import padWithLeadingZeros from "./AddZeros";
import PropTypes from "prop-types";
import {interval} from "./App";

Controls.propTypes = {
    timer: PropTypes.number,
    setTimer: PropTypes.func,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    setMinutes: PropTypes.func,
    setSeconds: PropTypes.func
}


function Controls({timer, setTimer, minutes, setMinutes, seconds, setSeconds}) {
    const runTime = () => {
      let i = minutes;
  
      const interval = setInterval(function () {
        if (i === 0) clearInterval(this);
        else {
          i -= 1;
          React.useEffect(() => {
            setMinutes(padWithLeadingZeros(i, 2));
          }, [timer])
          console.log("Currently at " + i);
        }
      }, 1000);
    };
  
    return (
      <span className="controls">
        <i className="fa fa-play" onClick={runTime}></i>
        <i className="fa fa-pause" onClick={clearInterval}></i>
        <i className="fa fa-undo"></i>
      </span>
    );
  }

  export default Controls;