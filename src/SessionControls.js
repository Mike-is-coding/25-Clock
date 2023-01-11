import React from "react";
import PropTypes from "prop-types";
import padWithLeadingZeros from "./AddZeros";
import "./App.css";

SessionControls.propTypes = {
  sessionTime: PropTypes.number,
  setSessionTime: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
  setMinutes: PropTypes.func,
};

function SessionControls({ sessionTime, setSessionTime, setMinutes }) {
  const handleIncrement = () => {
    if (sessionTime < 60) {
      setSessionTime(sessionTime + 1);
      setMinutes(padWithLeadingZeros(sessionTime + 1, 2));
    }
    console.log(sessionTime);
  };

  const handleDecrement = () => {
    if (sessionTime > 1) {
      setSessionTime(sessionTime - 1);
      setMinutes(padWithLeadingZeros(sessionTime - 1, 2));
      console.log(sessionTime);
    }
    console.log(sessionTime);
  };

  return (
    <div className="session-controls">
      <span>
        <i
          id="session-decrement"
          className="fa fa-arrow-down"
          onClick={handleDecrement}
        ></i>
        <span
          id="
            session-length"
        >
          {sessionTime}{" "}
        </span>
        <i
          id="session-increment"
          className="fa fa-arrow-up"
          onClick={handleIncrement}
        ></i>
      </span>
    </div>
  );
}

export default SessionControls;
