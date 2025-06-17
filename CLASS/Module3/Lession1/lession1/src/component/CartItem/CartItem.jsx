import React from "react";

export const CartItem = ({ title, origin, image, category }) => {
  return (
    <div className="cart-item card h-100 shadow-sm">
      <img src={image} alt={title} className="card-img-top" />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        {origin && <p className="card-text text-muted">{origin}</p>}
        {category && <p className="text-warning">{category}</p>}
      </div>
    </div>
  );
};
