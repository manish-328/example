// src/shared/components/organisms/Navbar.tsx
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-black text-white z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-500 ml-12 mr-12">
          LANDAS
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-15 text-sm font-medium">
          <a href="#" className="hover:text-yellow-400">
            SS
          </a>
          <a href="#" className="hover:text-yellow-400">
            FW
          </a>
          <a href="#" className="hover:text-yellow-400">
            PANTS
          </a>
          <a href="#" className="hover:text-yellow-400">
            T-SHIRT
          </a>
          <a href="#" className="hover:text-yellow-400">
            SALE
          </a>
          <a href="#" className="hover:text-yellow-400">
            COLLECTION
          </a>
          <a href="#" className="hover:text-yellow-400">
            COMMUNITY
          </a>
        </div>

        {/* Icons + Logout */}
        <div className="flex items-center gap-4">
          <button className="hover:text-yellow-400">
            <ShoppingCart size={20} />
          </button>
          <button className="hover:text-yellow-400">
            <User size={20} />
          </button>
          <button className="hover:text-yellow-400">
            <Search size={20} />
          </button>
          <button className="hover:text-yellow-400 text-sm font-medium">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
