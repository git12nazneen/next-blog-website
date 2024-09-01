import CardList from '@/components/cardlist/CardList'
import Menu from '@/components/menu/Menu'
import React from 'react'

export default function Blog() {
  return (
    <div>
      <div className='bg-orange-600 py-6 mx-auto'><h1 className='text-white text-center font-bold text-3xl'>The blog</h1></div>
      <div className="flex gap-5 py-20 px-10">
          <div className="w-2/3">
            {" "}
            <CardList></CardList>
          </div>
          <div className="w-1/3">
            {" "}
            <Menu></Menu>
          </div>
        </div>
    </div>
  )
}
