"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function Produk() {
  const [show, setShow] = useState("games");

  return (
    <main className="min-h-screen bg-gradient-to-t from-black via-gray-900 to-blue-900 text-white pt-20 px-10">
      <section className="flex justify-between w-full">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Produk Kami</h2>
          <p className="mt-2 text-gray-400">
            Berbagai layanan digital yang bisa Anda beli di ZalShops.
          </p>
        </div>
        <div className="flex items-center max-h-10 text-center relative">
          <Search className="absolute left-3 text-gray-400" />
          <input
            type="text"
            name=""
            id="search item"
            placeholder="Search Item"
            className="w-full pl-10 py-2 rounded-md border border-gray-600 bg-gray-900 text-white"
          />
        </div>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 ">
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50">
          <span className="text-2xl">🎮</span>
          <p className="mt-2">Game Vouchers</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50">
          <span className="text-2xl">📱</span>
          <p className="mt-2">Pulsa & Data</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50">
          <span className="text-2xl">⚡</span>
          <p className="mt-2">PLN</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50">
          <span className="text-2xl">🏥</span>
          <p className="mt-2">BPJS</p>
        </div>
      </div>
      <div id="item"></div>
    </main>
  );
}
