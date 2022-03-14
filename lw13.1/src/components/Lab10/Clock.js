import React, {useEffect, useState} from 'react';

function Clock() {
  const date = new Date();
  const [clockState, setClockState] = useState(date.toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000)
  }, [])

  return (
    <div>
      {clockState}
    </div>
  );
}
export default Clock;