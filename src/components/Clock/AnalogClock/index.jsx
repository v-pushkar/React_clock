import React from "react";
import ClockBg from "./../img/Clock_face.jpg";

const AnalogClock = props => {
  const { clockDeg, isSeconds, isMinutes, isHouers} = props;

  let secArrowStyle = {
    transform: `rotate(${clockDeg.secDeg}deg)`
  };
  let minArrowStyle = {
    transform: `rotate(${clockDeg.minDeg}deg)`
  };
  let hoursArrowStyle = {
    transform: `rotate(${clockDeg.houersDeg}deg)`
  };
  const boxClasses = " defaultSt";

  return (
    <div className={"clockBox" + boxClasses} style={props.clockStyles}>
      <div
        className="centerPoint"
        style={{ backgroundColor: `${props.scaleColor}` }}
      ></div>
      {isHouers && (
        <div className="hourArrow" style={hoursArrowStyle}>
          <span style={{ backgroundColor: `${props.arrowColor}` }}></span>
        </div>
      )}
      {isMinutes && (
        <div className="minuteArrow" style={minArrowStyle}>
          <span style={{ backgroundColor: `${props.arrowColor}` }}></span>
        </div>
      )}
      {isSeconds && (
        <div className="secondsArrow" style={secArrowStyle}>
          <span style={{ backgroundColor: `${props.arrowColor}` }}></span>
        </div>
      )}
      <div className="clockScale">
        <div className="minScale">
          {props.defaultScale &&
            [0].map(() => {
              const scale = [];
              const scalesCount = props.scalesCount
              const houersScales = scalesCount === 60 ?5 : 3
              for (let i = 1; i <= scalesCount; i++) {
                scale.push(
                  <span
                    className={i % houersScales === 0 ? "hurelScale" : "minuteScale"}
                    style={{ transform: `rotate(${(360 / scalesCount) * i - 90}deg)` }}
                    key={i}
                  >
                    <span
                      style={{ backgroundColor: `${props.scaleColor}` }}
                    ></span>
                  </span>
                );
              }
              return scale;
            })}
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
