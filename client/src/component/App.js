import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import GlobalStyles from "./GlobalStyle";
import ItemPage from "./ItemPage";
import All from ".//All";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/all" element={<All />} />
				<Route path="/api/:category/:productId" element={<ItemPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
