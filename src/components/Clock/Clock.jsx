import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DigitalClock from "./DidgitalClock";
import AnalogClock from "./AnalogClock";
import "./Clock.scss";

const Clock = props => {
  const setClockData = () => {
    const d = new Date();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const houers = d.getHours();
    const secDeg = (360 / 60) * seconds - 90;
    const minDeg = (360 / 60) * minutes - 90;
    const houersDeg = (360 / 12) * houers - 90;
    return {
      degs: { houersDeg, minDeg, secDeg },
      time: { houers, minutes, seconds }
    };
  };
  const [clockTime, setClockTime] = useState({ ...setClockData().time });
  const [clockDeg, setClockDeg] = useState({ ...setClockData().degs });

  useEffect(() => {
    const ClockInterval = setInterval(setTimeHandler, 1000);
    return () => {
      clearInterval(ClockInterval);
    };
  }, []);

  const setTimeHandler = () => {
    setClockTime({ ...setClockData().time });
    setClockDeg({ ...setClockData().degs });
  };

  return (
    <div className="ClockWrapper">
      {props.type === "analog" && (
        <AnalogClock
          clockDeg={clockDeg}
          clockStyles={props.clockStyles}
          defaultScale={props.defaultScale}
          isSeconds={props.isSeconds}
          isMinutes={props.isMinutes}
          isHouers={props.isHouers}
          arrowColor={props.arrowColor}
          scaleColor={props.scaleColor}
          scalesCount={props.scalesCount}
        />
      )}
      {props.type === "digital" && (
        <DigitalClock
          time={clockTime}
          textColor={props.textColor}
          isSeconds={props.isSeconds}
          isMinutes={props.isMinutes}
          isHouers={props.isHouers}
        />
      )}
    </div>
  );
};

export default Clock;
