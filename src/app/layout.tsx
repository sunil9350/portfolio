import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunil Vishwakarma — Software Developer",
  description:
    "Frontend-focused Software Developer with 5+ years of experience building scalable, high-performance web applications with React.js, Next.js, and modern UI frameworks.",
  authors: [{ name: "Sunil Vishwakarma" }],
  openGraph: {
    title: "Sunil Vishwakarma — Software Developer",
    description:
      "Frontend-focused Software Developer with 5+ years of experience building scalable, high-performance web applications with React.js, Next.js, and modern UI frameworks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
