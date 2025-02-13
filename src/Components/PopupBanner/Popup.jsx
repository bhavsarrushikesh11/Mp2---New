import React, { useState } from "react";
import "./Popup.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className={`popup-content ${fadeOut ? "fade-out" : ""}`}>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
          <div className="popup-left">
            <img
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Newsletter"
            />
          </div>
          <div className="popup-right">
            <h2>Sign Up to Our Newsletter</h2>
            <p>
              Be the first to get the latest news about discounts, offers, and new arrivals.
            </p>
            <form>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">JOIN</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
