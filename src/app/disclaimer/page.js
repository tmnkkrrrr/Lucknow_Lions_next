import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


export const metadata = {
  title: "Lucknow Lions - Disclaimer",
  robots: "index",
};

const Disclaimer_Web = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "70px" }} />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Disclaimer for Lucknow Lions
        </h1>

        <p className="text-lg mb-4">
          The information provided on{" "}
          <a href="https://www.lucknowlions.com/" className="text-blue-600">
            https://www.lucknowlions.com/
          </a>{" "}
          is for general informational purposes only. Lucknow Lions strives to
          ensure the accuracy and reliability of the content published on this
          website. However, we make no guarantees regarding the completeness,
          accuracy, or timeliness of the information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          1. General Information
        </h2>
        <p className="mb-4">
          The material available on our website is intended to inform you about
          our services. It should not be considered as specialized advice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. External Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites for your
          convenience and additional information. We do not take responsibility
          for the content or accuracy of these external sites and do not endorse
          their policies. If you access these sites, it is your responsibility
          to review their terms and policies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. No Guarantees</h2>
        <p className="mb-4">
          While we aim to keep the website running smoothly and the information
          accurate, we do not guarantee uninterrupted access, error-free
          content, or that the website is free from viruses or harmful
          components.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          4. Limitation of Liability
        </h2>
        <p className="mb-4">
          Lucknow Lions and its team and affiliates will not be liable for any
          direct, indirect, incidental, or consequential damages arising out of:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Difficulty or inability to use the website</li>
          <li>Reliance on any information provided on the website</li>
          <li>Any error in the content</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          5. Copyright and Ownership
        </h2>
        <p className="mb-4">
          All content on our website, including text, photos, videos, graphics,
          and more, is the intellectual property of Lucknow Lions. Unauthorized
          use or distribution of this material is prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          6. Changes to Content
        </h2>
        <p className="mb-4">
          Lucknow Lions reserves the right to modify the website at any time
          without prior notice. Your continued use of the site indicates
          acceptance of any such changes.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">7. Contact Us</h3>
        <p>
          If you have any queries, complaints, or require further information,
          feel free to reach out:
        </p>
        <p className="mb-4">
          Email:{" "}
          <a href="mailto:contact@lucknowlions.com" className="text-blue-600">
            contact@lucknowlions.com
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer_Web;