import React from "react";

const Logo = () => {
  return (
    <div>
      <div className="logo">
        {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
        <img src="./eldenlogo.png" alt="logo react" />
        <h3>Elden rinG ENCYCLOPEDIA</h3>
      </div>
    </div>
  );
};

export default Logo;
