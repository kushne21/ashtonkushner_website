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
      <body className={` flex flex-col min-h-full ${inter.className} screen`}>
        
        <main className="grow ">
          {children} 
        </main>
        
        <footer className="inset-x-0 text-center p-4 bottom-3 bg-[#f5e1f0]">
          ©2026 Ashton Kushner | Built with Next.js & Cloudinary
          </footer>
        </body>
       
    </html>
  );
}
