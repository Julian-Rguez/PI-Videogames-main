import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById } from "../../stateGlobal/action/index";
import "./GameDetail.css";

function GameDetail({ id }) {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogameById);

  useEffect(() => {
    dispatch(getVideogameById(id));
  }, []); 

  return (    
    <div className="full">
      <div className="info">
        <div className="image">
              {videogame.image === null || !videogame.image ?
              <h3>Sin imagen</h3>
              : <img src={videogame.image} alt={videogame.name} /> }
              <div>
                <h1>{videogame.name} </h1>
                <h5>({videogame.released})</h5>
              </div>
        </div>
        <div className="details">
          <div className="text">
            <h2>About this game:</h2>
            <p>{videogame.description}</p>
          </div>
          <div className="Genres">
            <div className="genres">
            It's an {videogame.genres} game ranked at {videogame.rating} points.  
            </div>
          </div>
          <div className="Platforms">
            <div className="platforms">
              <p>Play it at {videogame.platforms}.</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/home">
          <button className="button" type="submit">volver</button>
      </Link>
    </div>    
  );
}

export default GameDetail;