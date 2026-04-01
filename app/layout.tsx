import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTS Gift Studio",
  description: "婚禮、展會及企業活動客製化回禮網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  );
}