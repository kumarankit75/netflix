// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9b4c6f64-fc5c-4f31-a3f0-6c9e02c1b8d2/1f3e2c3d-hero.jpg')] bg-cover bg-center">
      <div className="h-full bg-black/60 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl font-extrabold mb-4">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white text-xl mb-6">
          Watch anywhere. Cancel anytime.
        </p>

        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-3 w-72 rounded text-black"
          />
          <button className="bg-red-600 text-white px-6 py-3 rounded text-lg hover:bg-red-700">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
}
