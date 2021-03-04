import React from 'react';
import styled from 'styled-components';
import logo from "../../../img/logoprincipal.png"

const UL = styled.ul `

  display: none;

.scroll {

    text-decoration: none;
    color: white;
  }
  .scroll:hover {
    cursor: pointer;
    color: rgb(209, 105, 45);
    transition: 0.5s;
  }
    
    }
    @media (max-width: 660px) {
      display: block;
        .menu-hamburger {

        }
        img {
          border: 0px;
          border-radius: 80px;
          padding: 2px;
          height: 120px;
          margin: 10px;
        }
        padding-left: 0px;
        scroll-behavior: smooth;
        flex-flow: column nowrap;
        background-color: #151515;
        position: fixed;
        transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-100%)'};
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
          margin: 5px 0 10px;
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
         <UL id="ocultars" open={open} >
             <div className="menu-hamburger">

                <div onClick={closeNavigation}>
                <a href="/">
              <img src={logo} alt="Adios Pizza" />
            </a>
                    <li>
                    <a className="scroll" href="#topmain">
                        START
                        </a>
                    </li>               
                    <li >
                      <a className="scroll" href="#menu" >🍕MENU🍕</a>
                      </li>
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
    )
}

export default Rightnav

