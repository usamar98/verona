import type { Metadata } from "next";
import { Syne, Outfit, Space_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VORENA — AI-Powered AMA Platform for Web3",
  description:
    "Deploy intelligent AI agents to host AMAs, engage your community, and automate Web3 communication at scale. Built on Base chain.",
  keywords: ["Web3", "AI Agent", "AMA", "Blockchain", "DApp", "Base chain"],
  icons: {
    icon: "/vorena logo trans.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${outfit.variable} ${spaceMono.variable} ${roboto.variable} ${poppins.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
