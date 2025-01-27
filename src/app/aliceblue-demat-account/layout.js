import { Alice, Quicksand, Inter } from 'next/font/google'

const inter = Inter({ 
    weight: '400',
    subsets: ['latin'],
  })
  

  export function generateMetadata() {
    return {
        title: 'Lucknow Lions - Blogs | Find Educational Blogs',
        description: "Learn more about Lucknow Lions, a leading platform in the trading world. We are committed to providing innovative solutions, expert insights, and top-notch tools for traders of all levels. Join us to elevate your trading journey.",
        keywords: 'stock broker in lucknow, best stock broker in lucknow, 0 brokerage on delivery, free demat account',
        openGraph: {
            title: 'Lucknow Lions - Blogs | Find Educational Blogs',
            description: "Learn more about Lucknow Lions, a leading platform in the trading world. We are committed to providing innovative solutions, expert insights, and top-notch tools for traders of all levels. Join us to elevate your trading journey.",
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
  
  