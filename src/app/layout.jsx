import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "R R Grow Wealth",
    template: "%s - R R Grow Wealth",
  },
  description:
    "R R Grow Wealth helping them make informed decisions to achieve their financial goals with confidence",
  keywords: [
    "Mutual Funds",
    "Investment",
    "Financial Planning",
    "Mutual Fund News",
    "Finance Tips",
    "R R Grow Wealth",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@rrgrowwealth",
  },
  authors: [{ name: "R R Grow Wealth Team" }],
};


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFFFF]`}
      >
        {children}
      </body>
    </html>
  );
}
