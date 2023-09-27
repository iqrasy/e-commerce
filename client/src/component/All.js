import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryItems from "./CategoryItems";
import { useNavigate } from "react-router-dom";

const All = () => {
	const [selected, setSelected] = useState("");
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	// const handleSwitch = () => {
	// 	switch (selected) {
	// 		case "Makeup":
	// 			return <Makeup search={search} />;
	// 		case "Bath":
	// 			return <Bath search={search} />;
	// 		case "Fragrance":
	// 			return <Fragrance search={search} />;
	// 		case "Men":
	// 			return <Men search={search} />;
	// 		case "Skin":
	// 			return <Skin search={search} />;
	// 		case "Tools":
	// 			return <Tools search={search} />;
	// 		default:
	// 			return <div>PLEASE CHOOSE ONE</div>;
	// 	}
	// };




	return (
		<div>
			<div>
				<button
					// active={selected === "Makeup" && <Makeup search={search} />}
					onClick={() => setSelected("Makeup")}
				>
					Makeup
				</button>
				<button
					// active={selected === "Bath" && <Bath search={search} />}
					onClick={() => setSelected("Bath")}
				>
					Bath
				</button>
				<button
					// active={selected === "Fragrance" && <Fragrance search={search} />}
					onClick={() => setSelected("Fragrance")}
				>
					Fragrance
				</button>
				<button
					// active={selected === "Men" && <Men search={search} />}
					onClick={() => setSelected("Men")}
				>
					Men
				</button>
				<button
					// active={selected === "Skin" && <Skin search={search} />}
					onClick={() => setSelected("Skin")}
				>
					Skin
				</button>
				<button
					// active={selected === "Tools" && <Tools search={search} />}
					onClick={() => setSelected("Tools")}
				>
					Tools
				</button>
			</div>
			<div>
				{search.length === 0}
				<input type="text" placeholder={"search"} value={search} />
			</div>
			{selected && (
				<CategoryItems
					category={selected}
					apiEndpoint={`/${selected.toLowerCase()}`}
					navigate={navigate}
				/>
			)}
			{/* {handleSwitch()} */}
		</div>
	);
};

export default All;
