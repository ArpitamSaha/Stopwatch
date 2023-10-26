import React, { useEffect, useRef, useState } from "react";
import "./Stopwatch.css";
const MainPage = () => {
  let [sec, setSec] = useState(0);
  let [min, setMin] = useState(0);
  let [hour, setHour] = useState(0);
  let [showButton, setShowButton] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const timerRef = useRef(null);

  const handlestart = () => {
    setShowButton(true);
    setIsActive(true);
    timerRef.current = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);
    document.getElementById("start").classList.add("disabled");
    document.getElementById("reset").classList.remove("disabled");
    document.getElementById("pause").classList.remove("disabled");
    document.getElementById("lap-container").classList.remove("disabled");
  };

  const handlePause = () => {
    setIsActive(false);
    clearInterval(timerRef.current);
    document.getElementById("start").classList.remove("disabled");
    document.getElementById("pause").classList.add("disabled");
  };
  const handleReset = () => {
    setIsActive(false);
    setShowButton(false);
    clearInterval(timerRef.current);
    document.getElementById("start").classList.remove("disabled");
    document.getElementById("reset").classList.add("disabled");
    document.getElementById("pause").classList.add("disabled");
    setSec(0);
    setMin(0);
    setHour(0);
    const list = document.getElementById("ul");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  };
  const handleLap = async () => {
    var li = await document.createElement(`li`);
    li.textContent = `${
      timelist.hour + "h : " + timelist.min + "m : " + timelist.sec + "s"
    }`;
    var ul = await document.getElementById("ul");
    ul.appendChild(li);
  };

  const timelist = {
    hour: hour,
    min: min,
    sec: sec,
  };

  useEffect(() => {
    if (sec === 60 && min === 60) {
      setSec(0);
      setMin(0);
      setHour((hour) => hour + 1);
    } else if (sec === 60) {
      setSec(0);
      setMin((min) => min + 1);
    }
  }, [sec, min]);

  return (
    <div className="container">
      <div className="watch">
        <div className="watch-timers">
          <div className="hours">
            <h1 className="value">{timelist.hour}</h1>
          </div>
          <h1>
            <span>:</span>
          </h1>
          <div className="mins">
            <h1 className="value">{timelist.min}</h1>
          </div>
          <h1>
            <span>:</span>
          </h1>
          <div className="secs">
            <h1 className="value">{timelist.sec}</h1>
          </div>
        </div>
        <div className="watch-btns">
          <button className="reset disabled" id="reset" onClick={handleReset}>
            Reset
          </button>
          <button className="start" id="start" onClick={handlestart}>
            Start
          </button>
          <button className="pause disabled" id="pause" onClick={handlePause}>
            Pause
          </button>
          {showButton && <button onClick={handleLap}>Lap</button>}
        </div>
      </div>
      <div className="lap-container disabled" id="lap-container">
        <ul id="ul"></ul>
      </div>
    </div>
  );
};

export default MainPage;
