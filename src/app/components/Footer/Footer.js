'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='w-full'>
      <div className={styles.bar} />
      <footer className={styles.footer}>
        <div className={styles.footleft}>
          <Image 
            src="/logo.png" 
            alt="logo" 
            className={styles.logo}
            width={150}
            height={50}
          />
          <p>
            We don't provide any kind of paid tips,<br />advisory nor paid training
            courses.
          </p>

          <address className={styles.address}>
            <div>
              <img 
                src="/home/location.png" 
                alt="address" 
                width={20}
                height={20}
              /> 
              8A, Vrindavan Vihar, Gaushala Road,<br />Balaganj, Lucknow: 226003
            </div>
            <div>
              <img 
                src="/home/mail.png" 
                alt="mailing"
                width={20}
                height={20}
              />
              <a href="mailto:contact@lucknowlions.com">
                contact@lucknowlions.com
              </a>
            </div>
          </address>

          <Image
            src="/home/playstore.webp"
            alt="play store app"
            className={styles.play}
            width={200}
            height={60}
          />
          <h3>Get the App Today</h3>
        </div>
        <div className={styles.footright}>
          <ul className={styles.footmenu}>
            <li>
              <Link href="/blogs" onClick={scrollToTop}>
                Education-Blogs
              </Link>
            </li>
            <li>
              <Link href="/zerodha" onClick={scrollToTop}>
                Zerodha
              </Link>
            </li>
            <li>
              <Link href="/upstox" onClick={scrollToTop}>
                Upstox
              </Link>
            </li>
            <li>
              <Link href="/fyers" onClick={scrollToTop}>
                Fyers
              </Link>
            </li>
            <li>
              <Link href="/sgx_nifty" onClick={scrollToTop}>
                SGX Nifty
              </Link>
            </li>
            <li>
              <Link href="/about_us" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact_us" onClick={scrollToTop}>
                Contact Us
              </Link>
            </li>
          </ul>
          <p className={styles.footredtxt}>
            Declaration: We do not share client details with any third party,
            nor sell any tips or recommendations. If anyone claims to be from
            Lucknow Lions offering trades, email us at{" "}
            <a href="mailto:contact@lucknowlions.com">
              contact@lucknowlions.com
            </a>
            .
          </p>
          <p className={styles.footrtxt}>Points to be remember</p>
          <ul className="list-disc pl-5">
            <li>
              Investments in the securities market are subject to market risks;
              read all the related documents carefully before investing.
            </li>
            <li>
              Update your active mobile numbers and email ID with your stock
              brokers to prevent unauthorized transactions.
            </li>
            <li>
              Receive information of your transactions directly from the
              Exchange on your mobile and email at the end of the day.
            </li>
            <li>
              Stock Brokers can only accept securities as margin from clients
              through pledge in the depository system (w.e.f. September 1,
              2020).
            </li>
          </ul>
          <p className={styles.footrtxt}>Capital Gain Tax</p>
          <ul className="list-disc pl-5">
            <li>
              LTCG increased to 12.5% (from 10%) with a revised exempt limit of
              ₹125,000 for holdings over 2 years. Indexation benefits on assets
              like Real Estate and Gold removed for purchases after July 23,
              2024.
            </li>
            <li>
              STCG increased to 20% (from 15%) for holdings under 2 years.
            </li>
            <li>F&O STT revised to 0.10% (from 0.02%) per transaction.</li>
            <li>
              Make your tax planning before investing due to tax uncertainties
              in India.
            </li>
          </ul>
          <p>
            Make your tax planning before investing due to tax uncertainties in
            India.
          </p>
          <ul className={styles.footSubMenu}>
            <li>
              <Link href="/privacy_policy" onClick={scrollToTop}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms_and_conditions" onClick={scrollToTop}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" onClick={scrollToTop}>
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className={styles.bar} />
    </div>
  );
};

export default Footer;