import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
   return (
      <div className="product">
         <Link to={`/product/${product._id}`}>
            <div className="img">
               <img src={product.image} alt={product.image} />
            </div>
         </Link>
         <div className="detail">
            <Link to={`/product/${product._id}`}>
               <h4>{product.name}</h4>
            </Link>
            <h5># {product.price}</h5>
         </div>
         <Rating
            rating={product.rating}
            numReviews={`${product.numReviews} reviews`}
         />
         <div className="button">
            <button className="btn btn-primary">Add to Cart</button>
         </div>
      </div>
   );
};

export default Product;
