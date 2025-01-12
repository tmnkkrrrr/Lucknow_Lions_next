"use client"

import React, { useState } from 'react';
import { Smartphone, Globe, Code, BarChart, UserPlus, ZoomIn, Upload, Badge, ThumbsUp, ThumbsDown, Phone } from 'lucide-react';
import { Alice } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const alice = Alice({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})


const AliceBlue = () => {

  const url = 'https://ekyc.aliceblueonline.com/?source=SSP157A';

  const [table1Toggle, setTable1Toggle] = useState('account');
  const [table2Toggle, setTable2Toggle] = useState('statutoryCharges');


  const PlatformCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-600 mr-3" />
        <h3 className="text-md font-semibold">{title}</h3>
      </div>
      <p className="text-center text-gray-900">{description}</p>
    </div>
  );


  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 mt-8 bg-white pt-16">

        <section className="flex flex-wrap gap-4">
          <div className="text-left">
            <h2 className="text-2xl text-blue-600 font-semibold mb-2 block">
              Your Trading Buddy
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Welcome to Alice Blue
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              At Alice Blue, trading should be accessible and affordable for everyone. With
              zero account opening fees, we remove the initial hurdles that stop potential
              traders and investors. So you can start your trading journey without any upfront
              costs and access our advanced trading tools, innovative solutions, and
              exceptional support.
            </p>
            <a href={url} target='_blank' className="w-fit bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
              Open a Free Account Now
            </a>
          </div>
          <div>
            <img src='/aliceblue_files/alice-blue.webp' alt='Alice Blue' />
          </div>
        </section>


        <section className="my-24">
          <div className="mb-8">
            <a href="#" className="text-2xl text-blue-600 font-semibold mb-2 block">About Alice Blue</a>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Zero Account Opening Fees<br />
              with Alice Blue
            </h2>
            <p className="text-gray-400 leading-relaxed">
              It was founded in December 2006 in Erode, Tamil Nadu with 5 employees and an MCX membership. By 2007 we became a discount brokerage and started our operations in Chennai. In 2017 we shifted our headquarters to Bangalore a major milestone in our growth journey. As a member of multiple leading exchanges, including MCX, NSE, NCDEX, MCX-SX, BSE, and CDSL, we offer a wide range of services to enable online trading in the Equity, Currency, and Commodity segments, as well as IPOs, F&O (Futures and Options), and Mutual Funds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '/aliceblue_files/ic1.png',
                title: "Freedom 15 Brokerage Plan",
                description: "Freedom 15 is one of the unique offerings from Alice Blue and the best in the Indian stockbroking industry."
              },
              {
                icon: '/aliceblue_files/ic2.png',
                title: "Commitment to Excellence",
                description: "Alice Blue is always evolving to serve our clients better. To be trusted and admired by our customers is our vision and to become India's No.1 stockbroker is our ambition."
              },
              {
                icon: '/aliceblue_files/ic2.png',
                title: "Demat Services",
                description: "As a CDSL DP Alice Blue offers demat account services to all our customers."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="mb-4">
                  <img src={feature.icon} className="text-blue-600 w-8" alt={feature.title} />
                </div>
                <h3 className="text-blue-600 text-xl font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <p className='w-full text-center text-gray-400 mt-16'>Join Alice Blue today and experience a partnership that is built on trust, innovation and your success!</p>
          <a href={url} target='_blank' className="mx-auto  mt-8 w-fit  bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
            Open a Free Account Now
          </a>
        </section>



        <section className='my-24'>
          <h2 className="text-3xl font-bold text-center mb-12">Why Alice Blue?</h2>
          <p className="max-w-xl mx-auto text-center mb-12">
            We are one of the top discount brokerage in India. With 20+ years of legacy we offer trading
            tools, competitive pricing and support to ensure your success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Flat Fee",
                img: 'flat-free.webp',
                description: "No hidden charges."
              },
              {
                title: "Complete Support",
                img: 'complete-support.webp',
                description: "From documents to trading tools we have you covered."
              },
              {
                title: "Flexible Margin",
                img: 'flexible-margin.webp',
                description: "Trade more with lower margins."
              },
              {
                title: "Trusted",
                img: 'trusted.webp',
                description: "20+ years old"
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg border-2 hover:shadow-2xl hover:border-none transition-shadow transition-border">
                <img src={`/aliceblue_files/${feature.img}`} alt={feature.title} />
                <h3 className="text-md mb-2">{feature.title}</h3>
                <p className="text-small text-center text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-24">
          <div className="p-8 bg-[#F2EBEB] mx-auto rounded-xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Alice Blue ANT Trading App & Trading Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "Alice Blue ANT MOBI 2.0",
                  description: "A powerful mobile trading app that lets you trade on the go with real-time market updates and advanced charting tools."
                },
                {
                  icon: Globe,
                  title: "Alice Blue ANT Web",
                  description: "An intuitive web-based trading platform for seamless and hassle-free trading from any browser."
                },
                {
                  icon: Code,
                  title: "Alice Blue ANT API",
                  description: "Enables algorithmic trading and custom integrations for advanced traders and developers."
                },
                {
                  icon: BarChart,
                  title: "TradingView Integration",
                  description: "Access sophisticated charting tools and advanced technical analysis features directly from TradingView."
                }
              ].map((platform, index) => (
                <PlatformCard key={index} {...platform} />
              ))}
            </div>
          </div>
        </section>


        <section className="my-24 relative w-[100vw] left-[calc(-50vw+50%)] bg-gray-100">
          <div className="p-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">How to <span className='text-blue-800'>Open a Demat Account</span> with Alice Blue?</h2>
              <p className="">Opening a Demat account with Alice Blue is quick and simple. Follow these steps to start trading within 24 hours:</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 justify-between items-center">
              {[
                {
                  icon: UserPlus,
                  title: 'Click on the "Open Account" button',
                  description: "Visit our website and click the Open Account link."
                },
                {
                  icon: ZoomIn,
                  title: "Fill in Basic Details",
                  description: "Provide your name, email ID, and phone number."
                },
                {
                  icon: Upload,
                  title: "Upload Documents",
                  description: "Submit scanned copies of PAN Card, Aadhaar Card, bank proof, and other required documents."
                },
                {
                  icon: Badge,
                  title: "Start Trading",
                  description: "Once your account is verified, begin trading within 24 hours."
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center p-3 hover:bg-white rounded transition-colors duration-200">
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center ${index === 2 ? 'bg-blue-600' : 'bg-white'} mb-4`}>
                    <step.icon className={`w-8 h-8 text-blue-500 ${index === 2 && 'text-white'}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 max-w-xs">{step.description}</p>

                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href={url} target='_blank' className="w-fit mx-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
                Open a Free Account Now
              </a>
            </div>
          </div>
        </section>

        <section className='my-28'>
          <h2 className="text-2xl font-bold mb-4">Required Documents to <span className="text-blue-600">Open a Demat Account</span> with Alice Blue</h2>

          <p className="text-gray-600 mb-6">
            Opening a Demat account with Alice Blue is a simple process. Make sure you have the following documents ready for a smooth registration:
          </p>

          <div className="bg-blue-600 text-white py-3 px-6 rounded-lg mb-6 w-fit">
            <h2 className="text-xl font-semibold">Mandatory Documents:</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold">1. PAN Card:</h3>
              <p className="text-gray-700">A scanned copy of your PAN card is essential for identity verification.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold">2. Signature:</h3>
              <p className="text-gray-700">A clear signature on white paper matching the one on your PAN card.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold">3. Proof of Identity (POI):</h3>
              <p className="text-gray-700">You can submit any of the following government-issued IDs:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>PAN Card (used as POI)</li>
                <li>Voter ID</li>
                <li>Passport</li>
                <li>Any other government-issued ID with your photograph.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold">3. Proof of Identity (POI):</h3>
              <p className="text-gray-700">You can submit any of the following government-issued IDs:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>PAN Card (used as POI)</li>
                <li>Voter ID</li>
                <li>Passport</li>
                <li>Any other government-issued ID with your photograph.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold">4. Proof of Address (POA):</h3>
              <p className="text-gray-700">Provide a valid address proof, such as:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Aadhar Card</li>
                <li>Ration Card</li>
                <li>Passport</li>
                <li>Voter ID</li>
                <li>Utility bills (e.g., electricity bill) verified copies.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold">5. Bank Proof:</h3>
              <p className="text-gray-700">One of the following:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Canceled cheque</li>
                <li>Bank passbook</li>
                <li>Six-month bank statement.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold">6. Income Proof (for Derivatives Segment):</h3>
              <p className="text-gray-700">Submit any one of these:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Six-month bank statement.</li>
                <li>Income Tax Returns (ITR) with income computation.</li>
                <li>Salary slip.</li>
                <li>Net worth certificate.</li>
                <li>Copy of Form 16.</li>
                <li>Demat holding statement.</li>
              </ul>
            </div>

          </div>
        </section>


        <section className="mx-auto my-28">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Pricing Details</h2>

          <div className="grid md:grid-cols-2 shadow-xl rounded-xl gap-8">
            <div className='p-6'>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#ECEBFF] rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-indigo-300 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-indigo-600"></div>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Alice Blue Charges & Pricing</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Alice Blue offers a transparent and competitive pricing structure to suit the needs of every trader. Our Freedom 15 Plan ensures affordability and value for money.
              </p>

              <div className="text-5xl font-bold text-gray-900 mb-8">FREE</div>

              <a href='https://ekyc.aliceblueonline.com/?source=SSP157A' target='_blank' className="w-fit bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-indigo-700 transition-colors">
                Open a Free Account Now
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="bg-indigo-50 p-8 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">What's included</h3>
              <ul className="space-y-4">
                {[
                  'Annual Maintenance Charges (AMC): No AMC, lifetime free.',
                  'DP Charges: Rs. 15 per script',
                  'Trading & Demat Account Opening: FREE',
                  'Our Freedom 15 Plan'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        <section className="p-6">
          <div className="flex gap-4 mb-6 justify-center">
            <button
              className={`px-6 py-2 rounded-lg ${table1Toggle === 'account' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
              onClick={() => setTable1Toggle('account')}
            >
              Account-Related Charges
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${table1Toggle === 'brokerage' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
              onClick={() => setTable1Toggle('brokerage')}
            >
              Brokerage Charges
            </button>
          </div>

          <div className={`border rounded-lg overflow-hidden ${table1Toggle === 'account' ? 'block' : 'hidden'}`}>
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="w-1/2 p-4 text-left">Service</th>
                  <th className="w-1/2 p-4 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Trading & Demat Account Opening', fee: 'Free via Lucknow Lions Platform & Website' },
                  { service: 'Annual Maintenance Charges (AMC)', fee: 'FREE for lifetime on our plateform' },
                  { service: 'DP Charges', fee: '₹15 per script' }
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-blue-50 border-b' : 'border-b'}>
                    <td className="p-4">{item.service}</td>
                    <td className="p-4">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={`border rounded-lg overflow-hidden ${table1Toggle === 'brokerage' ? 'block' : 'hidden'}`}>
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="w-1/2 p-4 text-left">Service</th>
                  <th className="w-1/2 p-4 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Equity Delivery', fee: '0.05% or ₹20 per order' },
                  { service: 'Equity Intraday', fee: '0.03% or ₹20 per order' },
                  { service: 'Futures Trading', fee: '0.02% or ₹20 per order' },
                  { service: 'Options Trading', fee: '₹20 per lot' }
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-blue-50 border-b' : 'border-b'}>
                    <td className="p-4">{item.service}</td>
                    <td className="p-4">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={`text-center mt-8 text-3xl font-medium `}>
            Bracket Order charges of Rs.4 + 18% GST/Order applicable
          </p>
        </section>



        <section className="my-20">
          <h2 className="mb-4">
            <span className="text-blue-500 text-4xl font-bold">Statutory and Other Charges:</span>
            <span className="text-gray-900 text-4xl font-bold"> Transparent Pricing with Alice Blue</span>
          </h2>

          <p className="text-gray-600 mb-8">
            Alice Blue ensures transparency and affordability by breaking down statutory and additional charges into clear categories. Here's a detailed overview of the costs associated with trading and investing through Alice Blue.
          </p>

          <div className="flex gap-2 mb-6 justify-center overflow-x-auto">
            <button
              className={`px-6 py-2 rounded-lg ${table2Toggle === 'statutoryCharges' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
              onClick={() => setTable2Toggle('statutoryCharges')}
            >
              Statutory Charges
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${table2Toggle === 'sebiCharges' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
              onClick={() => setTable2Toggle('sebiCharges')}
            >
              SEBI Charges
            </button>

            <button
              className={`px-6 py-2 rounded-lg ${table2Toggle === 'otherCharges' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
              onClick={() => setTable2Toggle('otherCharges')}
            >
              Other Charges
            </button>

            <button
              className={`px-6 py-2 rounded-lg ${table2Toggle === 'marginRequirements' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
              onClick={() => setTable2Toggle('marginRequirements')}
            >
              Margin Requirements
            </button>
          </div>

          <div className={`border rounded-lg overflow-hidden ${table2Toggle === 'statutoryCharges' ? 'block' : 'hidden'}`}>
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-4 text-left">Charge Type</th>
                  <th className="p-4 text-left">Equity Delivery</th>
                  <th className="p-4 text-left">Equity Intraday</th>
                  <th className="p-4 text-left">Equity Futures</th>
                  <th className="p-4 text-left">Equity Options</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'STT/CTT (Up to March 31, 2023)',
                    delivery: '0.1% on both buy & sell',
                    intraday: '0.025% on sell-side',
                    futures: '0.01% on sell-side',
                    options: '0.05% on sell-side (on premium)'
                  },
                  {
                    type: 'STT/CTT (From April 1, 2023)',
                    delivery: '0.1% on both buy & sell',
                    intraday: '0.025% on sell-side',
                    futures: '0.0125% on sell-side',
                    options: '0.0625% on sell-side (on premium)'
                  },
                  {
                    type: 'GST',
                    delivery: '18% (on brokerage + transaction + Demat charges)',
                    intraday: '18% (on brokerage + transaction charges)',
                    futures: '18% (on brokerage + transaction charges)',
                    options: '18% (on brokerage + transaction charges)'
                  },
                  {
                    type: 'Stamp Duty',
                    delivery: '0.015% or ₹1500/crore on buy-side',
                    intraday: '0.003% or ₹300/crore on buy-side',
                    futures: '0.002% or ₹200/crore on buy-side',
                    options: '0.003% or ₹300/crore on buy-side'
                  },
                  {
                    type: 'Exchange Transaction Charges (From April 1, 2024)',
                    delivery: 'NSE: 0.00322% per trade on buy & sell',
                    intraday: 'BSE: Charges vary by scrip group',
                    futures: ['NSE: 0.00188% exchange turnover charge', 'BSE: Nil'],
                    options: ['NSE: 0.0495% on premium', 'BSE: 0.0495% on premium']
                  }
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-blue-50' : ''}>
                    <td className="p-4 border-b font-medium">{item.type}</td>
                    <td className="p-4 border-b">{item.delivery}</td>
                    <td className="p-4 border-b">{item.intraday}</td>
                    <td className="p-4 border-b">
                      {Array.isArray(item.futures) ? (
                        item.futures.map((text, i) => (
                          <div key={i}>{text}</div>
                        ))
                      ) : (
                        item.futures
                      )}
                    </td>
                    <td className="p-4 border-b">
                      {Array.isArray(item.options) ? (
                        item.options.map((text, i) => (
                          <div key={i}>{text}</div>
                        ))
                      ) : (
                        item.options
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className={`border rounded-lg overflow-hidden ${table2Toggle === 'sebiCharges' ? 'block' : 'hidden'}`}>
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-4 text-left">Charge Type</th>
                  <th className="p-4 text-left">Equity Delivery</th>
                  <th className="p-4 text-left">Equity Intraday</th>
                  <th className="p-4 text-left">Equity Futures</th>
                  <th className="p-4 text-left">Equity Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b font-medium">SEBI Charges</td>
                  <td className="p-4 border-b">₹10/crore</td>
                  <td className="p-4 border-b">₹10/crore</td>
                  <td className="p-4 border-b">₹10/crore</td>
                  <td className="p-4 border-b">₹10/crore</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`border rounded-lg overflow-hidden ${table2Toggle === 'otherCharges' ? 'block' : 'hidden'}`}>
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="w-1/2 p-4 text-left">Service</th>
                  <th className="w-1/2 p-4 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Demat (Per Certificate)', fee: '₹10 per certificate + ₹50 per request' },
                  { service: 'Remat (Per ISIN)', fee: '₹30 per certificate + CDSL charges' },
                  { service: 'Courier Charges', fee: '₹100 per Demat/Remat Request' },
                  { service: 'Pledge Per ISIN', fee: '₹15 + GST per scrip' },
                  { service: 'Unpledge Per ISIN', fee: '₹15 + GST per scrip' },
                  { service: 'Delivery Instructions', fee: '₹100 for 10 leaves' }
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-blue-50' : ''}>
                    <td className="p-4 border-b">{item.service}</td>
                    <td className="p-4 border-b">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={`border rounded-lg overflow-hidden ${table2Toggle === 'marginRequirements' ? 'block' : 'hidden'}`}>
            <div className="p-4 bg-blue-100 text-center">
              Alice Blue provides flexible margin options to maximize your trading potential across various trading segments.
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-4 text-left">Segment</th>
                  <th className="p-4 text-left">CNC/NRML</th>
                  <th className="p-4 text-left">MIS</th>
                  <th className="p-4 text-left">Cover Order</th>
                  <th className="p-4 text-left">Bracket Order</th>
                  <th className="p-4 text-left">Brokerage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    segment: 'Cash',
                    cnc: 'UPTO 4X CASH',
                    mis: 'UPTO 5X CASH',
                    cover: 'NA',
                    bracket: 'UPTO 5X CASH',
                    brokerage: 'A group share'
                  },
                  {
                    segment: 'NSE Futures',
                    cnc: '1X',
                    mis: '1X',
                    cover: '1X',
                    bracket: '1X',
                    brokerage: 'As per margin'
                  },
                  {
                    segment: 'NSE Options',
                    cnc: '1X',
                    mis: '1X (sell only)',
                    cover: 'NA',
                    bracket: 'NA',
                    brokerage: 'As per margin premium'
                  },
                  {
                    segment: 'MCX',
                    cnc: '1X',
                    mis: '1X',
                    cover: '1X',
                    bracket: '1X',
                    brokerage: 'As per margin'
                  },
                  {
                    segment: 'Currency Derivatives (CDS)',
                    cnc: '1X',
                    mis: '1X',
                    cover: '1X',
                    bracket: '1X',
                    brokerage: 'As per margin'
                  }
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-blue-50' : ''}>
                    <td className="p-4 border-b font-medium">{item.segment}</td>
                    <td className="p-4 border-b">{item.cnc}</td>
                    <td className="p-4 border-b">{item.mis}</td>
                    <td className="p-4 border-b">{item.cover}</td>
                    <td className="p-4 border-b">{item.bracket}</td>
                    <td className="p-4 border-b">{item.brokerage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <p className="text-center mt-8 text-2xl font-medium">
            Bracket Order charges of Rs.4+ 18% GST/Order applicable
          </p>
        </section>


        <section className="mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            Alice Blue <span className="text-blue-500">Financial Service Registration</span> Details
          </h2>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="w-1/2 p-4 text-left">Segments</th>
                  <th className="w-1/2 p-4 text-left">Registration Number</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { segment: 'SEBI Registration No', number: 'INZ000156038' },
                  { segment: 'NSE CDS Code', number: '90112' },
                  { segment: 'BSE CDS Code', number: '6670' },
                  { segment: 'CDSL Registration No', number: 'IN-DP-364-2018' },
                  { segment: 'MCX', number: '56710' }
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-blue-50' : ''}>
                    <td className="p-4 border-b">{item.segment}</td>
                    <td className="p-4 border-b font-mono">{item.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>



        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Unique Selling Points <span className="text-red-600">(USPs)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Experience and Trust",
                description: "20+ years as a full-service broker with a reputation for innovation in the market."
              },
              {
                title: "Advanced Tools",
                description: "Use ANT Meta, ANT Scanner and third-party integrations to supercharge your trading."
              },
              {
                title: "Flagship Trading Platform - ANT",
                description: "Our proprietary platform with powerful tools and seamless trading."
              },
              {
                title: "Zero Brokerage for Equity Delivery",
                description: "Free equity delivery trades with no brokerage for cash and carry investments."
              },
              {
                title: "Free Trading Software",
                description: "All customers get top trading software at no extra cost."
              },
              {
                title: "Trade School - Your Learning Hub",
                description: "Investment concepts and trading skills at Trade School, our online learning platform."
              },
              {
                title: "Lowest Brokerage",
                description: "0.05% or ₹20 per order, whichever is lower, across all segments at BSE, NSE, MCX."
              },
              {
                title: "Freedom 15 Plan",
                description: "Flat-fee discount brokerage plan for simplicity and affordability."
              }
            ].map((feature, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>



        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">
                Alice Blue <span className="text-blue-500">Features</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Alice Blue has technology and tools to give you the best trading experience. Here's a quick look:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Alice Blue ANT MOBI 2.0",
                    description: "Trade on the go."
                  },
                  {
                    title: "Alice Blue ANT Web",
                    description: "Trade from browser."
                  },
                  {
                    title: "Alice Blue ANT API",
                    description: "For algo traders."
                  },
                  {
                    title: "Alice Blue V2",
                    description: "For seamless trading."
                  },
                  {
                    title: "Alice Blue WebSocket",
                    description: "For real-time data."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
                    <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <img
                src="/aliceblue_files/features.webp"
                alt="Alice Blue Features"
                className="w-full"
              />
            </div>
          </div>
        </section>





        <section className="my-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            Smallcase <span className="text-red-600">Integration</span>
          </h2>

          <div className="flex flex-col items-center justify-center lg:flex-row items-center gap-12">
            <img
              src="/aliceblue_files/smallcase-integration.webp"
              alt="Alice Blue Smallcase Integration"
              className="rounded-lg shadow-lg"
            />

            <div className="flex-1 flex flex-col gap-6">
              <p className="text-gray-800 text-lg">
                Alice Blue's integration with Smallcase allows you to access and invest in thematic portfolios.
                Smallcase has a collection of curated portfolios based on themes, sectors, or strategies so
                you can align your investments with your goals. Whether you are interested in technology,
                healthcare, or sustainable investing, Smallcase has options that are designed to minimize risk
                and maximize returns.
              </p>

              <p className="text-gray-800 text-lg">
                By integrating Smallcase with Alice Blue, you get to access these portfolios directly from your
                trading account. This simplifies decision-making and allows you to diversify your investments
                smartly and efficiently. Perfect for investors who want guided investment opportunities while
                having full control over their portfolio.
              </p>
            </div>
          </div>

          <a href={url} target='_blank' className="w-fit mt-8 mx-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
            Open a Free Account Now
          </a>
        </section>


        <section className="my-20">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-blue-500">TradeAction</span> and <span className="text-blue-500">Tradetron</span> Compatibility
          </h2>
          <p className="text-lg mb-8">
            With TradeAction and Tradetron, investors can automate their trading strategies and get an edge in the market.
          </p>
          <ul className="list-disc ml-10 space-y-8">
            <li className="text-gray-700">
              <span className="font-bold">TradeAction </span>
              allows you to automate your trades based on custom conditions so you don't have to intervene manually. This ensures trades are executed faster and reduces emotional decision-making and inefficiency.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Tradetron </span>
              is a platform to build and deploy algorithmic trading strategies. You can build automated trading strategies without coding using a drag-and-drop interface. Tradetron's compatibility with Alice Blue lets you execute these strategies in real-time and get more precision and consistency in trading.
            </li>
          </ul>
          <p className="text-lg mt-8">
            Together, these integrations enable you to automate your trading strategies on Alice Blue's platform, allowing you to capture opportunities even when you're not actively monitoring the market. Whether you're a beginner or an experienced trader, this automated approach helps optimize your trading outcomes.
          </p>
        </section>




        <section className="mx-auto my-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Discover what <span className="text-blue-500">our clients</span> have to say about Alice Blue
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                name: "Rajesh Kumar",
                quote: "Alice Blue has transformed my trading experience with its advanced tools and low-cost plans."
              },
              {
                name: "Sneha R",
                quote: "The Freedom 20 plan is a game-changer. I'm saving a lot on brokerage!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-600 rounded-lg p-8 text-white shadow-lg">
                <img src='/aliceblue_files/ic13.png' className="text-5xl mb-4" />
                <p className="font-bold text-xl mb-4">{testimonial.name}</p>
                <p className="text-lg text-gray-200">{testimonial.quote}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={url} target='_blank' className="w-fit mx-auto bg-orange-400 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
              Open a Free Account Now
            </a>
          </div>
        </section>


        <section className="my-20">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
            Awards and Achievements
          </h2>

          <p className="text-center text-lg mb-12">
            At Alice Blue, we are proud to have won numerous awards that reflect our operational excellence,
            client satisfaction and innovation in the financial services space. Some of the awards are:
          </p>

          <div className="flex items-center flex-col md:flex-row">
            <div className="flex-1 space-y-4">
              {[
                {
                  title: "Client Participating Member",
                  subtitle: "ADT Winner, MCX Awards 2024",
                  description: "This award is for our active participation and consistent performance in the commodities market. As a trusted client participating member we are recognized for our contribution to the MCX exchange.",
                  bgColor: "bg-blue-50",
                  textColor: "bg-blue-500"
                },
                {
                  title: "Operational Excellence Leadership",
                  subtitle: "Award, BFSI 2022",
                  description: "We won this award for operational efficiency and leadership in BFSI (Banking, Financial Services and Insurance) space. It shows our commitment to high standards of service and execution.",
                  bgColor: "bg-emerald-50",
                  textColor: "bg-emerald-500"
                },
                {
                  title: "Leading Member of the Exchange",
                  subtitle: "2020, 2021 & 2022, MCX",
                  description: "For three consecutive years Alice Blue has been recognized as one of the leading members of the Multi Commodity Exchange (MCX) for our contribution to growth and stability in the commodities market.",
                  bgColor: "bg-green-50",
                  textColor: "bg-green-500"
                },
                {
                  title: "Best Broking House South",
                  subtitle: "2018, MCX",
                  description: "We won this award for our performance and contributions to the broking community in the southern region of India. It shows our strong presence and expertise in the market.",
                  bgColor: "bg-purple-50",
                  textColor: "bg-purple-500"
                },
                {
                  title: "Top 3 Contributors in Equity Derivatives",
                  subtitle: "in the Southern Region, NSE 2021",
                  description: "This award from the National Stock Exchange (NSE) places Alice Blue among the top 3 contributors in equity derivatives in Southern India, reflects our market leadership and deep engagement in the segment.",
                  bgColor: "bg-amber-50",
                  textColor: "bg-amber-500"
                }
              ].map((award, index) => (
                <div key={index} className={`p-4 flex flex-wrap gap-3 rounded-lg ${award.bgColor}`}>
                  <div className={`${award.textColor} text-white px-4 py-2 rounded-lg md:w-2/5 mb-2`}>
                    <h3 className="font-bold">{award.title}</h3>
                    <p className="text-sm">{award.subtitle}</p>
                  </div>
                  <p className="flex-1 text-gray-700">{award.description}</p>
                </div>
              ))}
            </div>

            <div className="md:w-2/5 mt-8 md:mt-0">
              <img
                src="/aliceblue_files/awards.webp"
                alt="Alice Blie Awards"
                className="w-full"
              />
            </div>
          </div>
        </section>


        <section className="my-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            Insights and Market <span className="text-blue-500">Analysis</span>
          </h2>
          <p className="text-center text-lg mb-12">
            Get expert insights and in-depth analysis to make informed investment decisions:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "New Tax Rules for Equity Investments",
                description: "Tax changes can impact equity investments big time. Understanding these changes is key to optimizing your portfolio and managing tax efficiently. Expert analysis helps you navigate these changes and make tax smart investment decisions."
              },
              {
                title: "Behavioral Ecology in Trading and Investing",
                description: "Investors' psychological and emotional factors impact market behavior. We explore the concept of behavioral ecology to understand how emotions, biases and decision making process impact trading outcomes. This will help you refine your strategy and avoid common mistakes."
              },
              {
                title: "Growth Potential of Financial Instruments",
                description: "As markets keep evolving, finding high growth financial instruments is key to long term success. Through our market analysis we provide insights into new sectors and asset classes and help you spot opportunities with high growth."
              }
            ].map((insight, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-bold text-center mb-4">{insight.title}</h3>
                <p className="text-gray-600 text-center">{insight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-red-600">Pros & Cons</span> of Choosing Alice Blue
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <ThumbsUp className="text-green-500" size={32} />
                <h3 className="text-2xl font-bold text-green-600">Pros:</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Lifetime Free Annual Maintenance Charges (AMC):",
                    description: "Trade hassle free with zero AMC on your trading and demat accounts."
                  },
                  {
                    title: "Free API for Algo Trading:",
                    description: "Develop your automated trading strategies at zero cost using Alice Blue's APIs."
                  },
                  {
                    title: "No Minimum Brokerage or Deposit:",
                    description: "No prepaid plans or minimum brokerage commitment. Flexible for all traders."
                  },
                  {
                    title: "Multiple Order Types:",
                    description: "Bracket Orders and Cover Orders available."
                  },
                  {
                    title: "Instant Account Opening:",
                    description: "Open account in 24 hours."
                  },
                  {
                    title: "Extensive 3rd Party Tool Integration:",
                    description: "Access a wide array of 3rd party tools and applications to complement your trading journey."
                  },
                  {
                    title: "GTT/GTC Available:",
                    description: "Good Till Triggered (GTT) and Good Till Canceled (GTC) supported at free of cost long duration 1 year."
                  }
                ].map((pro, index) => (
                  <div key={index} className="border-b border-blue-100 pb-4 last:border-0">
                    <h4 className="font-bold mb-1">{pro.title}</h4>
                    <p className="text-gray-600">{pro.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <ThumbsDown className="text-red-500" size={32} />
                <h3 className="text-2xl font-bold text-red-600">Cons:</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Limited Products:",
                    description: "NCDs and corporate bonds not available."
                  },
                  {
                    title: "Brokerage on Equity Delivery:",
                    description: "₹20 flat on equity delivery."
                  },
                  {
                    title: "Transition to Discount Brokerage:",
                    description: "Full service broker and annual plans not available."
                  },
                  {
                    title: "Fewer Offline Branches:",
                    description: "Alice Blue is online only, limited offline branches."
                  },
                  {
                    title: "No Dedicated RM:",
                    description: "Advisory services not available, self reliant traders only."
                  }
                ].map((con, index) => (
                  <div key={index} className="border-b border-red-100 pb-4 last:border-0">
                    <h4 className="font-bold mb-1">{con.title}</h4>
                    <p className="text-gray-600">{con.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a href={url} target='_blank' className="w-fit mx-auto mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
            Open a Free Account Now
          </a>
        </section>


        <section className="relative w-[100vw] left-[calc(-50vw+50%)] bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className={`${alice.className} font-medium`}>
                <h2 className="text-5xl mb-2">CONTACT US</h2>
                <p className="text-xl opacity-90">(Mon-Fri)</p>
              </div>

              <div className="mt-8 md:mt-0 flex flex-col font-['Quicksand'] gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a href="mailto:contact@lucknowlions.com" className="text-xl hover:underline">
                    contact@lucknowlions.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </div>
                  <span className="text-xl">Shubham Srivastava</span>
                </div>


                <div className="flex items-center gap-4">
                  <Phone size={28} />
                  <Link href="tel:+918188974110" className="w-fit bg-white text-blue-600 font-bold px-6 py-2 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors">
                    Call Now
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>


        <div className="max-w-4xl mx-auto my-16">
          <h2 className="text-2xl font-bold text-red-600 text-center mb-6">Terms and Conditions</h2>
          <p className="text-gray-700 text-lg">
            Investments in the securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
        </div>


        <div className='relative w-screen left-[calc(-50vw+50%)]'>
          <Footer />
        </div>

      </div>
    </>

  );
};

export default AliceBlue;