import React from "react";
import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="w-full fixed ">
      <div className="px-16 h-20 navbar bg-white text-black shadow-sm z-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-dongker">
              <li>
                <h3>Beranda</h3>
              </li>
              <li>
                <h3>Tentang</h3>
              </li>
              <li>
                <h3>Harga</h3>
              </li>
              <li>
                <h3>Blog</h3>
              </li>
              <li>
                <h3> Kontak</h3>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl flex justify-center items-center  h-full">
            <img src={`${logo}`} alt="" className="h-16 " />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-dongker">
            <li>
              <h3>Beranda</h3>
            </li>
            <li>
              <h3>Tentang</h3>
            </li>
            <li>
              <h3>Harga</h3>
            </li>
            <li>
              <h3>Blog</h3>
            </li>
            <li>
              <h3> Kontak</h3>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="btn rounded w-32 capitalize bg-sky-300 border-none text-white">Daftar</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
