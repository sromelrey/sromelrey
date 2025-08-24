import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Romel Rey Silva - Frontend Developer Portfolio",
  description:
    "Professional portfolio of Romel Rey Silva, a skilled Frontend Developer with 5+ years of experience in ReactJS, Full-Stack development, and Software Engineering.",
  keywords: [
    "Frontend Developer",
    "ReactJS",
    "Full-Stack",
    "Software Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Romel Rey Silva" }],
  creator: "Romel Rey Silva",
  openGraph: {
    title: "Romel Rey Silva - Frontend Developer Portfolio",
    description:
      "Professional portfolio showcasing ReactJS expertise and full-stack development skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className='relative'>{children}</main>
      </body>
    </html>
  );
}
