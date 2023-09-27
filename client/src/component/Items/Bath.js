import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineHeart } from "react-icons/hi";

const Bath = () => {
	const [bath, setBath] = useState([]);

	useEffect(() => {
		fetch("/bath")
			.then((res) => res.json())
			.then((resItems) => {
				setBath(resItems.data);
				// console.log(resItems.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!bath) {
		return <p>Loading...</p>;
	}

	return (
		<>
			{/* <Header /> */}
			{/* <CartContainer setCartItems={setCartItems} cartItems={cartItems} /> */}
			<div className="main">
				<div className="second">
					{bath.map((item, i) => (
						<div key={i} className="third">
							<div className="icon">
								<HiOutlineHeart />
							</div>
							<button
								className="item-button"
								onClick={() => navigate(`/item/${item.id}`)}
							>
								<img className="items" src={item.heroImage} />
								<p className="para">{item.brandName}</p>
								{/* <p className="para">{item.reviews}</p> */}
								<p className="para">{item.currentSku.listPrice}</p>
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Bath;
