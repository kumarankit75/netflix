// src/components/Header.jsx
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-8 py-4 absolute w-full z-50">
      <h1
        className="text-red-600 text-3xl font-extrabold cursor-pointer"
        onClick={() => navigate("/")}
      >
        NETFLIX
      </h1>
      {/* <h1 className="text-red-600 text-3xl font-extrabold">NETFLIX</h1> */}
      <button
        onClick={() => navigate("/login")}
        className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
      >
        Sign In
      </button>
      {/* <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
        Sign In
      </button> */}
    </header>
  );
}

// src/components/Header.jsx

// export default function Header() {
//   const navigate = useNavigate();

//   return (
//     <header className="flex items-center justify-between px-8 py-4 absolute w-full z-50">

//     </header>
//   );
// }
