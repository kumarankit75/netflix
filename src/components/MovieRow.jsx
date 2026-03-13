// src/components/MovieRow.jsx
import { useState } from "react";
import MovieModal from "./MovieModal";

export default function MovieRow({ title, movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-white text-xl font-semibold mb-3 px-6">{title}</h2>

        <div className="flex gap-4 overflow-x-scroll px-6 scrollbar-hide">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={movie.poster}
              alt={movie.name}
              onClick={() => setSelectedMovie(movie)}
              className="w-48 rounded cursor-pointer hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}
