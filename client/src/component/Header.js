import styled from "styled-components";
import {BsBag} from "react-icons/bs"
import { BsSuitHeart } from "react-icons/bs";
import {VscAccount} from "react-icons/vsc"
import React from "react";

const Header = () => {
  return (
    <Head>
      <h1>H&M</h1>
      <div>
        <VscAccount />
        <BsSuitHeart />
        <BsBag /> 
      </div>
    </Head>
  );
};

const Head = styled.nav`
  width: 100%;
  height: 6rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center ;
  
  h1 {
    color: #CC071E;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Permanent Marker', cursive;
    font-size: 2.5em;
  }

  div {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1em;
    font-size: 1.5em;    
  }
`;

export default Header;
