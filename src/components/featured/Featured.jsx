import Image from "next/image";

import React from 'react';

const Featured = () => {
  return (
    <div className=" text-black py-20">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold text-center pb-10">Discover my stories and creative ideas</h1>
        </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/feature.jpg"
            alt="Beautiful Landscape"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nature reminds us of the simplicity and complexity of life.
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Nature is an endless source of wonder, a vast tapestry of life that
            unfolds in every direction. From the towering mountains that scrape
            the sky to the deep, mysterious oceans teeming with life, natures
            beauty is boundless. It offers solace to the weary, inspiration to
            the dreamer, and a sense of connection to all who pause to observe
            its majesty.
          </p>
          <button className="bg-white text-gray-900 py-2 px-6 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
