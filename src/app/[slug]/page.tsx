import Image from 'next/image';
import React from 'react'
import card1 from '@/app/list1.jpg'
import Menu from '@/components/menu/Menu';
import Comment from '@/components/comments/Comment';
export default function SinglePage() {
  return (
    <div className='p-10'>
    <div className="flex items-center   rounded-lg ">
    <div className="w-1/2">
      <h2 className="text-4xl font-semibold text-black mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
    </div>
    <div className="w-1/2">
      <Image
          src={card1}
        alt="Tour Image"
        width={450}
        height={250}
        className="rounded-lg"
      />
    </div>
  </div>
  <div className='flex gap-5'>
   <div className='w-2/3'>
   <div className="flex items-center mb-10">
        <Image
          src={card1}
          alt="Author Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-3">
          <p className="text-black font-medium">William Randolph</p>
          <p className="text-gray-400 text-sm">26 April 2023</p>
        </div>
      </div>
      <p className='mb-3'>"Spring is the season of renewal, a time when nature awakens from its winter slumber. The air is filled with the scent of blooming flowers, and the world comes alive with the sounds of new beginnings. Join us as we celebrate the arrival of spring, with its promise of growth and the return of life."</p>
      <p className='mb-3'>"Amidst the towering trees and whispering winds, there lies a sanctuary untouched by time. The wilderness, with its serene beauty and untouched landscapes, offers a rare opportunity to reconnect with nature. Join us as we venture into the heart of the forest, where the only sounds are the rustling of leaves and the songs of birds."</p>
      <p className='mb-3'>"High above the bustling cities, the mountains stand tall and majestic, calling out to those who seek adventure. From snow-capped peaks to lush valleys, the alpine landscape offers a breathtaking escape into the natural world. This journey will take you through rugged trails, past crystal-clear lakes, and into the heart of the mountains."</p>
    
    {/* Commnets */}
    <Comment></Comment>
   </div>
      <div className='w-1/3'>
      <Menu></Menu>
      </div>
  </div>
  </div>
);
}
