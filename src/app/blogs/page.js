"use client"

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import { HOST } from '@/config';
import {  useEffect, useState } from 'react';




async function getCategories() {
    try {
        const response = await fetch(`${HOST}/api/v1/visitor/categories`);

        if (!response.ok) throw new Error('Failed to fetch categories');

        const data = await response.json();
        return data.blogs;

    } catch (error) {
        console.error('Error fetching categories:', error);
        // Return fallback data in case of error
        return [
            {
                id: 1,
                title: "Latest",
                type: "latest",
                description: "Stay updated with the most recent and relevant blog posts tailored for you.",
                image: "/blogs_files/cat1.png",
                link: '/blogs/latest'
            },
            {
                id: 2,
                title: "Fyers",
                type: "fyers",
                description: "Discover what's buzzing across topics that matter most to your interests.",
                image: "/blogs_files/cat2.png",
                link: '/blogs/fyers'
            },
            {
                id: 3,
                title: "Upstox",
                type: "upstox",
                description: "Explore innovative and engaging learning resources to enhance your knowledge.",
                image: "/blogs_files/cat3.png",
                link: '/blogs/upstox'
            },
            {
                id: 4,
                title: "Technical Analysis",
                type: "technical",
                description: "Personalized articles and blogs curated to match your unique preferences.",
                image: "/blogs_files/cat4.png",
                link: '/blogs/technical-analysis'
            },
            {
                id: 5,
                title: "Fundamental Analysis",
                type: "fundamental",
                description: "Dive into expert insights and trending topics on stock market education.",
                image: "/blogs_files/cat5.png",
                link: '/blogs/fundamental-analysis'
            }
        ];
    }
}


async function getBlogsData() {
    try {
        const response = await fetch(`${HOST}/api/v1/visitor/blogs_with_url`);

        if (!response.ok) throw new Error('Failed to fetch categories');

        const data = await response.json();
        return data.blogsdata;

    } catch (error) {
        console.error('Error fetching Blogs Data:', error);
        return [];
    }
}





const BlogHomepage = () => {

    const [blogsData, setBlogsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categories) => setCategories(categories))
        getBlogsData().then((blogsData) => setBlogsData(blogsData))
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm === "") { setResults([]); return; }
        const filtered = blogsData.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.pageUrl.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered);
    };


    const hotTopics = [
        {
            id: 1,
            title: "What is Metropolitan Stock Exchange of India (MSEI)",
            description: "One More new stock exchange has been introduced for trading or investing purposes. A Market Regulator SEBI has allowed weekly option expiry on one more exchange.",
            image: "https://assets.demtaccount.in/demt_images/dmt_featured/lucknow-lions-msei.webp",
            url: 'https://www.lucknowlions.com/blogs/latest/about-metropolitan-stock-exchange-msei'
        },
        {
            id: 2,
            title: "How to Transfer shares from Another demat to Fyers Demat Account Online",
            description: "यदि आपके पास में किसी भी स्टॉक ब्रोकर का अकाउंट है और आप उस से फयेर्स में शेयर्स ट्रांसफर करना चाहते हैं तो आप इस आर्टिकल को पढ़ कर शेयर्स आप ट्रांसफर कर सकते हैं।",
            image: "https://assets.lucknowlions.com/lions_images/article_images/cdsl-easiest/lucknow-lions-share-transfer-from-another-to-fyers-demat-account-thumbnail.webp",
            url: 'https://www.lucknowlions.com/'
        },
        {
            id: 3,
            title: "What is the DDPI charges and how to activate the DDPI in Fyers",
            description: "DDPI Stands for Demat Debit Pledge Instruction. In the old times when we submitted Power of attorney to our broker to debit securities from our demat account, sometimes some broker could misuse our POWER OF ATTORNY.",
            image: "https://tribe-s3-production.imgix.net/AdOZu30LHmhP4aWc6KVB5?fit=max&w=1000&auto=compress,formatp",
            url: 'https://www.lucknowlions.com/blogs/fyers/ddpi-charges-at-fyers'
        },
        {
            id: 4,
            title: "What is the Interest, Simple Interest and compound interest?",
            description: "में इंटरेस्ट एक पेमेंट है जो कर्ज लेने वाले को देना पड़ता है और अगर किस ने बैंक में डिपॉज़िट किया है तो उसे डिपॉज़िट यानि मूलधन पर जो पैसा मिलता है उसे इंटरेस्ट या ब्याज कहते हैं ।",
            image: "https://assets.demtaccount.in/demt_images/albert-einstein.webp",
            url: 'https://www.lucknowlions.com/blogs/fundamental-analysis/What-is-the-Interest-Simple-Interest-and-compound-interest'
        }
    ];

    // Component for Category Card
    const CategoryCard = ({ category }) => (
        <Link
            // onClick={() => setIsLoading(true)}
            className="flex flex-col bg-white h-[411px] rounded-lg border-2 border-blue-200 shadow-md hover:shadow-lg duration-300 group cursor-pointer hover:scale-105 transition-transform"
            href={`/blogs/${category.slug}`}
        >
            <img className="h-[70%] bg-blue-10s0" src={category.imageUrl} alt={category.name} loading='lazy' />
            <div className='flex-[3] flex flex-col justify-between bg-gray-200 text-left p-4'>
                <h3 className="font-semibold mb-2 group-hover:text-[#6D4AFF] transition-colors duration-300">
                    {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                    {category.description}
                </p>
                <div className="text-[#6D4AFF] flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Now</span>
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="currentColor" viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    );



    return (
        <div className="flex flex-col items-center">
            <Navbar />

            {/* Hero Section */}
            <div className="relative rounded-lg max-w-[1800px] w-full mt-[66px] mx-8 p-8 border-purple-300 border-2 shadow-lg"
                style={{
                    backgroundImage: 'url("/blogs_files/bg.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#41B9E3] mb-4">
                            Find Educational Blogs
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Search about the latest, trending & Educational topics related to Stock Market
                        </p>
                        <form onSubmit={handleSearch} onKeyUp={handleSearch} className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search here..."
                                className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <button
                                type="submit"
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6D4AFF] p-2 rounded-full"
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </form>

                        {results.length > 0 && (
                            <div className="absolute z-1 w-full max-w-6xl">
                                <div className="w-fit mx-auto px-4 bg-white rounded-lg shadow-lg border border-gray-200">
                                    {results.map((item, index) => (
                                        <a key={index} className="p-4 border-b border-red-500"                                        >
                                            <h3 className="text-lg text-left font-medium">{item.title}</h3>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-2'>
                {/* Category Section */}
                <div className="mt-8">
                    <h1 className="text-3xl font-bold text-[#3A0FD4] mb-6">Category</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {categories.map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>

                {/* Hot Topics Section */}
                <div className="mt-20 px-4 py-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-4xl font-bold italic text-[#6D4AFF]">Hot Topics</h2>
                        <span className="font-bold text-gray-700">Most Viewed Blogs</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Featured Post */}
                        <div className="p-1 bg-gray-100 rounded-lg">
                            <img src='/blogs_files/bull.webp' alt='Hot Topic' className="w-full object-cover" />
                            <div className="mt-4 p-4">
                                <h3 className="text-2xl font-bold mb-2">What is stock market?</h3>
                                <p className="text-xl text-gray-600 mb-4">Personalized articles and blogs curated to match your unique preferences.</p>
                                <span className="w-fit text-[#6D4AFF] bg-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm"                   >
                                    <span className='text-xl'>View Now</span>
                                    <svg width="30" height="30" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32.5" cy="32" r="32" fill="#704FE6" />
                                        <path d="M39.9727 24.5312L25.0393 39.4646" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M39.9727 35.4859V24.5312H29.018" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Side Posts */}
                        <div className="space-y-4">
                            {hotTopics.filter(topic => !topic.isFeatured).map(topic => (
                                <Link key={topic.id} className="flex gap-3 bg-gray-50 border p-2 rounded-lg" href={topic.url}    >
                                    <img src={topic.image} alt={topic.title} className="flex-1 h-24 r-1 shadow-lg rounded-lg object-cover" />
                                    <div>
                                        <h3 className="font-semibold">{topic.title}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-2 mb-1">{topic.description}</p>
                                        <span className="text-[#6D4AFF] text-sm font-medium">
                                            Learn more →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogHomepage;