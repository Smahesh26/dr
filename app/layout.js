"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { useState, useEffect } from "react";
import Preloader from "../_components/PreLoader"; // Import Preloader component

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // 3-second loading time
  }, []);

  return (
    <html lang="en">
      <body className={clsx(poppins.className, "antialiased bg-[#EAEEFE]")}>
        {loading ? <Preloader /> : children}
      </body>
    </html>
  );
}
