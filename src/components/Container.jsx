import React, { useState } from "react";
import InputBox from "./inputBox";
import Button from "./button";

const Container = () => {
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted with data:", formData);
  };

  const handleChange = (e) => {
    SetFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col bg-rose-100 items-center p-2 m-20 rounded-lg h-3/5 w-5/6 md:w-1/2 md:shadow-xl">
      <h1 className="font-saria text-4xl text-purple-500 tracking-wider m-2">
        Welcome!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 w-full md:w-3/4 h-full m-10 items-center justify-evenly"
      >
        <InputBox
          Type={"email"}
          Placeholder={"Email"}
          Value={formData.email}
          Name={"email"}
          ONchange={handleChange}
        />
        <InputBox
          Type={"password"}
          Placeholder={"Password"}
          Name={"password"}
          Value={formData.password}
          ONchange={handleChange}
        />
        <div className="flex justify-center items-center">
          <Button title={"Login"} />
        </div>
      </form>
    </div>
  );
};

export default Container;
