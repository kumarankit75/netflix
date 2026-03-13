// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9b4c6f64-fc5c-4f31-a3f0-6c9e02c1b8d2/1f3e2c3d-hero.jpg')] bg-cover bg-center">
      <div className="min-h-screen bg-black/70 flex items-center justify-center">
        <div className="bg-black/75 p-10 rounded-md w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>

          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 rounded bg-gray-800 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-800 focus:outline-none"
          />

          <button
            onClick={() => {
              login();
              navigate("/profiles");
            }}
          >
            Sign In
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <p className="text-gray-400 mt-6">
            New to Netflix?{" "}
            <span className="text-white cursor-pointer hover:underline">
              Sign up now.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
