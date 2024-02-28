import React from "react";

const Button = (props) => {
  const { variant, title, size, Type } = props;
  const fill =
    "m-2 w-32 h-8 font-saria rounded tracking-widest text-white bg-purple-800";
  const outlined =
    "m-2 w-32 rounded h-8 font-saria tracking-widest text-black border-2 border-purple-800";

  return (
    <button
      onClick={Type}
      className={`${variant === "outlined" ? outlined : fill}`}
    >
      {title}
    </button>
  );
};

export default Button;
