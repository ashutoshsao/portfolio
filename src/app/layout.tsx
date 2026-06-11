import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ash",
  description: "Portfolio of Ashutosh Sao",
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180' }
    ],
  },
  manifest: '/favicon/site.webmanifest',
  appleWebApp: {
    title: 'ash',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
