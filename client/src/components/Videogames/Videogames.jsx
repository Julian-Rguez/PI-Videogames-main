import React from "react";
import Card from "../../components/Card/Card";
import "./Videogames.css"

export default function Videogames ({videogames}) {
  return (
    <div className="showing">
      {videogames.length > 0 ?
      videogames.map((data) => (<Card data={data} />))
      : <h3>Espere...</h3>
      }
    </div>
  );
};

