import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synapse ✨",
  description: "Generate Content At Ease With Our AI Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ClerkProvider>
          
        <body className={inter.className}>{children}</body>
    </ClerkProvider>
      </html>
  );
}
