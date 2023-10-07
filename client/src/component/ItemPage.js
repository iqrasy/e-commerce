import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "./CartContext";
import Dropdown from "./Dropdown";

const ItemPage = () => {
	const { productId, category } = useParams();
	const [itemDeets, setItemDeets] = useState(null);
	const [details, setDetails] = useState(null);
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const apiKey = process.env.REACT_APP_API_KEY;

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

	useEffect(() => {
		if (details?.currentSku?.skuId) {
			const preferedId = details.currentSku.skuId;
			const url = `https://sephora.p.rapidapi.com/products/detail?productId=${productId}&preferedSku=${preferedId}`;
			const options = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key": apiKey,
					"X-RapidAPI-Host": "sephora.p.rapidapi.com",
				},
			};
			fetch(url, options)
				.then((res) => res.json())
				.then((resDeets) => {
					setItemDeets(resDeets);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [details?.currentSku?.skuId]);

	if (!details) {
		return <p>Loading...</p>;
	}

	if (details.pickupEligible === true) {
		return <p>Click here to pick up your order</p>;
	}

	return (
		<>
			<div>
				<p>{details.name}</p>
				<p>{details.brandName}</p>
				{/* <p>{details.currentSku?.listPrice}</p> */}
				<p>{details.seoMetaDescription}</p>
				<p>{details.currentSku?.imageAltText}</p>
				<p>{details.targetUrl}</p>
				<p>{itemDeets?.currentSku?.size}</p>
				<p>{itemDeets?.currentSku?.listPrice}</p>

				<Dropdown itemDeets={itemDeets} />
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
