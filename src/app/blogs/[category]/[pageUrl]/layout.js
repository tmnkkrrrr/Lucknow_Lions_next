import { headers } from 'next/headers';
const { HOST } = require("@/config");

async function getPageData(category, pageUrl) {
  try {
    const res = await fetch(`${HOST}/api/v1/visitor/blogData/${category}/${pageUrl}`, {
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
  const { category, pageUrl } = await params;
  const pageData = await getPageData(category, pageUrl);

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
    htmlLanguage: 'hi',

    alternates: {
      canonical: `https://${host}/blogs/${category}/${pageUrl}`,
      htmlLanguage: 'hi',
      languages: {
        'hi-IN': `https://${host}/blogs/${category}/${pageUrl}`,
      }
    },
    other: {
      publisher: 'Lucknow Lions',
'script.faq-schema': {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
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
          },
          // Add other FAQs...
        ]
      })
    }

    }
  };
}

export default function Layout({ children }) {
  return children;
}
