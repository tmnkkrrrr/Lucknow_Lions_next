"use client"

import { useState, useEffect } from 'react';
import { ClientLink } from '../../clientFunctions';
import { HOST } from '@/config';
import { ArrowRight } from 'lucide-react';

export default function RelatedBlogsSection({ category, pageUrl }) {
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        if (document.readyState === 'complete') {
            setIsPageLoaded(true);
        } else {
            window.addEventListener('load', () => setIsPageLoaded(true));
            return () => window.removeEventListener('load', () => setIsPageLoaded(true));
        }
    }, []);

    function fetchRelatedBlogs(category, currentPageUrl, limit = 3) {
        return fetch(`${HOST}/api/v1/visitor/blogs/related?${new URLSearchParams({
            category,
            currentPageUrl,
            limit: limit.toString()
        })}`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch related blogs');
                return response.json();
            })
            .then(data => data.blogs)
            .catch(() => []);
    }

    useEffect(() => {
        if (!isPageLoaded) return;

        async function loadData() {
            try {
                const related = await fetchRelatedBlogs(category, pageUrl);
                setRelatedBlogs(related);
            } catch (error) {
                console.error('Error loading related blogs:', error);
            } finally {
                setIsLoading(false);
            }
        }

        loadData();
    }, [category, pageUrl, isPageLoaded]);

    if (isLoading) return <div>Loading related articles...</div>;
    if (!relatedBlogs.length) return null;

    return (
        <section>
            <h2 className="text-[1.6rem] text-left font-bold mt-8 mb-4">
                Other Latest Educational Blogs
            </h2>
            <div className="grid gap-4">
                {relatedBlogs.map((blog) => (
                    <ClientLink 
                        key={blog.id} 
                        href={`/blogs/${category}/${blog.pageUrl}`} 
                        className="w-full bg-white rounded-xl border border-gray-200 p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-gray-400 hover:-translate-y-1 mb-2"
                    >
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
        </section>
    );
}