import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
//

const Armes = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(5);

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://eldenring.fanapis.com/api/weapons?limit=307")
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="armes">
      <h1>Les armes d'Elden rinG</h1>
      {/* input de type barre machin */}
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="100"
          defaultValue={rangeValue}
          //Attribue la valeur de l'input à rangeValue
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>

      <ul>
        {data.slice(0, rangeValue).map((arme, index) => (
          <Card key={index} arme={arme} />
        ))}
      </ul>
    </div>
  );
};

export default Armes;
