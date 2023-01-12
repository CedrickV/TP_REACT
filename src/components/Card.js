import React from "react";

const Card = ({ arme }) => {
  const armeInfo = [
    "Nom : " + arme.name,
    "Description : " + arme.description,
    "Catégorie : " + arme.category,
  ];
  return (
    <div className="card">
      <div className="img">
        <img src={arme.image} className="armeImg" alt={arme.name} />
      </div>
      <div className="text-attachment">
        <h5 className="cardName">{arme.name}</h5>
        <ul>
          {armeInfo.map((field, index) => (
            <li key={index} className="list-group-item">
              {field}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
