import { GlobalProvider } from '../context/GlobalContext';
import type { Metadata } from "next";
import '../../src/app/globals.css';

export const metadata: Metadata = {
  title: "Kris Pepper Photography",
  description: "Head shots and portrait photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalProvider>
      <html lang="en">
        <head>
          {/* Preconnect to external font services */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Include the font stylesheets */}
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </head>
        <body>
          {children}
        </body>
      </html>
    </GlobalProvider>
  );
}
