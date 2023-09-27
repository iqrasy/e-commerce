import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineHeart } from "react-icons/hi";

const Fragrance = () => {
	const [fragrance, setFragrance] = useState([]);

	useEffect(() => {
		fetch("/fragrance")
			.then((res) => res.json())
			.then((resItems) => {
				setFragrance(resItems.data);
				// console.log(resItems.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!fragrance) {
		return <p>Loading...</p>;
	}

	return (
		<>
			{/* <Header /> */}
			{/* <CartContainer setCartItems={setCartItems} cartItems={cartItems} /> */}
			<div className="main">
				<div className="second">
					{fragrance.map((item, i) => (
						<div key={i}>
							<div className="icon">
								<HiOutlineHeart />
							</div>
							<button
								className="item-button"
								onClick={() => navigate(`/item/${item.id}`)}
							>
								<img className="items" src={item.heroImage} />
								<p className="para">{item.brandName}</p>
								<p className="para">{item.reviews}</p>
								<p className="para">{item.currentSku.listPrice}</p>
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Fragrance;
