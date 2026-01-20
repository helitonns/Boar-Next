import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Product Roadmap",
    default: "Product Roadmap",
  },
  description: "Follow the development of new features and improvements in our product.",
};

const interFont = Inter({ 
  subsets: ["latin"] 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={interFont.className}>
      <body className="bg-navy-950 text-navy-50 antialiased">
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
