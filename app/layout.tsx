import "../styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ShowerThoughtsFM",
  description: "Lo‑fi beats, high thoughts.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
<html lang="en">
  <body className="min-h-screen flex flex-col">
    {children}
  </body>
</html>
  );
}