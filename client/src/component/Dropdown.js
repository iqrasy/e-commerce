import React, { useState } from "react";

const Dropdown = ({ itemDeets }) => {
    const [ingredients, setIngredients] = useState(false);
    const [description, setDescription] = useState(false)
	// console.log(itemDeets);

	const toggleIn = () => {
		setIngredients(!ingredients);
    };
    
    const toggleDes = () => {
		setDescription(!description);
	};

	const hasIngredients =
		itemDeets?.regularChildSkus &&
		itemDeets?.regularChildSkus.length > 0 &&
		itemDeets?.regularChildSkus[0]?.ingredientDesc !== undefined;

	return (
		<div>
			{/* <p>{itemDeets?.brand?.longDescription}</p> */}
			<p>{itemDeets?.seoMetaDescription}</p>
			<button onClick={toggleDes}>{description ? "Description" : "Description"}</button>
			{description && <p>{itemDeets?.brand?.longDescription}</p>}

			{hasIngredients && (
				<button onClick={toggleIn}>
					{ingredients ? "Ingredients" : "Ingredients"}
				</button>
			)}
			{ingredients && <p>{itemDeets?.regularChildSkus[0].ingredientDesc}</p>}
		</div>
	);
};

export default Dropdown;
