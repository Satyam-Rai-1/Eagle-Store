import React from 'react'
import { styled } from 'styled-components'
import { Button } from './components/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
   <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>Hyy! You're Lost.</h3>
          <p>This page you are looking for Does not exist.
            You can click below button to go back to the home page.
          </p>
          <NavLink to="/">
            <Button>
              Go Back to Home 
            </Button>
          </NavLink>
        </div>
      </div>
   </Wrapper>
  )
}

const Wrapper = styled.section`

.container
{
  padding:9rem 0;
  text-align:center;
}
h2
{
  font-size:10rem;
}
h3
{
  font-size:4rem;
}
p
{
  margin:2rem;
}
`;
export default Error
