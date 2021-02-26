import React from 'react';

import styled from 'styled-components';

import {BrowserRouter as Router, NavLink } from "react-router-dom";





const UL = styled.ul `
.scroll {
    text-decoration: none;
    color: white;
  }
  .scroll:hover {
    cursor: pointer;
    color: rgb(209, 105, 45);
    transition: 0.5s;
  }

    display: block;
    }
    @media (max-width: 660px) {

        padding-left: 0px;
        flex-flow: column nowrap;
        background-color: #151515;
        position: fixed;
        transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-100%)'};
        top: 10px;
        width: 100vw;
        height: min-content;
        border-radius: 46px;
        text-align: center;
        text-decoration: none;
        z-index: 5;
        transition: transform 0.6s ease-in-out;
        div {
            text-decoration: none;
          display: block;
          margin: 5px 0 10px 80px;
        }
        li {
            text-decoration: none;
          margin-left: -10px;
        }
    }
`;

const Rightnav = ({open, closeNavigation}) => {

    return (
        <Router >
         <UL id="ocultars" open={open} >
            <div onClick={closeNavigation}>
              <li>
                <a className="scroll" href="#mainpage">
                  START
                </a>
              </li>
              <li ><NavLink  to={"/menu"} >MENU</NavLink></li>
              <li>
                <a className="scroll" href="#promotion">
                  PROMOCJE
                </a>
              </li>
              <li>
                <a className="scroll" href="#transport">
                  DOSTAWA
                </a>
              </li>
              <li>
                <a className="scroll" href="#contact">
                  KONTAKT
                </a>
              </li>
            </div>
          </UL>


        </Router >
    )
}

export default Rightnav

