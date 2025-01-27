export async function generateMetadata() {
  return {
    title: 'Latest Blogs | Lucknow Lions - Stay Updated with Our Recent Posts',
    description: "Explore the latest insights, news, and updates from Lucknow Lions. Stay informed with our recent blog posts covering various topics and events.",
    keywords: 'Lucknow Lions Blogs, educational blogs for share market, educational blogs in india',
    robots: 'index',
    openGraph: {
      title: 'Latest Blogs | Lucknow Lions - Stay Updated with Our Recent Postse',
      description: "Explore the latest insights, news, and updates from Lucknow Lions. Stay informed with our recent blog posts covering various topics and events.",
      images: ['https://www.lucknowlions.com/aliceblue_files/aliceblue-og-img.webp'],
      url: 'https://www.lucknowlions.com/aliceblue-demat-account'
    },
    alternates: { canonical: 'https://www.lucknowlions.com/blogs' },
  }
}

export default function Layout({ children }) {
  return children;
}

