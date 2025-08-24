import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Redirected() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="text-center mt-20 mb-20">
          <h2 className="text-3xl font-semibold text-gray-700 mt-4">
            This page moved Permanently
          </h2>
          <p className="text-gray-600 mt-6 text-lg mb-10">
            This page has been permanently moved to a new location.
          </p>

          <Link
            href="/samco-demat-account-opening"
            className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Go to New Location
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  );
}
