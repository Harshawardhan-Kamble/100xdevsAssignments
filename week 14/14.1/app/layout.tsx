import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-blue-600  h-20 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Harsh Library</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Books</a>
            <a href="#" className="hover:underline">Toys</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
        {children}
      </header>
      </body>
    </html>
  );
}
