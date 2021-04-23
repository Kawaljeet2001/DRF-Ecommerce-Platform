import React from "react";
import "./SearchPage.css";
import ProductCard from "../../Components/ProductCard";
import CategoryMenu from "../../Components/CategoryMenu";
import Loader from "../../Components/Loader";
import axios from "axios";
import {useLocation} from "react-router-dom";


const SearchPage = () => {
  const token = useLocation().state;
  const [Products, setProducts] = React.useState([]);
  const [PageNumber , setPageNumber] = React.useState(1);
  const [TogglePage , setTogglePage] = React.useState(false);

  async function fetchonpagechange(url)
  {
    try{
      const res = await axios.get(url)
      setProducts(res.data);
    }catch(e)
    {
      console.log(e);
    }
  }

  function changePageNumber(e)
  {
    var button = e.target.id;
    
    if(button === "prev")
    {
      if(PageNumber > 1)
      {setTogglePage(true)
      setPageNumber(PageNumber - 1)}
      // fetchonpagechange(Products.next)
    }

    if(button == "next")
    {
      if(PageNumber < Products.count)
      {setTogglePage(false)
      setPageNumber(PageNumber + 1)}
      
    }

    
  }

 
  async function getproducts()
  {
      try{
        const res = await axios.get("/products");
        setProducts(res.data);
      }catch(e){
          console.log(e);
      }
  }
  React.useEffect(() => {
        getproducts()
        document.getElementsByClassName("Navbar")[0].style.display = "flex";
  }, [])

  React.useEffect(() => {
    //TogglePage = Fasle means next clicked
    //TogglePage = True means previous clicked

    if(!TogglePage)
    fetchonpagechange(Products.next)    

    else
    fetchonpagechange(Products.previous)
  } , [PageNumber])
  return (
    <div className="SearchPage">
      <CategoryMenu />
      <div>
      {typeof(Products)? (
        <div className="product-card-container">
            {
                Products.results ? Products.results.map((product , index) => {
                    return <ProductCard
                      ProductInfo = {product}
                      key = {index}
                    />
                }) : null
            }
        </div>
        ) :
        <div className = "loader-holder"><Loader/></div>}
          <div className="pagination-control">
            <div onClick = {changePageNumber} id = "prev" >
              <p>Previous</p>
            </div>
            <div>

              {PageNumber}
            </div>
            <div onClick = {changePageNumber} id = "next">
            <p>Next</p>
            </div>
          </div>
        </div>
     </div>
  )
}

export default SearchPage;
