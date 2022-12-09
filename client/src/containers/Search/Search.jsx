import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchGames } from "../../stateGlobal/action/index";
import Videogames from "../../components/Videogames/Videogames";
import { Pagination } from "../../components/Pagination/Pagination";
import "./Search.css";

export default function Search() {
  const dispatch = useDispatch();
  let { name } = useParams()

  const searchVideogame = useSelector((state) => state.searchVideogameByName);

  useEffect(() => {
    dispatch(searchGames(name));
  }, [name]); 
  
  // Paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(10);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = searchVideogame.slice(firtsCardPerPage, lastCardPerPage);
  console.log(videogamesPerPage, searchVideogame.length,  paginate);
  return (
    <div className="search">
        {searchVideogame.length > 0 ?
        <>
          <h1>Results with {name}!</h1>
          <Videogames videogames={currentPageGames} />
          <Pagination
            videogamesPerPage={videogamesPerPage}
            totalVideogames={searchVideogame.length}
            paginate={paginate}
          />
        </>
        : <h3>cargando...</h3>
        }
    </div>
  )
};