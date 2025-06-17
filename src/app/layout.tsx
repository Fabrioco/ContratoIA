import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title:
    "ContratoAI - Gere seu contrato com IA de forma segura, rápida e fácil",
  description:
    "ContratoAI é uma ferramenta que utiliza inteligência artificial para gerar contratos de forma rápida e segura. Com o ContratoAI, você pode gerar contratos personalizados em minutos, sem a necessidade de um advogado.",
  keywords: [
    "contrato",
    "inteligência artificial",
    "gerar contrato",
    "contrato online",
    "contrato rápido",
    "contrato seguro",
  ],
  authors: [
    {
      name: "ContratoAI",
      url: "https://contratoai.com.br", // Trocar a url pela qual o vercel me der
    },
  ],
  creator: "ContratoAI",
  publisher: "ContratoAI",
  openGraph: {
    title:
      "ContratoAI - Gere seu contrato com IA de forma segura, rápida e fácil",
    description:
      "ContratoAI é uma ferramenta que utiliza inteligência artificial para gerar contratos de forma rápida e segura. Com o ContratoAI, você pode gerar contratos personalizados em minutos, sem a necessidade de um advogado.",
    url: "https://contratoai.com.br",
    siteName: "ContratoAI",
    images: [
      {
        url: "https://contratoai.com.br/logo.png", // Trocar a url pela qual o vercel me der
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ContratoAI - Gere seu contrato com IA de forma segura, rápida e fácil",
    description:
      "ContratoAI é uma ferramenta que utiliza inteligência artificial para gerar contratos de forma rápida e segura. Com o ContratoAI, você pode gerar contratos personalizados em minutos, sem a necessidade de um advogado.",
    creator: "@contratoai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
