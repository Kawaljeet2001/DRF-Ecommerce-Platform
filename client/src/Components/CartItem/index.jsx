import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";
import image from "../../3_1.jpg";
const CartItem = () => {
  return (
    <div className="CartItem">
      <div className="holder">
        <div className="item-image">
          <img src={image} />
        </div>
        <div className="info">
          <Link className = "product-name">Roadster : Men Teal Blue & Black Printed Round Neck T-shirt</Link>
          <h6>In Stock</h6>
          <p>
            <b>Brand: </b> ROADSTER
          </p>
          <p>
            <b>Size:</b> XL
          </p>
          <div className = "quantity-control">
            <input type = "text" value = {1} />
            <button>Update</button>
          </div>
        </div>
        
      </div>
      <p className="price">Rs. 479.00</p>
    </div>
  );
};

export default CartItem;
