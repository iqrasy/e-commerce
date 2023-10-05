import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./component/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CartProvider>
			<App />
		</CartProvider>
	</React.StrictMode>
);
