import React, { useState, useEffect } from "react";
import Movie from "../Components/Movie";
import Filter from "../Components/Filter";
import { motion, AnimatePresence } from "framer-motion";


export default function Work() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch(
      "./popular.json"
    );
    const movies = await data.json();
    console.log(movies);
    setPopularMovies(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
   <section id="Work">
    <h2>My Recent Works</h2>
    <p>Discover my latest creations, showcasing a diverse range of websites, apps, landing pages, and WordPress projects.<br></br> Each piece reflects my passion for innovation and attention to detail.</p>
      <Filter
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        popular={popularMovies}
        setFiltered={setFiltered}
      />
      <div className="container">
      <motion.div layout className="portfolio-box">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </AnimatePresence>
      </motion.div>
      </div>
    </section>
  );
}
