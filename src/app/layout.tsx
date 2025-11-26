import "./globals.css";
import { Metamorphous } from "next/font/google";

import type { Metadata } from "next";

const metamorphous = Metamorphous({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Hero Saga",
  description: "A mediavel pomodoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
