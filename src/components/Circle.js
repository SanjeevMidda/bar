import React from "react";

const Circle = ({ number, color }) => {
  let styles = {
    backgroundColor: color,
  };

  return (
    <div className="outerCircle" style={styles}>
      <div className="innerCircle">
        <h1>{number}</h1>
      </div>
    </div>
  );
};

export default Circle;
