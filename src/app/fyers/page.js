import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./fyers.module.css";

export function generateMetadata() {
    return {
        title: 'Fyers Free Demat Account Opening Lifetime Free AMC',
        description: 'Open a Free Demat Account in Fyers with Lucknow Lions. Lifetime Free Annual Maintenance charge, lowest brokerage, real-time market insight, and a user-friendly platform to grow your wealth.',
        keywords: 'fyers, fyers account opening, fyers demat account, fyers review, fyers demat account charges, fyers demat account opening, fyers amc charges, fyers ofs, fyers pledge charges, cheapest brokerage demat account, amc free demat account, fyers algo, How to Open Fyers Demat Account, Fyers Demat Account Charges Explained, Benefits of Fyers Demat Account,Free Demat Account with Fyers,Best 0 Brokerage Stock Broker in Lucknow, लखनऊ लायंस',
        robots: 'index',
        openGraph: {
            title: 'Fyers Free Demat Account Opening Lifetime Free AMC',
            description: 'Open a Free Demat Account in Fyers with Lucknow Lions. No Annual Maintenance charge Lifetime Free, lowest brokerage, real-time market insight, and a user-friendly platform to grow your wealth.',
            images: ['https://www.lucknowlions.com/OG_images/fyers.webp'],
            url: 'https://www.lucknowlions.com/fyers'
        },
        alternates: { canonical: 'https://www.lucknowlions.com/fyers' },
    }
}

export default function Fyers() {
    const link = "https://signup.fyers.in/?utm_source=AP-Leads&utm_medium=AP0251";

    return (
        <div>

            <div className={styles.page}>
                <Navbar />

                <main className={styles.mainContent}>
                    <div className="h-16" />
                    <a href={link} target="_blank" className="mx-auto mt-10">
                        <img
                            className={styles.logo}
                            src="https://assets.fyers.in/images/logo.svg"
                            alt="Fyers"
                        />
                    </a>

                    {/* section1 */}
                    <section className="w-full flex flex-col md:flex-row justify-between items-center gap-8 my-12">
                        <div className="w-full md:w-1/2 space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                Trading,
                                <br />
                                <span className="text-blue-600">Simplified.</span>
                            </h1>
                            <p className="text-lg text-gray-800">
                                Enjoy hassle free trade along with competitive trading charges.
                            </p>
                            <a
                                href={link}
                                className="flex items-center max-w-[350px] justify-center gap-3 bg-[#436AF5] text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                            >
                                <img
                                    src="/fyers_files/trade.png"
                                    alt="trade"
                                    className="w-6 h-6"
                                />
                                <span>Open Your Demat Account</span>
                            </a>
                        </div>
                        <a href={link} target="_blank" className="w-full md:w-1/2">
                            <img src="/fyers_files/down.webp" alt="Lucknow Lions Fyers" className="w-full" />
                        </a>
                    </section>

                    <p className={styles.focus}>
                        <img src="/fyers_files/reusable.png" alt="icon" width="70" />
                        Focus Your Energy & Reform the Self
                    </p>

                    <div className={styles.dotsbg} />

                    {/* About Section */}
                    <section className="w-full flex flex-col md:flex-row gap-8 items-center my-12">
                        <div className="w-full md:w-2/5">
                            <img
                                src="/fyers_files/about.webp"
                                alt="Lucknow Lions about Fyers"
                                className="w-full"
                            />
                        </div>
                        <div className="w-full md:w-3/5 space-y-4">
                            <h3 className="text-3xl md:text-4xl font-bold">
                                <span className="text-blue-600">About</span> Fyers
                            </h3>
                            <p className="text-gray-800 text-justify">
                                Fyers was incorporated in 2015, Fyers Securities is a Bangalore
                                based online discount stock broker. The company was founded by
                                young entrepreneurs who believe in building the best trading
                                platforms, being transparent and keeping the cost of trading at
                                its lowest in India. Fyers is a lowest brokerage stock broker in
                                India. They are among the cheapest stock brokers in whole online
                                discount broker industry. Fyers follow simple price model that
                                you offer trading across all the segments for the same brokerage
                                fee of a maximum of Rs 20 per executed order. No matter how big
                                your order, Fyers charge a maximum of Rs 20 per executed order.
                                Fyers doesn't charge any brokerage in the Equity Delivery
                                segment for the lifetime for all Age group.
                            </p>
                        </div>
                    </section>

                    {/* section4 */}
                    <section className="w-full my-12 px-4">
                        <h2
                            className={`text-3xl md:text-4xl font-bold text-center mb-8 ${styles.sn}`}
                        >
                            Fyers <span className="text-blue-600">Products</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "/fyers_files/icon-fyers-one.png",
                                    title: "Fyers One",
                                    description:
                                        "Our cutting-edge analytics tools make Fyers One the best desktop trading platform one can ask for.",
                                },
                                {
                                    icon: "/fyers_files/icon-fyers-web2.png",
                                    title: "Fyers Web",
                                    description:
                                        "Trade smarter and more efficiently with advanced charting tools and realtime market data",
                                },
                                {
                                    icon: "/fyers_files/icon-fyers-app-ea2.png",
                                    title: "Fyers App",
                                    description:
                                        "Trade Stocks, Options, Futures, ETFS, and More on Your Mobile with Ease and Convenience.",
                                },
                                {
                                    icon: "/fyers_files/icon-price-alerts.png",
                                    title: "Fyers Alert",
                                    description:
                                        "Stay Update with get alert of latest price for Equity, F&O, and more.",
                                },
                                {
                                    icon: "/fyers_files/tv.png",
                                    title: "Trading view",
                                    description:
                                        "Check out the trading ideas, strategies, opinions, analytics at absolutely no cost with Fyers in premium version!",
                                },
                                {
                                    icon: "/fyers_files/icon-fyers-instaoptions 1.png",
                                    title: "Insta option",
                                    description:
                                        "Tools specifically tailored for Futures and Options analysis, and execution Free of cost.",
                                },
                            ].map((product, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center p-6 rounded-xl gap-4 border-2 border-blue-400
                  ${index % 2 === 0
                                            ? "bg-gradient-to-b from-purple-100 to-[#927EFF]"
                                            : "bg-gradient-to-b from-white via-orange-200 to-orange-300"
                                        }`}
                                >
                                    <img
                                        src={product.icon}
                                        alt={product.title}
                                        className="w-20 h-20 border-2 border-blue-400 rounded-xl p-3"
                                    />
                                    <h4 className="text-2xl font-semibold">{product.title}</h4>
                                    <p className="text-center">{product.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <img
                        src="/fyers_files/Group1321314145.png"
                        alt="icon"
                        className={styles.dot}
                    />

                    {/* section5 */}
                    <section className={styles.plans}>
                        <h3 className={styles.h3}>
                            Fyers <span className={styles.colortxt}>Investment</span> Plans
                        </h3>

                        <div className={styles.planscards}>
                            <div className={styles.plancards}>
                                <div className={`${styles.plancard} ${styles.plancard1}`}>
                                    <img
                                        src="/fyers_files/Group 1321314127.png"
                                        alt="Fyers IPO"
                                        className={styles.planimg}
                                    />
                                    <h4>Fyers IPO</h4>
                                    <p>
                                        Be the first to apply for IPOs and FPOs listed on the NSE
                                        and BSE.
                                    </p>
                                </div>
                                <div className={`${styles.plancard} ${styles.plancard2}`}>
                                    <img
                                        src="/fyers_files/Group1321314127d.png"
                                        alt="Fyers Direct"
                                        className={styles.planimg}
                                    />
                                    <h4>Fyers Direct</h4>
                                    <p>
                                        Easily invest in Mutual fund/SIP directly without no
                                        Commission.
                                    </p>
                                </div>
                                <img
                                    src="/fyers_files/dotsbg.webp"
                                    alt="Lucknow Lions dots"
                                    className={styles.dot_bg}
                                />
                            </div>
                            <div className={styles.plancards}>
                                <img
                                    src="/fyers_files/dotsbg.webp"
                                    alt="icon"
                                    className={styles.dot_bg}
                                />
                                <div className={`${styles.plancard} ${styles.plancard3}`}>
                                    <img
                                        src="/fyers_files/Group 1321314127s.png"
                                        alt="Government Securities"
                                        className={styles.planimg}
                                    />
                                    <h4>Government Securities</h4>
                                    <p>
                                        Get easily invest in Govt Bonds, Treasury bills and SDL
                                        Bonds without any commission.
                                    </p>
                                </div>
                                <div className={`${styles.plancard} ${styles.plancard4}`}>
                                    <img
                                        src="/fyers_files/Group 1321314127r.png"
                                        alt="Fyers OFS"
                                        className={styles.planimg}
                                    />
                                    <h4>Fyers OFS</h4>
                                    <p>
                                        Apply for an Offer for Sale (OFS) of companies listed on the
                                        BSE/ NSE hassle free.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <img
                        src="/fyers_files/Group1321314145.png"
                        alt="icon"
                        className={styles.dot}
                    />

                    {/* section6 */}
                    <section className="md:px-10 w-full">
                        <h3
                            className={`text-[28px] md:text-[40px] text-center font-semibold ${styles.sn}`}
                        >
                            Fyers <span className={styles.idea}>Learnings Ideas</span>
                        </h3>

                        <div className="flex flex-wrap justify-around gap-6 md:gap-10 py-10 md:py-[70px] md:px-10">
                            {[
                                {
                                    image: "/fyers_files/Groupj.png",
                                    title: "Fyers Journals",
                                    description:
                                        "Maintain your trading records, thoughts, and emotions with ease in personal dairy.",
                                    className: "border-[#462aff] bg-[#d3ccff]",
                                },
                                {
                                    image: "/fyers_files/Groupc.png",
                                    title: "Fyers Community",
                                    description:
                                        "Become part of our Fyers community inside trader and investors network.",
                                    className: "border-[#e94656] bg-[#ffd7a6]",
                                },
                                {
                                    image: "/fyers_files/Groups.png",
                                    title: "Fyers Schools of Stocks",
                                    description:
                                        "Learn about stock market from basic to expert levels, these courses are designed by market experts.",
                                    className: "border-[#3b65ff] bg-[#a1b4f9]",
                                },
                            ].map((idea, index) => (
                                <div
                                    key={index}
                                    className={`w-full sm:w-[calc(50%-1rem)] lg:w-[27%] aspect-[7/6] flex flex-col justify-around items-center p-4 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] font-medium border-3 ${idea.className}`}
                                >
                                    <img
                                        src={idea.image}
                                        alt={idea.title}
                                        className="w-[60%] p-4 rounded-xl"
                                    />
                                    <h4 className="text-2xl md:text-[26px] font-bold text-black text-center">
                                        {idea.title}
                                    </h4>
                                    <p className="text-base text-[#000000e8] text-center">
                                        {idea.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* section7 */}
                    <section className="md:py-20 w-full md:px-10">
                        {/* matches .ideas */}
                        <h3
                            className={`text-[28px] md:text-[40px] text-center font-semibold ${styles.sn}`}
                        >
                            Fyers <span className={styles.idea}>Developers Tools</span>
                        </h3>
                        <div className="flex flex-wrap justify-around gap-[10px] gap-y-[30px] md:py-[70px] md:px-10">
                            {/* matches .ideascards */}
                            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[27%] aspect-[7/6] flex flex-col justify-around items-center p-5 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] font-medium border-[3px] border-[#462aff] bg-[#d3ccff]">
                                {/* matches .ideacard & .ideacard1 */}
                                <img
                                    src="/fyers_files/Groupa.png"
                                    alt="Fyers API bridge"
                                    className="w-[60%] p-4 rounded-xl" // matches .ideacard img
                                />
                                <h4 className="text-2xl md:text-[26px] font-bold text-black text-center">
                                    Fyers API bridge
                                </h4>
                                <p className="text-base text-[#000000e8] text-center">
                                    Customize and test your trading strategies seamlessly.
                                </p>
                            </div>
                            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[27%] aspect-[7/6] flex flex-col justify-around items-center p-5 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] font-medium border-[3px] border-[#e94656] bg-[#FFAEB6]">
                                <img
                                    src="/fyers_files/Groupapi.png"
                                    alt="Fyers API"
                                    className="w-[60%] p-4 rounded-xl"
                                />
                                <h4 className="text-2xl md:text-[26px] font-bold text-black text-center">
                                    Fyers API
                                </h4>
                                <p className="text-base text-[#000000e8] text-center">
                                    Get historical data, real time data and use the power of algo
                                    trading for absolutely free.
                                </p>
                            </div>
                            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[27%] aspect-[7/6] flex flex-col justify-around items-center p-5 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] font-medium border-[3px] border-[#3b65ff] bg-[#a1b4f9]">
                                <img
                                    src="/fyers_files/Groupalogo.png"
                                    alt="Algo Fox"
                                    className="w-[60%] p-4 rounded-xl"
                                />
                                <h4 className="text-2xl md:text-[26px] font-bold text-black text-center">
                                    Algo Fox
                                </h4>
                                <p className="text-base text-[#000000e8] text-center">
                                    Utilize custom algorithms with full of potential to execute
                                    trades and achieve targeted outcomes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* section8 */}
                    <section className="flex justify-center w-full items-center bg-[#f9f9f9]">
                        {/* Added padding */}
                        <div className="w-full flex flex-col md:flex-row bg-[#0238ff] text-white p-5 md:p-10 rounded-xl text-left font-semibold justify-evenly items-center gap-8 md:gap-4">
                            <div className="w-full md:w-[40%] h-full flex flex-col gap-8 md:gap-[30px]">
                                <h4 className="text-3xl md:text-[40px] font-bold">
                                    Fyers My Account
                                </h4>
                                <p className="font-medium text-lg md:text-[22px] leading-tight">
                                    Go insight and manage seamless Backoffice profiles, reports
                                    and P&L etc.
                                </p>
                                <a
                                    href={link}
                                    target="_blank"
                                    className="text-center px-4 py-3 md:px-6 md:py-4 
                     w-full md:w-auto 
                     bg-[#ffffff57] text-white 
                     text-base sm:text-lg md:text-2xl 
                     font-semibold font-[Afacad Flux] 
                     rounded-xl transition-all duration-200 
                     hover:bg-[#2390cf] hover:translate-y-[-4px] hover:scale-110
                     whitespace-normal md:whitespace-nowrap
                     break-words md:break-normal"
                                >
                                    Open Your Demat Account Now
                                </a>
                            </div>
                            <div className="w-full md:w-[46%] flex justify-center">
                                <img
                                    src="/fyers_files/download2.webp"
                                    alt="Fyers my account Lucknow Lions"
                                    className="md:w-full"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Founders Section */}
                    <section className="w-full my-12 space-y-16">
                        <h4 className="text-4xl font-bold text-center underline">
                            Founders
                        </h4>

                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-full md:w-3/5 p-8 border-2 border-blue-500 rounded-xl shadow-lg space-y-6">
                                <h5 className="text-3xl font-bold text-center">Tejas Khoday</h5>
                                <h6 className="text-2xl text-center">Co-founder & CEO</h6>
                                <p className="text-left">
                                    In 2015, FYERS was formed as a crusade to change the way stock
                                    investments are made in the country and as a
                                    technology-focused brokerage firm, the goal is to transform
                                    the trading/investment landscape for everyone.
                                    <br />
                                    <br />
                                    At the age of 18 he started trading and after experiencing the
                                    complacency of traditional brokerages in India, he embarked
                                    upon a journey to solve the problems faced by traders and
                                    investors.
                                </p>
                            </div>
                            <img
                                src="/fyers_files/founder1.webp"
                                alt="Tejas Khoday"
                                className="w-full md:w-2/5 rounded-xl border-2 border-red-900"
                            />
                        </div>

                        <div className="flex flex-col-reverse md:flex-row gap-6 items-center">
                            <img
                                src="/fyers_files/founder2.webp"
                                alt="Yashas Khoday"
                                className="w-full md:w-2/5 rounded-xl border-2 border-red-900"
                            />
                            <div className="w-full md:w-3/5 p-8 border-2 border-blue-500 rounded-xl shadow-lg space-y-6">
                                <h5 className="text-3xl font-bold text-center">
                                    Yashas Khoday
                                </h5>
                                <h6 className="text-2xl text-center">Co-founder & CEO</h6>
                                <p className="text-left">
                                    As a keen explorer & problem solver, Yashas has his interest
                                    spread across technology & financial markets. His ability to
                                    overcome difficult tech challenges and building highly
                                    scalable & robust platforms has played a pivotal role in our
                                    success. In 2021, he was featured in BW Disrupt "30 Under 30"
                                    for his achievements as a successful bootstrapped entrepreneur
                                    & the youngest stockbroker in India, With his formidable team,
                                    Yashas is focused on delivering the best experience to new-age
                                    traders/investors
                                </p>
                            </div>
                        </div>
                    </section>

                    <div style={{ height: "100px" }} />

                    {/* section10 */}
                    <section className="rounded-xl bg-gradient-to-b from-[#df83ff] via-[#e88e90] to-white flex flex-col justify-around items-center w-full">
                        <div className="w-[90%] flex flex-col md:flex-row items-center justify-between text-left p-4 gap-8 md:gap-4">
                            <h3 className="text-3xl md:text-[40px] leading-[1.4] tracking-[4px] font-bold text-white order-2 md:order-1">
                                Open Your
                                <br />
                                Demat Account
                                <br />
                                in Under
                                <br />5 Minutes
                            </h3>
                            <img
                                src="/fyers_files/dematacc1.webp"
                                alt="Fyers instant account opening with Lucknow lions"
                                className="max-w-[800px] w-full md:w-[46vw] min-w-[100px] order-1 md:order-2"
                            />
                        </div>

                        <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row gap-6 md:gap-5 text-left p-6 md:p-8 justify-between items-center border-[6px] border-[#4b6df1] rounded-md bg-white mt-8">
                            <div className="flex flex-col gap-5">
                                <p className="text-sm sm:text-base md:text-xl tracking-[2px] md:tracking-[4px] font-medium break-words sm:whitespace-nowrap text-center md:text-left">
                                    LIMITED PERIOD OFFER
                                </p>
                                <h5 className="text-lg sm:text-xl md:text-[30px] font-extrabold tracking-[2px] md:tracking-[4px] font-[Afacad Flux] text-center md:text-left">
                                    Get Free AMC for Life
                                </h5>
                            </div>
                            <a
                                href={link}
                                className="inline-block px-6 sm:px-8 md:px-[100px] py-3 md:py-4 
                   bg-[#436af5] text-white 
                   text-base sm:text-xl md:text-2xl 
                   font-semibold font-[Afacad Flux] 
                   rounded-xl transition-all duration-200 
                   hover:bg-[#2390cf] hover:translate-y-[-4px] hover:scale-110
                   whitespace-nowrap text-center"
                            >
                                Sign Up NOW
                            </a>
                        </div>
                    </section>

                    {/* section11 */}
                    <section className={styles.onoff}>
                        <div className={styles.onoffbox}>
                            <h3>Documents are required to Open Demat Account with Fyers</h3>
                            <div className={styles.whiteline}></div>

                            <h6>
                                <img src="/fyers_files/online2.png" alt="icon" width={40} />{" "}
                                Online
                            </h6>
                            <ul>
                                <li>A Signature required as per PAN Card on white paper.</li>
                                <li>
                                    Proof of identification (POI) - PAN CARD, or Voter ID, or
                                    Passport, any ID card issued by the central or state
                                    government with applicant's photo.
                                </li>
                                <li>
                                    Proof of Address (POA): ADHAR Card, or Ration card, or
                                    Passport, or Voter ID, verified copies of electricity bills.
                                </li>
                                <li>
                                    Bank Proof- Cancel cheque, or Bank Passbook or 6-month Bank
                                    statement
                                </li>
                                <li>
                                    Income Proof - 6-month Bank statement, or ITR with income
                                    Computation, or Salary Slip, or Net worth certificate or Copy
                                    of Form 16 or demat holding you may attach for derivatives
                                    segments.
                                </li>
                            </ul>
                            <div className={styles.whiteline}></div>
                            <h6>
                                <img src="/fyers_files/online1.png" alt="icon" width={40} />{" "}
                                Offline
                            </h6>
                            <ul>
                                <li>Self-attested photocopy of the PAN.</li>
                                <li>Self-attested photocopy of the Adhaar card.</li>
                                <li>2 Passport size photo (Color).</li>
                                <li>Original personalizes cancel cheque.</li>
                                <li>
                                    Income Proof - Self attested photocopy required with your
                                    signature of 6 months bank statements, or ITR with Income
                                    Computation, or Salary Slip.
                                </li>
                            </ul>

                            <div className={styles.notes}>
                                <h5>Note :</h5>
                                <ul>
                                    <li>
                                        A-These documents are necessary for the KYC (Know Your
                                        Customer) process and to verify your identity and address.
                                    </li>
                                    <li>
                                        B- It is important to link your Aadhar number with demat
                                        account because it is mandatory by government of India.
                                    </li>
                                    <li>
                                        C- PAN and Adhar Linking should be done it is also mandatory
                                        by government of India.
                                    </li>
                                    <li>
                                        D- If you want open joint demat and trading account then all
                                        members are required to submit self-attested photocopy of
                                        the documents and passport size photo.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* section12 */}
                    <section className={styles.tables}>
                        <h3>
                            Charges
                            <span className={styles.des1}>
                                (Few charges are revised from 01.Oct.2024)
                            </span>
                        </h3>
                        <table>
                            <tr>
                                <th>Segment</th>
                                <th>Brokerage</th>
                            </tr>
                            <tr>
                                <td>Trading & Demat Account Opening</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Annual Maintenance Charges (AMC)</td>
                                <td>Lifetime Free in Limited period offer,(400/- year)</td>
                            </tr>
                            <tr>
                                <td>DP Charges</td>
                                <td>
                                    <b> Male</b>: 3.5 per script
                                    <br />
                                    <br />
                                    <b>Female</b>: 3.25 per script
                                </td>
                            </tr>
                        </table>

                        <img
                            src="/fyers_files/Group 1321314144.png"
                            alt="icon"
                            className={styles.dot}
                        />

                        <h3>Brokerages</h3>
                        <table>
                            <tr>
                                <th>Segment</th>
                                <th>Brokerage</th>
                            </tr>
                            <tr>
                                <td>Intraday</td>
                                <td>0.03% or Rs 20 per order which is lower.</td>
                            </tr>
                            <tr>
                                <td>Delivery</td>
                                <td>
                                    Revised to 0.3% or ₹20 per executed order, whichever is lower.{" "}
                                </td>
                            </tr>
                            <tr>
                                <td>Future</td>
                                <td>0.03% or Rs 20 per order which is lower.</td>
                            </tr>
                            <tr>
                                <td>Option</td>
                                <td>Flat Rs 20 per order</td>
                            </tr>
                            <tr>
                                <td>Currency</td>
                                <td>0.03% or Rs 20 per order which is lower.</td>
                            </tr>
                            <tr>
                                <td>MCX (Future)</td>
                                <td>0.03% or Rs 20 per order which is lower.</td>
                            </tr>
                            <tr>
                                <td>MCX (Option)</td>
                                <td>Flat Rs 20 per order</td>
                            </tr>
                            <tr>
                                <td>Mutual Fund</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Call and Trade</td>
                                <td>₹50 per executed order</td>
                            </tr>
                            <tr>
                                <td>Admin Square Off</td>
                                <td>₹50 per executed order</td>
                            </tr>
                        </table>

                        <p>
                            <span>Note:</span> - Brokerage charges are applicable when your
                            order executes successfully.
                        </p>

                        <h3>
                            Statutory Charges - <span>Equity</span>
                        </h3>
                        <table className={styles.tablecus}>
                            <tr>
                                <th>Charges</th>
                                <th>Delivery</th>
                                <th>Intraday</th>
                                <th>Futures</th>
                                <th>Options</th>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.1% on Buy and Sell value</td>
                                <td>0.025% on Sell value</td>
                                <td>0.02% on Sell valuee</td>
                                <td>0.1% on Sell value (Premium)</td>
                            </tr>
                            <tr>
                                <td>Exchange Transaction Charges</td>
                                <td>
                                    NSE: 0.00297%
                                    <br /> <br />
                                    BSE: 0.00375%
                                </td>
                                <td>
                                    NSE: 0.00297%
                                    <br /> <br />
                                    BSE: 0.00375%
                                </td>
                                <td>NSE: 0.00173% </td>
                                <td>
                                    <b>NSE:</b> 0.03503% (On premium)
                                    <br /> <br />
                                    <b>BSE:</b>
                                    <br />
                                    Sensex: 0.0325%
                                    <br />
                                    Bankex: 0.0325%
                                    <br />
                                    Sensex 50: 0.005%
                                    <br />
                                    Stock: 0.005%
                                </td>
                            </tr>
                            <tr>
                                <td>Clearing Charges</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0.0005%</td>
                                <td>0.009%</td>
                            </tr>
                            <tr>
                                <td>SEBI Turnover Fee</td>
                                <td>₹10/Crore</td>
                                <td>₹10/Crore</td>
                                <td>₹10/Crore</td>
                                <td>₹10/Crore</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>
                                    18% on (Brokerage + Exchange Transaction charges + Clearing
                                    charges + SEBI Turnover Fee)
                                </td>
                                <td>
                                    18% on (Brokerage + Exchange Transaction charges + Clearing
                                    charges + SEBI Turnover Fee)
                                </td>
                                <td>
                                    18% on (Brokerage + Exchange Transaction charges + Clearing
                                    charges + SEBI Turnover Fee)
                                </td>
                                <td>
                                    18% on (Brokerage + Exchange Transaction charges + Clearing
                                    charges + SEBI Turnover Fee)
                                </td>
                            </tr>
                            <tr>
                                <td>Stamp Duty</td>
                                <td>0.015%</td>
                                <td>0.003%</td>
                                <td>0.002%</td>
                                <td>0.003%</td>
                            </tr>
                            <tr>
                                <td>NSE IPFT</td>
                                <td>₹10/Crore</td>
                                <td>₹10/Crore</td>
                                <td>₹10/Crore</td>
                                <td>₹50/Crore (on premium)</td>
                            </tr>
                        </table>

                        <h3>
                            Statutory Charges – <span>Currency</span>
                        </h3>
                        <table className={styles.tablecus}>
                            <tr>
                                <th>Charges</th>
                                <th>Futures</th>
                                <th>Options</th>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Exchange Transaction Charges</td>
                                <td>
                                    NSE: 0.00035%
                                    <br /> <br />
                                    BSE: 0.00045%
                                </td>
                                <td>
                                    NSE: 0.0311%
                                    <br /> <br />
                                    BSE: 0.001%
                                </td>
                            </tr>
                            <tr>
                                <td>Clearing Charges</td>
                                <td>0.0005%</td>
                                <td>NSE: 0.009% & BSE: 0.0005%</td>
                            </tr>
                            <tr>
                                <td>SEBI Turnover Fee</td>
                                <td>₹10/Crore</td>
                                <td>₹10/Crore</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>
                                    18% on (Brokerage + Exchange Transaction Charges + Clearing
                                    Charges + SEBI Turnover Fee)
                                </td>
                                <td>
                                    18% on (Brokerage + Exchange Transaction Charges + Clearing
                                    Charges + SEBI Turnover Fee)
                                </td>
                            </tr>
                            <tr>
                                <td>Stamp Duty</td>
                                <td>0.0001% on Buy side</td>
                                <td>0.0001% on Buy side</td>
                            </tr>
                        </table>

                        <h3>
                            Statutory Charges - <span>Commodity</span>
                        </h3>
                        <table className={styles.tablecus}>
                            <tr>
                                <th>Charges</th>
                                <th>Futures</th>
                                <th>Options</th>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (non-Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Exchange Transaction Charges</td>
                                <td>MCX- Non-Agri: 0.0021%, NSE- 0</td>
                                <td>MCX- Non-Agri: 0.0418%, NSE- 0</td>
                            </tr>
                            <tr>
                                <td>Clearing Charges</td>
                                <td>0.0018%</td>
                                <td>0.05%</td>
                            </tr>
                            <tr>
                                <td>SEBI Turnover Fee</td>
                                <td>NON-Agree: ₹10/Crore + GST</td>
                                <td>NON-Agree: ₹10/Crore + GST</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>
                                    18% on (Brokerage + Exchange Transaction Charges + Clearing
                                    Charges + SEBI Turnover Fee)
                                </td>
                                <td>
                                    18% on (Brokerage + Exchange Transaction Charges + Clearing
                                    Charges + SEBI Turnover Fee)
                                </td>
                            </tr>
                            <tr>
                                <td>Stamp Duty</td>
                                <td>0.002% on Buy side</td>
                                <td>0.003% on Buy side</td>
                            </tr>
                        </table>

                        <h3>
                            <span>Other</span> Charges
                        </h3>
                        <table>
                            <tr>
                                <td>Physical Contract Note Charges</td>
                                <td>₹20 per physical contract note + courier charges</td>
                            </tr>
                            <tr>
                                <td>Physical Delivery</td>
                                <td>0.2% of the contract value</td>
                            </tr>
                            <tr>
                                <td>
                                    Expires / Exercised / Assigned Futures & Options Contracts
                                </td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Cheque Bounce Charges</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Payment Gateway Charges</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Pledge Request</td>
                                <td>₹5</td>
                            </tr>
                            <tr>
                                <td>Unpledge Request</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Pledge Invocation</td>
                                <td>₹5</td>
                            </tr>
                            <tr>
                                <td>Margin Re-pledge</td>
                                <td>₹1</td>
                            </tr>
                            <tr>
                                <td>MTF Pledge Request</td>
                                <td>₹12</td>
                            </tr>
                            <tr>
                                <td>MTF Unpledged Requestn</td>
                                <td>₹12</td>
                            </tr>
                            <tr>
                                <td>Dematerialization Charges</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Rematerialization Charges</td>
                                <td>
                                    Fee For every 100 securities ₹10/- Part there of; subject to
                                    maximum ₹5,00,000/- Or Flat fee ₹10/- per certificate,
                                    whichever is higher
                                </td>
                            </tr>
                            <tr>
                                <td>Stamp Charges</td>
                                <td>₹100/-</td>
                            </tr>
                            <tr>
                                <td>Failed / Rejected Transactions</td>
                                <td>₹0</td>
                            </tr>
                            <tr>
                                <td>Periodic Statement</td>
                                <td>
                                    ₹0 charges by email.
                                    <br />
                                    ₹50 + courier charges at actuals for physical statements
                                </td>
                            </tr>
                            <tr>
                                <td>Delivery Instruction Book (5 leaves)</td>
                                <td>₹150 + courier charges at actuals</td>
                            </tr>
                            <tr>
                                <td>Modification in Client Master List (CML)</td>
                                <td>₹50/-</td>
                            </tr>
                            <tr>
                                <td>Transfer of shares from Fyers Demat to other Demat</td>
                                <td>₹12.5+ GST per scrip</td>
                            </tr>
                            <tr>
                                <td>Transfer of shares from other Demat to FYERS</td>
                                <td>₹0</td>
                            </tr>
                            <tr>
                                <td>Online DDPI Activation</td>
                                <td>₹150 onetime</td>
                            </tr>
                        </table>
                    </section>

                    {/* section13 */}
                    <section className="md:p-8 w-full">
                        <div className="bg-gradient-to-b from-white via-[#f9c894] via-[#ff93a0] to-white p-3 rounded-xl w-full md:p-10">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-5 text-left justify-around items-center">
                                <h3 className="text-2xl md:text-[36px] font-bold text-black">
                                    Charges
                                    <br />
                                    <span className="text-[#002fff]">Explanation</span>
                                </h3>
                                <img
                                    src="/fyers_files/Rectangle60.webp"
                                    alt="Lucknow Lions charges explanations"
                                    className="max-w-[600px] w-full md:w-[30vw] min-w-[200px]"
                                />
                            </div>

                            <p className="text-base md:text-xl text-left pt-5">
                                There are two types of charges are applied on trading or
                                investing segments through Fyers
                            </p>

                            <ul className="list-decimal pl-4 md:pl-8 mt-4 space-y-5">
                                <li className="pb-5 text-base md:text-lg">
                                    <strong>Brokerage charges</strong> – Which goes to broker only
                                    who provide you trading facility, like Brokerage charges only.
                                </li>

                                <li className="pb-5 text-base md:text-lg">
                                    <strong>Government charges & Regulatory Charges</strong> –
                                    These are multiple kind of charges who are applicable on each
                                    transaction who goes to government body and regulatory
                                    authorities.
                                    <ul className="list-disc space-y-4 pl-4 md:pl-8 pt-6">
                                        <li>
                                            <strong>
                                                STT/CTT (Securities/Commodities Transaction Tax):
                                            </strong>
                                            <p className="mt-1">
                                                Imposed on transactions on exchanges. STT is applicable
                                                on both buy and sell in equity delivery, and on the sell
                                                side in intraday. CTT applies for commodities.
                                            </p>
                                        </li>

                                        <li>
                                            <strong>Exchange Transaction/Turnover Charges:</strong>
                                            <p className="mt-1">
                                                These are fees charged by exchanges like NSE, BSE, or
                                                MCX based on transaction value.
                                            </p>
                                        </li>

                                        <li>
                                            <strong>GST (Goods and Services Tax):</strong>
                                            <p className="mt-1">
                                                GST at 18% is applicable on (brokerage + transaction
                                                charges + Demat charges).
                                            </p>
                                        </li>

                                        <li>
                                            <strong>Stamp Duty Charges:</strong>
                                            <p className="mt-1">
                                                State-specific charges applicable on trading of
                                                securities and commodities.
                                            </p>
                                        </li>

                                        <li>
                                            <strong>DP (Depository Participant) Charges:</strong>
                                            <p className="mt-1">
                                                A fee of ₹12.5 + 18% GST is charged by the depository
                                                for selling equity stocks, applied per script sold.
                                            </p>
                                        </li>

                                        <li>
                                            <strong>SEBI Charges:</strong>
                                            <p className="mt-1">
                                                A fee of ₹10 per crore is levied by SEBI for regulating
                                                the market.
                                            </p>
                                        </li>

                                        <li>
                                            <strong>Call & Trade Charges:</strong>
                                            <p className="mt-1">
                                                An additional fee of ₹50 per order is applied for orders
                                                placed through Fyers' call center or dealer, including
                                                auto square-off orders.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* section14 */}
                    <section className={styles.tables}>
                        <h3>
                            Charges for <span>NRI Account Services</span> at FYERS
                        </h3>
                        <table className={styles.tablecus}>
                            <tr>
                                <th>Segment</th>
                                <th>NRE</th>
                                <th>NRO</th>
                                <th>NRO Non-PIS</th>
                            </tr>
                            <tr>
                                <td>Account Opening Charges </td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr>
                                <td>AMC</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr>
                                <td>Equity Delivery</td>
                                <td>0.5% or ₹50*</td>
                                <td>0.5% or ₹50*</td>
                                <td>0.5% or ₹50*</td>
                            </tr>
                            <tr>
                                <td>F&O</td>
                                <td>0.5% or ₹50*</td>
                                <td>0.5% or ₹50*</td>
                                <td>0.5% or ₹50*</td>
                            </tr>
                        </table>

                        <h3>
                            Fyers <span>Pros and Cons</span>
                        </h3>
                        <table className={styles.tablecus}>
                            <tr>
                                <th>Pros</th>
                                <th>Cons</th>
                            </tr>
                            <tr>
                                <td>Free online account opening.</td>
                                <td>No offline branches.</td>
                            </tr>
                            <tr>
                                <td>No brokerage on equity delivery trades.</td>
                                <td>No 3-in-1 account.</td>
                            </tr>
                            <tr>
                                <td>No hidden charges, cheaper than other brokers.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Smooth and robust trading platform.</td>
                                <td></td>
                            </tr>
                        </table>

                        <h3>
                            Fyers <span>Registration</span> Details
                        </h3>
                        <table>
                            <tr>
                                <td>SEBI Registration No</td>
                                <td>INZ000008524</td>
                            </tr>
                            <tr>
                                <td>DP Registration No</td>
                                <td>IN-DP-432-2019</td>
                            </tr>
                            <tr>
                                <td>NRE TM Code</td>
                                <td>90061</td>
                            </tr>
                            <tr>
                                <td>NRO TM Code</td>
                                <td>6697</td>
                            </tr>
                            <tr>
                                <td>CDP L Member Code</td>
                                <td>12089400</td>
                            </tr>
                        </table>
                    </section>

                    <section className="flex flex-col lg:flex-row items-start lg:items-center gap-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-xl w-full md:p-8">
                        <div className="w-full lg:w-2/3 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                <span className="text-blue-600">SEBI Risk</span> disclosures on derivatives -
                            </h3>
                            <ul className="space-y-4 text-base md:text-lg">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-1">•</span>
                                    <span>
                                        9 out of 10 individual traders in the equity Futures and
                                        Options segment incurred net losses.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-1">•</span>
                                    <span>
                                        On average, loss makers registered a net trading loss of
                                        close to ₹50,000.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-1">•</span>
                                    <span>
                                        Over and above the net trading losses incurred, loss makers
                                        expended an additional 28% of net trading losses as
                                        transaction costs.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-1">•</span>
                                    <span>
                                        Those making net trading profits incurred between 15% to 50%
                                        of such profits as transaction costs.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                            <img
                                src="/fyers_files/disclosure.webp"
                                alt="derivatives Risk disclosures Lucknow Lions"
                                className="w-full max-w-[300px] lg:max-w-full object-contain transition-transform hover:scale-105"
                            />
                        </div>
                    </section>

                    <a
                        href={link}
                        target="_blank"
                        style={{ alignSelf: "center" }}
                        className={styles.a}
                    >
                        <img src="/fyers_files/trade.png" alt="icon" /> Open Your DematAccount
                    </a>

                    {/* Warning Section */}
                    <div className="w-full p-6 border-2 border-blue-400 rounded-xl my-8 hover:shadow-lg hover:-translate-y-1 transition-all">
                        <p className="text-xl md:text-2xl font-semibold text-center flex items-center justify-center gap-4">
                            <img src="/fyers_files/alterss.png" alt="warning" width="50" />
                            Attention: Don't share login credentials or OTP to anyone even the
                            Fyers team also.
                            <img src="/fyers_files/alterss.png" alt="warning" width="50" />
                        </p>
                    </div>

                    <section className={styles.mt}>
                        <p>
                            <img src="/fyers_files/notes.png" alt="icon" width={50} />
                            Notes: <br /> Rematerialization - In this process you can get your
                            electronically held securities converted into physical
                            certificates by processing your request via Fyers.
                        </p>

                        <div className={styles.disclosure}>
                            <div>
                                <ul>
                                    <li>
                                        <strong>Depository</strong> - In India, there are two
                                        depositories that hold your stock accounts: CDSL (Central
                                        Depository Services Limited) and NSDL (National Securities
                                        Depository Limited). Fyers is part of the CDSL depositories.
                                    </li>
                                </ul>

                                <div className={styles.att}>
                                    <ul>
                                        <li>
                                            <strong>DDPI</strong> - SEBI introduced DDPI (Demat Debit
                                            and Pledge Instruction) to mitigate risks associated with
                                            Power of Attorney (PoA). DDPI allows investors to
                                            authorize the sale or pledge of shares held in a Demat
                                            account.
                                        </li>
                                        <li>
                                            <strong>DDPI</strong> is optional, and clients can
                                            continue to sell shares by entering the T-PIN for each
                                            transaction.
                                        </li>
                                        <li>
                                            <strong>DDPI</strong> can be used for selling stocks
                                            without TPIN, pledging/unpledging shares, Margin Trade
                                            Facility, debit of mutual fund units, and tendering shares
                                            for buyback, takeover, or delisting.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.rihimg}>
                                <img src="/fyers_files/buy.webp" alt="Lucknow Lions buy sell" />
                            </div>
                        </div>
                    </section>
                    <a
                        href={link}
                        target="_blank"
                        style={{ alignSelf: "center" }}
                        className={styles.a}
                    >
                        <img src="/fyers_files/trade.png" alt="icon" />
                        Open Your Demat Account
                    </a>

                    {/* Investment Warning */}
                    <p className="text-center text-lg font-medium px-4 my-8 flex items-center justify-center gap-4">
                        <img src="/fyers_files/image8.png" alt="warning" width="50" />
                        Investments in the securities market are subject to market risks;
                        read all the related documents carefully before investing.
                        <img src="/fyers_files/image8.png" alt="warning" width="50" />
                    </p>
                </main>

            </div>

            <Footer />
        </div>

    );
};