import { headers } from 'next/headers';


export async function generateMetadata({ params }) {
  const { category } = await params;

  const headersList = await headers();
  const host = headersList.get('host');

  let pageTitle = 'Lucknow Lions';
  let pageDescription = 'Open a Free Demat Account in Fyers with Lucknow Lions. Lifetime Free Annual Maintenance charge, lowest brokerage, real-time market insight, and a user-friendly platform to grow your wealth.';
  let keywords = "";

  if (category === "technical-analysis") {
    pageTitle = "Learn Technical Analysis with Free Resources for Investors | Lucknow Lions";
    pageDescription = "Master technical analysis with free resources and expert tips. Boost your investment skills and make informed decisions with our comprehensive guide.";
  }
  if (category === "fyers") {
    pageTitle = "Learn the Fyers Blog - Elevate Your Trading Skills";
    pageDescription = "Unlock your trading potential with the Fyers Blog! Explore valuable resources and strategies to boost your skills and make informed trading decisions";
  }
  if (category === "upstox") {
    pageTitle = "The Power of Knowledge: Exploring Upstox Articles";
    pageDescription = "Dive into Upstox articles and unlock the power of knowledge! Gain valuable insights and tips to elevate your trading style and boost your financial savvy.";
  }
  if (category === "latest") {
    pageTitle = "Stay Informed: Your Ultimate Guide to General and Latest Articles for Current Updates";
    pageDescription = "Stay informed with our ultimate guide featuring the latest articles and updates. Explore a wealth of general knowledge and current events in one place.";
  }
  if (category === "fundamental-analysis") {
    pageTitle = "Fundamental Analysis Blogs | Decode Market Fundamentals - Lucknow Lions";
    pageDescription = "Enhance your trading decisions with Lucknow Lions' in-depth blogs. Gain expert knowledge on fundamental analysis, financial statements, and company valuations.";
    keywords = "Lucknow Lions Blogs, fundamental analysis with lucknow lions, fundamental-analysis"
  }
  

  return {
    title: pageTitle,
    description: pageDescription,
    keywords,
    alternates: { canonical: `https://${host}/blogs/${category}` },
    other: { publisher: 'Lucknow Lions' }
  };
}

export default function Layout({ children }) {
  return children;
}



