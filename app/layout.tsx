import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.doctorbuendia.com.mx";
const socialTitle =
  "Dr. Diego Buendia | Ortopedia, Traumatología y Cirugía de Columna";
const socialDescription =
  "Atención especializada en ortopedia, traumatología y cirugía de columna en Ciudad de México, con diagnóstico preciso y tratamiento integral para lesiones, dolor y padecimientos musculoesqueléticos.";
const socialImage = `${siteUrl}/images/og-image.jpg`;

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: socialTitle,
  description: socialDescription,
  icons: {
    icon: [
      {
        url: "/images/fav-icono.jpg",
        type: "image/jpeg",
        sizes: "32x32",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: socialTitle,
    description: socialDescription,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Dr. Diego Buendia, especialista en ortopedia y cirugía de columna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
