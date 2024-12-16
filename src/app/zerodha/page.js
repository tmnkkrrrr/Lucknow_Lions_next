import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Zerodha.module.css";

export function generateMetadata() {
    return {
        title: 'Lucknow Lions - Zerodha Open Free Demat Account 0 Brokerage',
        description: "Open a Free Demat Account in Zerodha with Lucknow Lions. Access India's leading brokerage platform for smooth stock market trading, zero-cost investments, and expert financial tools. Get started today!",
        keywords: 'Zerodha, Zerodha Open Free Demat Account, zerodha demat account charges, zerodha demat account, saurabh kumar srivastava zerodha, stock broker in lucknow, best stock broker in lucknow, 0 brokerage on delivery, free demat account',
        alternates: { canonical: 'https://www.lucknowlions.com/zerodha' },
        robots: 'index',
    }
}

export default function Zerodha() {
    return (
        <>
            <Navbar />

            <div style={{ height: "70px" }} />
            <div className={styles.mainContent}>
                <img
                    src="/zerodha_files/aec6c5390ebe1ba2bed78950f8500096.svg"
                    alt="logo"
                    className={styles.logo}
                />

                {/* hero */}
                <div className={styles.heroMain}>
                    <div className={styles.hero}>
                        <h1>
                            Trade <span>Smarter</span>, <br /> Not Harder
                        </h1>
                        <a
                            href="https://zerodha.com/open-account?c=ZMPIUR"
                            target="_blank"
                            rel="noreferrer"
                            className={`${styles.btn2} ${styles.up_down}`}
                        >
                            OPEN Free Demat Account
                            <img
                                src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                                alt="icon"
                                width="50"
                            />
                        </a>
                        <h3>Empower Your Investments with Zero Brokerage</h3>
                    </div>
                    <img
                        style={{ flex: 1, maxWidth: "36vw" }}
                        src="/zerodha_files/zerodha_hero.gif"
                        alt="Lucknow Lions Zerodha home"
                    />
                </div>

                {/* main */}

                {/* section 1 */}

                <div className={styles.section1}>
                    <div className={styles.boxs}>
                        <div className={styles.flx}>
                            <h4>₹</h4>
                            <h5>0</h5>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_h2}>Free Equity Delivery</div>
                            <p>
                                All equity delivery investments (NSE, BSE), are absolutely free
                                - ₹ 0 brokerage.
                            </p>
                        </div>
                    </div>

                    <div className={styles.boxs}>
                        <div className={styles.flx}>
                            <h4>₹</h4>
                            <h5>20</h5>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_h2}>Intraday and F&O trades</div>
                            <p>
                                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                                intraday trades across equity, currency, and commodity trades.
                                Flat ₹20 on all option trades.
                            </p>
                        </div>
                    </div>

                    <div className={styles.boxs}>
                        <div className={styles.flx}>
                            <h4>₹</h4>
                            <h5>0</h5>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.box_h2}>Free direct MF</div>
                            <p>
                                All direct mutual fund investments are absolutely free — ₹ 0
                                commissions & DP charges.
                            </p>
                        </div>
                    </div>
                </div>

                <a
                    href="https://zerodha.com/open-account?c=ZMPIUR"
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.btns}  ${styles.up_down}`}
                >
                    <img
                        src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                        alt="icon"
                        width="50"
                    />
                    OPEN Free Demat Account
                </a>

                {/* about */}

                <div className={styles.section2}>
                    <h3>About Zerodha</h3>

                    <div className={styles.about}>
                        <p>
                            Zerodha Broking Ltd. is an Indian stock broker and financial
                            services company that is a member of the National Stock Exchange
                            of India (NSE), Bombay Stock Exchange (BSE), and the Multi
                            Commodity Exchange (MCX). It offers institutional and retail
                            brokerage, currency and commodity trading, mutual funds, and
                            bonds.
                        </p>

                        <div className={styles.section2Img}>
                            <img
                                src="/zerodha_files/d58e19d93f5eccf6d792c191cf3e17bb.jpg"
                                alt="Lucknow Lions about Zerodha"
                                width="100"
                            />
                            <p>
                                Founded in 2010, the company is headquartered in Bengaluru and
                                has a physical presence in many major Indian cities. As of May
                                2024, they have an active client base of 75 lakh customers
                                registered with the NSE, giving them a market share of 17.5% and
                                making them the 2nd largest broker in India.
                            </p>
                        </div>
                    </div>
                </div>

                {/* product */}

                <div className={styles.section3}>
                    <div className={styles.titleBg}>Products</div>

                    <div className={styles.products}>
                        <div className={`${styles.productsItem} ${styles.productsItem1}`}>
                            <img
                                src="/zerodha_files/b39af3183c92daaca7af6f4edba6cb8d.svg"
                                alt="icon"
                                style={{ width: "80px" }}
                            />
                            <h4>Kite</h4>
                            <p>
                                Our ultra-fast flagship trading platform with streaming market
                                data, advanced charts, an elegant UI, and more. Enjoy the Kite
                                experience seamlessly on your Android and iOS devices.
                            </p>
                        </div>

                        <div className={`${styles.productsItem} ${styles.productsItem2}`}>
                            <img
                                src="/zerodha_files/9f12a0d94d82ff005802383b78b5f4d1.png"
                                alt="icon"
                                style={{ width: "80px" }}
                            />
                            <h4>Console</h4>
                            <p>
                                The central dashboard for your Zerodha account. Gain insights
                                into your trades and investments with in-depth reports and
                                visualizations.
                            </p>
                        </div>

                        <div className={`${styles.productsItem} ${styles.productsItem3}`}>
                            <img
                                src="/zerodha_files/732a77d4d049336ea616c45c0a336d23.png"
                                alt="icon"
                                style={{ width: "80px" }}
                            />
                            <h4>Coin</h4>
                            <p>
                                Buy direct mutual funds online, commission-free, delivered
                                directly to your Demat account. Enjoy the investment experience
                                on your Android and iOS devices.
                            </p>
                        </div>

                        <div className={`${styles.productsItem} ${styles.productsItem4}`}>
                            <img
                                src="/zerodha_files/b39af3183c92daaca7af6f4edba6cb8d.svg"
                                alt="icon"
                                style={{ width: "80px" }}
                            />
                            <h4>Kite Connect API</h4>
                            <p>
                                Build powerful trading platforms and experiences with our super
                                simple HTTP/JSON APIs. If you are a startup, build your
                                investment app and showcase it to our client base.
                            </p>
                        </div>
                    </div>
                </div>

                <a
                    href="https://zerodha.com/open-account?c=ZMPIUR"
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.btns} ${styles.btnss} ${styles.up_down}`}
                >
                    <img
                        src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                        alt="icon"
                        width="50"
                    />
                    OPEN Free Demat Account
                </a>

                {/* Founders */}

                <div className={styles.section4}>
                    <h3 className={styles.titleBg}>Founders</h3>

                    <div className={styles.founderss}>
                        <div className={styles.founderItem}>
                            <img
                                src="/zerodha_files/bea18438a9fbe494a1995074d06a5f1c.jpg"
                                alt="Nitin Kamath"
                                className={styles.sh}
                                width="150px"
                            />
                            <h6>Founder, CEO</h6>
                            <h5>Nitin Kamath</h5>
                        </div>

                        <div className={styles.founderP}>
                            <div className={styles.nitin}>
                                <p>
                                    Nithin bootstrapped and founded Zerodha in 2010 to overcome
                                    the hurdles he faced during his decade-long stint as a trader.
                                    Today, Zerodha has changed the landscape of the Indian broking
                                    industry.
                                </p>
                                <p>
                                    He is a member of the SEBI Secondary Market Advisory Committee
                                    (SMAC) and the Market Data Advisory Committee (MDAC).
                                </p>
                                <p>Playing basketball is his zen.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.founders}>
                        <div className={styles.founderItem}>
                            <img
                                src="/zerodha_files/55d749cd5df69484429f53a959da7b78.jpg"
                                alt="Nikhil Kamath"
                                className={styles.sh}
                                width="150"
                            />
                            <h5>CO-Founder, CFO</h5>
                            <h6>Nikhil Kamath</h6>
                        </div>

                        <div className={styles.founderItem}>
                            <img
                                src="/zerodha_files/8daf1dffa3c0b12302fa0c24ffb4e894.jpg"
                                alt="Kamath"
                                className={styles.sh}
                                width="150"
                            />
                            <h5>Nitin Kamath</h5>
                            <h6>CTO</h6>
                        </div>

                        <div className={styles.founderItem}>
                            <img
                                src="/zerodha_files/0e5ad2c96b1e352f93f3260092ee563c.jpg"
                                alt="Madhav"
                                className={styles.sh}
                                width="150"
                            />
                            <h6>COO</h6>
                            <h5>Venu Madhav</h5>
                        </div>
                    </div>
                </div>

                {/* section 5 */}
                <div className={styles.section5}>
                    <h3>
                        <img
                            src="/zerodha_files/9c4fadf2c98ca9c0744f6ef61888117e.png"
                            width="60px"
                            alt="icon"
                        />
                        Documents are required for a demat account with Zerodha
                    </h3>
                    <br />
                    <div className={styles.section5Box}>
                        <p>
                            These below documents are required to open an online account with
                            Zerodha.
                        </p>

                        <ul>
                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                A Scan copy of required of PAN Card.
                            </li>
                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                A Signature required as per PAN Card on white paper.
                            </li>
                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>Proof of identification (POI) : </strong> PAN CARD, or
                                Voter ID, or Passport, any ID card issued by the central or
                                state government with applicant's photo.
                            </li>
                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>Proof of Address (POA) : </strong> ADHAR Card, or Ration
                                card, or Passport, or Voter ID, verified copies of electricity
                                bills.
                            </li>

                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>Bank Proof : </strong>Cancel cheque, or Bank Passbook or
                                6-month Bank statement
                            </li>

                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>Income Proof : </strong>6-month Bank statement, or ITR
                                with income Computation, or Salary Slip, or Net worth
                                certificate or Copy of Form 16 or demat holding you may attach
                                for derivatives segments.
                            </li>
                        </ul>

                        <p>
                            If you are proceeding offline, then below are the documents
                            required
                        </p>

                        <ul>
                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>Self-attested photocopy of the PAN</strong>
                            </li>
                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>
                                    Self-attested photocopy of the Adhar card, Voter id, passport
                                    or driving license.
                                </strong>
                            </li>

                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>2 Passport size photo (Color). </strong>
                            </li>

                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>Original personalizes cancel cheque.</strong>
                            </li>
                            <li>
                                <img
                                    src="/zerodha_files/7f2553e46b90761cd20b0f8726877086.png"
                                    width="30px"
                                    alt="icon"
                                />
                                <strong>
                                    Self attested photocopy required with your signature of 6
                                    months bank statements, or ITR with Income Computation, or
                                    Salary Slip{" "}
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* section 6 */}

                <div className={styles.section6}>
                    <a
                        href="https://zerodha.com/open-account?c=ZMPIUR"
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.btns}  ${styles.up_down}`}
                    >
                        <img
                            src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                            alt="icon"
                            width="50"
                        />
                        OPEN Free Demat Account
                    </a>

                    <h3
                        style={{ margin: 0, marginTop: "20px", fontFamily: "The Seasons" }}
                    >
                        Notes
                    </h3>

                    <ul>
                        <li>
                            These documents are necessary for the KYC (Know Your Customer)
                            process and to veri`fy` your identity and address.
                        </li>
                        <li>
                            It is important to link your Aadhar number with the demat account
                            because it is mandatory by the government of India.
                        </li>
                        <li>
                            PAN and Aadhar Linking should be done as it is also mandatory by
                            the government of India.
                        </li>
                    </ul>

                    {/* table */}
                    <div style={{ height: "40px" }} />
                    <h4>Account Opening Charges</h4>
                    <table className={` ${styles.table2}`}>
                        <thead>
                            <tr>
                                <th className={styles.lr}>Segment</th>
                                <th className={styles.rr}>Charges</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>Trading & Demat Account Opening</td>
                                <td>Free for All Age Group</td>
                            </tr>
                            <tr>
                                <td>Annual Maintenance Charges (AMC)</td>
                                <td>75 + 18% GST per quarter</td>
                            </tr>
                            <tr>
                                <td>DP Charges</td>
                                <td>INR 15.94 per script</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        *Note: Zerodha account opening is free for all age groups including
                        online and offline processes.
                    </p>

                    <div style={{ height: "20px" }} />

                    <h4>Brokerage</h4>
                    <table className={`${styles.mt5} ${styles.table2}`}>
                        <thead>
                            <tr>
                                <th className={styles.lr}>Segment</th>
                                <th className={styles.rr}>Charges</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>Intraday</td>
                                <td>0.03% or Rs 20 per order, whichever is lower</td>
                            </tr>
                            <tr>
                                <td>Delivery</td>
                                <td>0 Brokerage on Delivery</td>
                            </tr>
                            <tr>
                                <td>Future</td>
                                <td>0.03% or Rs 20 per order, whichever is lower</td>
                            </tr>
                            <tr>
                                <td>Option</td>
                                <td>Flat Rs 20 per order</td>
                            </tr>
                            <tr>
                                <td>Currency</td>
                                <td>0.03% or Rs 20 per order, whichever is lower</td>
                            </tr>
                            <tr>
                                <td>MCX (Future)</td>
                                <td>0.03% or Rs 20 per order, whichever is lower</td>
                            </tr>
                            <tr>
                                <td>MCX (Option)</td>
                                <td>Flat Rs 20 per order</td>
                            </tr>
                            <tr>
                                <td>Mutual Fund</td>
                                <td>Free</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        *Note: Brokerage charges are applicable when your order executes
                        successfully.
                    </p>

                    <div style={{ height: "40px" }} />

                    <h4>Statutory Charges – Equity</h4>
                    <table className={`${styles.mt5} ${styles.table2}`}>
                        <thead>
                            <tr>
                                <th className={styles.lr}></th>
                                <th>Equity delivery</th>
                                <th>Equity intraday</th>
                                <th>F&O - Futures</th>
                                <th className={styles.rr}>F&O - Options</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>Brokerage</td>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order, whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order, whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.1% on buy & sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.0125% on the sell side</td>
                                <td>
                                    <ul>
                                        <li>
                                            0.125% of the intrinsic value on options that are bought
                                            and exercised
                                        </li>
                                        <li> 0.0625% on sell side (on premium) </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00322% BSE: 0.00375%</td>
                                <td>NSE: 0.00322% BSE: 0.00375%</td>
                                <td>NSE: 0.00188% BSE: 0</td>
                                <td>NSE: 0.0495% (on premium) BSE: 0.0495% (on premium)</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.015% or ₹1500 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ height: "50px" }} />
                    <h4>Statutory Charges – Currency</h4>
                    <table className={`${styles.mt5} ${styles.table2}`}>
                        <thead>
                            <tr>
                                <th className={styles.lr}></th>
                                <th>Currency futures</th>
                                <th className={styles.rr}>Currency options</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹ 20/executed order, whichever is lower</td>
                                <td>₹ 20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>No STT</td>
                                <td>No STT</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>
                                    NSE: Exchange txn charge: 0.0009% BSE: Exchange txn charge:
                                    0.0009%
                                </td>
                                <td>
                                    NSE: Exchange txn charge: 0.035% BSE: Exchange txn charge:
                                    0.001%
                                </td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ height: "50px" }} />
                    <h4>Statutory Charges – Commodity</h4>
                    <table className={`${styles.mt5} ${styles.table2}`}>
                        <thead>
                            <tr>
                                <th className={styles.lr}></th>
                                <th>Commodity futures</th>
                                <th className={styles.rr}>Commodity options</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹ 20/executed order, whichever is lower</td>
                                <td>₹ 20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non-Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>
                                    Group A Exchange txn charge: 0.0026% Group B: Exchange txn
                                    charge: CASTORSEED - 0.0005% KAPAS - 0.0026% PEPPER - 0.00005%
                                    RBDPMOLEIN - 0.001%
                                </td>
                                <td>Exchange txn charge: 0.05%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>Agri: ₹1 / crore Non-agri: ₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className={styles.pt4}>
                        ** <span>Charges Explanation is at the bottom of the page or</span>{" "}
                        <a href="#charges">click here to go there</a>
                    </p>

                    <center className={`${styles.pt5} ${styles.pb5}`}>
                        <a
                            href="https://zerodha.com/open-account?c=ZMPIUR"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.btns}
                        >
                            <img
                                src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                                alt="icon"
                                width="50"
                            />
                            OPEN Free Demat Account
                        </a>
                    </center>

                    <h4 className={styles.pt4}>
                        Charges for Other Account Opening Except Retail
                    </h4>
                    <table className={`${styles.mt5} ${styles.table2} ${styles.table2}`}>
                        <thead>
                            <tr>
                                <th className={styles.lr}>Segment</th>
                                <th className={styles.rr}>Charges</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>NRI account (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                            <tr>
                                <td>
                                    Partnership, LLP, HUF, or corporate accounts (offline only)
                                </td>
                                <td>₹ 500</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className={styles.pt4}>
                        Charges for Optional Value-Added Services
                    </h4>
                    <table className={`${styles.mt5} ${styles.table2} ${styles.table2}`}>
                        <thead>
                            <tr>
                                <th className={styles.lr}>Service</th>
                                <th>Billing Frequency</th>
                                <th className={styles.rr}>Charges</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>Tickertape</td>
                                <td>Monthly / Annual</td>
                                <td>₹ 500</td>
                            </tr>
                            <tr>
                                <td>Smallcase</td>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: ₹100 | SIP: ₹10</td>
                            </tr>
                            <tr>
                                <td>Kite Connect</td>
                                <td>Monthly</td>
                                <td>Connect: ₹2000 | Historical: ₹2000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* section 7 */}

                <div id="charges" className={styles.section7}>
                    <h2>Securities/Commodities Transaction Tax</h2>

                    <div className={styles.secuItem}>
                        <div className={styles.img}>
                            <img
                                src="/zerodha_files/aa96063ff0e69f4c2e6b815eb085fdf4.png"
                                alt="icon"
                            />
                        </div>
                        <p>
                            Tax by the government when transacting on the exchanges. Charged
                            as above on both buy and sell sides when trading equity delivery.
                            Charged only on the selling side when trading intraday or on F&O.
                        </p>
                    </div>

                    <div className={styles.secuItem}>
                        <p>
                            When trading at Zerodha, STT/CTT can be a lot more than the
                            brokerage we charge. Important to keep in mind.
                        </p>
                        <div className={styles.img}>
                            <img
                                src="/zerodha_files/aa96063ff0e69f4c2e6b815eb085fdf4.png"
                                alt="icon"
                            />
                        </div>
                    </div>

                    <br />
                    <br />

                    <center className={`${styles.pt5} ${styles.pb5}`}>
                        <a
                            href="https://zerodha.com/open-account?c=ZMPIUR"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.btns}
                        >
                            <img
                                src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                                alt="icon"
                                width="50"
                            />
                            OPEN Free Demat Account
                        </a>
                    </center>
                    <br />
                    <br />
                    <br />
                    <br />

                    <div id={styles.charges} style={{}}>
                        <div
                            style={{ paddingTop: "40px", fontSize: "4em", fontWeight: "700" }}
                        >
                            Transaction/Turnover Charges
                        </div>
                        <ul>
                            <li>
                                <img
                                    src="/zerodha_files/058b08e219886e2a5c3e399bb6faa51c.png"
                                    alt="icon"
                                    width="40"
                                />
                                Charged by exchanges (NSE, BSE, MCX) on the value of your
                                transactions.
                            </li>
                            <li>
                                <img
                                    src="/zerodha_files/058b08e219886e2a5c3e399bb6faa51c.png"
                                    alt="icon"
                                    width="40"
                                />
                                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                                groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups
                                have been merged into a new group X w.e.f 01.12.2017)
                            </li>
                            <li>
                                <img
                                    src="/zerodha_files/b6dbfb686139d1a80e391a2fa1320156.png"
                                    alt="icon"
                                    width="40"
                                />
                                BSE has revised transaction charges for group A, B and other
                                nonexclusive scripts (non-exclusive scripts from group E, F, FC,
                                G, GC, W, T) at ₹375 per crore of turnover on flat rate basis
                                w.e.f. December 1, 2022.
                            </li>
                            <li>
                                <img
                                    src="/zerodha_files/46790826399b0e33f72cc663f8f087de.png"
                                    alt="icon"
                                    width="40"
                                />
                                BSE has revised transaction charges in M, MT, TS and MS groups
                                to ₹275 per crore of gross turnover.
                            </li>
                            <li>
                                <span>ST</span> BSE has revised transaction charges in SS and ST
                                groups to ₹1,00,000 per crore of gross turnover.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* section 8 */}

                <div className={styles.section8}>
                    <div className={styles.Item}>
                        <div>
                            <h3>Stamp Charges</h3>
                            <p>
                                Stamp charges by the Government of India as per the Indian Stamp
                                Act of 1899 for transacting in instruments on the stock
                                exchanges and depositories.
                            </p>
                        </div>

                        <div>
                            <h3>Call & Trade</h3>
                            <p>
                                BSE has revised transaction charges in M, MT, TS, and MS groups
                                to ₹275 per crore of gross turnover.
                            </p>
                        </div>
                    </div>

                    <h2 style={{ marginTop: "100px", fontWeight: "700" }}>
                        NRI Brokerage Charges
                    </h2>

                    <center>
                        <img src="/zerodha_files/trading.png" alt="NRI Brokerage Charges" />
                    </center>
                </div>

                <a
                    href="https://zerodha.com/open-account?c=ZMPIUR"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btns}
                >
                    <img
                        src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                        alt="icon"
                        width="50"
                    />
                    OPEN Free Demat Account
                </a>

                {/* section 9 */}

                <div className={styles.section9}>
                    <h3>Account with Debit Balance</h3>
                    <p>
                        If the account is in debit balance, any order placed will be charged
                        ₹40 per executed order instead of ₹20 per executed order.
                    </p>

                    <h3>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h3>

                    <div className={styles.inItems}>
                        <div className={styles.inItem}>
                            <h6 style={{ backgroundColor: "#45B8FF" }}>01</h6>
                            <p>
                                Equity and Futures - ₹10 per crore + GST of the traded value.
                            </p>
                        </div>

                        <div className={styles.inItem}>
                            <h6>02</h6>
                            <p>Options - ₹50 per crore + GST traded value (premium value).</p>
                        </div>

                        <div className={styles.inItem}>
                            <h6 style={{ backgroundColor: "#3F6CF1" }}>03</h6>
                            <p>
                                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                                per lakh + GST of premium for Options.
                            </p>
                        </div>
                    </div>

                    <h3>GST</h3>
                    <p>
                        Tax levied by the government on the services rendered. 18% of (
                        brokerage + SEBI charges + transaction charges)
                    </p>

                    <h3>SEBI Charges</h3>
                    <p>
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of
                        India for regulating the markets.
                    </p>

                    <h3>DP (Depository Participant) Charges</h3>
                    <ul>
                        <li>
                            <img
                                src="/zerodha_files/74dba9fb6a61370024bf3cbfbd8a1bb1.svg"
                                alt="icon"
                                width="40"
                            />{" "}
                            <span>For Males :</span>
                            <p>
                                ₹13 + GST per scrip (irrespective of quantity), on the day, is
                                debited from the trading account when stocks are sold. This is
                                charged by the depository (CDSL) and depository participant
                                (Zerodha).
                            </p>
                        </li>
                        <li>
                            <img
                                src="/zerodha_files/74dba9fb6a61370024bf3cbfbd8a1bb1.svg"
                                alt="icon"
                                width="40"
                            />
                            <span>For Females :</span>
                            <ul className={styles.nestUl}>
                                <li>
                                    Female demat account holders (as first holder) will enjoy a
                                    discount of ₹0.25 per transaction.
                                </li>
                                <li>
                                    Debit transactions of mutual funds & bonds get an additional
                                    discount of ₹0.25.
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Pledging Charges</h3>
                    <p>₹30 + GST per pledge request per ISIN.</p>

                    <h3>AMC (Account Maintenance Charges)</h3>
                    <p>
                        For BSDA demat account - Zero charges if the holding value is less
                        than ₹50,000. To learn more about BSDA,{" "}
                        <a
                            href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <br />
                            Click here
                        </a>
                    </p>
                    <p>
                        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
                        (90 days). To learn more about AMC,
                        <a
                            href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <br />
                            Click here
                        </a>
                    </p>

                    <h3>Corporate Action Order Charges</h3>
                    <p>
                        ₹20 plus GST will be charged for OFS / buyback / takeover /
                        delisting orders placed through Console.
                    </p>

                    <center className={styles.pt5pb5}>
                        <a
                            href="https://zerodha.com/open-account?c=ZMPIUR"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.btns}
                        >
                            <img
                                src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                                alt="icon"
                                width="50"
                            />
                            OPEN Free Demat Account
                        </a>
                    </center>

                    <h3>Off-Market Transfer Charges</h3>
                    <p>₹25 or 0.03% of the transfer value (whichever is higher).</p>

                    <h3>Physical CMR Request</h3>
                    <p>
                        First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
                        subsequent requests.
                    </p>

                    <h3>Payment Gateway Charges</h3>
                    <p>₹9 + GST (Not levied on transfers done via UPI)</p>

                    <h3>Delayed Payment Charges</h3>
                    <p>
                        Interest is levied at 18% a year or 0.05% per day on the debit
                        balance in your trading account.
                    </p>
                </div>

                {/* Disclaimer */}

                <div className={styles.disclaimer}>
                    <h3>Disclaimer</h3>

                    <p>
                        For Delivery based trades, a minimum of ₹0.01 will be charged per
                        contract note. Clients who opt to receive physical contract notes
                        will be charged ₹20 per contract note plus courier charges.
                        Brokerage will not exceed the rates specified by SEBI and the
                        exchanges. All statutory and regulatory charges will be levied at
                        actuals. Brokerage is also charged on expired, exercised, and
                        assigned options contracts. Free investments are available only for
                        our retail individual clients. Companies, Partnerships, Trusts, and
                        HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
                        brokerage. A brokerage of 0.25% of the contract value will be
                        charged for contracts where physical delivery happens. For netted
                        off positions in physically settled contracts, a brokerage of 0.1%
                        will be charged.
                    </p>
                </div>

                {/* section 10 */}

                <div className={styles.section10}>
                    <table className={`${styles.table2}  `}>
                        <thead>
                            <tr>
                                <th
                                    className={`${styles.r}`}
                                    style={{ textAlign: "left" }}
                                    colSpan={2}
                                >
                                    Zerodha Other Charges
                                </th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>Demat and Courier charges</td>
                                <td>₹150 per certificate (₹100 Courier charges also)</td>
                            </tr>
                            <tr>
                                <td>Pledging Charges</td>
                                <td>₹30 per request + GST</td>
                            </tr>
                            <tr>
                                <td>Unpledging Charges</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Cheque Bounce</td>
                                <td>₹350</td>
                            </tr>
                            <tr>
                                <td>Modification in CML</td>
                                <td>₹25 per request</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className={styles.notes}>
                        <b>Note : </b>Interest at 18% per annum is charged on the
                        outstanding bill amount if not paid within the due date.
                    </p>

                    <h3>Zerodha Pros and Cons</h3>
                    <table className={`${styles.table2}`}>
                        <thead>
                            <tr>
                                <th className={styles.lr}>Pros</th>
                                <th className={styles.rr}>Cons</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>Free account opening for all age groups.</td>
                                <td>
                                    Doesn't offer stock tips, research, and recommendations.
                                </td>
                            </tr>
                            <tr>
                                <td>Most popular broker</td>
                                <td>No monthly unlimited trading plans</td>
                            </tr>
                            <tr>
                                <td>0 Brokerage on Delivery</td>
                                <td>No lifetime AMC.</td>
                            </tr>
                            <tr>
                                <td>Easy understandable trading platforms</td>
                                <td>3 in 1 account facility is not available</td>
                            </tr>
                            <tr>
                                <td>
                                    Self-Clearing Brokerage Bracket Order is not available (They
                                    don’t impose clearing charges to clients)
                                </td>
                                <td>Bracket Order is not available</td>
                            </tr>
                            <tr>
                                <td>Auction Market order facility is available</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Participation in Govt Security facility available</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Minor Account facility available</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ height: "40px" }} />
                    <h3>Zerodha Broking Limited Registration Details</h3>
                    <table className={`${styles.table2}  `}>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>SEBI Registration no</td>
                                <td>SEBI Registration no INZ000031633</td>
                            </tr>
                            <tr>
                                <td>CDSL Registration No</td>
                                <td>IN-DP-431-2019</td>
                            </tr>
                            <tr>
                                <td>NSE TM Code</td>
                                <td>50001</td>
                            </tr>
                            <tr>
                                <td>MCX</td>
                                <td>46025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <a
                    href="https://zerodha.com/open-account?c=ZMPIUR"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btns}
                    style={{ alignSelf: "center" }}
                >
                    <img
                        src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                        alt="icon"
                        width="50"
                    />
                    OPEN Free Demat Account
                </a>

                <img
                    src="https://i.ibb.co/K0RkNMV/Screenshot-4-9-2024-12459.jpg"
                    alt="zerodha"
                    className={styles.atten}
                />

                {/* section 11 */}

                <div className={styles.section11}>
                    <h3>
                        <img
                            src="/zerodha_files/0e650357232f754e84cbea9e60bf8d73.svg"
                            alt="icon"
                            width="80"
                        />
                        Notes
                        <img
                            src="/zerodha_files/0e650357232f754e84cbea9e60bf8d73.svg"
                            alt="icon"
                            width="80"
                        />
                    </h3>

                    <ul style={{ margin: 0 }}>
                        <li>
                            <span>
                                A.
                                <img
                                    src="/zerodha_files/f002fd8307fd6f71237ee74a831bb704.svg"
                                    alt="icon"
                                    width="30"
                                />
                                Remat :
                            </span>
                            Remat stands for rematerialization. In this process you can get
                            your electronically held securities converted into physical
                            certificates by processing your request via Zerodha.
                        </li>
                        <li>
                            <span>
                                B.
                                <img
                                    src="/zerodha_files/f002fd8307fd6f71237ee74a831bb704.svg"
                                    alt="icon"
                                    width="30"
                                />
                                SEBI Risk Disclosures on Derivatives :
                            </span>
                            <ul>
                                <li>
                                    9 out of 10 individual traders in equity Futures and Options
                                    Segment incurred net losses.
                                </li>
                                <li>
                                    On average, loss makers registered net trading losses close to
                                    ₹50,000.
                                </li>
                                <li>
                                    Over and above the net trading losses incurred, loss makers
                                    expended an additional 28% of net trading losses as
                                    transaction costs.
                                </li>
                                <li>
                                    Those making net trading profits incurred between 15% to 50%
                                    of such profits as transaction costs.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>
                                C.{" "}
                                <img
                                    src="/zerodha_files/f002fd8307fd6f71237ee74a831bb704.svg"
                                    alt="icon"
                                    width="30"
                                />{" "}
                                Minor & Major Account - (There is no minimum age to invest in
                                the stock market. Both a minor and an adult can invest in
                                stocks.)
                            </span>
                            <p>
                                For individuals below 18 years, parents can open a minor account
                                for their children by submitting the necessary documents
                                (parents or the appointed guardian). The parents or guardian/s
                                will be in charge of the account until the minor reaches
                                adulthood. Upon turning 18, the depository participant will send
                                a notification to migrate the minor account to a major account.
                            </p>
                        </li>
                    </ul>
                </div>
                <a
                    href="https://zerodha.com/open-account?c=ZMPIUR"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btns}
                >
                    <img
                        src="/zerodha_files/28de5148ba11c27bf8aef82c87d44bc4.svg"
                        alt="icon"
                        width="50"
                    />
                    OPEN Free Demat Account
                </a>
            </div>

            <Footer />
        </>
    );
};