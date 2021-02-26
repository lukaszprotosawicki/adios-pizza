import React from 'react';

import styled from 'styled-components';

import {BrowserRouter as Router, NavLink } from "react-router-dom";

import logo from "../../../img/logoprincipal.png"





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
        a img {
            display: flex;
            border: 0px;
            border-radius: 80px;
            margin-top: 15px;
        }

        .menu-hamburger {
            display: flex;
        }

        padding-left: 0px;
        scroll-behavior: smooth;
        flex-flow: column nowrap;
        background-color: #151515;
        position: fixed;
        transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-100%)'};
        padding-top: 40px;
        padding-bottom: 20px;
        top: 0px;
        width: 100vw;
        height: min-content;

        text-align: center;
        text-decoration: none;
        z-index: 5;
        transition: transform 0.6s ease-in-out;
        div {
            text-decoration: none;
          display: block;
          margin: 5px 0 10px 50px;
        }
        scroll-behavior: smooth;
        li {
            list-style: none;
            margin: 13px 0.6vw;
            text-shadow: rgb(180, 151, 21) 0.1em 0.1em 0.1em;
          }
          .scroll {
            text-decoration: none;
            color: white;
          }
          .scroll:hover {
            cursor: pointer;
            color: rgb(209, 105, 45);
            transition: 0.5s;
          }
          .nav-menu {
            margin-top: 11px;
          }
          li:hover {
            cursor: pointer;
            color: rgb(209, 105, 45);
            transition: 0.5s;
          }
    }

    .menu-burger {
        text-decoration: none;
        list-style: none;
        margin: 13px 0.6vw;
        text-shadow: rgb(180, 151, 21) 0.1em 0.1em 0.1em;
        color: white;
    }
    .menu-burger:hover {
        cursor: pointer;
        color: rgb(209, 105, 45);
        transition: 0.5s;
      }
`;

const Rightnav = ({open, closeNavigation}) => {

    return (
        <Router >

         <UL id="ocultars" open={open} >
             <div className="menu-hamburger">
                <div>         
                    <a href="/">
                    <img src={logo} alt="Adios Pizza" />
                    </a>
                </div>
                <div onClick={closeNavigation}>
                    <li>
                    <a className="scroll" href="#top-main">
                        START
                        </a>
                    </li>
                    <li ><NavLink className="menu-burger" to={"/menu"} >🍕MENU🍕</NavLink></li>
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
            </div>
          </UL>


        </Router >
    )
}

export default Rightnav

