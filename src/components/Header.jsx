import React from "react";
import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return <header className=" bg-slate-200 shadow-md">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
   <Link to="/">
   <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
      <span className=" text-slate-500">Omid</span>
      <span className=" text-slate-700">Estate</span>
    </h1>
   </Link>
    <form className=" bg-slate-100 p-3 rounded-lg flex justify-between items-center">
      <input type="text" placeholder="search..." className=" bg-transparent focus:outline-none w-24 sm:w-64" />
      <FaSearch className=" text-slate-600"/>
    </form>
    <ul className="flex gap-3">
     <Link to="/">
     <li className=" capitalize hidden sm:inline text-slate-700 hover:underline cursor-pointer">home</li>
     </Link>
     <Link to="sign-in">
     <li className=" capitalize text-slate-700 hover:underline cursor-pointer">sign in</li>
     </Link>
     <Link to="/about">
     <li className=" capitalize hidden sm:inline text-slate-700 hover:underline cursor-pointer">about</li>
     </Link>
    </ul>
    </div>
  </header>;
};

export default Header;
