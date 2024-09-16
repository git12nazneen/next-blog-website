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
        <div>
          <h1 className="text-2xl font-bold">Search Results for "{searchParams.q}"</h1>
          <p>Page </p>
          <p>Total Results: 1000</p>
          <p>Results Per Page: 10</p>
          <p>Total Pages: 100</p>
          <p>Sort By: Newest</p>
          <p>Date Range: 2021-01-01 to 2022-12-31</p>
          <p>Author: John Doe</p>
          <p>Category: Fashion</p>
          <p>Tag: Sneakers</p>
          <p>Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum in neque sagittis vulputate. Integer vel turpis ut velit consectetur pellentesque.</p>
          <p
        </div>
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