import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(() => {
		const storedCart = localStorage.getItem("cart");
		return storedCart ? JSON.parse(storedCart) : [];
	});

	const addToCart = (product) => {
		const updatedCart = [...cartItems, product];
		setCartItems(updatedCart);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
	};

	const clearCart = () => {
		setCartItems([]);
		localStorage.removeItem("cart");
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};
