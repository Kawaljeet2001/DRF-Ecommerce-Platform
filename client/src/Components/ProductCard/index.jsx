import React from 'react';
import "./productcard.css";
import {Link} from "react-router-dom";

const index = ({ProductInfo}) => {
    return (
        <>
        <Link
            className = "product-card"
            to = {{
            pathname : `/product/${ProductInfo.id}`,
        }}
        >
            <div className = "thumbnail">
                <img src={ProductInfo.thumbnail} alt={ProductInfo.name}/>
            </div>
            <div className = "name-price">
                <p>{ProductInfo.name}</p>
                <h6>{ProductInfo.price}</h6>
            </div>
        </Link>
        </>
    )
}

export default index
