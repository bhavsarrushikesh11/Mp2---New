import React, { useState } from "react";
import "./AdditionalInfo.css";

import { FaStar } from "react-icons/fa";
import Rating from "@mui/material/Rating";

const AdditionalInfo = () => {
  const [activeTab, setActiveTab] = useState("aiTab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="productAdditionalInfo">
        <div className="productAdditonalInfoContainer">
          <div className="productAdditionalInfoTabs">
            <p
              onClick={() => handleTabClick("aiTab1")}
              className={activeTab === "aiTab1" ? "active" : ""}
            >
              Description
            </p>
            <p
              onClick={() => handleTabClick("aiTab2")}
              className={activeTab === "aiTab2" ? "active" : ""}
            >
              Nutritional Info
            </p>
            <p
              onClick={() => handleTabClick("aiTab3")}
              className={activeTab === "aiTab3" ? "active" : ""}
            >
              Reviews
            </p>
          </div>
          <div className="productAdditionalInfoContent">
            {activeTab === "aiTab1" && (
              <div className="productDescription">
                <p>
                  Our locally sourced fruits are handpicked at the peak of
                  ripeness to ensure maximum flavor and nutritional value. Each
                  fruit is carefully inspected for quality before being packed
                  and delivered to you. Enjoy the taste of fresh, seasonal
                  fruits while supporting local farmers.
                </p>
              </div>
            )}
            {activeTab === "aiTab2" && (
              <div className="productAdditionalInfo">
                <p>
                  Fruits are an excellent source of essential vitamins and
                  minerals. They are high in fiber and provide a range of health
                  benefits. The exact nutritional content varies by fruit type,
                  but generally, they are low in calories and high in
                  antioxidants.
                </p>
              </div>
            )}
            {activeTab === "aiTab3" && (
              <div className="productReviews">
                <div className="reviewBox">
                  <div className="reviewBoxLeft">
                    <img
                      src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Apples"
                    />
                  </div>
                  <div className="reviewBoxRight">
                    <h4>Delicious Apples</h4>
                    <Rating name="read-only" value={5} readOnly />
                    <p>
                      These apples are incredibly fresh and juicy. The flavor is
                      perfect - not too sweet, not too tart. Will definitely buy
                      again!
                    </p>
                    <span>Posted on February 10, 2025</span>
                  </div>
                </div>
                <div className="reviewBox">
                  <div className="reviewBoxLeft">
                    <img
                      src="https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Mangoes"
                    />
                  </div>
                  <div className="reviewBoxRight">
                    <h4>Sweet Mangoes</h4>
                    <Rating name="read-only" value={4} readOnly />
                    <p>
                      The mangoes were ripe and sweet. Great quality for the
                      price. Would recommend to anyone looking for a tropical
                      treat!
                    </p>
                    <span>Posted on February 12, 2025</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
