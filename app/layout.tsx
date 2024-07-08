import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import Head from "next/head";

const kanit = Kanit({
  weight: ["100", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redux Toolkit",
  description: "Guide to create nextjs app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="darkreader-lock"></meta>
      </Head>
      <body className={kanit.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
