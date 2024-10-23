import React, { useState } from 'react';

const ShoeDetails: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState(40);

  const colors = ['black', 'blue', 'orange', 'pink'];
  const sizes = [40, 41, 42, 43, 44, 45];

  return (
    <div className="shoe-details-container">
      <h2>Product Name</h2>
      <p>More info</p>
      <p>PRODUCT DESCRIPTION 
      _______________________
      </p>

      <div className="color-selection">
        <p>COLOUR</p>
        <div className="colors">
          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className={color === selectedColor ? 'selected' : ''}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div className="size-selection">
        <p>SIZE</p>
        <div className="sizes">
          {sizes.map((size) => (
            <button
              key={size}
              className={size === selectedSize ? 'selected' : ''}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <p className="price">€ 45,95</p>
      <button className="buy-button">BUY</button>
    </div>
  );
};

export default ShoeDetails;
