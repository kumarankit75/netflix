// src/pages/Watch.jsx
import { useNavigate, useParams } from "react-router-dom";

export default function Watch() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="bg-black min-h-screen">
      <button
        onClick={() => navigate("/home")}
        className="absolute top-6 left-6 z-50 bg-black/60 text-white px-4 py-2 rounded hover:bg-black/80"
      >
        ← Back
      </button>

      <video className="w-full h-screen object-contain" controls autoPlay>
        {/* Dummy sample video */}
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
