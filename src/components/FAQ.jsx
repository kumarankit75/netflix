import { useState } from "react";

export default function FAQ() {
  const faqs = [
    "What is Netflix?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch?"
  ];

  const [open, setOpen] = useState(null);

  return (
    <div className="bg-black px-6 md:px-20 py-12">

      <h2 className="text-white text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>

      {faqs.map((q, i) => (
        <div key={i} className="mb-3">

          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left bg-[#2d2d2d] text-white p-5 text-lg flex justify-between"
          >
            {q}
            <span>+</span>
          </button>

          {open === i && (
            <div className="bg-[#2d2d2d] text-gray-300 p-5">
              Sample answer text like Netflix layout.
            </div>
          )}

        </div>
      ))}

    </div>
  );
}