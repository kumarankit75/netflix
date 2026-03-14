import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-20 py-4">

        {/* LOGO */}
        <h1 className="text-red-600 text-3xl font-bold tracking-widest">
          NETFLIX
        </h1>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <select className="bg-black/60 text-white border px-3 py-1 rounded">
            <option>English</option>
          </select>

          <button className="bg-red-600 px-4 py-1 rounded text-white font-semibold">
            Sign In
          </button>

        </div>

      </div>
    </div>
  );
}