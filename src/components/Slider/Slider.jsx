import React, {useState} from 'react';
import {EastOutlined, WestOutlined} from "@mui/icons-material";
import "./Slider.scss"

const Slider = () => {
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",

    ]
    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(2);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
        console.log(currentSlide);
    }

    const nextSlide = () => {
        if (currentSlide === 2) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
        console.log(currentSlide);

    }


    return (
        <div className='slider'>
            <div className='container' style={{translate: - 100 * currentSlide + 'vw'}}>
                <img src={data[0]} alt=""/>
                <img src={data[1]} alt=""/>
                <img src={data[2]} alt=""/>


            </div>
            <div className='icons'>
                <div className='icon' onClick={previousSlide}>
                    <WestOutlined/>
                </div>
                <div className='icon' onClick={nextSlide}>
                    <EastOutlined/>
                </div>

            </div>

        </div>
    );
};

export default Slider;