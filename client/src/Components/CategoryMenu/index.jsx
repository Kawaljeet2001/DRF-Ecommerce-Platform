import React from 'react'
import "./CategoryMenu.css";


const CategoryMenu = () => {
    return (
        <div className = "CategoryMenu">
            <p>FILTERS</p>
            <div className = "seperator"></div>
            <p>CATEGORIES</p>
            <div className = "categories-options">
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;All Products</h4>
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;Home Appliances</h4>
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;Clothing and Apperals</h4>
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;Gadgets</h4>
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;Footwear</h4>
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;Watches</h4>
            </div>
            <div className = "seperator"></div>
            <p>PRICE</p>
            <div className = "categories-options">
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;Rs. 500 to Rs. 1000</h4>
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;Rs. 1000 to Rs. 2200</h4>
                <h4><input type = "checkbox"/>&nbsp;&nbsp;&nbsp;Rs. 2200 - above</h4>
            </div>
            {/* <div className = "seperator"></div> */}

        </div>
    )
}

export default CategoryMenu
