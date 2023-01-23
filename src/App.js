import { useState, useEffect } from 'react';
import screenfull from 'screenfull';
import './App.css';
import Timer from "./Timer";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Jan 21,2023 18:40").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();
        if (screenfull.isEnabled) {
          screenfull.request();
        } else {
          // Ignore or do something else
        }
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    startTimer();
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Timer
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
