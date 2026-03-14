// // // // src/components/Hero.jsx
// // // export default function Hero() {
// // //   return (
// // //     <section className="h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9b4c6f64-fc5c-4f31-a3f0-6c9e02c1b8d2/1f3e2c3d-hero.jpg')] bg-cover bg-center">
// // //       <div className="h-full bg-black/60 flex flex-col items-center justify-center text-center px-4">
// // //         <h1 className="text-white text-5xl font-extrabold mb-4">
// // //           Unlimited movies, TV shows and more
// // //         </h1>
// // //         <p className="text-white text-xl mb-6">
// // //           Watch anywhere. Cancel anytime.
// // //         </p>

// // //         <div className="flex gap-2">
// // //           <input
// // //             type="email"
// // //             placeholder="Email address"
// // //             className="px-4 py-3 w-72 rounded text-black"
// // //           />
// // //           <button className="bg-red-600 text-white px-6 py-3 rounded text-lg hover:bg-red-700">
// // //             Get Started →
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }








// // export default function Hero() {
// //   return (
// //     <div className="relative h-screen">

// //       {/* BACKGROUND IMAGE */}
// //       <img
// //         src="/src/assets/netflix-bg.jpg"
// //         className="absolute w-full h-full object-cover"
// //       />

// //       {/* OVERLAY */}
// //       <div className="absolute w-full h-full bg-black/60"></div>

// //       {/* GRADIENT */}
// //       <div className="absolute w-full h-full bg-gradient-to-t from-black via-black/40 to-transparent"></div>

// //       {/* CONTENT */}
// //       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

// //         <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
// //           Unlimited movies, TV shows and more
// //         </h1>

// //         <p className="text-white text-lg md:text-xl mt-4">
// //           Watch anywhere. Cancel anytime.
// //         </p>

// //         <p className="text-white mt-4">
// //           Ready to watch? Enter your email to create or restart your membership.
// //         </p>

// //         {/* INPUT AREA */}
// //         <div className="flex flex-col md:flex-row gap-3 mt-6 w-full max-w-2xl">

// //           <input
// //             type="email"
// //             placeholder="Email address"
// //             className="flex-1 p-4 bg-black/70 border border-gray-500 text-white rounded"
// //           />

// //           <button className="bg-red-600 hover:bg-red-700 px-6 py-4 text-white font-bold rounded">
// //             Get Started →
// //           </button>

// //         </div>

// //       </div>

// //     </div>
// //   );
// // }




// import { useState } from "react";

// export default function Hero() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     if (!email) return setError("Email is required.");
//     setError("");
//     alert("Continue flow next 😎");
//   };

//   return (
//     <div className="relative h-screen">

//       {/* BG */}
//       <img
//         src="/src/assets/netflix-bg.jpg"
//         className="absolute w-full h-full object-cover"
//       />

//       {/* overlay */}
//       <div className="absolute w-full h-full bg-black/70"></div>

//       {/* content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">

//         <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
//           Unlimited movies, shows, and more
//         </h1>

//         <p className="text-white text-lg mt-4">
//           Starts at ₹149. Cancel at any time.
//         </p>

//         <p className="text-white mt-4">
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>

//         <div className="flex flex-col md:flex-row gap-3 mt-6 w-full max-w-2xl">

//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email address"
//             className={`flex-1 p-4 bg-black/70 border ${
//               error ? "border-red-500" : "border-gray-500"
//             } text-white rounded`}
//           />

//           <button
//             onClick={handleSubmit}
//             className="bg-red-600 hover:bg-red-700 px-6 py-4 text-white font-bold rounded"
//           >
//             Get Started →
//           </button>

//         </div>

//         {error && (
//           <p className="text-red-500 text-sm mt-2">{error}</p>
//         )}

//       </div>
//     </div>
//   );
// }







import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) return setError("Email is required.");
    setError("");
    alert("Continue flow next 😎");
  };

  return (
    <div className="relative h-screen">

      {/* BG */}
      <img
        src="/src/assets/hero.png"
        className="absolute w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute w-full h-full bg-black/70"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">

        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
          Unlimited movies, shows, and more
        </h1>

        <p className="text-white text-lg mt-4">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="text-white mt-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mt-6 w-full max-w-2xl">

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className={`flex-1 p-4 bg-black/70 border ${
              error ? "border-red-500" : "border-gray-500"
            } text-white rounded`}
          />

          <button
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-700 px-6 py-4 text-white font-bold rounded"
          >
            Get Started →
          </button>

        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

      </div>
    </div>
  );
}