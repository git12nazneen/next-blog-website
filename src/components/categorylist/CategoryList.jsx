const categories = [
  { name: 'Style', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-blue-100' },
  { name: 'Fashion', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-pink-100' },
  { name: 'Food', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-green-100' },
  { name: 'Travel', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-red-100' },
  { name: 'Culture', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-orange-100' },
  { name: 'Coding', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-purple-100' },
];
import Image from 'next/image';
import React from 'react';

const getData = async () =>{
  const res = await fetch('http://localhost:3000/api/categories',{
    cache: 'no-store'
  })

  if(!res.ok){
    throw new Error('Failed');
  }
  return res.json()
}

const dataList = async () => {
  const datas = await getData();
  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Categories</h2>
     
      <div className="flex flex-col lg:flex-row gap-2">
        {datas.map((data) => (
          <div
            key={data._id}
            className="w-1/6 bg-gray-200 flex items-center justify-center p-4 rounded-lg shadow-md "
          >
            <div className="flex items-center space-x-1">
           {data.img &&
            <Image
            src={data.img}
            alt={data.title}
            width={32} // Specify the width (for example, 8 * 4)
            height={32} // Specify the height (for example, 8 * 4)
            className="w-8 h-8 rounded-full object-cover" // This keeps your Tailwind styling
          />
              }
              <span className="font-medium text-gray-700">{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default dataList;