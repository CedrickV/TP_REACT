import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <br />
      <h1>about</h1>
      <br />
      <h1>
        Ce site a été conçu dans un objectif éducatif en utilisant l'API d'Elden
        Ring : https://eldenring.fanapis.com
      </h1>
      <br />
    </div>
  );
};

export default Home;
