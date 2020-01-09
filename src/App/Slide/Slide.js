import React from 'react';
import slide2 from 'src\pictures\slide2.jpg';
import 'src\App\Slide\slide.css';
const Slide = () => {
    return (
        <div className="slide row">
            <div className="slide-container">
                <div className="main-slide"><img src={slide2} alt=""/></div>	
            </div>
        </div> 
    )
}
export default Slide