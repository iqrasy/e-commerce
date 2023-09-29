import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryItems from "./CategoryItems";
import { useNavigate } from "react-router-dom";

const All = () => {
	const [selected, setSelected] = useState("");
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	return (
		<div>
			<div>
				<button onClick={() => setSelected("Makeup")}>Makeup</button>
				<button onClick={() => setSelected("Bath")}>Bath</button>
				<button onClick={() => setSelected("Fragrance")}>Fragrance</button>
				<button onClick={() => setSelected("Men")}>Men</button>
				<button onClick={() => setSelected("Skin")}>Skin</button>
				<button onClick={() => setSelected("Tools")}>Tools</button>
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
		</div>
	);
};

export default All;
