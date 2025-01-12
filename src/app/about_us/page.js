import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./aboutus.module.css";

export function generateMetadata() {
    return {
        title: 'Lucknow Lions - About Us | Your Trusted Trading Partner',
        description: "Learn more about Lucknow Lions, a leading platform in the trading world. We are committed to providing innovative solutions, expert insights, and top-notch tools for traders of all levels. Join us to elevate your trading journey.",
        keywords: 'stock broker in lucknow, best stock broker in lucknow, 0 brokerage on delivery, free demat account',
        openGraph: {
            title: 'Lucknow Lions - About Us | Your Trusted Trading Partner',
            description: "Learn more about Lucknow Lions, a leading platform in the trading world. We are committed to providing innovative solutions, expert insights, and top-notch tools for traders of all levels. Join us to elevate your trading journey.",
            images: ['https://www.lucknowlions.com/aboutus/hero.webp'],
            url: 'https://www.lucknowlions.com/about_us'
        },
        robots: 'index',
        alternates: { canonical: 'https://www.lucknowlions.com/about_us' },
    }
}


export default function AboutUs() {
    return (
        <main className={styles.page}>
            <Navbar />
            <section className={`${styles.hero} ${styles.section}`}>
                <div className={styles.heroleft}>
                    <h1>
                        Welcome to <span>LUCKNOW LIONS!</span>
                    </h1>
                    <p>
                        We are pleased to introduce you to the Lucknow Lions website &
                        Mobile Application.
                    </p>
                    <p>
                        Lucknow Lions is a platform where you can open free demat accounts
                        through our partnerships. It is a free demat account opening app
                        and website that offers discounts with several brokers, as well as
                        online and offline (within 100 km of Lucknow) account opening
                        services.
                    </p>
                    <p>
                        Lucknow Lions is the leading service provider in Lucknow, Uttar
                        Pradesh, India. The company was founded in 2017, and Saurabh Kumar
                        Srivastava is the owner of the app and website. Currently, Lucknow
                        Lions has only one office, the address of which can be found on
                        the contact us page.
                    </p>
                </div>
                <img
                    className={styles.heroright}
                    src="/aboutus/hero.webp"
                    alt="About Lucknow Lions"
                />
            </section>

            <div className={styles.bg1} src="/aboutus/bg1.webp">
                Dive into Profitable Ventures with Lucknow Lions Solutions
            </div>

            <div className={`${styles.card} ${styles.cardTn1}`}>
                <div className={styles.child}>
                    <img className={styles.ch1} alt='ch1' src="/aboutus/ch1.webp" />
                    <div className={styles.innerChild}>
                        Demat Diaries: Real Investors Share Their Journeys to Financial
                        Freedom
                        <p>
                            This series of personal stories will feature interviews with
                            successful investors who have leveraged demat accounts to build
                            their wealth. Readers will gain valuable insights into the
                            mindset, strategies, and lessons learned from those who have
                            walked the path before them.
                        </p>
                    </div>
                </div>
                <div className={styles.child}>
                    <img className={styles.ch1} clt="ch2" src="/aboutus/ch1.webp" />
                    <div className={styles.innerChild}>
                        The Rise of the Millennial Investor: How Demat Accounts are
                        Fueling a New Generation of Wealth Creators
                        <p>
                            This thought-provoking piece will explore the growing trend of
                            young investors embracing demat accounts to take control of
                            their financial futures. It will examine the factors driving
                            this shift, the unique challenges and opportunities faced by
                            millennial investors, and the broader implications for the
                            investment landscape.
                        </p>
                    </div>
                </div>
            </div>

            <section className={`${styles.members} ${styles.section}`}>
                <div className={styles.member}>
                    <img
                        src="/aboutus/founder1.webp"
                        alt="Founder of Lucknow Lions Saurabh Kumar Srivastava"
                        className={`${styles.memImg} ${styles.cardTn1}`}
                    />
                    <div className={styles.memCard}>
                        <hr />

                        <div className={`${styles.memCard2} ${styles.cardTn2}`}>
                            <h2>Saurabh Kumar Srivastava</h2>
                            <h5>(Founder & CEO)</h5>
                            <div>
                                <p>
                                    From humble YouTube beginnings to leading one of Lucknow's
                                    Financial organizations, Saurabh Kumar Srivastava is a true
                                    trailblazer. After serving Vodafone India and the Uttar
                                    Pradesh government, Saurabh heeded the advice of a friend
                                    and dove headfirst into the world of investing.
                                </p>
                                <p>
                                    This life-changing decision led him to found the Lucknow
                                    Lions in 2020, where he now dedicates his boundless energy
                                    to empowering others through financial education and
                                    brokerage services. Saurabh's remarkable journey is a
                                    testament to the power of taking calculated risks and
                                    following your passions.
                                </p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className={styles.member}>
                    <div className={styles.memCard}>
                        <hr />
                        <div className={`${styles.memCard2} ${styles.cardTn2}`}>
                            <h2>Pooja Srivastava </h2>
                            <h5>(Vice President & Chief Financial Officer)</h5>
                            <div>
                                <p>
                                    Pooja Srivastava is the financial powerhouse behind Lucknow
                                    Lions' global operations. As Executive Vice President and
                                    Chief Financial Officer, she oversees the company's
                                    financial strategy and investor relations, driving its
                                    commitment to helping customers worldwide save money and
                                    live better.
                                </p>
                                <p>
                                    Prior to joining Lucknow Lions in 2022, Pooja served as CFO
                                    and EVP at Cubix India, where she spearheaded the company's
                                    financial operations and customer service centers across the
                                    country. With over a decade of experience in corporate
                                    finance, Pooja is a seasoned leader who delivers results
                                    through her strategic vision and operational excellence.
                                </p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <img
                        src="/aboutus/founder2.webp"
                        alt='Pooja Srivastava'
                        className={`${styles.memImg} ${styles.cardTn1}`}
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
};