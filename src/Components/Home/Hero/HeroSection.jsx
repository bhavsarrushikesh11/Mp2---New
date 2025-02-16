import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const images = [
  "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1435301/pexels-photo-1435301.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="heroMain">
      {/* Left Section - Text */}
      <div className="sectionleft">
        <p>Empowering Farmers</p>
        <h1>One District, One Product</h1>
        <span>Connecting Farmers Directly to Markets for Better Profits & Growth</span>
        <div className="heroLink">
          <Link to="/marketplace">
            <h5>Explore Marketplace</h5>
          </Link>
        </div>
      </div>

      {/* Right Section - Animated Slideshow */}
      <div className="sectionright">
        <div className="slideshow-container">
          <img 
            key={currentIndex} 
            src={images[currentIndex]} 
            alt="Farm Product" 
            className="hero-image animate-slide"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
