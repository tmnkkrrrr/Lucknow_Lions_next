import { Alice, Quicksand, Inter } from 'next/font/google'

const inter = Inter({ 
    weight: '400',
    subsets: ['latin'],
  })
  

  export function generateMetadata() {
    return {
        title: 'AliceBlue Brokerage Charges - Free Demat Account without AMC',
        description: "Open a free demat and trading account with cheapest stock broker AliceBlue India's leading brokerage platform, Get the AMC free account and all trades in just now Rs 20 per order only.",
        keywords: 'free demat account without amc, free demat account india, Alice Blue Account opening charges, Alice Blue account opening documents, alice blue review, alice blue account opening, open demat account, open demat account online, best demat account in india, top 10 demat account in india cheapest stock broker ',
        openGraph: {
            title: 'AliceBlue Brokerage Charges - Free Demat Account without AMC',
            description: "AliceBlue India's leading brokerage platform, Get the AMC free account and all trades in just now Rs 20 per order only.Open free account and made your portfolio boom like a rocket.",
            images: ['https://www.lucknowlions.com/blogs_files/bull.webp'],
        },
        robots: 'index, follow',
        alternates: { canonical: 'https://www.lucknowlions.com/aliceblue-demat-account' }
    }
}

export default function Layout({ children }) {
    return (
      <div className={inter.className}>
        {children}
      </div>
    )
  }
  
  