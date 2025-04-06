import React from "react";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((store) => store.cart.k);
  console.log(cartCount);

  return (<>
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
  {/* Left side: Logo */}
  <h1 className="text-xl font-bold text-gray-800">🛍️ MyStore</h1>
  
  {/* Right side: Cart Icon with badge */}
  <div className="flex items-center relative">
    <ShoppingCart className="w-6 h-6 text-gray-700" />
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {cartCount}
      </span>
    )}
  </div>
</nav>
</>
  );
};

export default Navbar;
