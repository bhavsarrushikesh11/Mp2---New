import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="banner">
        <div className="bannerLeft">
          <h6 className="bannerh6">Fresh Produce Starting at ₹50</h6>
          <h3 className="bannerh3">Organic Fruits & Vegetables</h3>
          <h5 className="bannerh5">
            <Link to="/shop" onClick={scrollToTop} style={{ color: "white" }}>
              Shop Now
            </Link>
          </h5>
        </div>
        <div className="bannerRight">
          <h6 className="bannerh6" style={{ color: "black" }}>
            Farm Essentials Starting at ₹100
          </h6>
          <h3 className="bannerh3" style={{ color: "black" }}>
            Seeds, Tools & Fertilizers</h3>
          <h5 className="bannerh5">
            <Link to="/shop" onClick={scrollToTop} style={{ color: "black" }}>
              Shop Now
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Banner;
