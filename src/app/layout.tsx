"use client";

import "./globals.css";
import Navbar from "./component/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-screen h-screen p-0 m-0 flex flex-col">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
