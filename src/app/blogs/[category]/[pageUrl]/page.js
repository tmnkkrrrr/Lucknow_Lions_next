import { HOST } from '@/config';
import Footer from '@/app/components/Footer/Footer';
import Navbar from '@/app/components/Navbar/Navbar';
import RelatedBlogsSection from './RelatedBlogs';
import styles from './page.module.css';
import Link from 'next/link';
import { slugToText } from '@/app/utils';

function getPageData(category, pageUrl) {
  return fetch(`${HOST}/api/v1/visitor/blogData/${category}/${pageUrl}`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch page data');
      return res.json();
    })
    .catch(error => {
      console.error('Error fetching page data:', error);
      return null;
    });
}

async function Page({ params }) {
  const { category, pageUrl } = await params;

  const pageData = await getPageData(category, pageUrl);
  console.log(pageUrl)
  // console.log(pageData)
  if (pageData === null) return (<h1>Article does not Exist</h1>)

  return (
    <>
    <head>
    {pageUrl === "about-metropolitan-stock-exchange-msei" &&
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "FAQPage", 
            "mainEntity": [{
              "@type": "Question",
              "name": "When will Trading start on the Metropolitan Stock Exchange of India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEBI and exchange have confirmed from 01-January-2025 trading will be start on the Metropolitan Stock Exchange of India."
              }
            },{
              "@type": "Question", 
              "name": "Can we buy or sell equity stocks for the long term from the Metropolitan Stock Exchange?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can also sell or purchase stocks for the long time or short time."
              }
            },{
              "@type": "Question",
              "name": "What makes MSEI different from NSE and BSE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While it offers similar services such as equity trading, derivatives, and corporate bonds, it is smaller in size and scope compared to the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE)."
              }
            },{
              "@type": "Question",
              "name": "How does MSEI support new companies?", 
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MSEI provides a marketplace for equity trading, making it accessible for new businesses and enterprises to raise capital."
              }
            },{
              "@type": "Question",
              "name": "What steps should investors take to prevent unauthorized transactions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Investors should update their mobile numbers and email IDs with their brokers and ensure they receive daily transaction information directly from the exchange."
              }
            },{
              "@type": "Question", 
              "name": "Which brokers support trading on MSEI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Brokers authorized by SEBI and registered with MSEI provide trading and Demat account services for this exchange."
              }
            },{
              "@type": "Question",
              "name": "Can I hold multiple Demat accounts for trading on MSEI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can hold multiple Demat accounts, but each must be linked to a broker authorized to trade on MSEI."
              }
            }]
          }`
          }} /> &&
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.lucknowlions.com/blogs/latest/about-metropolitan-stock-exchange-msei"
  },
  "headline": "What is Metropolitan Stock Exchange of India (MSEI)",
  "description": "MSEI stands for Metropolitan Stock Exchange of India, previously known as the MCX Stock Exchange (MCX-SX), is a securities exchange in India, founded on 07-October-2008 and many of less people are aware.",
  "image": "https://assets.demtaccount.in/demt_images/dmt_featured/lucknow-lions-msei.webp",  
  "author": {
    "@type": "Organization",
    "name": "Saurabh Kumar Srivastava"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Lucknow Lions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.lucknowlions.com/logo.png"
    }
  },
  "datePublished": "2024-12-27",
  "dateModified": "2024-12-29"
}`
          }} />
        }
    </head>
      <Navbar />

      <main className="min-h-screen bg-white mt-[50px]">
        <div className="inset-0 w-full h-[220px]">
          <div className="absolute w-full mt-6 grid grid-cols-12">
            <div className="col-start-9 col-span-4 text-white mb-14">
              <Link href="/">Home</Link> &gt; <Link href='/blogs'>Blogs </Link>  &gt; <Link href={`/blogs/${category}`}>{slugToText(category)}</Link>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="bg-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                gradientTransform="rotate(135)"
              >
                <stop offset="0%" style={{ stopColor: "#397ef5" }} />
                <stop offset="100%" style={{ stopColor: "#51a5fd" }} />
              </linearGradient>
              <pattern
                id="grid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#bg-gradient)" />

            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-[90rem] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-[125px]">
            <div className="md:col-span-2">
              <h1 className="text-[1.4rem] md:text-2xl lg:text-3xl text-white font-bold h-24">
                {pageData.title}
              </h1>

              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-600">Last Update : </span>
                    <span className="font-medium">{new Date(pageData.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Published : </span>
                    <span className="font-medium">{new Date(pageData.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Auther : </span>
                    <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-medium">{pageData.auther}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Publisher : </span>
                    <span className="text-green-600 bg-[#DCFCE7] px-2 py-1 rounded-md font-medium">Lucknow Lions</span>
                  </div>
                  <div >
                    <div className="flex flex-wrap gap-2">
                      <span className="font-semibold text-gray-600">Tags : </span>
                      {pageData.blogTags?.split(',').map((tag, index) => (
                        <span key={index} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              <RelatedBlogsSection
                category={category}
                pageUrl={pageUrl}
              />

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Page;