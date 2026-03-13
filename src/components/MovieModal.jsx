// src/components/MovieModal.jsx
import { useNavigate } from "react-router-dom";

export default function MovieModal({ movie, onClose }) {
  const navigate = useNavigate();
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-zinc-900 text-white rounded-lg w-full max-w-3xl overflow-hidden relative">
        <img
          src={movie.poster}
          alt={movie.name}
          className="w-full h-80 object-cover"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/60 rounded-full w-10 h-10"
        >
          ✕
        </button>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-3">{movie.name}</h2>

          <button
            onClick={() => navigate(`/watch/${movie.id}`)}
            className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300"
          >
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  );
}
