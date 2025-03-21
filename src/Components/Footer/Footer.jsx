import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import paymentIcon from "../../Assets/paymentIcon.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer_left">
            <div className="footer_logo_container">
              <img src={logo} alt="" Z />
            </div>

            <p>Mumbai , maharastra </p>

            <div className="footer_address">
              <strong>9356733878  </strong>
              <strong> </strong>
            </div>

            <div className="social_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>

          <div className="footer_content">
            <h5>Kisan Ki Dukan</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/about">Career</Link>
                </li>
                <li>
                  <Link to="/partners">Partners</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Marketplace</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/shop">Fresh Produce</Link>
                </li>
                <li>
                  <Link to="/shop">Organic Products</Link>
                </li>
                <li>
                  <Link to="/shop">Dairy & Poultry</Link>
                </li>
                <li>
                  <Link to="/shop">Grains & Spices</Link>
                </li>
                <li>
                  <Link to="/shop">Shop All</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Support</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/contact">Customer Support</Link>
                </li>
                <li>
                  <Link to="/loginSignUp">My Account</Link>
                </li>
                <li>
                  <Link to="/contact">Find a Vendor</Link>
                </li>
                <li>
                  <Link to="/terms">Terms & Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Help Center</Link>
                </li>
                <li>
                  <Link to="/giftcards">Gift Cards</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_right">
            <h5>Subscribe</h5>
            <p>
              Be the first to get the latest news about fresh Fruits and Vegetables. 
            </p>

            <form onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Join</button>
            </form>

            <h6>Secure Payments</h6>
            <div className="paymentIconContainer">
              <img src={paymentIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            © {getCurrentYear()} Kisan-ki-dukan.| Made By{" "}
            <a
              href="https://github.com/shakti177"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#C22928", textDecoration: "none" }}
            >
              Swami Chaudhari,
              rushikesh Bhavsar,
              Prashant Patil
            </a>{" "}
            with ❤️
          </p>
          <div className="footerLangCurrency">
            <div className="footerLang">
              <p>Language</p>
              <select name="language" id="language">
                <option value="english">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Germany">Marathi</option>
                <option value="French">Gujrati</option>
              </select>
            </div>
            <div className="footerCurrency">
              <p>Currency</p>
              <select name="currency" id="currency">
                <option value="USD">$ USD</option>
                <option value="INR">₹ INR</option>
                <option value="EUR">€ EUR</option>
                <option value="GBP">£ GBP</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
