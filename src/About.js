import React from 'react'
import Sec1 from './components/Sec1'

import { useProductContext} from "./context/productcontext"

const About = () => {
  const { myName } = useProductContext();
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
