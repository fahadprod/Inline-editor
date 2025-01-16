import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

import ReactGA from "react-ga4";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {

  ReactGA.initialize("G-LQQGW3B1TV");

  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  return (
    <html lang="en">
      <head>
        {/* Add the TinyMCE script */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/7.6.0/tinymce.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
