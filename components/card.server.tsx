import React from "react";

type CardType = {
  imgUrl: string;
  title: string;
  price: string;
};

const Card = ({ imgUrl, title, price }: CardType) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Card;
