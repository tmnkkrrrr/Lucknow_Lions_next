import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";

export const metadata = {
    title: "Lucknow Lions - Account Delete Policy",
    robots: "noindex",
};

const PageDelete = () => {
    return (
        <>
            <Navbar />
            <div style={{ height: "70px" }} />
            <div className="flex flex-col gap-4 mx-auto justify-center align-center max-w-4xl my-24">
                <h1>To delete your Account</h1>
                <p>Please Email us on : contact@lucknowlions.com</p>
            </div>
            <Footer />
        </>
    );
};

export default PageDelete;