import { headers } from 'next/headers';
const { HOST } = require("@/config");

async function getPageData(slug) {
  try {
    const res = await fetch(`${HOST}/api/v1/visitor/blogData/${slug}`, {
      next: { revalidate: 5 /* Cache for 60 seconds */ }
    });

    if (!res.ok) { throw new Error('Failed to fetch page data') }

    return res.json();
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { pageUrl, category } = await params;
  const pageData = await getPageData(pageUrl);

  // const pageData = blogsData.find(blog => blog.pageUrl === pageUrl);

  if (!pageData) return { title: 'Not Found', description: 'Page not found' };

  const headersList = await headers();
  const host = headersList.get('host');

  return {
    title: pageData.title,
    description: pageData.seoDetails.description,
    keywords: pageData.seoDetails.keywords,
    authors: [{ name: pageData.auther }],

    openGraph: {
      title: pageData.ogData.title,
      description: pageData.ogData.description,
      images: [{ url: pageData.ogData.image }],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    alternates: { canonical: `https://${host}/blogs/${category}/${pageUrl}` },

    other: { publisher: 'Lucknow Lions' }

  };
}

export default function Layout({ children }) {
  return children;
}