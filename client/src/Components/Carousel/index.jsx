import React from 'react'
import "./Carousel.css";
import {CarouselData} from "./ImageData";

const Carousel = () => {
    const [currentImage, setcurrentImage] = React.useState(0);
    const length = CarouselData.length
    const loopthroughimages = () =>{
        
        currentImage == length - 1 ? setcurrentImage(0) : setcurrentImage(currentImage + 1); 
    }

    React.useEffect(() => {
        var element = document.getElementById("carouselimage");
        setTimeout( () => {
            element.classList.toggle("Imagefade")
            loopthroughimages();
        }, 5000)
        element.classList.toggle("Imagefade")
    } , [currentImage])

    return (
        <div className = "Carousel">
            <img id = "carouselimage" className = 'carouselImage' src = {CarouselData[currentImage].image}/>
        </div>
    )
}

export default Carousel
