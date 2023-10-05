import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartContainer from "./CartContainer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const [cartItems, setCartItems] = useState([]);
	const [likes, setLikes] = useState({});
	const navigate = useNavigate();

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
			<div>
				<button onClick={() => navigate("/all")}>Get started</button>
			</div>
		</>
	);
};

export default LandingPage;
