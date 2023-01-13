import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

const Armes = () => {
  const [data, setData] = useState([]);
  const rangeValue = useSelector((state) => state.rangeValue);
  const dispatch = useDispatch();
  // const history = useHistory();
  // const handleClick = (id) => {
  //   history.push(`/weapons/${id}`);
  // };

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://eldenring.fanapis.com/api/weapons?limit=307")
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="armes">
      <h1>Elden rinG WeaponS</h1>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="100"
          defaultValue={rangeValue}
          onChange={(e) =>
            dispatch({ type: "UPDATE_RANGE", payload: e.target.value })
          }
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
