export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-6 border-t border-gray-700 relative">
      <div className="container mx-auto flex flex-wrap justify-between gap-6 px-7">
        {/* Kontak */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">📞 Kontak</h3>
          <p className="mt-2">WhatsApp: +62 812-3456-7890</p>
          <p>Email: support@zalshops.com</p>
        </div>

        {/* Peta Situs */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">📌 Peta Situs</h3>
          <a href="#" className="hover:text-blue-400 transition">
            Produk
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            FAQ
          </a>
        </div>

        {/* Syarat & Ketentuan */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">
            📜 Syarat & Ketentuan
          </h3>
          <a href="#" className="hover:text-blue-400 transition">
            Syarat & Ketentuan
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Kebijakan Privasi
          </a>
        </div>

        {/* Sosial Media */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">📲 Sosial Media</h3>
          <a href="#" className="hover:text-blue-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Twitter
          </a>
        </div>

        {/* Metode Pembayaran */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-white">
            💳 Metode Pembayaran
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <img src="/images/qris.jpg" alt="QRIS" className="h-8" />
            <img src="/images/dana.svg" alt="Dana" className="h-8" />
            <img src="/images/ovo.png" alt="OVO" className="h-8" />
            <img src="/images/shopeepay.svg" alt="ShopeePay" className="h-8" />
          </div>
        </div>
      </div>

      {/* Hak Cipta */}
      <div className="text-center py-4 mt-5 border-t border-gray-700">
        <p className="text-gray-400">
          &copy; 2025 ZalShops. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
