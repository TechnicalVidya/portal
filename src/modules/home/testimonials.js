import Image from "next/image";
import React from "react";
import TestimonialImage from "@/assets/testimonial.png";
const Testimonials = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
      <div className="relative flex items-start border-2 border-gray-200 rounded bg-white dark:bg-gray-800 dark:border-gray-600 p-6 md:p-8">
        <div className="flex-shrink-0 mr-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              className="rounded-full"
              src={TestimonialImage}
              width={96}
              height={96}
              alt="Testimonial 01"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
            <svg
              className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500 dark:text-blue-400"
              viewBox="0 0 64 64"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
            </svg>
          </div>
          <blockquote className="text-xl font-medium mb-4 text-gray-800 dark:text-white">
            &quot;Embrace challenges as opportunities, let curiosity guide,
            determination fuel, and passion drive you towards success. Your
            potential is limitless.&quot;
          </blockquote>
          <cite className="block font-bold text-lg not-italic mb-1 text-gray-600 dark:text-gray-400">
            Dr. Satish Chaturvedi
          </cite>
          <div className="text-gray-600 dark:text-gray-400">
            <span>Founder - </span>
            <a className="text-blue-600 hover:underline" href="https://ltce.in">
              Lokmanya Tilak College Of Engineering
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
