import React, { useEffect, useState } from "react";
import useClock from "../../hooks/useClock";

function formatTime(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `Bây giờ là: ${hours} Giờ, ${minutes} Phút, ${seconds} Giây`;
}

function Clock(props) {
  // const [timeClock, setTimeClock] = useState("");

  // useEffect(() => {
  //   const setUpdateTime = setInterval(() => {
  //     const time = formatTime(new Date());
  //     setTimeClock(time);
  //   }, 500);

  //   return () => {
  //     clearInterval(setUpdateTime);
  //   };
  // }, []);

  const { timeClock } = useClock();

  return (
    <h2 style={{ color: "red", marginBottom: "40px", textAlign: "center" }}>
      {timeClock}
    </h2>
  );
}

export default Clock;
