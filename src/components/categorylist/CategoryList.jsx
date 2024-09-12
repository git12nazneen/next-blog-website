const categories = [
  { name: 'Style', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-blue-100' },
  { name: 'Fashion', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-pink-100' },
  { name: 'Food', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-green-100' },
  { name: 'Travel', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-red-100' },
  { name: 'Culture', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-orange-100' },
  { name: 'Coding', imageSrc: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bgColor: 'bg-purple-100' },
];
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
  const data = await getData();
  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Categories</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sint, dolore illo, consequatur esse nihil libero autem, nemo et ratione maxime necessitatibus quis deleniti quam deserunt. Autem natus repellat cum doloremque omnis fugiat quo maxime, fuga ut neque nobis aperiam. Magnam, error beatae. Vitae accusantium doloribus impedit. Neque, assumenda explicabo incidunt optio nemo inventore cumque debitis. Cupiditate libero, deserunt numquam corrupti ea neque ratione voluptatum sequi dolorem, aspernatur, pariatur repellendus? Dolore consequatur nihil rem dolores repudiandae mollitia odit, possimus animi repellat eaque hic pariatur vel doloremque cupiditate quis nostrum, fuga quae. Voluptatum similique nesciunt commodi inventore doloribus natus in nulla.</p>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsum accusantium, consequuntur quidem autem odio soluta incidunt similique debitis adipisci fuga accusamus rerum mollitia hic voluptatibus placeat. Voluptate, ipsum adipisci! Cupiditate neque exercitationem, omnis eveniet ea laborum. Facilis ut ducimus, eos veniam sed sequi consectetur, et in voluptatum repellendus tempora.</h2>
      <div className="flex flex-col lg:flex-row gap-2">
        {data.map((data) => (
          <div
            key={data._id}
            className={`w-1/6 flex items-center justify-center p-4 rounded-lg shadow-md ${data.bgColor}`}
          >
            <div className="flex items-center space-x-1">
            <img
                src={data.img}
                alt={data.title}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-medium text-gray-700">{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default dataList;