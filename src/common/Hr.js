import React from "react";
const Hr = ({ width, height, color }) => {
  styleHr = {
    borderTop: height + " solid " + color
  };

  return (
    <div style={{ width: "calc(100% - " + width + ")" }}>
      <hr style={styleHr} />
    </div>
  );
};

export default Hr;
