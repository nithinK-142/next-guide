import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/providers/NextThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Mode",
  description: "Toggle modes light and dark, created using next app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gray-50 dark:bg-slate-800 ${inter.className}`}>
        <Providers>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center p-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
