import React from "react";
import ToDo from "../ToDo/ToDo";

const Home = () => {
  return (
    <div className="max-w-screen-xl gap-5 mx-auto flex ">
      <ToDo></ToDo>
      <ToDo></ToDo>
      <ToDo></ToDo>
    </div>
  );
};

export default Home;
