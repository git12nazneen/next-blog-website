import Image from 'next/image'
import React from 'react'


const Comment = () => {
  const status = 'authentication'
  return (
    <div className='my-10'>
        <h3 className="text-gray-900 font-bold text-3xl my-5">Comments</h3>
        {status === 'authentication'? (  // Correct the condition here
          <div>
            <h3 className="text-gray-400 text-xl">Write a comment</h3>
            <form className='flex gap-3'>
              <textarea className="border-2 border-gray-300 p-1  rounded-md w-full" rows="2" placeholder="Your comment here..."></textarea>
              <button className=" bg-green-800 text-white py-2 px-4 rounded-md">Submit</button>
            </form>
          </div>
        ) : (
          <div>
            <p>Please login to comment.</p>
          </div>
        )}
        <div className='my-10'>
         <div className="flex items-center mb-3">
        <Image
          src='/list1.jpg'
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
      <p>This place looks so nice..Its really fasinating me a lot . My eyes are take a peace when i see the place .I am again going this place with my family.</p>
     </div>
        <div className='my-10'>
         <div className="flex items-center mb-3">
        <Image
          src='/list1.jpg'
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
      <p>This place looks so nice..Its really fasinating me a lot . My eyes are take a peace when i see the place .I am again going this place with my family.</p>
     </div>
        <div className='my-10'>
         <div className="flex items-center mb-3">
        <Image
          src='/list1.jpg'
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
      <p>This place looks so nice..Its really fasinating me a lot . My eyes are take a peace when i see the place .I am again going this place with my family.</p>
     </div>
    </div>
  )
};

export default Comment;