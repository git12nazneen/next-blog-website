import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import React from 'react';

const CardList = () => {
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