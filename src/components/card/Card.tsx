import Image from 'next/image'
import React from 'react'
import card1 from '@/app/list1.jpg'
export default function Card() {
  return (
    <div className="py-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
    <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={card1}  // Replace with your image path
          alt="Post Image"
          width={800}
          height={600}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <p className="text-sm text-gray-500 mb-2">11.02.2023 - <span className="text-red-500">CULTURE</span></p>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eaque dignissimos ullam
          commodi eos adipisci facere! Quis id explicabo quas totam libero ipsa aliquam obcaecati,
          in facere molestiae architecto asperiores?...
        </p>
        <a href="#" className="text-red-500 font-semibold hover:underline">
          Read More
        </a>
      </div>
    </div>
  </div>
  )
}