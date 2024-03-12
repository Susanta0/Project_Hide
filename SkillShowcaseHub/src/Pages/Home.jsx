import React from "react";
import { FaSearch } from "react-icons/fa";
import { SliderImages } from "../Components/SliderImages";
import Contest from "../Components/Contest";
import Footer from "../Components/Footer";

export const Home = () => {
  return <div>
    <SliderImages />
      <Contest />
      <Footer />
    
  </div>;
};

export const Search = () => {
  return (
    <>
      <form action="" className="flex items-center">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="w-96 rounded h-8"
          />
          <FaSearch className=" absolute right-1" />
        </div>
      </form>
    </>
  );
};
