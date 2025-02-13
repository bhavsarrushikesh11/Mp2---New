import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DealTimer.css"; // Make sure your CSS is mobile-responsive

const DealTimer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Placeholder: Replace with your actual API call or data source
  const targetDateString = "2025-02-19T23:59:59"; // Example: End of a week-long promotion

  const calculateTimeLeft = () => {
    const targetDate = new Date(targetDateString).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, "0");

  return (
    <div className="mainDeal">
      {/* Make sure .mainDeal, .dealTimer, etc. are responsive in your CSS */}
      <div className="dealTimer">
        <div className="dealTimerMainContent">
          <div className="dealTimeContent">
            <p>ODOP Special</p>
            <h3>
              District-Specific
              <span> Offer</span>
            </h3>
            <div className="dealTimeLink">
              <Link to="/marketplace" onClick={scrollToTop}>
                Explore Products
              </Link>
            </div>
          </div>
          <div className="dealTimeCounter">
            <div className="dealTimeDigit">
              <h4>{timeLeft.days}</h4>
              <p>Days</p>
            </div>
            <h4>:</h4>
            <div className="dealTimeDigit">
              <h4>{timeLeft.hours}</h4>
              <p>Hours</p>
            </div>
            <h4>:</h4>
            <div className="dealTimeDigit">
              <h4>{formatTime(timeLeft.minutes)}</h4>
              <p>Minutes</p>
            </div>
            <h4>:</h4>
            <div className="dealTimeDigit">
              <h4>{formatTime(timeLeft.seconds)}</h4>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealTimer;
