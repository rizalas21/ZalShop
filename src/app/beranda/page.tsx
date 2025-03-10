"use client";

import { redirect } from "next/navigation";
import Footer from "../component/footer";

export default function Beranda() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden pt-20 drop-shadow-[0px_10_#ccc]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-[150px] opacity-30"></div>
      </div>

      <header className="text-center relative py-10">
        <h2 className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] mb-5 cursor-default">
          Beli Pulsa & Top-Up Game Termurah!
        </h2>
        <p className="text-gray-300 mt-2 cursor-default">
          Cepat, Aman, dan Terpercaya
        </p>
        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.8)] cursor-pointer"
          onClick={() => redirect("/produk")}
        >
          Mulai Top-Up Sekarang
        </button>
      </header>

      <section className="py-5 text-center relative mb-10">
        <h3 className="text-3xl font-semibold text-blue-100 drop-shadow-lg pb-15 cursor-default">
          Top-Up Mudah & Cepat
        </h3>
        <div className="flex justify-center flex-wrap gap-8 mt-6">
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/50 transition">
            <span className="text-2xl cursor-default">🎮</span>
            <p className="mt-2 cursor-default">Game Vouchers</p>
            <p className="text-sm text-gray-400 cursor-default">
              Mobile legend, Free Fire...
            </p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/50 transition">
            <span className="text-2xl cursor-default">📱</span>
            <p className="mt-2 cursor-default">Pulsa & Data</p>
            <p className="text-sm text-gray-400 cursor-default">
              Telkomsel, Indosat...
            </p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/50 transition">
            <span className="text-2xl cursor-default">⚡</span>
            <p className="mt-2 cursor-default">PLN</p>
            <p className="text-sm text-gray-400 cursor-default">
              Token & Tagihan
            </p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/50 transition">
            <span className="text-2xl cursor-default">🏥</span>
            <p className="mt-2 cursor-default">BPJS</p>
            <p className="text-sm text-gray-400 cursor-default">
              Bayar Tagihan
            </p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/50 transition">
            <span className="text-2xl cursor-default">📺</span>
            <p className="mt-2 cursor-default">Streaming</p>
            <p className="text-sm text-gray-400 cursor-default">
              Vidio, WeTV, Bstation, Bigo L...
            </p>
          </div>
        </div>
      </section>

      <div className="relative h-20 bg-gradient-to-b to-gray-900"></div>

      {/* visi misi */}
      <section className="py-3 px-16 bg-gray-900 relative flex flex-col gap-5">
        <div className="">
          <h3 className="text-3xl font-bold text-white drop-shadow-lg">
            ZalShop
          </h3>
          <p className="mt-2 text-gray-400">
            Kami hadir untuk memenuhi segala kebutuhan digital Anda dengan
            cepat, mudah, dan terpercaya! 🎉 Mulai dari top-up game favorit,
            pembelian pulsa dan paket data, hingga pembayaran tagihan penting
            seperti listrik, token PLN, dan BPJS. Semua bisa Anda lakukan dalam
            satu tempat dengan proses yang praktis dan harga yang bersahabat!
            Nikmati kemudahan bertransaksi kapan saja dan di mana saja bersama
            ZalShops! 🚀
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold text-white drop-shadow-lg">
            Kenapa Harus Pilih Zalshop?
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-lg">✅ Tampilan Nyaman & Mudah Digunakan</p>
              <p className="text-gray-400">
                Dirancang dengan antarmuka yang intuitif untuk pengalaman
                bertransaksi yang cepat dan tanpa ribet.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg">✅ Harga Terbaik & Selalu Update</p>
              <p className="text-gray-400">
                Kami memberikan harga yang selalu diperbarui agar Anda
                mendapatkan penawaran paling kompetitif.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg">✅ Murah & Ekonomis</p>
              <p className="text-gray-400">
                Nikmati harga terjangkau untuk semua layanan, tanpa biaya
                tersembunyi.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg">✅ Transaksi Cepat & Aman</p>
              <p className="text-gray-400">
                Didukung sistem yang andal untuk memastikan setiap transaksi
                diproses dengan cepat dan aman.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg">✅ Layanan Lengkap dalam Satu Tempat</p>
              <p className="text-gray-400">
                Mulai dari top-up game, pulsa, paket data, hingga pembayaran
                tagihan—semua bisa dilakukan dengan mudah di ZalShops!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Actions */}
      <section className="py-6 px-5 bg-gray-900 relative flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-white">
          Siap untuk Top-Up Cepat dan Mudah?
        </h3>
        <p className="text-gray-400 mt-2">
          Nikmati pengalaman top-up yang cepat, aman, dan harga terbaik hanya di
          ZalShops! 🚀
        </p>
        <button className="mt-5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105">
          🚀 Mulai Top-Up Sekarang
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
