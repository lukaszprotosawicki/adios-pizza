import React, { useState } from 'react';
import styled from 'styled-components';
import Rightnav from './Rightnav';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 8px;
    right: 12px;
    z-index: 20;
    display:none;
 
// style krzyzyka
    @media (max-width: 660px){  
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        background-color:  #151515 ;
    height: 44px;
    width: 44px;
    padding:  ${({ open }) => open ? " 6px 10px " : "  6px "};
    border-radius: 6px;
    }
  
    div {
        z-index: 1;
      width: 2rem;
      height: 0.25rem;
      background-color: white;
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? ' rotate(45deg)'  : ' rotate(0) '};
        
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? ' translateX(-100%)'  : ' translateX(0) '};
        opacity: ${({ open }) => open ? 0  :  1 };
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? ' rotate(-45deg)'  : ' rotate(0) '};
        }
    }
`;

const Burger = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)} >
        <div />
        <div />
        <div />
        </StyledBurger>
        <Rightnav open={open} closeNavigation={() => setOpen(false)} />
        </>
    )
}

export default Burger
