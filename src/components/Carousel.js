// import React, { useState, useEffect } from "react";
// import c1 from "../assets/c1.png";
// import c2 from "../assets/c2.png";
// import c3 from "../assets/c3.png";
// import c4 from "../assets/c4.png";
// import c5 from "../assets/c5.png";
// import c6 from "../assets/c6.png";
// import c7 from "../assets/c7.png";
// import c8 from "../assets/c8.png";
// import c9 from "../assets/c9.mp4";

// const Carousel = () => {
//     const slides = [
//         {
//             id: 1,
//             image: c9,
//             // title: "Analyze Your Resume",
//             // description:
//             //     "Get insights to perfect your resume with AI analysis.",
//         },
//         {
//             id: 2,
//             image: c7,
//             // title: "ATS Compliance",
//             // description:
//             //     "Ensure your resume gets past Applicant Tracking Systems.",
//         },
//         {
//             id: 3,
//             image: c3,
//             // title: "Land Your Dream Job",
//             // description:
//             //     "Make your resume stand out and attract top recruiters.",
//         },
//         {
//             id: 4,
//             image: c4,
//             // title: "Land Your Dream Job",
//             // description:
//             //     "Make your resume stand out and attract top recruiters.",
//         },
//         {
//             id: 5,
//             image: c8,
//             // title: "Land Your Dream Job",
//             // description:
//             //     "Make your resume stand out and attract top recruiters.",
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Function to go to the next slide
//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     };

//     // Function to go to the previous slide
//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

//     // Function to go to a specific slide
//     const goToSlide = (index) => {
//         setCurrentIndex(index);
//     };

//     // Automatically change slide every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextSlide();
//         }, 5000); // 5 seconds

//         // Clear the interval when the component unmounts
//         return () => clearInterval(interval);
//     }, [currentIndex]); // Re-run the effect whenever currentIndex changes

//     return (
//         <div id="home" className="relative w-full mt-16 mb-5">
//             {/* Slide Image */}
//             <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
//                 {slides[currentIndex].image.endsWith(".mp4") ? (
//                     <video
//                         src={slides[currentIndex].image}
//                         autoPlay
//                         loop
//                         muted
//                         className="w-full h-full object-cover"
//                     />
//                 ) : (
//                     <img
//                         src={slides[currentIndex].image}
//                         alt={slides[currentIndex].title}
//                         className="w-full h-full object-cover"
//                     />
//                 )}
//                 <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
//                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
//                         {slides[currentIndex].title}
//                     </h2>
//                     <p className="text-sm sm:text-base md:text-lg">
//                         {slides[currentIndex].description}
//                     </p>
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <button
//                 className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
//                 onClick={prevSlide}
//                 aria-label="Previous Slide">
//                 ❮
//             </button>
//             <button
//                 className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
//                 onClick={nextSlide}
//                 aria-label="Next Slide">
//                 ❯
//             </button>

//             {/* Indicators */}
//             <div className="flex justify-center mt-4 space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`h-3 w-3 rounded-full ${
//                             index === currentIndex
//                                 ? "bg-purple-400"
//                                 : "bg-gray-300 hover:bg-purple-400"
//                         } transition`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Carousel;
