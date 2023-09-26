import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineHeart } from "react-icons/hi";

const Skin = () => {
	const [skin, setSkin] = useState([])
	useEffect(() => {
		fetch("/skincare")
			.then((res) => res.json())
			.then((resItems) => {
				setSkin(resItems.data);
				// console.log(resItems.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!skin) {
		return <p>Loading...</p>;
	}

	return (
		<>
			{/* <Header /> */}
			{/* <CartContainer setCartItems={setCartItems} cartItems={cartItems} /> */}
			<Main>
				<Grid>
					{skin.map((item, i) => (
						<div key={i}>
							<Icon>
								<HiOutlineHeart />
							</Icon>
							<Button onClick={() => navigate(`/item/${item.id}`)}>
								<img src={item.heroImage} />
								<p>{item.brandName}</p>
								<p>{item.reviews}</p>
								<p>{item.currentSku.listPrice}</p>
							</Button>
						</div>
					))}
				</Grid>
			</Main>
		</>
	);
};

export default Skin

const Main = styled.div`
	margin-top: 10em;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 220px !important;
		height: 220px;
	}

	p {
		word-break: break-all;
		margin-top: 0.5em;
		text-align: start;
	}
`;

const Button = styled.button`
	width: 22em;
	height: 20em;
	border: none;
	background: transparent;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
`;

const Icon = styled.div`
	font-size: 1.3em;
`;
