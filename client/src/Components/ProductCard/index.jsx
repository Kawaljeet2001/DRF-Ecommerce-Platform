import React from 'react';
import "./productcard.css";
import image from "../../3_1.jpg"
const index = () => {
    return (
        <div className = "product-card">
            <div className = "thumbnail">
                <img src={image} alt=""/>
            </div>
            <div className = "name-price">
                <p>WROGN Navy Printed Polo T-shirt</p>
                <h6 >Rs. 999</h6>
            </div>
        </div>
    )
}

export default index
