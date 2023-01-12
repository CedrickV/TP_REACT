import React from "react";

const Card = ({ arme }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={arme.image} alt={arme.name} />
      </div>
      <div className="card-text">
        <h2>{arme.name}</h2>
        <br />
        <p> {arme.description}</p>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">{arme.attack[0].amount}</div>
          <div className="type">ATTAQUE</div>
        </div>
        <div className="stat border">
          <div className="value">{arme.defence[0].amount}</div>
          <div className="type">DEFENCE</div>
        </div>
        <div className="stat">
          <div className="value">{arme.category}</div>
          <div className="type">CATEGORY</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
