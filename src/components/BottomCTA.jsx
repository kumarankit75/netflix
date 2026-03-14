export default function BottomCTA() {
  return (
    <div className="bg-black px-6 md:px-20 py-12 text-center">

      <p className="text-white mb-6">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="flex flex-col md:flex-row gap-3 justify-center max-w-2xl mx-auto">

        <input
          placeholder="Email address"
          className="flex-1 p-4 bg-black border border-gray-500 text-white rounded"
        />

        <button className="bg-red-600 px-6 py-4 text-white font-bold rounded">
          Get Started →
        </button>

      </div>

    </div>
  );
}