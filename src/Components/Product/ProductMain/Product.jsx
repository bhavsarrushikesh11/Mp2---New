import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Features/Cart/cartSlice";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { PiShareNetworkLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./Product.css";

const Product = () => {
  // Product images Gallery
  const productImg = [
    "https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=jXInOVcduhEnfuUVffbUacldkF5CwAeThD3MDUXCItM=",
    "https://st2.depositphotos.com/1177973/5419/i/450/depositphotos_54195807-stock-photo-sliced-fruits-on-plate-on.jpg",
    "https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=jXInOVcduhEnfuUVffbUacldkF5CwAeThD3MDUXCItM=",
    "https://st2.depositphotos.com/1177973/5419/i/450/depositphotos_54195807-stock-photo-sliced-fruits-on-plate-on.jpg",

  ];
  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? productImg.length - 1 : currentImg - 1);
  };

  const nextImg = () => {
    setCurrentImg(currentImg === productImg.length - 1 ? 0 : currentImg + 1);
  };

  // Product Quantity
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) setQuantity(value);
  };

  // Wishlist
  const [clicked, setClicked] = useState(false);
  const handleWishClick = () => setClicked(!clicked);

  // Product Details
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const productDetails = {
      productID: 14,
      productName: "Kissan Organic Food Package",
      productPrice: 150,
      frontImg: productImg[0],
      productReviews: "10k+ reviews",
    };

    const productInCart = cartItems.find(
      (item) => item.productID === productDetails.productID
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error("Product limit reached", { duration: 2000 });
    } else {
      dispatch(addToCart(productDetails));
      toast.success("Added to cart!", { duration: 2000 });
    }
  };

  return (
    <div className="productSection">
      <div className="productShowCase">
        <div className="productGallery">
          <div className="productThumb">
            {productImg.map((img, index) => (
              <img key={index} src={img} onClick={() => setCurrentImg(index)} alt="Product" />
            ))}
          </div>
          <div className="productFullImg">
            <img src={productImg[currentImg]} alt="Product" />
            <div className="buttonsGroup">
              <button onClick={prevImg} className="directionBtn">
                <GoChevronLeft size={18} />
              </button>
              <button onClick={nextImg} className="directionBtn">
                <GoChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="productDetails">
          <div className="productName">
            <h1>Kissan Organic Food Package</h1>
          </div>
          <div className="productRating">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#FEC78A" size={10} />
            ))}
            <p>10k+ reviews</p>
          </div>
          <div className="productPrice">
            <h3>150</h3>
          </div>
          <div className="productDescription">
            <p>
              Enjoy fresh, organic, and high-quality food products from Kissan. 
              Our food package includes a variety of fresh fruits, vegetables, and grains.
            </p>
          </div>
          <div className="productCartQuantity">
            <div className="productQuantity">
              <button onClick={decrement}>-</button>
              <input type="text" value={quantity} onChange={handleInputChange} />
              <button onClick={increment}>+</button>
            </div>
            <div className="productCartBtn">
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
          <div className="productWishShare">
            <div className="productWishList">
              <button onClick={handleWishClick}>
                <FiHeart color={clicked ? "red" : ""} size={17} />
                <p>Add to Wishlist</p>
              </button>
            </div>
            <div className="productShare">
              <PiShareNetworkLight size={22} />
              <p>Share</p>
            </div>
          </div>
          <div className="productTags">
            <p>
              <span>SKU: </span>KISSAN1234
            </p>
            <p>
              <span>CATEGORIES: </span>Organic Food, Fresh Produce
            </p>
            <p>
              <span>TAGS: </span>organic, fresh, healthy, food
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
