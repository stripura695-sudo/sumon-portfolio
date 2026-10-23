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
  title: "Your Name - Full Stack Developer Portfolio",
  description: "Passionate full stack developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Web Development", "Portfolio"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Your Name - Full Stack Developer Portfolio",
    description: "Passionate full stack developer specializing in React, Next.js, and modern web technologies.",
    url: "https://yourportfolio.vercel.app",
    siteName: "Your Name Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full Stack Developer",
    description: "Full stack developer portfolio showcasing projects and skills.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
