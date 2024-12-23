import { HOST } from '@/config';
import Footer from '@/app/components/Footer/Footer';
import Navbar from '@/app/components/Navbar/Navbar';
import RelatedBlogsSection from './RelatedBlogs';
import styles from './page.module.css';

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
  console.log(pageData)
  if (!pageData) return (<h1>Article does not Exist</h1>)


  return (
    <>

      <Navbar />

      <main className="min-h-screen bg-white mt-[50px]">

        <div className="inset-0 w-full h-[220px]">
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
                    <span className="font-semibold text-gray-600">Last Update: </span>
                    <span className="font-medium">{new Date(pageData.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Published: </span>
                    <span className="font-medium">{new Date(pageData.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
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