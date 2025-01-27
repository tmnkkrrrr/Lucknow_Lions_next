import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

export const metadata = {
  title: 'Lucknow Lions - Zerodha Open Free Demat Account Opening',
  description: 'Our mission is to maximize wealth for our investors and traders through expert guidance and strategic investments in the stock market.',
  keywords: "Lucknow Lions, Lucknow Lions demat account, free demat account,free demat account, lucknowlions, Lucknow Lions Free Demat Account, Lucknow Lions Stock Broker, Lucknow Lions Brokerage Charges, Best Demat Account in Lucknow, लखनऊ लायंस",

  openGraph: {
    title: 'Lucknow Lions - Zerodha Open Free Demat Account Opening',
    description: 'Our mission is to maximize wealth for our investors and traders through expert guidance and strategic investments in the stock market.',
    images: ['https://www.lucknowlions.com/home/hero.webp'],
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






export default async function RootLayout({ children, params }) {

  const slug = 'hjk'

  return (
    <html lang="en">
      <head>
      <GoogleTagManager gtmId="GTM-MSXSKG58" />
        {slug === "about-metropolitan-stock-exchange-msei" &&
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "FAQPage", 
            "mainEntity": [{
              "@type": "Question",
              "name": "When will Trading start on the Metropolitan Stock Exchange of India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEBI and exchange have confirmed from 01-January-2025 trading will be start on the Metropolitan Stock Exchange of India."
              }
            },{
              "@type": "Question", 
              "name": "Can we buy or sell equity stocks for the long term from the Metropolitan Stock Exchange?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can also sell or purchase stocks for the long time or short time."
              }
            },{
              "@type": "Question",
              "name": "What makes MSEI different from NSE and BSE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While it offers similar services such as equity trading, derivatives, and corporate bonds, it is smaller in size and scope compared to the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE)."
              }
            },{
              "@type": "Question",
              "name": "How does MSEI support new companies?", 
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MSEI provides a marketplace for equity trading, making it accessible for new businesses and enterprises to raise capital."
              }
            },{
              "@type": "Question",
              "name": "What steps should investors take to prevent unauthorized transactions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Investors should update their mobile numbers and email IDs with their brokers and ensure they receive daily transaction information directly from the exchange."
              }
            },{
              "@type": "Question", 
              "name": "Which brokers support trading on MSEI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Brokers authorized by SEBI and registered with MSEI provide trading and Demat account services for this exchange."
              }
            },{
              "@type": "Question",
              "name": "Can I hold multiple Demat accounts for trading on MSEI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can hold multiple Demat accounts, but each must be linked to a broker authorized to trade on MSEI."
              }
            }]
          }`
          }} /> &&
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.lucknowlions.com/blogs/latest/about-metropolitan-stock-exchange-msei"
  },
  "headline": "What is Metropolitan Stock Exchange of India (MSEI)",
  "description": "MSEI stands for Metropolitan Stock Exchange of India, previously known as the MCX Stock Exchange (MCX-SX), is a securities exchange in India, founded on 07-October-2008 and many of less people are aware.",
  "image": "https://assets.demtaccount.in/demt_images/dmt_featured/lucknow-lions-msei.webp",  
  "author": {
    "@type": "Organization",
    "name": "Saurabh Kumar Srivastava"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Lucknow Lions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.lucknowlions.com/logo.png"
    }
  },
  "datePublished": "2024-12-27",
  "dateModified": "2024-12-29"
}`
          }} />
        }
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
