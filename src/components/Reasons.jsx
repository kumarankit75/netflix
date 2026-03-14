// // // // // export default function Reasons() {
// // // // //   const data = [
// // // // //     {
// // // // //       title: "Enjoy on your TV",
// // // // //       desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV."
// // // // //     },
// // // // //     {
// // // // //       title: "Download shows",
// // // // //       desc: "Save favourites easily and always have something."
// // // // //     },
// // // // //     {
// // // // //       title: "Watch everywhere",
// // // // //       desc: "Stream unlimited movies and TV shows."
// // // // //     },
// // // // //     {
// // // // //       title: "Create profiles",
// // // // //       desc: "Send kids on adventures safely."
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <div className="bg-black px-6 md:px-20 py-12">

// // // // //       <h2 className="text-white text-2xl font-semibold mb-6">
// // // // //         More reasons to join
// // // // //       </h2>

// // // // //       <div className="grid md:grid-cols-4 gap-4">

// // // // //         {data.map((item, i) => (
// // // // //           <div key={i} className="bg-[#1a1a2e] p-6 rounded-lg">

// // // // //             <h3 className="text-white text-lg font-semibold mb-2">
// // // // //               {item.title}
// // // // //             </h3>

// // // // //             <p className="text-gray-400">{item.desc}</p>

// // // // //           </div>
// // // // //         ))}

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }








// // // // import { Tv, Download, Telescope, Smile } from "lucide-react";

// // // // export default function Reasons() {

// // // //   const data = [
// // // //     {
// // // //       title: "Enjoy on your TV",
// // // //       desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
// // // //       icon: Tv
// // // //     },
// // // //     {
// // // //       title: "Download your shows to watch offline",
// // // //       desc: "Save your favourites easily and always have something to watch.",
// // // //       icon: Download
// // // //     },
// // // //     {
// // // //       title: "Watch everywhere",
// // // //       desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
// // // //       icon: Telescope
// // // //     },
// // // //     {
// // // //       title: "Create profiles for kids",
// // // //       desc: "Send kids on adventures with their favourite characters in a space made just for them.",
// // // //       icon: Smile
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="bg-black px-6 md:px-20 py-14">

// // // //       {/* HEADING */}
// // // //       <h2 className="text-white text-2xl md:text-3xl font-semibold mb-8">
// // // //         More reasons to join
// // // //       </h2>

// // // //       {/* GRID */}
// // // //       <div className="grid md:grid-cols-4 gap-5">

// // // //         {data.map((item, i) => {
// // // //           const Icon = item.icon;

// // // //           return (
// // // //             <div
// // // //               key={i}
// // // //               className="
// // // //               relative p-7 rounded-2xl overflow-hidden
// // // //               bg-gradient-to-b from-[#1c1b3a] via-[#1a1330] to-[#120d1f]
// // // //               border border-white/5
// // // //               hover:scale-[1.02] transition duration-300
// // // //               "
// // // //             >

// // // //               {/* TEXT */}
// // // //               <h3 className="text-white text-lg font-semibold mb-3">
// // // //                 {item.title}
// // // //               </h3>

// // // //               <p className="text-gray-300 text-sm leading-relaxed">
// // // //                 {item.desc}
// // // //               </p>

// // // //               {/* ICON BOTTOM RIGHT */}
// // // //               <div className="absolute bottom-5 right-5 opacity-80">
// // // //                 <Icon className="text-pink-400 w-10 h-10" />
// // // //               </div>

// // // //             </div>
// // // //           );
// // // //         })}

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }








// // // export default function Reasons() {

// // //   const data = [
// // //     {
// // //       title: "Enjoy on your TV",
// // //       desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
// // //     },
// // //     {
// // //       title: "Download your shows to watch offline",
// // //       desc: "Save your favourites easily and always have something to watch."
// // //     },
// // //     {
// // //       title: "Watch everywhere",
// // //       desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
// // //     },
// // //     {
// // //       title: "Create profiles for kids",
// // //       desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
// // //     }
// // //   ];

// // //   return (
// // //     <div className="bg-black px-6 md:px-20 py-16">

// // //       {/* HEADING */}
// // //       <h2 className="text-white text-2xl md:text-[28px] font-semibold mb-10">
// // //         More reasons to join
// // //       </h2>

// // //       {/* GRID */}
// // //       <div className="grid md:grid-cols-4 gap-6">

// // //         {data.map((item, i) => (
// // //           <div
// // //             key={i}
// // //             className="
// // //             relative overflow-hidden rounded-2xl p-7
// // //             bg-[linear-gradient(180deg,#1c1b3a_0%,#17122b_60%,#120d1f_100%)]
// // //             border border-white/5
// // //             "
// // //           >

// // //             {/* TEXT */}
// // //             <h3 className="text-white text-lg font-semibold mb-3">
// // //               {item.title}
// // //             </h3>

// // //             <p className="text-gray-300 text-sm leading-relaxed max-w-[260px]">
// // //               {item.desc}
// // //             </p>

// // //             {/* GLOW EFFECT (BOTTOM RIGHT) */}
// // //             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full" />

// // //             {/* SMALLER PURPLE GLOW */}
// // //             <div className="absolute bottom-6 right-6 w-16 h-16 bg-purple-500/30 blur-2xl rounded-full" />

// // //           </div>
// // //         ))}

// // //       </div>

// // //     </div>
// // //   );
// // // }













// // import { Tv, Download, MonitorPlay, Smile } from "lucide-react";

// // export default function Reasons() {

// //   const data = [
// //     {
// //       title: "Enjoy on your TV",
// //       desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
// //       icon: Tv
// //     },
// //     {
// //       title: "Download your shows to watch offline",
// //       desc: "Save your favourites easily and always have something to watch.",
// //       icon: Download
// //     },
// //     {
// //       title: "Watch everywhere",
// //       desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
// //       icon: MonitorPlay
// //     },
// //     {
// //       title: "Create profiles for kids",
// //       desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
// //       icon: Smile
// //     }
// //   ];

// //   return (
// //     <div className="bg-black px-6 md:px-20 py-16">

// //       <h2 className="text-white text-2xl md:text-[28px] font-semibold mb-10">
// //         More reasons to join
// //       </h2>

// //       <div className="grid md:grid-cols-4 gap-6">

// //         {data.map((item, i) => {
// //           const Icon = item.icon;

// //           return (
// //             <div
// //               key={i}
// //               className="
// //               relative overflow-hidden rounded-2xl p-7
// //               bg-[linear-gradient(180deg,#1c1b3a_0%,#17122b_60%,#120d1f_100%)]
// //               border border-white/5
// //               hover:scale-[1.015] transition duration-300
// //               "
// //             >

// //               {/* TEXT */}
// //               <h3 className="text-white text-lg font-semibold mb-3">
// //                 {item.title}
// //               </h3>

// //               <p className="text-gray-300 text-sm leading-relaxed max-w-[260px]">
// //                 {item.desc}
// //               </p>

// //               {/* GLOW */}
// //               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full" />
// //               <div className="absolute bottom-6 right-6 w-16 h-16 bg-purple-500/30 blur-2xl rounded-full" />

// //               {/* ICON */}
// //               <Icon className="absolute bottom-6 right-6 w-12 h-12 text-pink-400 z-10" />

// //             </div>
// //           );
// //         })}

// //       </div>

// //     </div>
// //   );
// // }







// import { Tv, Download, MonitorPlay, Smile } from "lucide-react";

// export default function Reasons() {

// const data = [
// {
// title: "Enjoy on your TV",
// desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
// icon: Tv
// },
// {
// title: "Download your shows to watch offline",
// desc: "Save your favourites easily and always have something to watch.",
// icon: Download
// },
// {
// title: "Watch everywhere",
// desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
// icon: MonitorPlay
// },
// {
// title: "Create profiles for kids",
// desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
// icon: Smile
// }
// ];

// return ( <div className="bg-black px-6 md:px-20 py-16">

// ```
//   {/* HEADING */}
//   <h2 className="text-white text-2xl md:text-[28px] font-semibold mb-10">
//     More reasons to join
//   </h2>

//   {/* GRID */}
//   <div className="grid md:grid-cols-4 gap-6">

//     {data.map((item, i) => {
//       const Icon = item.icon;

//       return (
//         <div
//           key={i}
//           className="
//           relative overflow-hidden rounded-2xl
//           pt-7 px-7 pb-16
//           bg-[linear-gradient(180deg,#1c1b3a_0%,#17122b_60%,#120d1f_100%)]
//           border border-white/5
//           hover:scale-[1.015] transition duration-300
//           "
//         >

//           {/* TEXT */}
//           <h3 className="text-white text-lg font-semibold mb-3">
//             {item.title}
//           </h3>

//           <p className="text-gray-300 text-sm leading-relaxed max-w-[260px]">
//             {item.desc}
//           </p>

//           {/* GLOW BACKGROUND */}
//           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full" />
//           <div className="absolute bottom-5 right-5 w-16 h-16 bg-purple-500/30 blur-2xl rounded-full" />

//           {/* ICON */}
//           <Icon className="absolute bottom-5 right-5 w-12 h-12 text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)] z-10" />

//         </div>
//       );
//     })}

//   </div>

// </div>
// ```

// );
// }




import { Tv, Download, MonitorPlay, Smile } from "lucide-react";

export default function Reasons() {

  const data = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: Tv
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
      icon: Download
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: MonitorPlay
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: Smile
    }
  ];

  return (
    <div className="bg-black px-6 md:px-20 py-16">

      {/* Heading */}
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
        More reasons to join
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {data.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl pt-7 px-7 pb-16 border border-white/5 bg-gradient-to-b from-[#1c1b3a] via-[#17122b] to-[#120d1f] hover:scale-[1.015] transition duration-300"
            >

              {/* Text */}
              <h3 className="text-white text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-5 right-5 w-16 h-16 bg-purple-500/30 blur-2xl rounded-full"></div>

              {/* Icon */}
              <Icon className="absolute bottom-5 right-5 w-12 h-12 text-pink-400 z-10" />

            </div>
          );
        })}

      </div>

    </div>
  );
}