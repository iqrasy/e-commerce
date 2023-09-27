import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import GlobalStyles from "./GlobalStyle"
import ItemPage from "./ItemPage";

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/item/:id" element={<ItemPage />}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
