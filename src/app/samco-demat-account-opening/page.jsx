import React from 'react';
import { Inter, Montserrat } from 'next/font/google'
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const inter7 = Inter({
  weight: '700',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
})




export function generateMetadata() {
  return {
    title: 'Samco Demat Account - Fast & Easy Investing with Lucknow Lions',
    description: 'Samco Demat ke saath shuruaat karo - stocks, IPOs, mutual funds ka smart combo. Lucknow Lions pe milega support har kadam par.',
    keywords: 'samco demat account, open demat account, samco ipo, mutual funds trading, intraday trading, samco brokerage, samco app, samco review, stock market india, smart investing, demat account india, lucknow lions, online trading account, best demat account',
    robots: 'index',
    openGraph: {
      title: 'Samco Demat Account - Fast & Easy Investing with Lucknow Lions',
      description: 'Samco Demat ke saath shuruaat karo - stocks, IPOs, mutual funds ka smart combo. Lucknow Lions pe milega support har kadam par.',
      url: 'https://www.lucknowlions.com/samco-demat-account-opening',
      images: ['https://www.lucknowlions.com/OG_images/samco.webp'],
    },
    alternates: { canonical: 'https://www.lucknowlions.com/samco-demat-account-opening' },
  }
}


export default function Samco() {
  const images = [
    "/images/samco/Samco mobile app.webp",
    "/images/samco/Morning with Samco.webp",
    "/images/samco/Samco Thankyou.webp"
  ];

  const link = 'https://sam-co.in/dmcwZkpmMWhPUy85dHh6ZThaOHJ4dz09';

  return (
    <React.Fragment>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Samco Demat Account - Fast & Easy Investing with Lucknow Lions",
  "description": "Samco Demat ke saath shuruaat karo - stocks, IPOs, mutual funds ka smart combo. Lucknow Lions pe milega support har kadam par.",
  "url": "https://www.lucknowlions.com/samco-demat-account-opening",
  "brand": {
    "@type": "Organization",
    "name": "SAMCO Securities",
    "url": "https://www.samco.in/"
  },
  "provider": {
    "@type": "Organization",
    "name": "SAMCO Securities",
    "url": "https://www.samco.in/"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "description": "Free account opening with annual maintenance charges of ₹450 for individual accounts.",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "450",
      "priceCurrency": "INR",
      "name": "Annual Maintenance Charges (AMC)",
      "description": "₹450 per annum for individual accounts."
    }
  },
  "feesAndCommissionsSpecification": "Flat ₹20 per executed order across all segments. ₹20 brokerage on stock delivery trades for investments above ₹800.",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Trading Segments",
      "value": "Equity, Derivatives, Commodities, Currencies"
    },
    {
      "@type": "PropertyValue",
      "name": "Leverage",
      "value": "Up to 4X on equity delivery trades; up to 5X on equity intraday trades"
    },
    {
      "@type": "PropertyValue",
      "name": "Digital Account Opening",
      "value": "100% paperless, quick, and easy process"
    },
    {
      "@type": "PropertyValue",
      "name": "Research Tools",
      "value": "Access to SAMCO’s proprietary Stock Rating Tool and real-time market insights"
    },
    {
      "@type": "PropertyValue",
      "name": "Platform Access",
      "value": "Available on mobile, web, and desktop platforms"
    }
  ]
}`
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Samco Securities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Samco Securities is a discount brokerage firm that offers online trading and investment services across Equity, Derivatives (Futures & Options), Commodities, Currency, Mutual Funds, and IPOs. It provides cost-effective brokerage plans with a flat ₹20 per executed order."
      }
    },
    {
      "@type": "Question",
      "name": "How can I open a trading and Demat account with Samco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can open a Samco trading and Demat account online by visiting Samco's website, submitting your KYC documents (PAN, Aadhaar, bank proof), and completing the e-sign process."
      }
    },
    {
      "@type": "Question",
      "name": "What are the brokerage charges at Samco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Samco follows a lowest-fee structure where brokerage is ₹20 per executed order across all segments, including intraday, delivery, F&O, commodities, and currency. Mutual fund investments are completely free."
      }
    },
    {
      "@type": "Question",
      "name": "Does Samco charge any Annual Maintenance Charges (AMC)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AMC is worth Rs.400 + 18% GST but Lucknow Lions users can get lifetime free AMC by depositing Rs.2000 + 18% GST once."
      }
    },
    {
      "@type": "Question",
      "name": "What segments can I trade in with Samco Securities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can trade in the following segments through Samco: Equity, Derivatives, Commodities, Currency, Mutual Funds, and IPOs."
      }
    },
    {
      "@type": "Question",
      "name": "What is the margin policy at Samco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Samco offers up to 4X leverage on equity delivery trades through its Margin Trading Facility (MTF) and 5X leverage on intraday trading. Leverage for F&O, commodities, and currency trading is based on exchange and regulatory norms."
      }
    },
    {
      "@type": "Question",
      "name": "How can I transfer funds to my Samco trading account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can instant deposit funds using Net Banking, UPI, NEFT, RTGS, and IMPS. Withdrawals can be requested through the Samco Star back-office platform."
      }
    },
    {
      "@type": "Question",
      "name": "Does Samco offer research and stock recommendations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Samco provides stock ratings and research reports through its proprietary Stock Rating Tool, which evaluates stocks based on fundamental and technical parameters."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Samco Stock SIP feature?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Samco allows investors to systematically invest in stocks through its Stock SIP feature, where you can schedule automatic investments in selected stocks at regular intervals."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact Samco customer support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Samco offers customer support through phone, email, and live chat. You can reach them via their support page or customer service numbers."
      }
    },
    {
      "@type": "Question",
      "name": "Is Samco a safe and reliable broker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Samco is a SEBI-registered broker and a member of NSE, BSE, MCX, and CDSL, ensuring a secure and regulated trading environment."
      }
    },
    {
      "@type": "Question",
      "name": "How do I check my portfolio and trading reports on Samco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can log in to Samco Star, the back-office platform, to view your portfolio, profit & loss (P&L) statements, fund status, contract notes, and capital gains reports."
      }
    }
  ]
}`
      }} />

      <Navbar />

      <main className='mt-12'>

        <section className="bg-gradient-to-b from-[#b2e0ff] via-[#f78a8a] to-[#f78a8a] w-full md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left Column - Text Content */}
              <div className="w-full md:w-1/2">
                <h1 className={`${inter7.className} text-4xl md:text-7xl font-bold text-black leading-tight md:mb-4`}>
                  Buy Effortless &<br />Investing Sell
                </h1>
                <h2 className={`${inter7.className} text-4xl md:text-7xl !italic text-white mb-4 md:mb-8`}>
                  Unique Trading
                </h2>

                <a href={link} target='_blank' className="bg-white text-[#f78a8a] font-semibold py-4 px-8 rounded-full text-lg mb-4 md:mb-10 hover:bg-opacity-90 transition-all shadow-md">
                  Open Demat Account
                </a>

                <p className={`${inter7.className} mt-8 text-white text-xl md:text-3xl`}>
                  NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.
                </p>
              </div>

              {/* Right Column - Illustration */}
              <div className="w-full md:w-1/2 relative">
                <div className="relative h-[300px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src="/images/samco/Start journey with Samco.webp"
                    alt="Start journey with Samco"
                    fill
                    priority
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-8">About Samco</h2>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/samco/img2.webp" />
                </div>
                <div className="ml-4">
                  <p className="text-base md:text-lg text-gray-800">
                    Samco Securities was established with a vision to revolutionize trading and investing in India by providing a
                    seamless and cost-effective trading experience. With a strong focus on technology and transparency, Samco has grown
                    to become one of India's leading discount brokerage firms, offering online trading services in Equity, Currency,
                    Commodities, IPOs, F&O (Futures & Options), and Mutual Funds.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/samco/img2.webp" />
                </div>
                <div className="ml-4">
                  <p className="text-base md:text-lg text-gray-800">
                    Founded in 2015 by Jimeet Modi, who currently serves as the CEO, the company acquired Samruddhi Stock Brokers
                    Limited and rebranded it as Samco Securities. Our mission is to empower every stock market participant to consistently
                    outperform the index and reach their highest financial potential. The head office of Samco Securities Limited is located at
                    1004 - A, 10th Floor, Naman Midtown - A Wing, Senapati Bapat Marg, Prabhadevi, Mumbai - 400 013, Maharashtra, India.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/samco/img2.webp" />
                </div>
                <div className="ml-4">
                  <p className="text-base md:text-lg text-gray-800">
                    Samco is a registered member of major exchanges, including NSE, BSE, MCX, NCDEX, and CDSL, ensuring a secure
                    and reliable trading experience for investors.
                  </p>
                  <p className="text-base md:text-lg text-gray-800 mt-2">
                    With its Flat ₹20 Brokerage Plan, Samco Securities has introduced an affordable and transparent pricing structure,
                    making high-frequency trading more cost-effective. Under this plan, traders can execute orders across Intraday, F&O,
                    Currency, and Commodities at a flat ₹20 per order, while investments in Equity Delivery, IPOs, and Mutual Funds are
                    completely FREE.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/samco/img2.webp" />
                </div>
                <div className="ml-4">
                  <p className="text-base md:text-lg text-gray-800">
                    At Samco, we are committed to continuous innovation, customer-centric services, and providing top-tier research
                    and trading tools to empower investors. Our goal is to become India's most trusted and admired stock brokerage firm,
                    and we strive every day to enhance the trading experience of our clients.
                  </p>
                  <p className="text-base md:text-lg text-gray-800 mt-2">
                    As a Depository Participant (DP) with CDSL, Samco offers Demat Account services to help investors securely hold and
                    manage their securities with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <button className="w-full flex flex-col items-center my-6">
          <a target='_blank'
            href={link}
            className="mx-8 w-md py-4 px-6 text-center text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-[#ff1a54] to-[#ffa099] hover:opacity-90 transition-all shadow-md"      >
            Open Demat Account
          </a>
          <div className="w-full border-t border-gray-200 my-6" />
        </button>



        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl  mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF0000] text-center mb-12">
              Features & Benefits of Samco Securities
            </h2>


            <div className='flex w-full'>

              <div className="flex flex-1 flex-col justify-center items-center gap-8">
                {images.map((img, index) => (
                  <div key={index} className="w-full flex">
                    <img
                      src={img}
                      alt={`Samco Feature ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                {[
                  {
                    number: 1,
                    title: "Unified Trading & Investment Platform",
                    points: [
                      "Trade across equity, derivatives, commodities, and currencies on a single platform.",
                      "Invest in direct mutual funds with zero commission",
                      "Track your portfolio in real-time with advanced analytics."
                    ]
                  },
                  {
                    number: 2,
                    title: "Cost-Effective Brokerage Plans",
                    points: [
                      "Flat ₹20 per executed order across all segments.",
                      "Zero brokerage on stock delivery trades for investments above ₹800",
                      "⦁	No hidden fees—simple and transparent pricing."
                    ]
                  },
                  {
                    number: 3,
                    title: "Margin Trading Facility (MTF)",
                    points: [
                      "Get up to 4X leverage on equity delivery trades.",
                      "Hold leveraged positions for a longer duration with ease.",
                      "Optimize capital allocation for higher profitability",
                      "Get up to 5X leverage on Equity intraday trades."
                    ]
                  },
                  {
                    number: 4,
                    title: "Instant Fund Transfers & Withdrawals",
                    points: [
                      "Secure and instant fund transfers between your trading and bank accounts.",
                      "Multiple payment options for seamless transactions."
                    ]
                  },
                  {
                    number: 5,
                    title: "Advanced Research & Market Insights",
                    points: [
                      "Access Samco’s proprietary Stock Rating Tool that evaluates stocks using AI-based analytics",
                      "Get real-time stock ratings (1 to 5 stars) to make informed investment decisions.",
                      "Receive in-depth market reports and expert recommendations."
                    ]
                  },
                  {
                    number: 6,
                    title: "Pledge &Unpledged Shares Instantly",
                    points: [
                      "Pledge securities to avail extra margins for trading.",
                      "Unpledged shares anytime with a few clicks."
                    ]
                  },
                  {
                    number: 7,
                    title: "Secure & Hassle-Free Account Management",
                    points: [
                      "100% digital account opening - Paperless, quick, and easy.",
                      "Two-factor authentication (2FA) for enhanced security.",
                      "Access Samco’s trading platforms on mobile, web, and desktop."
                    ]
                  }
                ].map((feature) => (
                  <div key={feature.number} className="shadow-lg shadow-red-200 hover:shadow-2xl hover:shadow-red-200 p-6 rounded-lg transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-7 h-7 mr-3">
                        <img src='/images/samco/circle-feature.png' />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                    </div>
                    <ul className="list-none pl-10 space-y-2">
                      {feature.points.map((point, i) => (
                        <li key={i} className="relative text-gray-700">
                          <span className="absolute -left-4 top-2.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          <span className={`${montserrat.className}`}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </section>

        <button className="w-full flex flex-col items-center my-6">
          <a target='_blank'
            href={link}
            className="mx-8 w-md py-4 px-6 text-center text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-[#ff1a54] to-[#ffa099] hover:opacity-90 transition-all shadow-md"      >
            Open Demat Account
          </a>
          <div className="w-full border-t border-gray-200 my-6" />
        </button>


        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-900 text-left mb-8">
              Charges at Samco (Individual Retail Investors)
            </h2>

            {/* Account Opening & Maintaining Charges */}
            <div className="mb-8 shadow-md rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-3 flex gap-2 items-center">
                <img className='w-7' src='/images/samco/icon-money.png' />
                <h3 className="font-semibold">Account Opening & Maintaining Charges</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Service</th>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Charges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Trading & Demat Account Opening</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹0</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">Annual Maintenance Charges (AMC)</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹450 + 18% GST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Brokerage Charges */}
            <div className="mb-8 shadow-md rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-3 flex gap-2 items-center">
                <img className='w-7' src='/images/samco/icon-money.png' />
                <h3 className="font-semibold">Brokerage Charges</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Segment</th>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Charges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Equity Delivery</td>
                      <td className="py-3 px-4 text-sm text-gray-700">0.5% or ₹20 per order, whichever is lower</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">Equity Intraday</td>
                      <td className="py-3 px-4 text-sm text-gray-700">0.05% or ₹20 per order, whichever is lower</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Equity Futures</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Flat ₹20 per order</td>
                    </tr>


                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Equity Options</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Flat ₹20 per order</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Currency Futures</td>
                      <td className="py-3 px-4 text-sm text-gray-700">0.05% or ₹20 per order, whichever is lower</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Currency Options</td>
                      <td className="py-3 px-4 text-sm text-gray-700">0.05% or ₹20 per order, whichever is lower</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Commodity Futures</td>
                      <td className="py-3 px-4 text-sm text-gray-700">0.05% or ₹20 per order, whichever is lower</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Commodity Options</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Flat ₹20 per order</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Mutual Fund</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Demat Account Charges */}
            <div className="mb-8 shadow-md rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-3 flex gap-2 items-center">
                <img className='w-7' src='/images/samco/icon-money.png' />
                <h3 className="font-semibold">Demat Account Charges</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Service</th>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Charges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Annual Maintenance Charges (AMC)</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        <div>Retail: ₹400 + 18% GST</div>
                        <div>Non-Retail: 800 + 18% GST</div>
                        <div className="text-xs text-gray-500 mt-1">Onetime Rs.2000 + 18% GST and get the lifetime free AMC for Lucknow Lions User</div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">Share Transfer Charges - Within SAMCO</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹15 + applicable taxes per transaction</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Share transfer Charges - Outside SAMCO</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹25 or 0.02% of transaction value, whichever is higher + applicable taxes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">Pledge and Unpledge Charges</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹30 per transaction + applicable taxes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Dematerialisation Request Charges</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹10 per certificate + ₹50 per request towards postal charges</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Rematerialisation Request Charges</td>
                      <td className="py-3 px-4 text-sm text-gray-700">CDSL charges at actuals + ₹50 per request towards postal charges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            {/* Additional Charges */}
            <div className="shadow-md rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-3 flex gap-2 items-center">
                <img className='h-6' src='/images/samco/icon-satatutory.png' />
                <h3 className="font-semibold">Additional Charges</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Service</th>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Charges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Call and Trade</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹20 per executed order+18% GST</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">Physical Contract Notes</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹50 per contract note + 18% GST</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">RMS Auto Square Off</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹20 per executed order</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">Payment Gateway Charges</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹9 + GST</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">DP Charges</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹ Rs 15 + 18 % GST per Script</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">OFS/Buyback/Takeover/Delisting/SGB</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹50 + 18% GST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-8 p-2 bg-red-100 border-l-4 border-red-500 text-yellow-800 text-md rounded shadow">
              <strong>Note:</strong> *Call and Trade Charges include RMS Square-off charges.
            </div>



            {/* Statutory and Other Charges */}
            <div className="shadow-md rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-3 flex gap-2 items-center">
                <img className='h-6' src='/images/samco/icon-satatutory.png' />
                <h3 className="font-semibold">Statutory Charges</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Charge Type</th>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Rates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Securities Transaction Tax (STT)</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        <ul>
                          <li>Equity Delivery: 0.10% on buy & sell</li>
                          <li>Equity Delivery: 0.10% on buy & sell</li>
                          <li>Equity Intraday: 0.025% on sell side</li>
                          <li>Equity Futures: 0.02% on sell side</li>
                          <li>Equity Options: 0.01% on sell side (on premium)</li>
                          <li>Currency F&O: No STT</li>
                          <li>On Exercise Transaction: 0.125%</li>
                          <li>Right to Entitlement: 0.05% on sell side</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">Commodity Transaction Tax (CTT)</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        <ul>
                          <li>Commodity Futures: 0.01% on sell side (Non-Agri)</li>
                          <li>Commodity Options: 0.05% on sell side</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">Exchange Transaction Charges</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        <ul>
                          <li>NSE - ₹2.97 per Lacs</li>
                          <li>BSE - For A Group and B Group Shares - ₹1 per trade</li>
                          <li>For other groups - ₹3.75 per Lacs (0.00375%)</li>
                          <li>For XC, XT, XD, Z and ZP - ₹100 per Lacs (0.1%)</li>
                          <li>For R and P Group - ₹1000 per Lacs (1.0%)</li>
                          <li>NSE - ₹2.97 per Lacs</li>
                          <li>BSE - ₹3.75 per Lacs</li>
                          <li>NSE - ₹1.73 per Lacs</li>
                          <li>BSE - ₹0 per trade (Sensex / Stock Futures)</li>
                          <li>NSE - ₹35.03/- per Lacs on Premium</li>
                          <li>BSE - ₹32.50 per Lacs (Index Options)</li>
                          <li>BSE - ₹5 per Lacs (Stock Options)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">GST</td>
                      <td className="py-3 px-4 text-sm text-gray-700">18% on (Brokerage + Transaction Charges + SEBI Fee)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">SEBI Charges</td>
                      <td className="py-3 px-4 text-sm text-gray-700">₹10 per crore of turnover (except for Agri futures where it is ₹1 per crore)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">Stamp Duty</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Varies by state and segment; refer to the official website for detailed rates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-8 p-2 bg-red-100 border-l-4 border-red-500 text-yellow-800 text-md rounded shadow">
              <strong>Note:</strong> **CTT is applicable on Commodity Transactions only.
            </div>
            <div className='mb-8 text-lg'></div>

            {/* Registration Details */}
            <div className="mb-8 shadow-md rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-3">
                <h3 className="font-semibold">Samco Securities Registration Details</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Segments</th>
                      <th className="py-3 px-4 text-left text-sm font-bold text-gray-700 w-1/2">Registration Number</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">SEBI Registration No</td>
                      <td className="py-3 px-4 text-sm text-gray-700">IN200002535</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">NSE Member Code</td>
                      <td className="py-3 px-4 text-sm text-gray-700">14206</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">BSE Member Code</td>
                      <td className="py-3 px-4 text-sm text-gray-700">4043</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">MCX Member Code</td>
                      <td className="py-3 px-4 text-sm text-gray-700">55135</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">CDSL DP Registration No</td>
                      <td className="py-3 px-4 text-sm text-gray-700">IN-DP-476-2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-red-800 mb-4">Important Notice</h2>
              <p className="text-sm font-semibold text-red-600">
                Please keep these registration numbers for your reference. For any queries related to these registrations, contact our support team.
              </p>
            </div>

          </div>
        </section>


        <button className="w-full flex flex-col items-center my-6">
          <a target='_blank'
            href={link}
            className="mx-8 w-md py-4 px-6 text-center text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-[#ff1a54] to-[#ffa099] hover:opacity-90 transition-all shadow-md"      >
            Open Demat Account
          </a>
          <div className="w-full border-t border-gray-200 my-6" />
        </button>



        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Why Choose Samco Securities?</h1>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Samco Securities is a leading discount brokerage firm in India, offering cost-effective trading solutions, advanced trading tools, and transparent pricing. Whether you are a beginner, an experienced trader, or a long-term investor, Samco provides a robust platform that caters to all your financial needs. Here’s why you should choose Samco Securities for your trading and investment journey:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "/images/samco/Coin-Wallet.webp",
                  title: "AMC on Demat Account Free Demat Account for Life",
                  description: "One of the biggest advantages of opening an account with Samco Securities is the option to get a lifetime free Demat account. Although the AMC is worth ₹400 + 18% GST annually, Lucknow Lions users can avail lifetime free AMC by making a one-time deposit of ₹2000 + 18% GST. This means users can hold their stocks without worrying about recurring annual maintenance charges."
                },
                {
                  icon: "/images/samco/Coin-Wallet.webp",
                  title: "Best for Long-Term Investors",
                  description: "If you are a long-term investor planning to hold stocks for an extended period, avoiding AMC charges helps in minimizing costs. This feature is particularly beneficial for those following a long-term wealth-building strategy, as there are no hidden costs eating into your profits. By opting for this one-time AMC payment, investors can save significantly in the long run."
                },
                {
                  icon: "/images/samco/Coin-Wallet.webp",
                  title: "Transparent & Flat ₹20 Brokerage",
                  bulletPoints: [
                    "One of the Lowest Brokerage Fees in India\nSamco Securities offers a highly competitive brokerage structure, charging a flat ₹20 per executed order across all segments, including Equity, Derivatives (Futures & Options), Commodities, and Currency trading. This pricing is significantly lower than traditional brokers who charge a percentage-based brokerage fee.",
                    "No Hidden Charges\nSamco follows a completely transparent fee structure, ensuring that traders and investors do not have to deal with unexpected charges. Unlike many brokers who include hidden costs like software fees, maintenance fees, or platform usage fees, Samco provides a clear, fixed-cost model.",
                    "Cost-Efficient for High-Volume Traders\nWhether you trade 1 lot or multiple lots, the brokerage remains fixed at ₹20 per order, making it an excellent choice for high-volume traders who execute multiple trades daily. By keeping brokerage costs predictable, traders can optimize their returns."
                  ]
                },
                {
                  icon: "/images/samco/Coin-Wallet.webp",
                  title: "Best for Long-Term Investors",
                  bulletPoints: [
                    "Instant Access to Profit & Loss (P&L) Reports\nKeeping track of your trades is crucial, and Samco provides real-time profit and loss statements to help traders monitor their financial performance. You can review intraday, positional, and long-term trade reports with just a few clicks.",
                    "Detailed Contract Notes & Ledger Statements\nSamco provides instant access to contract notes and ledger reports, which contain all details about your transactions, brokerage charges, and statutory fees. These reports help traders keep track of their expenses and trading history.",
                    "Tax-Friendly Capital Gains Reports\nInvestors can access automated capital gains reports, making it easy to calculate short-term and long-term capital gains for tax filing. This feature ensures smooth tax compliance and saves time during the tax season."
                  ]
                },
                {
                  icon: "/images/samco/Coin-Wallet.webp",
                  title: "Multi-Account Management",
                  bulletPoints: [
                    "Single Dashboard for Multiple Accounts\nSamco's multi-account management feature is perfect for traders managing multiple family or business trading accounts. You can track and analyze different portfolios under a single login, eliminating the hassle of switching between accounts.",
                    "Monitor Consolidated and Individual Performance\nWhether you manage trading for family members, businesses, or proprietary trading groups, you can view collective and individual account performance reports in one place. This feature provides a clear financial overview, helping in better decision-making.",
                    "Custom Alerts & Notifications\nSet up notifications for portfolio performance, margin requirements, or trading opportunities across multiple accounts. This ensures that you stay updated on all your accounts without manually checking them individually."
                  ]
                },
                {
                  icon: "/images/samco/Coin-Wallet.webp",
                  title: "Mobile-Friendly & Web-Based Trading",
                  bulletPoints: [
                    "Trade Anytime, Anywhere\nSamco provides a seamless trading experience on mobile, desktop, and tablets, allowing traders to execute trades from anywhere. Whether you're at home, at work, or on the move, you can place trades instantly without delays.",
                    "Fast & User-Friendly Interface\nThe trading platform is optimized for speed and efficiency, ensuring smooth trade execution even during high market volatility. The interface is designed to cater to both beginners and professional traders, offering easy navigation and powerful features.",
                    "No Need to Download Additional Software\nWith Samco's web-based trading platform, you don't need to install any additional software. Simply log in through the web browser on any device and start trading. The mobile app also provides a fast and intuitive experience for traders on the go."
                  ]
                }
              ].map((feature, index) => (
                <>
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      <div className="bg-red-200 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                        <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">{feature.title}</h3>
                    {feature.description && <p className="text-gray-700 mb-4">{feature.description}</p>}
                    {feature.bulletPoints && (
                      <ul className="list-disc pl-5 space-y-2">
                        {feature.bulletPoints.map((point, index) => (
                          <li key={index} className="text-gray-700">{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              ))}

            </div>
          </div>
        </section>


        <button className="w-full flex flex-col items-center my-6">
          <a target='_blank'
            href={link}
            className="mx-8 w-md py-4 px-6 text-center text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-[#ff1a54] to-[#ffa099] hover:opacity-90 transition-all shadow-md"      >
            Open Demat Account
          </a>
          <div className="w-full border-t border-gray-200 my-6" />
        </button>



        <section className='py-12 px-4'>

          <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 bg-gradient-to-br from-[#4CAF50] to-[#81C784] p-6">
                <h2 className={`${inter7.className} text-white text-4xl font-bold text-center mb-8`}>Pros</h2>
                <div>
                  {[
                    "Flat ₹20 Brokerage Fee - Low-cost trading across all segments, making it ideal for high-volume traders.",
                    "AMC Benefits on Demat Account - Although the AMC is worth Rs.400 + 18% GST, Lucknow Lions users can get lifetime free AMC by depositing Rs.2000 + 18% GST once.",
                    "Real-Time Trading Reports & Analytics - Instant access to P&L statements, contract notes, and tax-friendly capital gains reports.",
                    "Margin Trading Facility (MTF) - Up to 4X leverage on equity delivery trades for enhanced capital efficiency.",
                    "Multi-Account Management - Manage multiple trading accounts under one login, perfect for family or business trading.",
                    "Paperless Account Opening & Trading - 100% digital onboarding process for quick and easy account setup.",
                    "Mobile & Web-Based Trading - Seamless access to trading across devices without requiring software downloads.",
                    "Stock SIP Feature - Allows systematic investment in equities with periodic automated investments."
                  ].map((item, index) => (
                    <div key={`pro-${index}`} className="flex items-start gap-3 mb-6">
                      <div className="mt-1">
                        <img src='images/samco/check-circle.png' />
                      </div>
                      <p className={`${inter7.className} text-white text-base`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 bg-gradient-to-br from-[#F44336] to-[#F69B9B] p-6">
                <h2 className={`${inter7.className} text-white text-3xl font-bold text-center mb-8`}>Cons</h2>
                <div>
                  {[
                    "No Free Call & Trade Facility - Call & Trade orders are charged ₹20 per executed order.",
                    "Limited Physical Branches - Mostly operates online, which may not be ideal for investors who prefer in-person assistance.",
                    "No Banking Services - Unlike full-service brokers, Samco does not offer banking services such as savings accounts.",
                  ].map((item) => <div className="flex items-start gap-3 mb-6">
                    <div className="mt-1">
                      <XIcon className='text-white' />
                    </div>
                    <p className="text-white text-base">{item}</p>
                  </div>)}
                </div>
              </div>
            </div>
          </div>


        </section>



        <section className='py-12 px-4'>
          <div className="max-w-7xl mx-auto py-10 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              How to Open a Trading Account with <span className="text-blue-500">Samco</span>?
            </h1>

            <p className="text-lg mb-8 text-center">
              Opening an account with Samco Securities is quick, 100% online, and paperless. Follow these simple steps:
            </p>

            <div className="mb-10">
              <ol className="list-decimal ml-6 space-y-4">
                {[
                  {
                    id: 1,
                    text: <>Visit the Samco website: <a href="#" className="text-blue-500 font-medium hover:underline">Open Now</a> Put the link here</>
                  },
                  {
                    id: 2,
                    text: "Enter your mobile number and complete the OTP verification."
                  },
                  {
                    id: 3,
                    text: "Upload KYC documents (PAN Card, Aadhaar, Bank Proof, Income Proof if required)."
                  },
                  {
                    id: 4,
                    text: "Complete the e-signature process for account verification."
                  },
                  {
                    id: 5,
                    text: "Start trading & investing with Samco Securities."
                  },
                ].map((step) => (
                  <li key={step.id} className="text-lg pl-2">
                    {step.text}
                  </li>
                ))}
              </ol>
            </div>

            <h2 className="text-xl font-semibold mb-4">
              Documents Required for Account Opening:
            </h2>

            <ul className="list-disc ml-6 space-y-3">
              {[
                "PAN Card (Mandatory)",
                "Aadhaar Card (For e-KYC verification)",
                "Bank Proof (Cancelled Cheque or Bank Statement)",
                "Income Proof (ITR, Salary Slip, or Demat Holdings) – Required for F&O & Margin Trading",
                "Signature as per PAN CARD on white paper."
              ].map((doc, index) => (
                <li key={index} className="text-lg pl-2">
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>


        <section className="bg-gradient-to-br from-[#eb9595] to-[#CA2424] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1
              className="text-7xl md:text-6xl font-bold mb-6 text-white drop-shadow-md"
              style={{ textShadow: '0px 3px 0px #1EE0E1' }}
            >
              Get Started with Samco Today!
            </h1>

            <p className="text-[#E3DDDD] text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Samco Securities is your ultimate partner for trading and investing. With a feature-rich platform, competitive
              brokerage, and powerful research tools, Samco empowers traders of all levels to succeed in the financial
              markets.
            </p>

            <a
              href={link}
              target='_blank'
              className="inline-block bg-white text-red-600 text-xl font-bold py-3 px-10 rounded-md ring-1 shadow-2xl hover:bg-transparent hover:text-white transition-colors duration-300 shadow-md"
            >
              Start Trading Now!
            </a>
          </div>
        </section>


        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-4xl mx-auto">
              Receive the investment trading calls by SEBI registered analyst to grow your wealth.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  name: 'Apurva Sheth',
                  title: 'Head Of Market Perspectives Research',
                  imageSrc: '/images/samco/Apurva Sheth.webp'
                },
                {
                  name: 'Dhupesh Dhameja',
                  title: 'Swing Trader Analytics',
                  imageSrc: '/images/samco/Dhupesh Dhameja.webp'
                },
                {
                  name: 'Om Mehra',
                  title: 'Option Analytics',
                  imageSrc: '/images/samco/Om Mehra.webp'
                }
              ].map((analyst, index) => (

                <div key={index} className="flex flex-col items-center">
                  <div className="w-full max-w-[240px] h-[200px] relative mb-4 rounded-md overflow-hidden">
                    <Image
                      alt={analyst.name}
                      src={analyst.imageSrc}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 240px"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">{analyst.name}</h3>
                  <p className="text-gray-700 text-center mt-1">{analyst.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>




        <button className="w-full flex flex-col items-center my-6">
          <a target='_blank'
            href={link}
            className="mx-8 w-md py-4 px-6 text-center text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-[#ff1a54] to-[#ffa099] hover:opacity-90 transition-all shadow-md"      >
            Open Demat Account
          </a>
          <div className="w-full border-t border-gray-200 my-6" />
        </button>



        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions (FAQs)</h2>

            {[
              {
                question: 'What is Samco Securities?',
                answer: 'Samco Securities is a discount brokerage firm that offers online trading and investment services across Equity, Derivatives (Futures & Options), Commodities, Currency, Mutual Funds, and IPOs. It provides cost-effective brokerage plans with a flat ₹20 per executed order.'
              },
              {
                question: 'How can I open a trading and Demat account with Samco?',
                answer: "You can open a Samco trading and Demat account online by visiting Samco's website, submitting your KYC documents (PAN, Aadhaar, bank proof), and completing the e-sign process."

              },
              {
                question: 'What are the brokerage charges at Samco?',
                answer: 'Samco follows a lowest-fee structure where brokerage is ₹20 per executed order across all segments, including intraday, delivery, F&O, commodities, and currency. Mutual fund investments are completely free.'

              },
              {
                question: 'Does Samco charge any Annual Maintenance Charges (AMC)?',
                answer: 'AMC is worth Rs.400 + 18% GST but Lucknow Lions users can get lifetime free AMC by depositing Rs.2000 + 18% GST once.'

              },
              {
                question: 'What segments can I trade in with Samco Securities?',
                answer: 'You can trade in the following segments through Samco'
              },
              {
                question: 'What is the margin policy at Samco?',
                answer: 'Samco offers up to 4X leverage on equity delivery trades through its Margin Trading Facility (MTF) and 5X leverage on intraday trading. Leverage for F&O, commodities, and currency trading is based on exchange and regulatory norms.'
              },
              {
                question: 'How can I transfer funds to my Samco trading account?',
                answer: 'You can instant deposit funds using Net Banking, UPI, NEFT, RTGS, and IMPS. Withdrawals can be requested through the Samco Star back-office platform.'
              },
              {
                question: 'Does Samco offer research and stock recommendations?',
                answer: 'Yes, Samco provides stock ratings and research reports through its proprietary Stock Rating Tool, which evaluates stocks based on fundamental and technical parameters.'
              },
              {
                question: 'What is the Samco Stock SIP feature?',
                answer: 'Samco allows investors to systematically invest in stocks through its Stock SIP feature, where you can schedule automatic investments in selected stocks at regular intervals.'
              },
              {
                question: 'How can I contact Samco customer support?',
                answer: 'Samco offers customer support through phone, email, and live chat. You can reach them via:'
              },
              {
                question: 'Is Samco a safe and reliable broker?',
                answer: 'Yes, Samco is a SEBI-registered broker and a member of NSE, BSE, MCX, and CDSL, ensuring a secure and regulated trading environment.'
              },
              {
                question: 'How do I check my portfolio and trading reports on Samco?',
                answer: 'You can log in to Samco Star, the back-office platform, to view your portfolio, profit & loss (P&L) statements, fund status, contract notes, and capital gains reports'
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="text-lg font-medium text-gray-900">Q : {faq.question}</h3>
                <div className="text-base text-gray-800"><b>A : </b>{faq.answer}</div>
                <div className="mb-8 border-t border-gray-300" />

              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </React.Fragment>
  );
}