// // // import React, { useState } from "react";

// // // const Register = () => {
// // //   const [form, setForm] = useState({ email: "", password: "" });

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log(form);
// // //   };

// // //   return (
// // //     <div className="relative h-screen w-full bg-black">

// // //       {/* Background */}
// // //       <img
// // //         src="https://assets.nflxext.com/ffe/siteui/vlv3/5bbff3a3-49c4-4c38-a9be-b3d12e1ef6c0/9b7fd97e-dc52-4c28-8df2-fbff4e0e0ed5/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
// // //         alt="bg"
// // //         className="absolute w-full h-full object-cover opacity-40"
// // //       />

// // //       {/* Overlay */}
// // //       <div className="absolute w-full h-full bg-black/60 flex items-center justify-center">

// // //         <div className="bg-black/75 p-10 w-[380px] rounded-md">
// // //           <h1 className="text-white text-3xl font-bold mb-6">Sign Up</h1>

// // //           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

// // //             <input
// // //               type="email"
// // //               name="email"
// // //               placeholder="Email address"
// // //               value={form.email}
// // //               onChange={handleChange}
// // //               className="bg-[#333] text-white p-3 rounded outline-none"
// // //             />

// // //             <input
// // //               type="password"
// // //               name="password"
// // //               placeholder="Create password"
// // //               value={form.password}
// // //               onChange={handleChange}
// // //               className="bg-[#333] text-white p-3 rounded outline-none"
// // //             />

// // //             <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold">
// // //               Get Started
// // //             </button>
// // //           </form>

// // //           <p className="text-gray-400 mt-6 text-sm">
// // //             By signing up, you agree to our Terms & Privacy Policy.
// // //           </p>
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Register;





// // import { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// // export default function Register() {
// //   const { register } = useAuth();
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({ email: "", password: "" });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (!form.email || !form.password) {
// //       alert("Fill all fields");
// //       return;
// //     }

// //     register(form.email, form.password);
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="h-screen bg-[url('/src/assets/netflix-bg.jpg')] bg-cover bg-center">
// //       <div className="h-full w-full bg-black/70 flex items-center justify-center">

// //         <form className="bg-black/80 p-10 rounded w-[380px]" onSubmit={handleSubmit}>
// //           <h1 className="text-white text-3xl font-bold mb-6">Sign Up</h1>

// //           <input
// //             type="email"
// //             placeholder="Email"
// //             className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
// //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// //           />

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
// //             onChange={(e) => setForm({ ...form, password: e.target.value })}
// //           />

// //           <button className="w-full bg-red-600 py-3 rounded text-white font-semibold">
// //             Sign Up
// //           </button>

// //           <p className="text-gray-400 mt-5">
// //             Already have account?{" "}
// //             <Link to="/login" className="text-white">
// //               Sign in
// //             </Link>
// //           </p>
// //         </form>

// //       </div>
// //     </div>
// //   );
// // }



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Register() {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email) {
//       alert("Enter email or mobile");
//       return;
//     }

//     register(email, "123456"); // temp password (real netflix style step flow)
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#3b0000] via-black to-black text-white">

//       {/* HEADER */}
//       <div className="px-10 py-6">
//         <h1 className="text-red-600 text-3xl font-bold tracking-widest">
//           NETFLIX
//         </h1>
//       </div>

//       {/* CENTER CONTENT */}
//       <div className="flex flex-col items-center justify-center mt-16 px-4">

//         <div className="w-full max-w-md">

//           <h1 className="text-3xl font-bold mb-2">
//             Enter your info to sign in
//           </h1>

//           <p className="text-gray-300 mb-6">
//             Or get started with a new account.
//           </p>

//           <form onSubmit={handleSubmit}>

//             <input
//               type="text"
//               placeholder="Email or mobile number"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-4 bg-black border border-gray-600 rounded mb-4 outline-none focus:border-white"
//             />

//             <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
//               Continue
//             </button>

//           </form>

//           {/* HELP */}
//           <p className="mt-6 text-gray-300 cursor-pointer">
//             Get Help ▼
//           </p>

//           {/* CAPTCHA TEXT */}
//           <p className="text-xs text-gray-400 mt-6">
//             This page is protected by Google reCAPTCHA to ensure you're not a
//             bot.{" "}
//             <span className="text-blue-400 cursor-pointer">Learn more.</span>
//           </p>

//         </div>

//       </div>

//       {/* FOOTER */}
//       <footer className="mt-24 px-10 pb-10 text-gray-400">

//         <p className="mb-6">
//           Questions? Call 000-800-919-1743 (Toll-Free)
//         </p>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

//           <p className="cursor-pointer hover:underline">FAQ</p>
//           <p className="cursor-pointer hover:underline">Help Centre</p>
//           <p className="cursor-pointer hover:underline">Terms of Use</p>
//           <p className="cursor-pointer hover:underline">Privacy</p>

//           <p className="cursor-pointer hover:underline">Cookie Preferences</p>
//           <p className="cursor-pointer hover:underline">Corporate Information</p>

//         </div>

//         {/* LANGUAGE BUTTON */}
//         <div className="mt-6">
//           <button className="border border-gray-500 px-4 py-2 rounded">
//             🌐 English
//           </button>
//         </div>

//       </footer>

//     </div>
//   );
// }






import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../components/AuthFooter";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Enter email or mobile");
      return;
    }

    register(email, "123456"); // temp password
    navigate("/profiles");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b0000] via-black to-black">

      {/* HEADER */}
      <div className="px-6 md:px-20 py-6">
        <h1 className="text-red-600 text-3xl font-bold tracking-widest">
          NETFLIX
        </h1>
      </div>

      {/* FORM SECTION */}
      <div className="flex flex-col items-center justify-center text-center px-4">

        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-2">
          Enter your info to sign in
        </h1>

        <p className="text-gray-400 mb-6">
          Or get started with a new account.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-4 bg-black border border-gray-600 rounded text-white mb-4 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded text-white font-semibold">
            Continue
          </button>

        </form>

        <p className="text-gray-400 mt-6 cursor-pointer">
          Get Help ▾
        </p>

        <p className="text-gray-500 text-sm mt-6 max-w-md">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-500 cursor-pointer"> Learn more.</span>
        </p>

      </div>

      {/* FOOTER */}
      <AuthFooter />

    </div>
  );
}