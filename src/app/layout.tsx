import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
