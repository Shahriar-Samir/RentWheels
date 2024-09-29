import Link from 'next/link';
import React from 'react';

const Navbar:React.FC = () => {
    return (
        <nav className=''>
            <Navbar1/>
            <Navbar2/>
        </nav>
    );
};

export default Navbar;


const Navbar1:React.FC = ()=>{
  return  <section className="navbar bg-base-100">
  <div className="flex-1">
    <a className="text-xl">rentwheels@gmail.com</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</section>
}


const Navbar2:React.FC = ()=>{
    return  <section className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link href='/'>Home</Link></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Rent Wheels</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link href='/'>Home</Link></li>
        <li>
          <details>
            <summary>Services</summary>
            <ul className="p-2">
              <li><Link href='/cars'>Cars</Link></li>
              <li><Link href='/cars'>Trucks</Link></li>
              <li><Link href='/offers'>Locations</Link></li>
              <li><Link href='/location'>Special Offers</Link></li>
            </ul>
          </details>
        </li>
        <li><a>Career</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <button className="btn">Book a vehicle</button>
    </div>
  </section>
}