import React from 'react'
import Sec1 from './components/Sec1'
import { useContext } from 'react';
import {AppContext} from "./context/productcontext"

const About = () => {
  const myName = useContext(AppContext);
  const data= {
    
    name:"About Us",
  }
  return (
    <>
    {myName}
    <Sec1  heading={data}/>
    </>
  )
}

export default About
