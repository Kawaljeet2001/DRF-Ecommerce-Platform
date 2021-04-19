import React from 'react'
import "./MiniCartItem.css";

function trimstring(str)
{
    var len = str.length
    
}
const index = () => {
    return (
        <div className = "Mini-cart-item">
           <h4>Lifelong Glass Top 3 Burner Gas Stove, Manual Ignition, Black (ISI Certified, Door Step Service)</h4> 
           <div className = "quantity-control">
               quantity control
           </div>
           <button className = "item-delete">
               <i className="fa fa-lg fa-trash-o" aria-hidden="true"></i>
            </button>           
        </div>
    )
}

export default index
