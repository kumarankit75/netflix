export default function AuthFooter() {
  return (
    <div className="bg-black text-gray-400 px-6 md:px-20 py-12 mt-20">
      
      <p className="mb-6">Questions? Call 000-800-919-1743</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

        <a href="#">FAQ</a>
        <a href="#">Help Centre</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>

        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>

      </div>

      <div className="mt-6">
        <select className="bg-black border border-gray-600 px-4 py-2 rounded">
          <option>English</option>
        </select>
      </div>

    </div>
  );
}