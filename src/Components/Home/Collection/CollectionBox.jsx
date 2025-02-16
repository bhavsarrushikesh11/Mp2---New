import React from "react";
import "./CollectionBox.css";
import { Link } from "react-router-dom";

const CollectionBox = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="collection">
      {/* Left Section - Main Highlighted Fruit Collection */}
      <div className="collectionLeft">
        <div className="box-content">
          <p className="col-p">Fresh & Organic</p>
          <h3 className="col-h3">
            <span>Tropical</span> Fruits
          </h3>
          <div className="col-link">
            <Link to="/marketplace" onClick={scrollToTop}>
              <h5>Explore Now</h5>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Multiple Fruit Categories */}
      <div className="collectionRight">
        <div className="collectionTop">
          <div className="box-content">
            <p className="col-p">Healthy Choices</p>
            <h3 className="col-h3">
              <span>Citrus</span> Fruits
            </h3>
            <div className="col-link">
              <Link to="/marketplace" onClick={scrollToTop}>
                <h5>Explore Now</h5>
              </Link>
            </div>
          </div>
        </div>

        <div className="collectionBottom">
          <div className="box1">
            <div className="box-content">
              <p className="col-p">Best Quality</p>
              <h3 className="col-h3">
                <span>Banana</span> Collection
              </h3>
              <div className="col-link">
                <Link to="/marketplace" onClick={scrollToTop}>
                  <h5>Explore Now</h5>
                </Link>
              </div>
            </div>
          </div>

          <div className="box2">
            <div className="box-content">
              <h3 className="col-h3">
                <span>Organic</span> Products
              </h3>
              <p className="col-p">
                Buy directly from farmers and support local agriculture.
              </p>
              <div className="col-link">
                <Link to="/marketplace" onClick={scrollToTop}>
                  <h5>Explore Now</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBox;
