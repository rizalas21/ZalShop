"use client";

import { Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      <div className="relative group">
        <Menu
          size={24}
          className="cursor-pointer hover:text-gray-400 transition"
        />
        <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded-md shadow-lg py-2 w-36">
          <a href="/promo" className="block px-4 py-2 hover:bg-gray-700">
            Promo
          </a>
          <a href="/bantuan" className="block px-4 py-2 hover:bg-gray-700">
            Bantuan
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="flex gap-5 items-end">
        <a href="/beranda" className="flex text-3xl font-bold tracking-wide">
          <p>Zal</p>
          <span className="text-blue-600">Shops</span>
        </a>
        <p className="cursor-default">
          Semua Kebutuhan Digital dalam Satu Tempat!
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative flex items-center bg-gray-800 px-3 py-1 rounded-md border border-gray-600 w-1/3">
        <Search
          size={18}
          className="cursor-pointer text-gray-300 hover:text-white transition"
          onClick={() => setShowSearch(!showSearch)}
        />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm"
        />
      </div>

      {/* Login/Register */}
      <a
        href="/login"
        className="px-4 py-2 text-white bg-indigo-600 rounded-lg font-medium transition hover:bg-indigo-700"
      >
        Login/Register
      </a>
    </nav>
  );
}
