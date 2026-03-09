import { ClientBlogHomepage } from "./clientFunctions";
import { HOST, HOST_SERVER } from '@/config';


async function getCategories() {
    try {
        const response = await fetch(`${HOST_SERVER}/api/v1/visitor/categories`, {
            next: { revalidate: 18000 } //5hr
        });

        if (!response.ok) throw new Error('Failed to fetch categories');
        console.log(response.body);

        const data = await response.json();
        // console.log('data1 ', data);
        return data.blogs;

    } catch (error) {
        console.error('Error fetching categories:', error);
        // Return fallback data in case of error
        return [
            {
                "name": "Latest",
                "id": 1,
                "description": "Stay updated with the most recent and relevant blog posts tailored for you.",
                "imageUrl": "https://www.lucknowlions.com/blogs_files/cat1.webp",
                "slug": "latest"
            },
            {
                "name": "Fyers",
                "id": 2,
                "slug": "fyers",
                "imageUrl": "https://www.lucknowlions.com/blogs_files/cat2.webp",
                "description": "Discover what's buzzing across topics that matter most to your interests."
            },
            {
                "name": "Upstox",
                "id": 5,
                "slug": "upstox",
                "imageUrl": "https://www.lucknowlions.com/blogs_files/cat3.webp",
                "description": "Explore innovative and engaging learning resources to enhance your knowledge."
            },
            {
                "name": "Technical Analysis",
                "slug": "technical-analysis",
                "imageUrl": "https://www.lucknowlions.com/blogs_files/cat4.webp",
                "description": "Personalized articles and blogs curated to match your unique preferences.",
                "id": 6
            },
            {
                "name": "Fundamental Analysis",
                "slug": "fundamental-analysis",
                "imageUrl": "https://www.lucknowlions.com/blogs_files/cat5.webp",
                "description": "Dive into expert insights and trending topics on stock market education.",
                "id": 7
            },
            {
                "name": "Stocks",
                "slug": "stocks",
                "imageUrl": "https://assets.lucknowlions.com/lions_images/Categories/The-Stock-Market-t.webp",
                "description": "Empower your investment journey with our resources maximize returns with smart investing.",
                "id": 8
            },
            {
                "name": "Mutual Funds",
                "slug": "mutual-funds",
                "imageUrl": "https://assets.lucknowlions.com/lions_images/Categories/mutual-funds.webp",
                "description": "Mutual Fund category on Lucknow Lions covers expert reviews, fund analysis, and investment strategies to help you choose the best SIPs and funds for your long-term goals.",
                "id": 9
            }
        ];
    }
}


async function getBlogsData() {
    try {
        const response = await fetch(`${HOST_SERVER}/api/v1/visitor/blogs_with_url`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) throw new Error('Failed to fetch blogs');

        const data = await response.json();
        // console.log('data2 ', data);

        return data;
    } catch (error) {
        console.error('Error fetching Blogs Data:', error);
        return [];
    }
}



export default async function BlogHomepage() {
    const [categories, blogsData] = await Promise.all([getCategories(), getBlogsData()]);

    return <ClientBlogHomepage initialCategories={categories} initialBlogsData={blogsData} />;
}