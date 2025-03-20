import { GoogleTagManager } from '@next/third-parties/google';
import { headers } from 'next/headers';
const { HOST } = require("@/config");

let lang = 'en';

async function getPageData(category, pageUrl) {
  try {
    const res = await fetch(`${HOST}/api/v1/visitor/blogData/${category}/${pageUrl}`, {
      next: { revalidate: 5 /* Cache for 60 seconds */ }
    });

    if (!res.ok) { throw new Error('Failed to fetch page data') }

    const pageData = await res.json();
    lang = pageData.blogLang;
    return pageData;

    return
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

    alternates: {
      canonical: `https://${host}/blogs/${category}/${pageUrl}`,
      languages: { 'hi-IN': `https://${host}/blogs/${category}/${pageUrl}` }
    },
    other: {
      publisher: 'Lucknow Lions', 'html:lang': 'hi',
    }
  };
}


export function Layout({ children }) { return children; }


export default async function RootLayout({ children }) {

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(10);

  return (
    <html lang={lang}>

      <head>
        <GoogleTagManager gtmId="GTM-MSXSKG58" />
      </head>

      <body>
        {children}
      </body>

    </html>
  );
}