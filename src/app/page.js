"use client"
import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { HOST } from "@/config";


export default function Home() {

  const [brokers, Brokers] = useState([]);

  const fetchBrokersLinks = () => {
    return new Promise((resolve, reject) => {
        fetch(`${HOST}/api/v1/website/brokersLing`)
            .then(response => {
                if (!response.ok) return [];

                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

  useEffect(() => {
  fetchBrokersLinks()
      .then((result) => {
        Brokers(result);
      })
      .catch((error) => {});
  }, []);

  const testimonials = [
    {
      profile: "home/user1.webp",
      name: "Bala Murugan",
      date: "Sept, 2024",
      text: "I recently had the pleasure of working with Lucknow Lions, and I have to say, I am truly impressed. From their speed to their great potential, this company stands out in the market.",
    },
    {
      profile: "home/user2.webp",
      name: "Sushama Ramsingar",
      date: "Dec, 2023",
      text: "Working with Lucknow Lions has been a transformative experience. Their team's dedication and innovative approach have not only elevated our project but also inspired our entire organization.",
    },
    {
      profile: "home/user3.webp",
      name: "Abhishek Mittal",
      date: "Oct, 2024",
      text: "The company is highly professional and delivers results beyond expectations. Their fast service is commendable.",
    },
    {
      profile: "home/user4.webp",
      name: "Suryash",
      date: "June, 2023",
      text: "I would recommend Lucknow Lions for any business looking for top-tier service and innovation. They exceeded my expectations!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
  

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={`${styles.hero} ${styles.m0} ${styles.section}`}>
          <div className={styles.heroleft}>
            <p className={styles.des}>Let’s start your journy with us!</p>
            <h1 className={styles.h5}>
              Welcome to <br /> <span>Lucknow Lions</span>
            </h1>
            <p className={styles.des}>
              Simplest way to Open Demat Account Compare & Analyse by Comparing
              various Stock Brokers
            </p>
            <a
              href={brokers.length > 0 ? brokers[1].link : ''}
              target="_blank"
              className={`${styles.openbtn}`}
            >
              <img src="/home/arrow.webp" alt="icon" />
              <span> Open Free Demat Account</span>
            </a>
          </div>
          <img src="/home/hero.webp" alt="hero" className={styles.heroright} />
        </section>


        <a href="#main" className="hidden lg:block cursor-pointer">
          <img
            id="main"
            src="/home/arrdown.webp"
            alt="logo"
            className={styles.arrdown}
          />
        </a>

        <section className={`${styles.section}`}>
          <div className={`${styles.qtext} ${styles.cardTn1}`}>
            <img
              className={styles.qtext1}
              src="/home/quot1.png"
              alt="Open quote"
              width="83"
              height="83"
            />
            <p className={styles.des}>
              We don't provide any kind of paid tips, advisory nor paid training
              courses. Please be cautious of fraudsters Tips Provider, Advisory
              and shell companies. We are not SEBI Registred Advisor. Before any
              investing do self analysis or Consult your Financial advisor
              before any trading decision.
            </p>
            <img
              className={styles.qtext2}
              src="/home/quot2.png"
              alt="Closing quote"
              width="83"
              height="83"
            />
          </div>

          <div className={styles.rocdiv}>
            <div>
              <h2 className={styles.h2}>What We Offer </h2>
              <p>
                Lucknow Lions offers Free Demat Account Opening Services &
                Educational Content. <br /> We have partnered with various Stock
                Brokers. <br />
                Here, you find detailed analyses & comprising of services &
                Reviews between various Stock brokers that helps you to find
                right Broker for you
              </p>
            </div>
            <div2>
              <img
                src="/home/roc.gif"
                alt="Lions Rocket"
                className={styles.rocket}
              />
              <img
                src="/home/roc.gif"
                alt="Lions Rocket"
                className={styles.rocket}
              />
            </div2>
          </div>
        </section>

        <section className={`${styles.section} ${styles.features}`}>
          <h2 className={styles.h1}>
            Feature Brokers <span>@Lucknow Lions</span>
          </h2>

          <div className={styles.featureslist}>
            <div className={`${styles.feature} ${styles.cardTn1}`}>
              <div>
                <img
                  className={styles.featureimg}
                  src="/home/zer.webp"
                  alt="zerodha"
                />
                <h4>Zerodha</h4>
              </div>

              <div className={styles.featuredetails}>
                <ul>
                  <li>0 Brokerage on Equity Delivery</li>
                  <li>
                    0.03% or ₹20 per executed order for Equity Intraday and
                    Futures
                  </li>
                  <li>₹20 Flat per order for Options</li>
                  <li>
                    <strong>DP Charges:</strong> ₹13.50 + 18% GST per script
                  </li>
                  <li>
                    <strong>Account Opening Fees:</strong> Free
                  </li>
                  <li>
                    <strong>AMC:</strong> ₹75 + 18% GST every quarter
                  </li>
                  <li>
                    <strong>Apps:</strong> Kite, Coin
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <Link href="/zerodha">Read More....</Link>
                </p>
                <a
                  href={brokers.length > 3 ? brokers[3].link : ''}
                  target="_blank"
                  className={styles.btn2}
                >
                  <img
                    className={styles.arr}
                    src="/home/arrow.webp"
                    alt="icon"
                  />
                  Open Now
                </a>
              </div>
            </div>

            <div className={`${styles.feature} ${styles.cardTn1}`}>
              <div>
                <img
                  className={styles.featureimg}
                  src="/home/fy.webp"
                  alt="fyers"
                />
                <h4>Fyers</h4>
              </div>

              <div className={styles.featuredetails}>
                <ul>
                  <li>Revised to 0.3% or ₹20 per executed order</li>
                  <li>
                    0.01% or ₹20 per executed order for Equity Intraday and
                    Futures
                  </li>
                  <li>₹20 Flat per order for Options</li>
                  <li>
                    <strong>DP Charges:</strong> ₹3.5 per script
                  </li>
                  <li>
                    <strong>Account Opening Fees:</strong> Free
                  </li>
                  <li>
                    <strong>AMC:</strong> ₹0 for every year
                  </li>
                  <li>
                    <strong>Apps:</strong> Fyers
                  </li>
                </ul>
              </div>

              <div>
                <p>
                  <Link href="/fyers/fyers">Read More....</Link>
                </p>
                <a
                  href={brokers.length > 1 ? brokers[1].link : ''}
                  target="_blank"
                  className={styles.btn2}
                >
                  <img
                    className={styles.arr}
                    src="/home/arrow.webp"
                    alt="icon"
                  />
                  <span>Open Now</span>
                </a>
              </div>
            </div>

            <div className={`${styles.feature} ${styles.cardTn1}`}>
              <div>
                <img
                  className={styles.featureimg}
                  src="/home/up.webp"
                  alt="upstox"
                />
                <h4>Upstox</h4>
              </div>

              <div className={styles.featuredetails}>
                <ul>
                  <li>Flat 20 brokerage on Eq Delivery per order</li>
                  <li>
                    0.05% or ₹20 per executed order for Equity Intraday and
                    Futures
                  </li>
                  <li>₹20 Flat per order in Option</li>
                  <li>
                    <strong>DP Charges:</strong> ₹18.5 per script
                  </li>
                  <li>
                    <strong>Account Opening Fees:</strong> Free
                  </li>
                  <li>
                    <strong>AMC:</strong> Free for all
                  </li>
                  <li>
                    <strong>Apps:</strong> Upstox Pro
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <Link href="/upstox">Read More....</Link>
                </p>

                <a
                  href={brokers.length > 2 ? brokers[2].link : ''}
                  target="_blank"
                  className={styles.btn2}
                >
                  <img
                    className={styles.arr}
                    src="/home/arrow.webp"
                    alt="icon"
                  />
                  Open Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.wedo}`}>
          <h3 className={styles.h2}>See What we do</h3>

          <div className={styles.wedolist}>
            <div className={`${styles.wedoitem} ${styles.cardTn2}`}>
              <img src="/home/vision.webp" alt="Lucknow lions vision" />
              <div className={styles.wedoitemtxt}>
                <h4>Our Vision</h4>
                <p>
                  Our mission is to maximize wealth for our investors and
                  traders through expert guidance and strategic investments in
                  the stock market.
                </p>
              </div>
            </div>

            <div className={`${styles.wedoitem} ${styles.cardTn2}`}>
              <div className={styles.wedoitemtxt}>
                <h4>Our Mission</h4>
                <p>
                  Our vision is to maximize wealth for all our investors &
                  traders, empowering them to achieve their financial goals.
                  Let's reach new heights of success.
                </p>
              </div>
              <div>
                <img src="/home/mission.webp" alt="Lucknow lions mission" />
              </div>
            </div>

            <div className={`${styles.wedoitem} ${styles.cardTn2}`}>
              <div>
                <img src="/home/values.webp" alt="Our values" />
              </div>
              <div className={styles.wedoitemtxt}>
                <h4>Our Values</h4>
                <p>
                  We Research and develop the strategies where you should invest
                  your hard earn money because money you spent is you life time
                  saving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.about}>
          <section className={`${styles.section} ${styles.aboutus}`}>
            <div>
              <h3>About Us</h3>
              <p>
                We are happy to introduce you to Lucknow Lions website. Lucknow
                Lions is the platform where you can open all free demat account
                with tie-ups. Lucknow Lions is a free Demat Account Opening App
                & Website with Serval discount broker and deal in the Online and
                Offline (nearby Lucknow city up to 100 km) account opening
                process. We are the leading service provider in Lucknow, Uttar
                Pradesh, India. Lucknow Lions was founded in 2017 and Saurabh
                Kumar Srivastava is the Owner of the app and website. Lucknow
                Lions have only one office till now which address can be found
                on the contact us page.
              </p>
              {/* <a href="/about_us" className={styles.openbtn}>
                More About Us
              </a> */}
            </div>
            <img
              className={styles.aboutUsImg}
              src="/home/about.webp"
              alt="hero"
            />
          </section>
        </div>

        <section className={`${styles.section} ${styles.education}`}>
          <img src="/home/blog.webp" alt="Lucknow Lions blogs" />
          <div className={styles.edu_left}>
            <h3 className={styles.h3}> FREE & Open Access </h3>
            <span>to Stock Market Knowledge and Financial Insights</span>
            <p>
              Dive into comprehensive stock market blogs crafted by industry
              experts. Whether you're a beginner or a seasoned trader, we
              provide the knowledge and strategies you need to stay ahead.
            </p>
            <Link href="/blogs">Know More....</Link>
          </div>
        </section>

        <section className={`${styles.section} ${styles.portfolio}`}>
          <div className={styles.portxt}>
            <h5 className={styles.h4}>Diversify your Portfolio Today</h5>
            <p>
              We offer a wealth of educational content designed to empower you
              with the knowledge needed to navigate the investment landscape
              confidently.
            </p>
            <p>
              From understanding market trends to mastering investment
              strategies, our resources cater to both beginners and seasoned
              investors alike.
            </p>
          </div>
          <img src="/home/port.webp" alt="Lucknow Lions Portfolio" />
        </section>

        <section className={`${styles.section} ${styles.testim}`}>
          <h3>
            <img src="/home/menubar.png" alt="logo" className={styles.logo} />
            Our Website Users Speak For Us
            <img src="/home/menubar.png" alt="logo" className={styles.logo} />
          </h3>

          <div className={styles.testimlist}>
            {testimonials
              .slice(activeIndex, activeIndex + 2)
              .map((testimonial, index) => (
                <div key={index} className={styles.testimitem}>
                  <div>
                    <img
                      src={testimonial.profile}
                      alt={testimonial.name}
                      title={testimonial.name}
                      className={styles.profileImg}
                    />
                  </div>
                  <h4>{testimonial.name}</h4>
                  <b>{testimonial.date}</b>
                  <p>{testimonial.text}</p>
                </div>
              ))}
          </div>

          {/* Circle Navigation */}
          <div className={styles.dotsContainer}>
            {Array.from({ length: testimonials.length / 2 }, (_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${activeIndex === i * 2 ? styles.activeDot : ""
                  }`}
                onClick={() => setActiveIndex(i * 2)}
              ></span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};