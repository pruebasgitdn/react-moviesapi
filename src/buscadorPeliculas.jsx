import { useState } from "react";

export const BuscadorComponent = () => {
  const API_KEY = `8ff118afb2d393db64b2960d8252c02f`;
  const urlBASE = `https://api.themoviedb.org/3/search/movie`;

  const [busqueda, setBusqueda] = useState(" ");
  const [pelicula, setPelicula] = useState([""]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const fetcPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBASE}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setPelicula(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetcPeliculas();
  };

  return (
    <div>
      <h1>Buscador de peliculas</h1>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Busca tu pelicula..."
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>

      <div className="movie-list">
        {pelicula.map((peli) => (
          <div key={peli.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
              alt={peli.title}
              srcset=""
            />
            <h2>{peli.title}</h2>
            <p>{peli.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
