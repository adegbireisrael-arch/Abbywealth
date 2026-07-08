import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbywealth | Luxury Nail Care",
  description: "Beautiful nails. Premium experience. Professional care tailored to your style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
