import type { Metadata } from "next";
import { Agentation } from "agentation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dip Kunwar | Full-Stack Developer & BSc.IT Student",
  description:
    "Portfolio of Dip Kunwar, a BSc.IT student at ISMT College (Sunderland University) and Full-Stack Developer building modern web applications, live streaming platforms, and interactive 3D WebGL experiences.",
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
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
