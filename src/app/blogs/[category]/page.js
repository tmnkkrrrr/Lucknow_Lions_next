import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { HOST } from '@/config';
import { ClientLink } from '../clientFunctions';
import { slugToText } from '@/app/utils';


export function generateMetadata() {
    return {
        title: 'Lucknow Lions Blogs',
        description: 'Open a Free Demat Account in Fyers with Lucknow Lions. Lifetime Free Annual Maintenance charge, lowest brokerage, real-time market insight, and a user-friendly platform to grow your wealth.',
        robots: 'index',
        alternates: { canonical: 'https://www.lucknowlions.com/blogs/latest' },
        other: { publisher: 'Lucknow Lions' }
    }
}

async function BlogCategoryPage({ params }) {
    const { category } = await params;

    async function fetchBlogs(category) {
        try {
            const response = await fetch(`${HOST}/api/v1/admin/category_blogs/${category}`);

            if (!response.ok) throw new Error('Failed to fetch blogs');

            return response.json();
        } catch (error) {
            return { categoryTitle: category, blogs: [] };
        }
    }

    const { blogs } = await fetchBlogs(category);
    console.log(blogs)

    return (

        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Simplified and more impactful */}
            <div className="bg-blue-600 overflow-hidden">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-90" /> */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
                        {slugToText(category)}
                    </h1>
                </div>
            </div>

            {/* Content Section - Elevated Cards */}
            <main className="-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {blogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <p className="text-xl text-gray-600">No articles found in this category.</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map(blog => (
                            <ClientLink key={blog.id} href={`/blogs/${category}/${blog.pageUrl}`} className="group">
                                <article className="h-full bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

                                    <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

                                    <div className="p-6 text-left">
                                        {/* Title - Larger and more prominent */}
                                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-6">
                                            {blog.title}
                                        </h2>

                                        <p className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors mb-6">
                                            {blog.seoDetails.description}
                                        </p>

                                        {/* Metadata - Cleaner layout */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" />
                                                {blog.readTime}
                                            </div>
                                        </div>

                                        {/* CTA - More prominent */}
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
                )}
            </main>
        </div>
    );
}

export default BlogCategoryPage;