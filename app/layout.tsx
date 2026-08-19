import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cedar",
  description: "Cedar — an AI assistant built for Sarah Johnston, SVP Global Sales at Visiting Media.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">{children}</body>
    </html>
  );
}
