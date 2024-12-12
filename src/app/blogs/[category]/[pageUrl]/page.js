"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import { HOST } from '@/config';
import Footer from '@/app/components/Footer/Footer';
import Navbar from '@/app/components/Navbar/Navbar';
import { use } from 'react';
import { ClientLink } from '../../clientFunctions';
import { ArrowRight } from 'lucide-react';

function getPageData(slug) {
  return fetch(`${HOST}/api/v1/visitor/blogData/${slug}`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch page data');
      return res.json();
    })
    .catch(error => {
      console.error('Error fetching page data:', error);
      return null;
    });
}

function fetchRelatedBlogs(category, currentPageUrl, limit = 3) {
  return fetch(`${HOST}/api/v1/visitor/blogs/related?` +
    new URLSearchParams({
      category,
      currentPageUrl,
      limit: limit.toString()
    }))
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch related blogs');
      return response.json();
    })
    .then(data => data.blogs)
    .catch(() => []);
}

export default function Page({ params }) {
  const { pageUrl } = use(params);

  const [pageData, setPageData] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const foundPageData = await getPageData(pageUrl);

      if (!foundPageData) notFound()

      setPageData(foundPageData);

      // Fetch related blogs
      const related = await fetchRelatedBlogs(params.category, params.pageUrl);
      setRelatedBlogs(related);
      // debugger

      setIsLoading(false);
    }

    loadData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return null;
  }

  return (
    <>
      <Head>
        <link
          rel="canonical"
          key="canonical"
          href={`https://www.lucknowlions.com/${params.category}/${params.pageUrl}`}
        />
      </Head>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-[120px]">
            <div className="md:col-span-2">
              <h1 className="text-3xl text-white font-bold h-[100px]">
                {pageData.title}
              </h1>

              <div
                className="prose prose-sm sm:prose lg:prose-lg mx-auto
                       prose-headings:text-gray-900 
                       prose-p:text-gray-700
                       prose-a:text-blue-600 hover:prose-a:text-blue-800
                       prose-strong:text-gray-900
                       prose-img:rounded-lg prose-img:mx-auto
                       prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-600">Last Update: </span>
                    <span className="font-medium">{new Date(pageData.createdAt).toLocaleDateString('en-US', {
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

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Other Latest Educational Blogs
                </h2>

                {relatedBlogs.map((blog) => (
                  <ClientLink key={blog.id} href={`/blogs/${params.category}/${blog.pageUrl}`} className='w-full bg-white rounded-xl border border-gray-200 p-6  shadow-md transition-all duration-300 hover:shadow-lg hover:border-gray-400 hover:-translate-y-1 mb-2'>
                    <article className="flex flex-col text-left h-full">
                      <div className="flex-1 space-y-4">
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 line-clamp-2 transition-colors duration-200">
                          {blog.title}
                        </h3>

                        <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                          {blog.seoDetails?.description}
                        </p>
                      </div>

                      <div className="pt-6 mt-auto flex items-center justify-between border-t border-gray-100">
                        <time className="text-xs text-gray-500" dateTime={blog.createdAt}>
                          {new Date(blog.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>

                        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-0.5 transition-transform duration-150">
                          Read article
                          <ArrowRight className="ml-1.5 w-4 h-4" />
                        </div>
                      </div>
                    </article>
                  </ClientLink>
                ))}

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}