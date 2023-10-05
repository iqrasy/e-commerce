import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import GlobalStyles from "./GlobalStyle";
import ItemPage from "./ItemPage";
import All from "./All";
import Header from "./Header";
import Cart from "./Cart";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/all" element={<All />} />
					<Route path="/api/:category/:productId" element={<ItemPage />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
