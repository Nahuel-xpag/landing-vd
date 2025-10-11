import React, { useState, useEffect } from "react";

export default function Slideshow({ images }) {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex( prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Cambia de imagen cada 3 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slideshow">
            <img src={images[index]} alt={`Slide ${index + 1}`} />
        </div>
    )

}