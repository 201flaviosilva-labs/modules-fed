import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
const Home = React.lazy(() => import('home/App'));

export default function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="products/:productType" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route index path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
