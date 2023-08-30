import React from 'react';
import "./styles/Product.css";
import { useStateValue } from './StateProvider';

const Product = ({id, title, image, price, quantity,  rating}) => {
  const [{ basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
      },
    });
  };
  return (
    <div className="product">
    <div className="product__info">
      <p>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong> <hr/> <strong>{quantity} Items left</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>🌟</p>
          ))}
      </div>
    </div>

    <img src={image} alt="" />

    <button onClick={addToBasket}>Add to Basket</button>
  </div>
  )
}


export default Product