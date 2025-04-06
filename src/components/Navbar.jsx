import React from "react";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import "./Navbar.css"; // import the custom CSS file

const Navbar = () => {
  const cartCount = useSelector((store) => store.cart.k);

  return (
    <nav className="navbar">
      <h1 className="logo">🛍️ MyStore</h1>

      <div className="cart-icon-container">
        <ShoppingCart className="cart-icon" />
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
