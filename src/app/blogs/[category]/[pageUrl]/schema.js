"use client"

import Script from 'next/script'

export default function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When will Trading start on the Metropolitan Stock Exchange of India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEBI and exchange have confirmed from 01-January-2025 trading will be start on the Metropolitan Stock Exchange of India."
        }
      }
      // Add other FAQs...
    ]
  }

  return (
    <Script id="faq-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}