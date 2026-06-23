import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Juan Gabriel Diaz Rocha | Defensa Legal Estrategica",
  description:
    "Marca personal profesional para abogado nicaraguense con enfoque en defensa, representacion legal, estrategia juridica y atencion personalizada."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
