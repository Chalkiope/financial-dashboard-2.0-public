import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import "@/app/styles/main.scss";
import PocketsmithProvider from "./contexts/PocketsmithProvider";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investment Tracker 2.0",
  description: "A Next.js based financial dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PocketsmithProvider>
        <body className={overpass.className}>{children}</body>
      </PocketsmithProvider>
    </html>
  );
}
