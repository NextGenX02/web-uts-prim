import type { Metadata } from "next";
import "./globals.css";
import {Outfit} from "next/font/google";
import {config} from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { Analytics } from "@vercel/analytics/react"
config.autoAddCss = false

const ouft = Outfit({
    style:"normal",
    display: "auto",
    subsets: ["latin-ext"]
})


export const metadata: Metadata = {
  title: "NatsuX",
  description: "NatsuX Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${ouft.className}`}>
      <Analytics/>
        {children}
      </body>
    </html>
  );
}
