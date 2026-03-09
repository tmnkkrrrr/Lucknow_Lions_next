'use client'

import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { ClientLink } from '../clientFunctions';
import { slugToText } from '@/app/utils';
import { useParams } from 'next/navigation'
import Navbar from '@/app/components/Navbar/Navbar';
import Link from 'next/link';
import { HOST, HOST_CLIENT } from '@/config';

function BlogCategoryPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 30;
    const startIndex = (currentPage - 1) * postsPerPage;
    const [totalPages, setTotalPages] = useState(0);

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const { category } = params;


    useEffect(() => {
        async function fetchBlogs() {
            setIsLoading(true);
            try {
                const response = await fetch(`${HOST_CLIENT}/api/v1/admin/category_blogs/${category}`);
                if (!response.ok) throw new Error('Failed to fetch blogs');
                const data = await response.json();
                setBlogs(data.blogs);
                setTotalPages(Math.ceil(data.blogs.length / postsPerPage));
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setBlogs([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBlogs();
    }, [category]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-blue-600 overflow-hidden">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                        <div className="h-12 bg-blue-500/50 rounded animate-pulse" />
                    </div>
                </div>

                <main className="-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                                <div className="h-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30" />
                                <div className="space-y-4">
                                    <div className="h-6 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-20 bg-gray-100 rounded animate-pulse" />
                                    <div className="flex gap-4">
                                        <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
                                        <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mt-14 bg-blue-600 overflow-hidden">

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
                    <div className="grid grid-cols-12">
                        <div className="col-start-10 col-span-3 text-white mb-14">
                            <Link href="/">Home</Link> &gt; <Link href='/blogs'>Blogs</Link>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
                        {slugToText(category)}
                    </h1>
                </div>
            </div>

            <main className="-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {blogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <p className="text-xl text-gray-600">No articles found in this category.</p>
                    </div>
                ) : (
                    <div className='mb-8'>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[...blogs].reverse().slice(startIndex, startIndex + postsPerPage).map(blog => (
                                <ClientLink key={blog.id} href={`/blogs/${category}/${blog.pageUrl}`} className="group">
                                    <article className="h-full bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                                        <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                                        <div className="p-6 text-left">
                                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-6">
                                                {blog.title}
                                            </h2>

                                            <p className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors mb-6">
                                                {blog.seoDetails.description}
                                            </p>

                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-gray-100">
                                                <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                                                    Read article
                                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </ClientLink>
                            ))}
                        </div>

                        {/* PAGINATION SECTION */}
                        <div className="flex justify-center items-center gap-3 mt-10">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border rounded disabled:opacity-40"
                            >
                                Previous
                            </button>

                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-4 py-2 border rounded 
                            ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white"}`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border rounded disabled:opacity-40"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                )}
            </main>
        </div>
    );
}

export default BlogCategoryPage;