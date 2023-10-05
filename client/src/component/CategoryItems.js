import React, { useEffect, useState, createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";

const CategoryItems = ({ category, apiEndpoint }) => {
	const [items, setItems] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(apiEndpoint)
			.then((res) => res.json())
			.then((resItems) => {
				setItems(resItems.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [apiEndpoint]);

	if (!items) {
		return <p>Loading...</p>;
	}

	const redirectToItemPage = (productId) => {
		navigate(`/api${apiEndpoint}/${productId}`);
	};

	return (
		<>
			<div className="main">
				<div className="second">
					{items.map((item, i) => (
						<div
							key={i}
							className="third"
							onClick={() => redirectToItemPage(item.productId)}
						>
							<div className="icon">
								<HiOutlineHeart />
							</div>
							<button className="item-button">
								<img
									className="items"
									src={item.heroImage}
									alt={item.brandName}
								/>
								<p className="para">{item.brandName}</p>
								<p className="para">{item.currentSku.listPrice}</p>
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default CategoryItems;
