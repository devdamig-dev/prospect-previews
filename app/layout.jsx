import "./globals.css";

export const metadata = {
  title: {
    default: "NexoDG Preview",
    template: "%s | NexoDG Preview",
  },
  description: "Propuesta conceptual de rediseño web desarrollada por NexoDG.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
