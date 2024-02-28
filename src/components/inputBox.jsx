import React from "react";

const InputBox = ({ Type, Placeholder, Value, ONchange, Name }) => {
  return (
    <>
      <input
        type={Type}
        placeholder={Placeholder}
        value={Value}
        onChange={ONchange}
        name={Name}
        className="p-2 md:p-3 outline-none bg-violet-200 drop-shadow-xl font-saria tracking-widest text-l text-justify border-b-2 border-l-4 border-purple-800 md:hover:-translate-y-1 md:hover:drop-shadow-2xl transition dutration-500 ease-in-out w-full"
      />
    </>
  );
};

export default InputBox;
