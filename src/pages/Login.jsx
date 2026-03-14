// // // src/pages/Login.jsx
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";
// // // import { useNavigate } from "react-router-dom";

// // export default function Login() {
// //   const navigate = useNavigate();
// //   const { login } = useAuth();

// //   return (
// //     <div className="min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9b4c6f64-fc5c-4f31-a3f0-6c9e02c1b8d2/1f3e2c3d-hero.jpg')] bg-cover bg-center">
// //       <div className="min-h-screen bg-black/70 flex items-center justify-center">
// //         <div className="bg-black/75 p-10 rounded-md w-full max-w-md text-white">
// //           <h2 className="text-3xl font-bold mb-6">Sign In</h2>

// //           <input
// //             type="email"
// //             placeholder="Email or phone number"
// //             className="w-full p-3 mb-4 rounded bg-gray-800 focus:outline-none"
// //           />

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full p-3 mb-6 rounded bg-gray-800 focus:outline-none"
// //           />

// //           <button
// //             onClick={() => {
// //               login();
// //               navigate("/profiles");
// //             }}
// //           >
// //             Sign In
// //           </button>

// //           <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
// //             <label className="flex items-center gap-2">
// //               <input type="checkbox" />
// //               Remember me
// //             </label>
// //             <a href="#" className="hover:underline">
// //               Need help?
// //             </a>
// //           </div>

// //           <p className="text-gray-400 mt-6">
// //             New to Netflix?{" "}
// //             <span className="text-white cursor-pointer hover:underline">
// //               Sign up now.
// //             </span>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// import React, { useState } from "react";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <div className="relative h-screen w-full bg-black">
      
//       {/* Background Image */}
//       <img
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/5bbff3a3-49c4-4c38-a9be-b3d12e1ef6c0/9b7fd97e-dc52-4c28-8df2-fbff4e0e0ed5/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
//         alt="bg"
//         className="absolute w-full h-full object-cover opacity-40"
//       />

//       {/* Overlay */}
//       <div className="absolute w-full h-full bg-black/60 flex items-center justify-center">

//         {/* Card */}
//         <div className="bg-black/75 p-10 w-[380px] rounded-md">
//           <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//             <input
//               type="email"
//               name="email"
//               placeholder="Email or phone number"
//               value={form.email}
//               onChange={handleChange}
//               className="bg-[#333] text-white p-3 rounded outline-none"
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="bg-[#333] text-white p-3 rounded outline-none"
//             />

//             <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold">
//               Sign In
//             </button>
//           </form>

//           <div className="text-gray-400 text-sm mt-4 flex justify-between">
//             <label>
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <span className="cursor-pointer hover:underline">Need help?</span>
//           </div>

//           <p className="text-gray-400 mt-6">
//             New to Netflix?{" "}
//             <span className="text-white cursor-pointer hover:underline">
//               Sign up now
//             </span>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    const success = login(form.email, form.password);
    if (success) navigate("/profiles");
  };

  return (
    <div className="h-screen bg-[url('/src/assets/netflix-bg.jpg')] bg-cover bg-center">
      <div className="h-full w-full bg-black/70 flex items-center justify-center">

        <form
          onSubmit={handleSubmit}
          className="bg-black/80 p-10 rounded w-[380px]"
        >
          <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* <button className="w-full bg-red-600 py-3 rounded text-white font-semibold">
            Sign In
          </button> */}

            <button className="w-full bg-red-600 py-3 rounded text-white font-semibold"
             onClick={() => {
               login();
               navigate("/profiles");
             }}
          >
             Sign In
           </button>

          <p className="text-gray-400 mt-5">
            New to Netflix?{" "}
            <Link to="/register" className="text-white">
              Sign up now
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
}