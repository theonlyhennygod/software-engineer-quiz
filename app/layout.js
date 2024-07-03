import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Software Engineer Quiz App",
  description: "Get ready for your next Software Engineer interview with this quiz app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <ThemeToggle />
        {children}
        </body>
    </html>
  );
}
