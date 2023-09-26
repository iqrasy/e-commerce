import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import CartContainer from "./CartContainer";
import  All  from "./Items/All";

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [likes, setLikes] = useState({});



  // const handleLike = (itemId) => {
  //   setLikes((prevLikes) => ({
  //     ...prevLikes,
  //     [itemId]: true,
  //   }));
  // };

  // const handleUnlike = (itemId) => {
  //   setLikes((prevLikes) => ({
  //     ...prevLikes,
  //     [itemId]: false,
  //   }));
  // };

  // const handleAddToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  //   console.log("clicked", cartItems);
  //   console.log(item);
  // };



  
  return (
    <>
     <All />
    </>
  );
};





export default HomePage;
