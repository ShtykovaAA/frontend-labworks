import { useEffect, useState } from "react";
import { getRemainingTimeUntilMs } from "./Utils/TimerUtils";

const defaultTime = {
  hours: "00",
  minutes: "00",
  seconds: "00",
};

function Timer({ countdownTimestampMs, isWorking }) {
  const [remainingTime, setRemainingTime] = useState(defaultTime);
  let active = true

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log('isWorking', isWorking)
      // console.log('active', active)
      // console.log('both', active && isWorking)
      if (active && isWorking){
        active = updateRemainingTime(countdownTimestampMs);
      }
      else{
        setRemainingTime(defaultTime)
        alert("Тестирование окончено");
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId)
  }, [countdownTimestampMs, active, isWorking]);

  function updateRemainingTime(countdown) {
    const countDown = getRemainingTimeUntilMs(countdown)
    setRemainingTime(countDown.time);
    return countDown.active
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
