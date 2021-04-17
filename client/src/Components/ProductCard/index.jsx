import React from 'react';
import "./productcard.css";
import image from "../../1.jpg"
const index = () => {
    return (
        <div className = "product-card">
            <div className = "thumbnail">
                <img src = {image}/>
            </div>
            <div className = "name-price">
                <h4>Lifelong Glass Top 3 Burner Gas Stove, Manual Ignition, Black (ISI Certified, Door Step Service)</h4>
                <p>$2149.0</p>
            </div>
        </div>
    )
}

export default index
