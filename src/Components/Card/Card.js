import React from 'react';
import './Card.css';

const Card = ({ purchase }) => {
  const { name, img, price, description } = purchase;
  return (
    <article className="purchase-card">
      <div className="purchase-image">
      <img src={img} alt={`${name} that was bought`} />
      </div>

      <div className="purchase-info">
      <h3>{name}</h3>
      <p>Description: {description}</p>
      </div>

      <div className="purchase-price">
      <h3>Price {price}</h3>
      </div>

    </article>
  )
}

export default Card;