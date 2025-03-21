import React from "react";
import "./BlogDetails.css";

// Replace these with your actual image paths
import blogdetail1 from "../../../Assets/Blog/blogDetail1.jpg";
import blogimage1 from "../../../Assets/Blog/blogDetail2.jpg";
import blogimage2 from "../../../Assets/Blog/blogDetail3.jpg";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const BlogDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="blogDetailsSection">
        <div className="blogDetailsSectionContainer">
          {/* Blog Title and Metadata */}
          <div className="blogDetailsHeading">
            <h2>Your Blog Title Here</h2> {/* Replace with your blog title */}
            <div className="blogDetailsMetaData">
              <span>by Your Name</span> {/* Replace with author name */}
              <span>Publication Date</span> {/* Replace with publication date */}
              <span>Category</span> {/* Replace with blog category */}
            </div>
          </div>

          {/* Featured Image */}
          <div className="blogDetailsFeaturedImg">
            <img src={blogdetail1} alt="Featured Blog" /> {/* Replace with your featured image */}
          </div>

          {/* Blog Content */}
          <div className="blogDetailsContent">
            <p>
              Replace this paragraph with your blog content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo.
            </p>

            <h5>Subheading for Your Blog</h5> {/* Replace with your subheading */}
            <p>
              Add more content here. Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that.
            </p>

            {/* Bullet Points or Lists */}
            <div className="blogDetailsContentBullets">
              <div className="blogDetailsContentBulletscontent">
                <h5>Why Choose This Topic?</h5> {/* Replace with your heading */}
                <ul>
                  <li>Point 1: Explain the first key point.</li> {/* Replace with your points */}
                  <li>Point 2: Explain the second key point.</li>
                  <li>Point 3: Explain the third key point.</li>
                </ul>
              </div>
              <div className="blogDetailsContentBulletscontent">
                <h5>Steps to Follow</h5> {/* Replace with your heading */}
                <ol>
                  <li>Step 1: Describe the first step.</li> {/* Replace with your steps */}
                  <li>Step 2: Describe the second step.</li>
                  <li>Step 3: Describe the third step.</li>
                </ol>
              </div>
            </div>

            <p>
              Conclude your blog content here. She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under.
            </p>
          </div>

          {/* Additional Images */}
          <div className="blogDetailsContentImg">
            <img src={blogimage1} alt="Blog Image 1" /> {/* Replace with your image */}
            <img src={blogimage2} alt="Blog Image 2" /> {/* Replace with your image */}
          </div>

          {/* Additional Content */}
          <div className="blogDetailsContent">
            <p>
              Add more content if needed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam.
            </p>
          </div>

          {/* Social Share Buttons */}
          <div className="share-buttons">
            <button className="share-button facebook">
              <FaFacebookF /> Share on Facebook
            </button>
            <button className="share-button twitter">
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className="share-button pinterest">
              <FaPinterest /> Share on Pinterest
            </button>
            <button className="share-button more">
              <FaPlus size={20} />
            </button>
          </div>

          {/* Next and Previous Blog Navigation */}
          <div className="blogDetailsNextPrev">
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon"
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
              <p>Title of Previous Blog</p> {/* Replace with previous blog title */}
            </div>
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon2"
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
              <p style={{ textAlign: "right" }}>
                Title of Next Blog {/* Replace with next blog title */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;