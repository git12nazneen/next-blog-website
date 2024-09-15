// write rfc
import Featured from "../components/featured/Featured";
import CardList from '../components/cardlist/CardList'
import CategoryList from '../components/categorylist/CategoryList'
import React from 'react';
import Menu from "../components/menu/Menu";

const Home = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className=" bg-slate-300 dark:bg-slate-900 dark:text-white px-10">
      <div className="max-w-7xl mx-auto">
        <Featured></Featured>
        <CategoryList></CategoryList>
        <div className="flex gap-5 py-20">
          <div className="w-2/3">
            {" "}
            <CardList page={page}></CardList>
          </div>
          <div className="w-1/3">
            {" "}
            <Menu></Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;