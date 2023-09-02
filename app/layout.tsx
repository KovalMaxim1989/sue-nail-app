import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TheFooter from "@/components/Footer";
import TheHeader from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sue Nail",
  description: "Sue Nail website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader></TheHeader>
        <main>{children}</main>
        <TheFooter></TheFooter>
      </body>
    </html>
  );
}
