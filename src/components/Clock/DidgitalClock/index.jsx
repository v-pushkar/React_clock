import React from "react";

const DigitalClock = props => {
  const {
    time: { houers, minutes, seconds },
    isSeconds,
    isMinutes,
    isHouers
  } = props;
  return (
    <div className="digitalClockWrapper">
      <div className="digitalClockBopx" style={{ color: `${props.textColor}` }}>
        {isHouers && (
          <div className="houers">{houers < 10 ? "0" + houers : houers}</div>
        )}
        {isMinutes && (
          <div className="minutes">
            :{minutes < 10 ? "0" + minutes : minutes}
          </div>
        )}
        {isSeconds && (
          <div className="seconds">
            :{seconds < 10 ? "0" + seconds : seconds}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalClock;
