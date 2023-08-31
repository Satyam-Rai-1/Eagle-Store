import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components'
import { Button } from './Button';

const Sec1 = ({heading}) => {
    const {name} = heading;
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">
                <div className="sec1-data">
                    <p className="intro-data">Welcome to</p>
                    <h1>{name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in at excepturi a eum doloremque voluptas quisquam quas atque accusantium nihil impedit laudantium, blanditiis, facere labore quos sed porro expedita commodi earum dolorem reprehenderit. Ad, dolores est voluptatem tempora eum assumenda a iste debitis voluptatum aliquam eius dicta accusantium omnis.</p>
                    
                    <Button>
                    <NavLink>
                        Shop Now
                    </NavLink>
                    </Button>
                </div>
                <div className="sec1-image">
                    <figure>
                        <img src="myimages/shopping-family.jpg" alt="family" />
                        
                    </figure>
                </div>
            </div>
        </div>
              
    </Wrapper>
  )
}


const Wrapper = styled.section`
  padding: 12rem 0;
  

  img {
    min-width: 30rem;
    height: 30rem;
  }

  .sec1-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .sec1-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
 

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default Sec1
