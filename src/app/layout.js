import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

export const metadata = {
  title: 'Lucknow Lions - Zerodha Open Free Demat Account Opening',
  description: 'Our mission is to maximize wealth for our investors and traders through expert guidance and strategic investments in the stock market.',
  keywords: "Lucknow Lions, Lucknow Lions demat account, free demat account,free demat account, lucknowlions, Lucknow Lions Free Demat Account, Lucknow Lions Stock Broker, Lucknow Lions Brokerage Charges, Best Demat Account in Lucknow, लखनऊ लायंस",

  openGraph: {
    title: 'Lucknow Lions - Zerodha Open Free Demat Account Opening',
    description: 'Our mission is to maximize wealth for our investors and traders through expert guidance and strategic investments in the stock market.',
    images: ['/home/hero.webp'],
  },

  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png'
    },
  },

  authors: [{ name: 'Lucknow Lions' }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    },
  },

  alternates: { canonical: 'https://www.lucknowlions.com' },

  other: { publisher: 'https://www.lucknowlions.com' }
}





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MSXSKG58" />
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
