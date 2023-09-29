import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const ItemPage = () => {
	const { productId, category } = useParams();
	const [details, setDetails] = useState(null);

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

	return (
		<div>
			<p>{details.name}</p>
			<p>{details.brandName}</p>
			<p>{details.currentSku.listPrice}</p>
			<p>{details.seoMetaDescription}</p>
			<p>{details.currentSku.imageAltText}</p>
			<p>{details.targetUrl}</p>
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
	);
};

export default ItemPage;
