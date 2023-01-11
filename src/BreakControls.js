import React from "react";
import PropTypes from "prop-types";
import "./App.css";

BreakControls.propTypes = {
  breakTime: PropTypes.number,
  setBreakTime: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
};

function BreakControls({ breakTime, setBreakTime }) {
  const handleIncrement = () => {
    if (breakTime < 60) {
      setBreakTime(breakTime + 1);
      console.log(breakTime);
    }
  };

  const handleDecrement = () => {
    console.log(breakTime);
    if (breakTime > 1) {
      setBreakTime(breakTime - 1);
    }
    console.log(breakTime);
  };

  return (
    <div className="break-controls">
      <span>
        <i
          id="break-decrement"
          className="fa fa-arrow-down"
          onClick={handleDecrement}
        ></i>{" "}
        <span id="break-length">{breakTime} </span>
        <i
          id="break-increment"
          className="fa fa-arrow-up"
          onClick={handleIncrement}
        ></i>
      </span>
    </div>
  );
}

export default BreakControls;
