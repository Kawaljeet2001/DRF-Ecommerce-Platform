import React from "react";
import "./CartPage.css";
import CartItem from "../../Components/CartItem";

const CartPage = () => {
  React.useEffect(() => {
    document.title = "DRF Commerce Shopping Cart";
  }, []);
  return (
    <div className="CartPage">
      <div className="Cart-item-holder">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className = "checkout">
          <h5><i className="fa fa-check" aria-hidden="true"></i> &nbsp;Your order is eligible for FREE Delivery. Select this option at checkout. </h5>
        <p>Subtotal (3 items): <b>Rs. 6000</b></p>

        <button>Proceed to Buy</button>
      </div>
    </div>
  );
};

export default CartPage;
