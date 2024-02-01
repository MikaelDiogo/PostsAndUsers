import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "PostsAPI",
  description: "Show users and msg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-zinc-800 text-zinc-50">{children}</body>
    </html>
  );
}
