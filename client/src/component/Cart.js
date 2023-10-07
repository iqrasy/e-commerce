import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useCart } from "./CartContext";

const Cart = () => {
	const { cartItems, clearCart } = useCart();
	// console.log(cartItems);

	const getTotal = () => {
		let total = 0;
		cartItems.map((item) => {
			const price = item.currentSku.listPrice;
			for (let i = 0; i < price.length; i++) {
				total += price[i];
			}
		});
		console.log(total);
		return total;
	};

	return (
		<div>
			<h2>Cart</h2>
			<ul>
				{cartItems.map((item, index) => (
					<>
						<li key={index}>
							{item.name} - {item.currentSku.listPrice}
						</li>
					</>
				))}
			</ul>
			<p>Total: ${getTotal()}</p>
			<button onClick={clearCart}>Clear Cart</button>
		</div>
	);
};

const CartContainer = styled.div`
	position: fixed;
	top: 10%;
	right: 0;
	bottom: 0;
	width: 400px;
	background-color: white;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	z-index: 999;
	overflow: auto;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #f5f5f5;
`;

const Container = styled.div`
	padding: 20px;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const Img = styled.img`
	width: 60px;
	height: 60px;
	object-fit: cover;
	margin-right: 20px;
`;

const Name = styled.div`
	font-weight: bold;
	margin-bottom: 5px;
	font-family: "Montserrat", sans-serif;
`;

const Price = styled.div`
	font-size: 14px;
	color: #666;
	font-family: "Montserrat", sans-serif;
`;

const Total = styled.p`
	display: flex;
	position: relative;
	top: 480px;
	font-size: 25px;
	font-family: "Montserrat", sans-serif;
`;

const Checkout = styled.button`
	background-color: black;
	color: white;
	border: none;
	width: 300px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 500px;
	margin: 0 auto;
`;

const Button = styled.button`
	border: none;
	border-radius: 10px;
	color: black;
`;

const Minus = styled.button`
	background-color: white;
	width: 30px;
	border: none;
	border-radius: 10px;
	color: black;
`;

const Plus = styled.button`
	background-color: white;
	width: 30px;
	border: none;
	border-radius: 10px;
	color: black;
`;

export default Cart;
