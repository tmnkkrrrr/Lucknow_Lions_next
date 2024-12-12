import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ClientLink } from './clientFunctions.js';
import Link from 'next/link';
import { HOST } from '@/config';


export function generateMetadata() {
    return {
        title: 'Lucknow Lions - Blogs | Find Educational Blogs',
        description: "Learn more about Lucknow Lions, a leading platform in the trading world. We are committed to providing innovative solutions, expert insights, and top-notch tools for traders of all levels. Join us to elevate your trading journey.",
        keywords: 'stock broker in lucknow, best stock broker in lucknow, 0 brokerage on delivery, free demat account',
        robots: 'index, follow',
        alternates: { canonical: 'https://www.lucknowlions.com/blogs' }
    }
}



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



const BlogHomepage = async () => {

    const categories = await getCategories();

    const hotTopics = [
        {
            id: 1,
            title: "What is the Interest, Simple Interest and compound interest?",
            description: "Finance में इंटरेस्ट एक पेमेंट है जो कर्ज लेने वाले को देना पड़ता है...",
            image: "/blogs_files/stock.png",
        },
        {
            id: 2,
            title: "जीरोधा का अलर्ट पैरामीटर्स ऑर्डर (ATO)",
            description: "जीरोधा, भारत का अग्रणी डिस्काउंट ब्रोकर...",
            image: "/blogs_files/stock.png",
        },
        {
            id: 3,
            title: "How to reach zerodha head office in bangalore",
            description: "Lucknow to bangalore (by Flight)",
            image: "/blogs_files/stock.png",
        },
        {
            id: 4,
            title: "10 Learning Game Ideas",
            description: "10 ideas for learning with for your kids to have fun.",
            image: "/blogs_files/stock.png",
        }
    ];

    // Component for Category Card
    const CategoryCard = ({ category }) => (
        <Link
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

    // Component for Featured Topic
    const FeaturedTopic = ({ topic }) => (
        <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img src='/blogs_files/bull.png' alt='Hot Topic' className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-xl font-bold mb-2">What is stock market?</h3>
                <p className="text-sm mb-4">Personalized articles and blogs curated to match your unique preferences.</p>
                <ClientLink
                    href="/featured-topic"
                    className="text-[#6D4AFF] bg-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm"
                >
                    <span>View Now</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </ClientLink>
            </div>
        </div>
    );

    // Component for Topic Card
    const TopicCard = ({ topic }) => (
        <div className="flex gap-4 bg-gray-50 p-4 rounded-lg">
            <img src={topic.image} alt={topic.title} className="w-24 h-24 rounded-lg object-cover" />
            <div>
                <h3 className="font-semibold mb-1">{topic.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{topic.description}</p>
                <ClientLink href={`/topic/${topic.id}`} className="text-[#6D4AFF] text-sm font-medium">
                    Learn more →
                </ClientLink>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center">
            <Navbar />

            {/* Hero Section */}
            <div className="relative rounded-lg max-w-[1800px] w-full mt-[66px] mx-8 p-8 border-purple-300 border-2 shadow-lg"
                style={{
                    backgroundImage: 'url("/blogs_files/bg.png")',
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
                        <form className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6D4AFF] p-2 rounded-full">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-2'>
                {/* Category Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#3A0FD4] mb-6">Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {categories.map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>

                {/* Hot Topics Section */}
                <div className="px-4 py-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-[#6D4AFF]">Hot Topics</h2>
                        <span className="text-gray-600">Most Viewed Blogs</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Featured Post */}
                        <FeaturedTopic />

                        {/* Side Posts */}
                        <div className="space-y-4">
                            {hotTopics.filter(topic => !topic.isFeatured).map(topic => (
                                <TopicCard key={topic.id} topic={topic} />
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