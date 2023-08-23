 import React from 'react'
import { NavLink } from 'react-router-dom';
 import styled from "styled-components";

import Nav from './Nav';

 
 const Header = () => {
   return (
    <MainHeader>
        <NavLink to="/">
        <img src="./myimages/eagle-logo.png" alt="my logo img" width={50} />
        </NavLink>
        <Nav />
    </MainHeader>
   )
 }
 const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.hbg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
 export default Header
 