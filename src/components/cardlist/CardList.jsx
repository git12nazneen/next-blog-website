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
     
      {/* pagination */}
      <Pagination></Pagination>
    </>
  );
};

export default CardList;