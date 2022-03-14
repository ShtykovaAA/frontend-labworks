import dayjs from "dayjs";

export function getRemainingTimeUntilMs(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const now = dayjs();
  if (timestampDayjs.isBefore(now)) {
    console.log('HERE')
    return {
      active: false,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00"}
    };
  }
  console.log('getRemainingSeconds(now, timestampDayjs)', getRemainingSeconds(now, timestampDayjs))
  return {active: true, time:{
    hours: getRemainingHours(now, timestampDayjs),
    minutes: getRemainingMinutes(now, timestampDayjs),
    seconds: getRemainingSeconds(now, timestampDayjs),
  }};
}

function getRemainingSeconds(now, timestampDayjs) {
  return addZero(timestampDayjs.diff(now, "seconds") % 60);
}

function getRemainingMinutes(now, timestampDayjs) {
  return addZero(timestampDayjs.diff(now, "minutes") % 60);
}

function getRemainingHours(now, timestampDayjs) {
  return addZero(timestampDayjs.diff(now, "hours") % 24);
}

function addZero(number) {
  const numberToString = number.toString();
  return numberToString.length >= 2 ? numberToString : "0" + numberToString;
}
