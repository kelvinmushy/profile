import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/navbar/page";
import Footer from "./ui/footer/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelvin Cosmas",
  description: "I'm full stack developer with 4 years of working expirence ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#041D34]">
         <Nav/>
     

       
       {children}
      
       <Footer/>
        
        </body>
    </html>
  );
}
