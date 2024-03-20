import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
