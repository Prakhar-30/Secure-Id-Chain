import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThirdwebProvider } from "thirdweb/react";
import { ContractProvider } from "./_contexts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SecureID Chain",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <ContractProvider>
            <Navbar />
            {children}
          </ContractProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
