import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="box">
      <div className='image'>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      </div>
      <div className="content">
        <Link to={`/product/${product._id}`}>
          <h1>{product.name}</h1>
        </Link>
        <div className='stars'>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </div>
        <div className="row">
          <div className="price">{product.price}&nbsp;<u>đ</u></div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
