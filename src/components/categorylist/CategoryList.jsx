const categories = [
  { name: 'Style', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-blue-100' },
  { name: 'Fashion', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-pink-100' },
  { name: 'Food', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-green-100' },
  { name: 'Travel', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-red-100' },
  { name: 'Culture', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-orange-100' },
  { name: 'Coding', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-purple-100' },
];
import React from 'react';

const CategoryList = () => {
  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Categories</h2>
      <div className="flex flex-col lg:flex-row gap-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`w-1/6 flex items-center justify-center p-4 rounded-lg shadow-md ${category.bgColor}`}
          >
            <div className="flex items-center space-x-1">
            <img
                src={category.imageSrc}
                alt={category.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-medium text-gray-700">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default CategoryList;