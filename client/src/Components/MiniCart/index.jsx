import React from 'react'
import "./Minicart.css";
import {Link} from 'react-router-dom';
import CartItem from "../MiniCartItem"

const index = () => {
    return (
        <div className = "MiniCart">
            <h2>Cart</h2>
            <div className = "cart-items-container">
                <CartItem/>
                <CartItem/>
            </div>
            <Link className = "Link">Checkout &nbsp;&nbsp;<i className="fa fa-credit-card-alt fa-sm" aria-hidden="true"></i>
</Link>
        </div>
    )
}

export default index
