import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuxank-felipe-escola.dupladegames100.chatgpt.site"),
  title: "Nuxank | Sua conta digital",
  description: "Uma experiência simples para cuidar da sua vida financeira.",
  openGraph: {
    title: "Nuxank | Sua conta digital",
    description: "Uma experiência simples para cuidar da sua vida financeira.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Nuxank — saldo R$ 0,00" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuxank | Sua conta digital",
    description: "Uma experiência simples para cuidar da sua vida financeira.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
