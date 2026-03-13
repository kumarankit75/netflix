// src/pages/ProfileSelect.jsx
import { useNavigate } from "react-router-dom";

const profiles = [
  { id: 1, name: "Ankit", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 2, name: "Kids", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 3, name: "Guest", avatar: "https://i.pravatar.cc/150?img=7" },
];

export default function ProfileSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl mb-10">Who’s watching?</h1>

      <div className="flex gap-10">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => navigate("/home")}
            className="cursor-pointer text-center group"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded hover:ring-4 hover:ring-white"
            />
            <p className="mt-3 text-gray-400 group-hover:text-white">
              {profile.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
