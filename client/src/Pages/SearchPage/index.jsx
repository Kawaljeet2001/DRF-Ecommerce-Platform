import React from 'react'
import "./SearchPage.css";
import ProductCard from "../../Components/ProductCard";
import CategoryMenu from "../../Components/CategoryMenu";
import Loader from "../../Components/Loader";

const SearchPage = () => {
    return (
        <div className = "SearchPage">
            <CategoryMenu/>
            <div className = "product-card-container">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default SearchPage
