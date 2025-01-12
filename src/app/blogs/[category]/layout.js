import { headers } from 'next/headers';


export async function generateMetadata({ params }) {
  const { category } = await params;

  const headersList = await headers();
  const host = headersList.get('host');

  let pageTitle = 'Lucknow Lions';
  let pageDescription = 'Open a Free Demat Account in Fyers with Lucknow Lions. Lifetime Free Annual Maintenance charge, lowest brokerage, real-time market insight, and a user-friendly platform to grow your wealth.';
  if (category === "technical-analysis") {
    pageTitle = "Learn Technical Analysis with Free Resources for Investors | Lucknow Lions";
    pageDescription = "Master technical analysis with free resources and expert tips. Boost your investment skills and make informed decisions with our comprehensive guide.";
  }

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `https://${host}/blogs/${category}` },
    other: { publisher: 'Lucknow Lions' }
  };
}

export default function Layout({ children }) {
  return children;
}



