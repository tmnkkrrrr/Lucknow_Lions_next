export function generateMetadata() {
    return {
        title: 'Lucknow Lions - Contact Us | Get in Touch for Trading Support',
        description: "Have questions or need assistance? Contact Lucknow Lions for expert support on trading platforms, tools, and services. We're here to help you succeed in your trading journey. Reach out to us today!",
        keywords: 'stock broker in lucknow, best stock broker in lucknow, 0 brokerage on delivery, free demat account',
        openGraph: {
            title: 'Lucknow Lions - Contact Us | Get in Touch for Trading Support',
            description: "Have questions or need assistance? Contact Lucknow Lions for expert support on trading platforms, tools, and services. We're here to help you succeed in your trading journey. Reach out to us today!",
            images: ['https://www.lucknowlions.com/contactus_files/contactus_img.webp'],
            url: 'https://www.lucknowlions.com/upstox'
        },
        robots: 'index',
        alternates: { canonical: 'https://www.lucknowlions.com/contact_us' },
    }
}

export default function ContactUsLayout({ children }) {
    return children;
}

