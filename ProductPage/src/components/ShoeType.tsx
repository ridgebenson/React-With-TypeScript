import React from 'react'
import img from '../assets/1.png'

const ShoeType: React.FC = () => {
    return (
        <div className="shoe-type-container">
            <img src={img} alt="Shoe" className="shoe-image" />
        </div>
    );
}

export default ShoeType;