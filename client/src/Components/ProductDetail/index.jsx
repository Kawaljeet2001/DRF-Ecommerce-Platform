import React from 'react';
import "./ProductDetail.css";

const index = () => {
    return (
        <div className = "Product-Detail">
            <div className = "image-slider">
                <img src = "#"/>
            </div>
            <div className = "info">
                <h2>Lifelong Glass Top 3 Burner Gas Stove, Manual Ignition, Black (ISI Certified, Door Step Service)</h2>
                <p className = "price">$2149.0</p>
                <p className = "description">Lifelong gas stove with three burners is a highly efficient stove. The glass top is toughened to be shatter-proof. It looks elegant and adds charm to your kitchen. The burner stands are designed to be spill-proof, so you don’t have to worry about your vessels toppling over. The knobs are ergonomically designed for ease-of-use. Moreover, they are engineered to avoid leakage of gas to give you safe and efficient cooking experience. The compact design of the stove saves you a lot of counter-top space.</p>
                <h4 className = "brand">Brand&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;​ ​​Lifelong</h4>
                <div className = "colors">
                 Colors
                </div>
                <h6 className = "stock">Stock Available: 50</h6>
                <div className = "sizes">
                </div>
                <div className = "quantity">
                </div>
                <div className = "buttons">
                    <button className = "BuyNow">Buy Now</button>
                    <button className = "Add-to-cart">Add to Cart&nbsp;&nbsp;<i className="fa fa-cart-plus" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
}

export default index
