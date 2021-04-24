import React from "react";
import "./ProductDetail.css";
import axios from "axios";
import Loader from "../Loader";
import UserContext from "../../UserContext";

const ProductDetailComponent = ({ id }) => {
  const [ProductInfo, setProductInfo] = React.useState();
  const { LoggedUser, UpdateUser } = React.useContext(UserContext);
  const [quantity , setquantity] = React.useState(1);
  const [Itemsize , setItemsize] = React.useState(false);

  async function additemtocart() {
    try {
      //getting the stored token
      var mylocalstorage = window.localStorage;
      var access = JSON.parse(mylocalstorage.getItem(LoggedUser));
      var token = access["access"];
      
      var cartitem = {
          "productid" : id,
          "quantity" : quantity,
          "size" : "M",
      }
      const res = await axios.post(
        "http://127.0.0.1:8000/cart",
        cartitem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function getProductDetails() {
    try {
      const res = await axios.get(`/product/${id}`);
      setProductInfo(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  React.useEffect(() => {
    getProductDetails();
  }, []);

  React.useEffect(() => {
    if (ProductInfo) document.title = `Buy ` + ProductInfo["Product-Info"].name;
  }, [ProductInfo]);
  return (
    <div className="Product-Detail">
      {ProductInfo ? (
        <div className="image-slider">
          {ProductInfo["Display-Images"].map((image, index) => {
            return (
              <div key = {index} className="display-image-holder">
                <img src={`http://127.0.0.1:8000` + image.image} />
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}

      {ProductInfo ? (
        <div className="info">
          <h2>{ProductInfo["Product-Info"].name}</h2>
          <div className="seperator">&nbsp;</div>
          <p className="price">Rs. {ProductInfo["Product-Info"].price}/-</p>
          <p className="taxes">inclusive of all taxes</p>
          <p className="description">
            {ProductInfo["Product-Info"].description}
          </p>
          <h4 className="brand">
            Brand&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;​ ​​
            {ProductInfo["Product-Info"].brand}
          </h4>
          <div className="colors">Colors</div>

          <div className="sizes">
            <p>SELECT SIZE</p>
            <div className="size-holder">
              {ProductInfo["Product-Info"].sizes.map((size, index) => {
                return (
                  <div
                    key={index}
                    onClick={(e) => {
                      var Productsize = e.target.getAttribute("data-size");
                      setItemsize(Productsize);
                    }}
                    className= {Itemsize === size['size'] ? "size-val size-val-selected" : "size-val"}
                    data-size = {size["size"]}
                  >
                    {size["size"]}
                  </div>
                );
              })}
            </div>
          </div>
          <div className = "quantity">
          <p>QUANTITY</p>
          <input type = "text" value = {quantity} onChange = {(e) => setquantity(e.target.value)} />
          </div>
          <div className="buttons">
            <button className="BuyNow">Add to Wishlist</button>
            <button onClick={additemtocart} className="Add-to-cart">
              Add to Cart&nbsp;&nbsp;
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
          </div>
          <div className="list-text">
            <li>100% Original Products</li>
            <li>Free Delivery on order above Rs. 799</li>
            <li>Pay on delivery might be available</li>
            <li>Easy 30 days returns and exchanges</li>
            <li>Try & Buy might be available</li>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductDetailComponent;
