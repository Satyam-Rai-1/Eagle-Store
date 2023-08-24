import React from "react";
import Sec1 from "./components/Sec1";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";


const Home = () => {
  const data= {
    name:" Eagle Store"
  }
  return (
    <>
    <Sec1  heading={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    
    </>
  )
};


export default Home;