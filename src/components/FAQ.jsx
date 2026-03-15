// // // // import { useState } from "react";

// // // // export default function FAQ() {
// // // //   const faqs = [
// // // //     "What is Netflix?",
// // // //     "How much does Netflix cost?",
// // // //     "Where can I watch?",
// // // //     "How do I cancel?",
// // // //     "What can I watch?"
// // // //   ];

// // // //   const [open, setOpen] = useState(null);

// // // //   return (
// // // //     <div className="bg-black px-6 md:px-20 py-12">

// // // //       <h2 className="text-white text-2xl font-semibold mb-6">
// // // //         Frequently Asked Questions
// // // //       </h2>

// // // //       {faqs.map((q, i) => (
// // // //         <div key={i} className="mb-3">

// // // //           <button
// // // //             onClick={() => setOpen(open === i ? null : i)}
// // // //             className="w-full text-left bg-[#2d2d2d] text-white p-5 text-lg flex justify-between"
// // // //           >
// // // //             {q}
// // // //             <span>+</span>
// // // //           </button>

// // // //           {open === i && (
// // // //             <div className="bg-[#2d2d2d] text-gray-300 p-5">
// // // //               Sample answer text like Netflix layout.
// // // //             </div>
// // // //           )}

// // // //         </div>
// // // //       ))}

// // // //     </div>
// // // //   );
// // // // }






// // // import { useState } from "react";

// // // export default function Faq() {
// // //   const [activeIndex, setActiveIndex] = useState(null);

// // //   const faqs = [
// // //     {
// // //       question: "What is Netflix?",
// // //       answer:
// // //         "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.",
// // //     },
// // //     {
// // //       question: "How much does Netflix cost?",
// // //       answer:
// // //         "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month.",
// // //     },
// // //     {
// // //       question: "Where can I watch?",
// // //       answer:
// // //         "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on devices that offer the Netflix app.",
// // //     },
// // //     {
// // //       question: "How do I cancel?",
// // //       answer:
// // //         "Netflix is flexible. There are no contracts and no commitments. You can easily cancel your account online in two clicks.",
// // //     },
// // //     {
// // //       question: "What can I watch on Netflix?",
// // //       answer:
// // //         "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals, and more.",
// // //     },
// // //     {
// // //       question: "Is Netflix good for kids?",
// // //       answer:
// // //         "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies.",
// // //     },
// // //   ];

// // //   const toggleFAQ = (index) => {
// // //     setActiveIndex(activeIndex === index ? null : index);
// // //   };

// // //   return (
    
// // //     <section className="bg-black text-white py-16 px-4">
// // //       <div className="max-w-3xl mx-auto">
// // //         <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
// // //           Frequently Asked Questions
// // //         </h2>

// // //         <div className="space-y-2">
// // //           {faqs.map((faq, index) => (
// // //             <div key={index} className="bg-[#2d2d2d]">
// // //               {/* Question */}
// // //               <button
// // //                 onClick={() => toggleFAQ(index)}
// // //                 className="w-full text-left flex justify-between items-center p-5 text-lg md:text-xl font-medium hover:bg-[#414141] transition"
// // //               >
// // //                 {faq.question}

// // //                 <span className="text-3xl">
// // //                   {activeIndex === index ? "×" : "+"}
// // //                 </span>
// // //               </button>

// // //               {/* Answer */}
// // //               <div
// // //                 className={`overflow-hidden transition-all duration-500 ${
// // //                   activeIndex === index ? "max-h-40 p-5" : "max-h-0"
// // //                 }`}
// // //               >
// // //                 <p className="text-gray-300 text-base md:text-lg">
// // //                   {faq.answer}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }








// // import { useState } from "react";

// // export default function Faq() {
// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const faqs = [
// //     {
// //       question: "What is Netflix?",
// //       answer:
// //         "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.",
// //     },
// //     {
// //       question: "How much does Netflix cost?",
// //       answer:
// //         "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month.",
// //     },
// //     {
// //       question: "Where can I watch?",
// //       answer:
// //         "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on devices that offer the Netflix app.",
// //     },
// //     {
// //       question: "How do I cancel?",
// //       answer:
// //         "Netflix is flexible. There are no contracts and no commitments. You can easily cancel your account online in two clicks.",
// //     },
// //     {
// //       question: "What can I watch on Netflix?",
// //       answer:
// //         "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals, and more.",
// //     },
// //     {
// //       question: "Is Netflix good for kids?",
// //       answer:
// //         "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies.",
// //     },
// //   ];

// //   const toggleFAQ = (index) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   return (
// //     <section className="bg-black text-white py-16 px-4">
// //       <div className="max-w-5xl mx-auto">
// //         {/* Heading */}
// //         <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
// //           Frequently Asked Questions
// //         </h2>

// //         {/* FAQ List */}
// //         <div className="space-y-2">
// //           {faqs.map((faq, index) => (
// //             <div key={index} className="bg-[#2d2d2d]">
// //               {/* Question */}
// //               <button
// //                 onClick={() => toggleFAQ(index)}
// //                 className="w-full text-left flex justify-between items-center p-5 text-lg md:text-xl font-medium hover:bg-[#414141] transition"
// //               >
// //                 {faq.question}

// //                 <span className="text-3xl">
// //                   {activeIndex === index ? "×" : "+"}
// //                 </span>
// //               </button>

// //               {/* Answer */}
// //               <div
// //                 className={`overflow-hidden transition-all duration-500 ${
// //                   activeIndex === index ? "max-h-40 p-5" : "max-h-0"
// //                 }`}
// //               >
// //                 <p className="text-gray-300 text-base md:text-lg">
// //                   {faq.answer}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }










// import { useState } from "react";

// export default function Faq() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What is Netflix?",
//       answer:
//         "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.",
//     },
//     {
//       question: "How much does Netflix cost?",
//       answer:
//         "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month.",
//     },
//     {
//       question: "Where can I watch?",
//       answer:
//         "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on devices that offer the Netflix app.",
//     },
//     {
//       question: "How do I cancel?",
//       answer:
//         "Netflix is flexible. There are no contracts and no commitments. You can easily cancel your account online in two clicks.",
//     },
//     {
//       question: "What can I watch on Netflix?",
//       answer:
//         "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals, and more.",
//     },
//     {
//       question: "Is Netflix good for kids?",
//       answer:
//         "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-black text-white py-20 px-4">
//       <div className="max-w-[980px] mx-auto">
//         {/* Heading */}
//         <h2 className="text-[32px] md:text-[48px] font-black text-center mb-10">
//           Frequently Asked Questions
//         </h2>

//         {/* FAQ List */}
//         <div className="space-y-2">
//           {faqs.map((faq, index) => (
//             <div key={index} className="bg-[#2d2d2d]">
//               {/* Question */}
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full text-left flex justify-between items-center px-6 md:px-8 py-6 md:py-7 text-lg md:text-2xl font-normal hover:bg-[#414141] transition duration-200"
//               >
//                 {faq.question}

//                 <span className="text-4xl leading-none ml-6">
//                   {activeIndex === index ? "×" : "+"}
//                 </span>
//               </button>

//               {/* Answer */}
//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   activeIndex === index ? "max-h-96 px-6 md:px-8 pb-6 md:pb-7" : "max-h-0"
//                 }`}
//               >
//                 <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
















import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial — all for one low monthly price.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one fixed monthly fee. Plans range from ₹149 to ₹649 per month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in just two clicks. There are no cancellation fees — start or stop your account anytime.",
    },
    {
      question: "What can I watch?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#2d2d2d]">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center p-5 text-lg md:text-xl font-medium hover:bg-[#414141] transition"
              >
                {faq.question}

                <span className="text-3xl">
                  {activeIndex === index ? "×" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-40 p-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}