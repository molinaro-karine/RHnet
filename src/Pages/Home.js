import React from "react";
import Banniere from "../components/banniere";
import AddForm from "../components/AddForm";
//import Header from "../components/Header";
//import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
      <Banniere />
      <div className="flex items-center justify-center flex-col pb-6">
        <AddForm />
      </div>
    </div>
  );
};

export default Home;
