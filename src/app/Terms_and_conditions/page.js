import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


export const metadata = {
  title: "Lucknow Lions - Terms & Conditions",
  alternates: { canonical: 'https://www.lucknowlions.com/terms_and_conditions' },
  robots: "index",
};

const Terms_and_Conditions_Web = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "70px" }} />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Terms and Conditions for Lucknow Lions
        </h1>

        <p className="text-lg mb-4">
          Welcome to Lucknow Lions! By accessing and using our website, you
          agree to comply with these Terms and Conditions. If you do not agree
          with any of the terms, you should refrain from using our website.
          These Terms and Conditions govern your use of our website and
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Website Use</h2>
        <p className="mb-4">
          1.1 <strong>Objective:</strong> This website is an online platform
          providing services related to Lucknow Lions and its offerings.
        </p>
        <p className="mb-4">
          1.2 <strong>Eligibility:</strong> You must be at least 18 years old or
          have the consent of a guardian to use the services available on our
          website.
        </p>
        <p className="mb-4">
          1.3 <strong>Accuracy of Information:</strong> We strive to present
          accurate and up-to-date information on the website but do not
          guarantee 100% accuracy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          2. Intellectual Property
        </h2>
        <p className="mb-4">
          2.1 <strong>Ownership:</strong> All material on the website, including
          videos, photos, content, and more, is the intellectual property of
          Lucknow Lions, unless stated otherwise.
        </p>
        <p className="mb-4">
          2.2 <strong>Restrictions:</strong> You may not sell, publish,
          distribute, or use our content without prior consent or authority.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3. User Responsibilities
        </h2>
        <p className="mb-4">
          3.1 <strong>Accountability:</strong> You are responsible for
          maintaining the confidentiality of your login credentials and account
          activities.
        </p>
        <p className="mb-4">
          3.2 <strong>Prohibited Activities:</strong> You agree not to use our
          website for illegal activities, disrupt the site's functionality, or
          publish harmful or malicious content.
        </p>
        <p className="mb-4">
          3.3 <strong>End of Access:</strong> We reserve the right to suspend or
          cancel your account if you engage in unauthorized activities.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          4. Services and Payments
        </h2>
        <p className="mb-4">
          4.1 <strong>Services Offered:</strong> Detailed information on
          services will be provided on the website or during transactions.
        </p>
        <p className="mb-4">
          4.2 <strong>Pricing and Payments:</strong> All payments must follow
          the agreed terms. We reserve the right to update pricing and payment
          policies.
        </p>
        <p className="mb-4">
          4.3 <strong>Cancellations and Refunds:</strong> Refunds are subject to
          our Refund Policy, available on the website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          5. Third-Party Links
        </h2>
        <p className="mb-4">
          Our website may include links to external websites. These links are
          for your convenience and do not imply endorsement of their content.
          Lucknow Lions is not responsible for third-party sites' practices or
          policies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          Lucknow Lions is not liable for any direct, indirect, or consequential
          loss resulting from the use or inability to use the website. We are
          also not liable for any errors, inaccuracies, or interruptions in our
          services. Your use of the website is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Privacy Policy</h2>
        <p className="mb-4">
          By using this website, you agree to our Privacy Policy, which explains
          how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          8. Changes to Terms
        </h2>
        <p className="mb-4">
          Lucknow Lions reserves the right to amend these Terms and Conditions
          at any time. Updates will be posted on this page, and continued use of
          the website signifies your acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Governing Law</h2>
        <p className="mb-4">
          These Terms and Conditions are governed by the laws of India. Any
          disputes arising in connection with these terms shall be subject to
          the exclusive jurisdiction of the courts in Lucknow, India.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">10. Contact Us</h3>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, feel free to reach out:
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

export default Terms_and_Conditions_Web;