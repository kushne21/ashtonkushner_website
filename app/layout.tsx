import type { Metadata } from "next";
import Link from "next/link"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ashton Kushner",  
  description: "Ashton Kushner's Website and Art Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`  h-full  antialiased ` }
    >
      <body className={`min-h-full ${inter.className}`}>
        <Link href="/Paintings">Paintings</Link>
        <Link href="/Digital">Digital</Link>
        <Link href="/">Home</Link>
        {children} 
        <footer className="absolute inset-x-0 text-center bottom-3">©2026 Ashton Kushner</footer>
        </body>
       
    </html>
  );
}
