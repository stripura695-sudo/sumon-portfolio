import "./globals.css";

export const metadata = {
  title: "Sumon Tripura | Finance & Banking Student",
  description:
    "Meet Sumon Tripura, a Finance and Banking student at Government College of Commerce, KFC Bangladesh team member, and curious web project builder.",
  keywords: [
    "Sumon Tripura",
    "Finance and Banking",
    "BBA student",
    "Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Sumon Tripura" }],
  creator: "Sumon Tripura",
  openGraph: {
    title: "Sumon Tripura | Finance & Banking Student",
    description:
      "Business studies, hands-on operations experience, and selected web projects.",
    siteName: "Sumon Tripura",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumon Tripura | Finance & Banking Student",
    description:
      "Business studies, hands-on operations experience, and selected web projects.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
