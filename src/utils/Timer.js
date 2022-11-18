import React from 'react';

const Timer = ({ hoursMinSecs, onFinish }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);

  const tick = () => {};

  const reset = () => {
    onFinish();
    setTime([0, 0, 0]);
  };

  React.useEffect(() => {
    const timerId = setInterval(() => {
      if (hrs === 0 && mins === 0 && secs === 0) {
        clearInterval(timerId);
        onFinish();
      } else if (mins === 0 && secs === 0) {
        setTime([hrs - 1, 59, 59]);
      } else if (secs === 0) {
        setTime([hrs, mins - 1, 59]);
      } else {
        setTime([hrs, mins, secs - 1]);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <p>{`${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
  );
};

export default Timer;
