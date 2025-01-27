import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Lucknow Lions - Privacy Policy",
  alternates: { canonical: 'https://www.lucknowlions.com/privacy_policy' },
  robots: "index",
};

const Privacy_Policy_Web = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "70px" }} />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Privacy Policy for Lucknow Lions
        </h1>

        <p className="text-lg mb-4">
          At Lucknow Lions, we have a responsibility to keep your personal
          information confidential. Our privacy policy explains how your data is
          collected, how we may use it, and the measures we take to protect it if
          you access and use our site. By using our website, you agree to this
          privacy policy. If you have any doubts or need more information, you can
          contact us at{" "}
          <a href="mailto:contact@lucknowlions.com" className="text-blue-600">
            contact@lucknowlions.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          Whenever you come to our website, we collect the following information:
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>
            <strong>Personal Information</strong>—When you join our newsletter, we
            collect information about your mobile number, email ID, or any other
            contact.
          </li>
          <li>
            <strong>Non-Personal Information</strong>—We collect information
            through cookies, IP addresses, browser information, operating system,
            and the type of device and behavior of your website on your browser.
          </li>
          <li>
            <strong>Payment Information</strong>—When you make a purchase, we
            collect your billing details and payment information, which we collect
            from third-party payment gateways.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          The information we collect is used in the following way:
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>To answer the questions or requests you ask.</li>
          <li>To process any transactions.</li>
          <li>To improve your website's functionality and user experience.</li>
          <li>To make you aware of new offers.</li>
          <li>Analysis of website traffic and user behavior to improve our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">Lucknow Lions uses cookies for the following:</p>
        <ul className="list-inside list-disc mb-4">
          <li>To improve your browsing experience.</li>
          <li>To track the performance of the website using Google Analytics.</li>
          <li>To send advertising messages.</li>
        </ul>
        <p className="mb-4">
          You can control cookies at your convenience, but some services may not
          function properly without them.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          4. Sharing of Information
        </h2>
        <p className="mb-4">
          We respect your privacy and, except in special or important cases, we
          don't share your information with anyone.
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>
            <strong>Service Providers</strong>—People bound by confidential
            agreements with us who help us operate and pay for our website.
          </li>
          <li>
            <strong>Legal Responsibility</strong>—If it is mandatory to comply with
            any rule or law, we may share your data.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Data Security</h2>
        <p className="mb-4">
          We take appropriate measures to protect your data from misuse and
          disclosure, including safe servers, encrypted transactions, and system
          audits. However, no online platform can guarantee 100% security. Please
          exercise caution when sharing personal information online.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Your Rights</h2>
        <p className="mb-4">
          As users of our website, you have the following rights:
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>
            <strong>Access your data</strong>: You can apply for a copy of the
            information we have about you.
          </li>
          <li>
            <strong>Update your information</strong>: If there is an error in your
            personal information, you can correct it.
          </li>
          <li>
            <strong>Withdraw consent</strong>: You can unsubscribe from
            promotional emails if you don't want to receive them.
          </li>
          <li>
            <strong>Request removal</strong>: You can request that we remove your
            data.
          </li>
        </ul>
        <p className="mb-4">
          To exercise these rights, email us at{" "}
          <a href="mailto:contact@lucknowlions.com" className="text-blue-600">
            contact@lucknowlions.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          7. Links to External Sites
        </h2>
        <p className="mb-4">
          Our website may contain third-party links whose privacy policies or
          practices are not our responsibility. Please read their privacy policies
          before sharing any personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          8. Updates to This Policy
        </h2>
        <p className="mb-4">
          Lucknow Lions reserves the right to update or modify this Privacy Policy
          at any time. Changes will be posted on this page with the updated date,
          and we encourage you to review this policy periodically.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or how
          your data is handled, reach out to us at:
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

export default Privacy_Policy_Web;