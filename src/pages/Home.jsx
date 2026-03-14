// // // src/pages/Home.jsx
// // import MovieRow from "../components/MovieRow";

// // const dummyMovies = [
// //   {
// //     id: 1,
// //     name: "Movie 1",
// //     poster: "https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
// //   },
// //   {
// //     id: 2,
// //     name: "Movie 2",
// //     poster: "https://image.tmdb.org/t/p/w500/9O1Iy9od7Z8Fqk5n8zP6h2Z9N6A.jpg",
// //   },
// //   {
// //     id: 3,
// //     name: "Movie 3",
// //     poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
// //   },
// //   {
// //     id: 4,
// //     name: "Movie 4",
// //     poster: "https://image.tmdb.org/t/p/w500/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
// //   },
// // ];

// // export default function Home() {
// //   return (
// //     <div className="bg-black min-h-screen pt-20">
// //       <MovieRow title="Trending Now" movies={dummyMovies} />
// //       <MovieRow title="Top Rated" movies={dummyMovies} />
// //       <MovieRow title="Netflix Originals" movies={dummyMovies} />
// //     </div>
// //   );
// // }





// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";

// export default function Home() {
//   return (
//     <div className="bg-black">
//       <Navbar />
//       <Hero />
//     </div>
//   );
// }









import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Reasons from "../components/Reasons";
import FAQ from "../components/FAQ";
import BottomCTA from "../components/BottomCTA";
import Footer from "../components/AuthFooter";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Trending />
      <Reasons />
      <FAQ />
      <BottomCTA />
      <Footer />
    </div>
  );
}