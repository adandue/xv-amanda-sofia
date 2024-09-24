import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import sofi1 from '../../assets/sofi-1.jpeg'
import sofi2 from '../../assets/sofi-2.jpeg'
import sofi3 from '../../assets/sofi-3.jpeg'
import sofi4 from '../../assets/sofi-4.jpeg'
import sofi5 from '../../assets/sofi-5.jpeg'
import sofi6 from '../../assets/sofi-6.jpeg'
import sofi7 from '../../assets/sofi-7.jpeg'
import sofi8 from '../../assets/sofi-8.jpeg'
import sofi9 from '../../assets/sofi-9.jpeg'
import sofi10 from '../../assets/sofi-10.jpeg'
import sofi11 from '../../assets/sofi-11.jpeg'
import sofi12 from '../../assets/sofi-12.jpeg'
import sofi13 from '../../assets/sofi-13.jpeg'
import sofi14 from '../../assets/sofi-14.jpeg'
import sofi15 from '../../assets/sofi-15.jpeg'
import sofi16 from '../../assets/sofi-16.jpeg'
import sofi17 from '../../assets/sofi-17.jpeg'
import sofi18 from '../../assets/sofi-18.jpeg'
import sofi19 from '../../assets/sofi-19.jpeg'
import sofi20 from '../../assets/sofi-20.jpeg'
import sofi21 from '../../assets/sofi-21.jpeg'
import sofi22 from '../../assets/sofi-22.jpeg'
import sofi23 from '../../assets/sofi-23.jpeg'
import sofi24 from '../../assets/sofi-24.jpeg'
import sofi25 from '../../assets/sofi-25.jpeg'
import sofi26 from '../../assets/sofi-26.jpeg'
import sofi27 from '../../assets/sofi-27.jpeg'
import sofi28 from '../../assets/sofi-28.jpeg'
import sofi29 from '../../assets/sofi-29.jpeg'
import sofi30 from '../../assets/sofi-30.jpeg'
import sofi31 from '../../assets/sofi-31.jpeg'
import sofi32 from '../../assets/sofi-32.jpeg'

import './slider.css'

const Slider = () => {
    const images = [
        sofi1,
        sofi2,
        sofi3,
        sofi4,
        sofi5,
        sofi6,
        sofi7,
        sofi8,
        sofi9,
        sofi10,
        sofi11,
        sofi12,
        sofi13,
        sofi14,
        sofi15,
        sofi16,
        sofi17,
        sofi18,
        sofi19,
        sofi20,
        sofi21,
        sofi22,
        sofi23,
        sofi24,
        sofi25,
        sofi26,
        sofi27,
        sofi28,
        sofi29,
        sofi30,
        sofi31,
        sofi32,
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length-1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex ===0
        const newIndex = isFirstSlide ? images.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="slider">
            <div className="slider-content">
                <button className="left-arrow" onClick={goToPrevious}><FaAngleLeft /></button>
                <div className="slider-image">
                    <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
                </div>
                <button className="right-arrow" onClick={goToNext}><FaAngleRight /></button>
            </div>
        </div>
    )
}

export { Slider }