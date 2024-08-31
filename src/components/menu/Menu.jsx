import React from 'react'
import card1 from '@/app/list1.jpg'
import Image from 'next/image';

const posts = [
  {
    id: 1,
    category: 'Technology',
    title: 'Exploring the Latest Trends in AI and Machine Learning.',
    author: 'Jane Smith',
    date: '01.09.2023',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    category: 'Health',
    title: 'The Importance of Mental Health Awareness in the Workplace.',
    author: 'Robert Johnson',
    date: '02.09.2023',
    color: 'bg-green-500',
  },
  {
    id: 3,
    category: 'Travel',
    title: 'Top 10 Destinations to Visit in 2024 for Adventure Lovers.',
    author: 'Emily Davis',
    date: '03.09.2023',
    color: 'bg-yellow-500',
  },
  {
    id: 4,
    category: 'Business',
    title: 'How to Scale Your Startup: Tips from Successful Entrepreneurs.',
    author: 'Michael Brown',
    date: '04.09.2023',
    color: 'bg-red-500',
  },
];

const postd = [
  {
    id: 1,
    category: 'Technology',
    title: 'Exploring the Latest Trends in AI and Machine Learning.',
    author: 'Jane Smith',
    date: '01.09.2023',
    color: 'bg-blue-500',
    imageSrc: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    category: 'Health',
    title: 'The Importance of Mental Health Awareness in the Workplace.',
    author: 'Robert Johnson',
    date: '02.09.2023',
    color: 'bg-green-500',
    imageSrc: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    category: 'Travel',
    title: 'Top 10 Destinations to Visit in 2024 for Adventure Lovers.',
    author: 'Emily Davis',
    date: '03.09.2023',
    color: 'bg-yellow-500',
    imageSrc: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    category: 'Business',
    title: 'How to Scale Your Startup: Tips from Successful Entrepreneurs.',
    author: 'Michael Brown',
    date: '04.09.2023',
    color: 'bg-red-500',
    imageSrc: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];
export default function Menu() {
  return (
    <div>
 <div className="p-4">
      <h2 className="text-lg text-gray-700 font-semibold">What&apos;s trending</h2>
      <h1 className="text-2xl font-bold">Most Popular</h1>
      <div className="mt-4">
        {posts.map((post) => (
          <div key={post.id} className="mb-6">
            <span className={`inline-block text-white ${post.color} px-2 py-1 rounded-full text-sm`}>
              {post.category}
            </span>
            <h3 className="text-xl mt-2">{post.title}</h3>
            <div className="text-gray-500 text-sm mt-1">
              {post.author} - {post.date}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='p-4'>
      <p className='text-gray-600'>Discover by topic</p>
      <h1 className='font-bold text-3xl mt-1'>Categories</h1>
      <div className='flex flex-wrap gap-3 my-5'>
        <h1 className='px-4 py-2 bg-cyan-200 text-black font-light rounded-md'>Fashon</h1>
        <h1 className='px-4 py-2 bg-cyan-200 text-black font-light rounded-md'>Fashon</h1>
        <h1 className='px-4 py-2 bg-cyan-200 text-black font-light rounded-md'>Fashon</h1>
        <h1 className='px-4 py-2 bg-cyan-200 text-black font-light rounded-md'>Fashon</h1>
        <h1 className='px-4 py-2 bg-cyan-200 text-black font-light rounded-md'>Fashon</h1>
        <h1 className='px-4 py-2 bg-cyan-200 text-black font-light rounded-md'>Fashon</h1>
      </div>
    </div>
    {/* 3rd */}
    <div className='p-4'>
      <p className='text-gray-600'>Choosen by editor</p>
      <h1 className='font-bold text-3xl mt-1'>Editor pick</h1>
      <div className='flex flex-col lg:flex-row gap-2 my-5'>
        <div>
        {postd.map((post) => (
          <div key={post.id} className="mb-6 flex flex-col lg:flex-row gap-3">
            <div>
              <img className='w-32 h-16 rounded-full' src={post.imageSrc} alt="img" />
            </div>
            <div>
            <span className={`inline-block text-white ${post.color} px-2 py-1 rounded-full text-sm`}>
              {post.category}
            </span>
            <h3 className="text-xl mt-2">{post.title}</h3>
            <div className="text-gray-500 text-sm mt-1">
              {post.author} - {post.date}
            </div>
            
            </div>
          </div>
        ))}
        </div>
      </div>
      </div>


    </div>
  )
}