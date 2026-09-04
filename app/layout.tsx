import type { Metadata } from "next";
import { Agentation } from "agentation";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dipkunwar.com.np"),
  title: "Dip Kunwar | Full-Stack Developer & BSc.IT Student",
  description:
    "Portfolio of Dip Kunwar, a BSc.IT student at ISMT College (Sunderland University) and Full-Stack Developer building modern web applications, live streaming platforms, and interactive 3D WebGL experiences.",
  keywords: [
    "Dip Kunwar",
    "Dip",
    "Full-Stack Developer",
    "BSc.IT Nepal",
    "ISMT College",
    "University of Sunderland",
    "Nepal Web Developer",
    "Next.js Developer",
    "React Developer",
    "Creative Developer Nepal",
    "Portfolio",
  ],
  authors: [{ name: "Dip Kunwar", url: "https://dipkunwar.com.np" }],
  creator: "Dip Kunwar",
  alternates: {
    canonical: "https://dipkunwar.com.np",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dipkunwar.com.np",
    siteName: "Dip Kunwar Portfolio",
    title: "Dip Kunwar | Full-Stack Developer & BSc.IT Student",
    description:
      "Full-Stack Developer & BSc.IT Student building digital products, real-time streaming platforms, and interactive 3D web experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dip Kunwar - Full-Stack Developer & Creative Coder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dip Kunwar | Full-Stack Developer & BSc.IT Student",
    description:
      "Full-Stack Developer building high-performance web applications and creative interactive experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google21a76443b5558a1a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0a0d14] text-white selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
        {children}
        <Analytics />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
