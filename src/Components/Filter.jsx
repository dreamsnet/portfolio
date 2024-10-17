import React, { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );

    setFiltered(filtered);
    console.log(filtered);
  }, [activeGenre, setFiltered, popular]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 1 ? "active" : ""}
        onClick={() => setActiveGenre(1)}
      >
        Websites
      </button>
      <button
        className={activeGenre === 2 ? "active" : ""}
        onClick={() => setActiveGenre(2)}
      >
        Wordpress
      </button>
      <button
        className={activeGenre === 3 ? "active" : ""}
        onClick={() => setActiveGenre(3)}
      >
        Landing Pages
      </button>
    </div>
  );
};

export default Filter;
