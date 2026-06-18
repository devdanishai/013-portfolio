import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Contact";
import { Header } from "@/components/Header";
import { profile } from "@/data/profile";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col text-white">
        <Background />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
