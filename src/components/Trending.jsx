// // export default function Trending() {
// //   const movies = [
// //     "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"
// //   ];

// //   return (
// //     <div className="bg-black px-6 md:px-20 py-12">
// //       <h2 className="text-white text-2xl font-semibold mb-6">
// //         Trending Now
// //       </h2>

// //       <div className="flex gap-4 overflow-x-auto scrollbar-hide">

// //         {movies.map((img, i) => (
// //           <div key={i} className="relative min-w-[160px] md:min-w-[200px]">

// //             <img
// //               src={`/src/assets/trending/${img}`}
// //               className="rounded-lg"
// //             />

// //             <h1 className="absolute bottom-2 left-2 text-white text-6xl font-bold opacity-80">
// //               {i + 1}
// //             </h1>

// //           </div>
// //         ))}

// //       </div>
// //     </div>
// //   );
// // }






// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function Trending() {
//   const movies = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({
//       left: -400,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({
//       left: 400,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="bg-black px-6 md:px-20 py-12 relative">
//       <h2 className="text-white text-2xl font-semibold mb-6">
//         Trending Now
//       </h2>

//       {/* LEFT BUTTON */}
//       <button
//         onClick={scrollLeft}
//         className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full hover:bg-black"
//       >
//         <ChevronLeft className="text-white" size={28} />
//       </button>

//       {/* RIGHT BUTTON */}
//       <button
//         onClick={scrollRight}
//         className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full hover:bg-black"
//       >
//         <ChevronRight className="text-white" size={28} />
//       </button>

//       {/* MOVIE LIST */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
//       >
//         {movies.map((img, i) => (
//           <div key={i} className="relative min-w-[160px] md:min-w-[200px]">
//             <img
//               src={`/src/assets/trending/${img}`}
//               className="rounded-lg"
//             />

//             <h1 className="absolute bottom-2 left-2 text-white text-6xl font-bold opacity-80">
//               {i + 1}
//             </h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/trending/1.jpg";
import img2 from "../assets/trending/2.jpg";
import img3 from "../assets/trending/3.jpg";
import img4 from "../assets/trending/4.jpg";
import img5 from "../assets/trending/5.jpg";
import img6 from "../assets/trending/6.jpg";
import img7 from "../assets/trending/7.jpg";

export default function Trending() {

  const scrollRef = useRef(null);

  // const movies = [
  //   "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"
  // ];
  const movies = [
    img1,img2,img3,img4,img5,img6,img7
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black px-6 md:px-20 py-12 relative">

      <h2 className="text-white text-2xl font-semibold mb-6">
        Trending Now
      </h2>

      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full z-10"
      >
        <ChevronLeft className="text-white" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full z-10"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* MOVIE ROW */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {movies.map((img, i) => (
          <div key={i} className="relative min-w-[160px] md:min-w-[200px]">

            <img
              src={`${img}`}
              className="rounded-lg"
            />

            <h1 className="absolute bottom-2 left-2 text-white text-6xl font-bold opacity-80">
              {i + 1}
            </h1>

          </div>
        ))}
      </div>

    </div>
  );
}