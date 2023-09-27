import React, { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";

const CategoryItems = ({ category, apiEndpoint, navigate }) => {
	const [items, setItems] = useState([]);

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

	return (
		<>
			<div className="main">
				<div className="second">
					{items.map((item, i) => (
						<div key={i} className="third">
							<div className="icon">
								<HiOutlineHeart />
							</div>
							<button
								className="item-button"
								onClick={() => navigate(`/item/${item.id}`)}
							>
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
