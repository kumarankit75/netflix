// // import "./styles.css";
// // src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ProfileSelect from "./pages/ProfileSelect";
// import Home from "./pages/Home";
// import Watch from "./pages/Watch";

// // import { useNavigate } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profiles" element={<ProfileSelect />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/watch/:id" element={<Watch />} />
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/watch/:id"
//           element={
//             <ProtectedRoute>
//               <Watch />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// // src/App.jsx
// // import Landing from "./pages/Landing";

// // export default function App() {
// //   return (
// //   );
// // }

// // src/App.jsx



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}