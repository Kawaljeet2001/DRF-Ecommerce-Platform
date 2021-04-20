import React from 'react'
import ProductDetailComp from "../../Components/ProductDetail";
import MiniCart from "../../Components/MiniCart";
import "./ProductDetailpage.css";

const ProductDetail = ({DisplayImages , ProductInfo }) => {
    return (
        <div className = "ProductDetailPage">
            <ProductDetailComp
           DisplayImages = {DisplayImages}
            ProductInfo = {ProductInfo}
            />
        </div>
    )
}

export default ProductDetail
