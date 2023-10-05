import React, { useState, useEffect, createContext, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "./CartContext";

const ItemPage = () => {
	const { productId, category } = useParams();
	const [cartItems, setCartItems] = useState([]);
	const [details, setDetails] = useState(null);
	const navigate = useNavigate();
	 const { addToCart } = useCart();

	useEffect(() => {
		const apiEndpoint = `/api/${category}/${productId}`;
		fetch(apiEndpoint)
			.then((res) => res.json())
			.then((resItems) => {
				setDetails(resItems.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [category, productId]);

	if (!details) {
		return <p>Loading...</p>;
	}

	if (details.pickupEligible === true) {
		return <p>Click here to pick up your order</p>;
	}

	// const addToCart = (product) => {
	// 	setCartItems([...cartItems, product]);
	// };

	return (
		<>
			<div>
				<p>{details.name}</p>
				<p>{details.brandName}</p>
				<p>{details.currentSku.listPrice}</p>
				<p>{details.seoMetaDescription}</p>
				<p>{details.currentSku.imageAltText}</p>
				<p>{details.targetUrl}</p>
				<div className="cart">
					<button
						className="cart-button"
						onClick={() => {
							addToCart(details);
							navigate("/cart");
						}}
					>
						<p>Add to cart</p>
						<LuShoppingCart />
					</button>
				</div>
				<Container>
					<Carousel interval={null}>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={details.heroImage}
								alt="Alt Image"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={details.altImage}
								alt="Hero Image"
							/>
						</Carousel.Item>
					</Carousel>
				</Container>
			</div>
		</>
	);
};

export default ItemPage;
