import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import React from 'react';

const getData = async (page) =>{
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`,{
    cache: 'no-store'
  })

  if(!res.ok){
    throw new Error('Failed');
  }
  return res.json()
}

const CardList = async ({page}) => {
  const datas = await getData(page);
  return (
    <>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aliquam voluptas ullam exercitationem, tenetur, alias voluptate voluptatum ipsa, deleniti expedita iure magni fugit. Impedit, ducimus sed dolor odio saepe quibusdam ipsum nostrum possimus quaerat dolore sapiente cum illo nemo, delectus magnam tempore est quas voluptatem quisquam quis. Sit, deleniti perspiciatis!</p>
      {/* pagination */}
      <Pagination></Pagination>
    </>
  );
};

export default CardList;