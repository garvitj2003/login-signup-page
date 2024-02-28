import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-rose-100 w-full font-saria  drop-shadow-md">
      <span className="p-4 text-2xl tracking-widest">
        <span>Hello!</span>
        <span className="text-purple-500"> Devs</span>
      </span>
      <span className="p-4 h-full text-xl tracking-widest  text-purple-800">
        <a
          href="/login"
          className=" md:hover:text-purple-500 transition dutration-1000 ease-in-out md:hover:drop-shadow-xl"
        >
          Login
        </a>
        <span> | </span>
        <a
          href="/signup"
          className=" md:hover:text-purple-500 transition dutration-1000 ease-in-out md:hover:drop-shadow-xl"
        >
          Signup
        </a>
      </span>
    </div>
  );
};
