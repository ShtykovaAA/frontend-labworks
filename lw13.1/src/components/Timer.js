import { useEffect, useState } from "react";
import { getRemainingTimeUntilMs } from "./Utils/TimerUtils";

const defaultTime = {
  hours: "00",
  minutes: "00",
  seconds: "00",
};

function Timer({ countdownTimestampMs }) {
  const [remainingTime, setRemainingTime] = useState(defaultTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => {
      alert("Время закончилось!!!!");
      clearInterval(intervalId);
    };
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMs(countdown));
  }

  return (
    <div>
      <div>
        {remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}
      </div>
    </div>
  );
}

export default Timer;
