import React, { ReactNode } from 'react';
import './ProductsWrapper.css';

type ProductsWrapperProps = {
    shoeType: ReactNode;
    shoeDetails: ReactNode;
};

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({shoeType, shoeDetails}) => {
  return (
    <div className="products-wrapper">
      <div className="shoe-type">
        {shoeType}
      </div>
      <div className="shoe-details">
        {shoeDetails}
      </div>
    </div>
  )
}

export default ProductsWrapper;