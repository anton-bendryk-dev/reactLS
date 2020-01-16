import React from 'react';
import slide2 from '../../pictures/slide2.jpg';
import './slide.css';
const Slide = () => {
    return (
        <div className="slide row">
            <div className="slide-container">
                <div className="main-slide">
                    <div id="axis" class="two">
                        <img class="object van move-left" src={slide2} alt=""/>/>
                    </div>
                </div>	
            </div>
        </div> 
    )
}
export default Slide