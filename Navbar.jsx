import Faq from "./Faq";
import AboutUs from "./About";
import React from "react";
import './Navbar.css'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <Container>
      <img class="logo" src="no.jpg"/>
    <Terms>
    
    <Styledlink to="/faq">FAQS</Styledlink>
    
   <Styledlink to="/about">About</Styledlink>
    <Styledlink to="/login">Logout</Styledlink>
    
    </Terms>
    </Container>
  )
 }

const Container = styled.div`
height: 50px;
width: 100%;
position: fixed;
left: 0;
top: 0;
background-color: #1f2833;
z-index: 10;
`;

const Terms = styled.ul`
  width: 100%;
    position: absolute;
    left: 500px auto;
    top: 10px;
    display: flex;
    justify-content: flex-end;
    color: #66f6f1;
    font-weight: 700;
    font-size: 25px;
`;

const Styledlink = styled(Link)`
display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-right: 50px;
    padding-left: 50px;
    margin-right: 50px;
`


export default Navbar;