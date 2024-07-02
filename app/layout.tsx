import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const kanit = Kanit({
  weight: ["100", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJs Guide",
  description: "Guide to create nextjs app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
