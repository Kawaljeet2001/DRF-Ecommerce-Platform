import React from 'react';
import "./ProductDetail.css";

const ProductDetailComponent = ({ProductInfo , DisplayImages}) => {
    return (
        <div className = "Product-Detail">
            <div className = "image-slider">
                {DisplayImages.map((image , index) => {
                    return <div className = "display-image-holder"><img src = {`http://127.0.0.1:8000` + image.image}/></div>
                })}
           </div>
            <div className = "info">
                <h2>{ProductInfo.name}</h2>
                <hr></hr>
                <p className = "price">Rs. {ProductInfo.price}</p>
                <p className = "taxes">inclusive of all taxes</p>
                <p className = "description">{ProductInfo.description}</p>
                <h4 className = "brand">Brand&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;​ ​​{ProductInfo.brand}</h4>
                <div className = "colors">
                 Colors
                </div>

                <div className = "sizes">
                    <p>SELECT SIZE</p>
                    <div className = "size-holder">
                        {
                            ProductInfo.sizes_available.map((size , index) => {
                                return <div key = {index} onClick = {() => {console.log("clicked")}} className = "size-val">
                                            {size}
                                        </div>
                            })
                        }
                    </div>
                </div>
                {/* <h6 className = "stock">Stock Available: {ProductInfo.stock}</h6> */}
                <div className = "buttons">
                    <button className = "BuyNow">Buy Now</button>
                    <button className = "Add-to-cart">Add to Cart&nbsp;&nbsp;<i className="fa fa-cart-plus" aria-hidden="true"></i></button>
                </div>
                <div className = "list-text">
                    <li>
                        100% Original Products
                    </li>
                    <li>
                        Free Delivery on order above Rs. 799                    
                    </li>
                    <li>
                        Pay on delivery might be available
                    </li>
                    <li>
                        Easy 30 days returns and exchanges
                    </li>
                    <li>
                        Try & Buy might be available
                    </li>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent
