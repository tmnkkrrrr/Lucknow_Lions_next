import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function NotFound() {

    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="mt-40 mb-20 flex flex-col items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-gray-800">404</h1>
                    <h2 className="text-4xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
                    <p className="text-gray-600 mt-6 text-lg mb-10">The page you're looking for doesn't exist or has been moved.</p>

                    <Link href="/"
                        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </div>

    );
}