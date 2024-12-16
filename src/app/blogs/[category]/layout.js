import { headers } from 'next/headers';


export async function generateMetadata({ params }) {
  const { category } = await params;

  const headersList = await headers();
  const host = headersList.get('host');

  return {
    title: `Lucknow Lions | ${category}`,
    description: 'Open a Free Demat Account in Fyers with Lucknow Lions. Lifetime Free Annual Maintenance charge, lowest brokerage, real-time market insight, and a user-friendly platform to grow your wealth.',
    alternates: { canonical: `https://${host}/blogs/${category}` },
    other: { publisher: 'Lucknow Lions' }
  };
}

export default function Layout({ children }) {
  return children;
}