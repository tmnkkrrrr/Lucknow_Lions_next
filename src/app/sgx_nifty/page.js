import styles from "./SGX_Nifty.module.css";
import Navbar from "../components/Navbar/Navbar";
import ChoiceChip from "../components/ChoiceChip/ChoiceChip";
import Footer from "../components/Footer/Footer";

export function generateMetadata() {
    return {
        title: 'Lucknow Lions - What is SGX Nifty',
        description: 'Access live SGX Nifty updates, market insights, and trading data with Lucknow Lions. Stay informed with real-time index performance and expert analysis to enhance your trading strategy.',
        keywords: 'Lucknow Lions, sgx nifty, sgx nifty live chart, what is sgt nifty, gift nifty, nifty future, sgx nifty in hindi, sgx nifty kya hai,what is gift nifty',

        openGraph: {
            title: 'Lucknow Lions - What is SGX Nifty',
            description: 'Access live SGX Nifty updates, market insights, and trading data with Lucknow Lions. Stay informed with real-time index performance and expert analysis to enhance your trading strategy.',
            images: ['https://www.lucknowlions.com/home/hero.webp'],
        },
        alternates: { canonical: 'https://www.lucknowlions.com/sgx_nifty' },
        robots: 'index'
    }
}

export default function SGX_Nifty() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                <div className="w-full flex flex-col items-center">
                    <div className="text-center">
                        <div className="text-5xl font-semibold text-white py-2">SGX Nifty</div>
                        <br />
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            <a href="#english">
                                <div className="rounded-full px-4 py-2 bg-blue-500 text-white">English</div>
                            </a>
                            <a href="#hindi">
                                <div className="rounded-full px-4 py-2 bg-blue-500 text-white">हिंदी</div>
                            </a>
                        </div>
                    </div>

                    <div className="w-full max-w-4xl mt-8">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="flex justify-center items-center gap-4 mb-4">
                                <img src="/sgx_files/ques.webp" alt="About SGX Nifty" className="w-12 h-12" />
                                <h1 className="text-2xl font-bold m-0">About SGX Nifty</h1>
                                <img src="/sgx_files/ques.webp" alt="About SGX Nifty" className="w-12 h-12" />
                            </div>
                            <p className="text-gray-700">
                                You had heard multiple time SGX Nifty. What is the SGX Nifty future?
                                And how we can place trade in SGX nifty or Indian market? We will
                                know in this topic. We will also talk about Gift Nifty later.
                            </p>
                        </div>
                    </div>

                    <div className="my-5 text-red-500">
                        (Chart is downloading...., please wait)
                    </div>

                    <iframe
                        height="480"
                        width="650"
                        src="https://ssltvc.forexprostools.com/?pair_ID=8985&height=480&width=650&interval=300&plotStyle=area&domain_ID=56&lang_ID=56&timezone_ID=20"
                    />

                    <div className="text-center my-5">
                        <strong>
                            SGX NIFTY LIVE TIMINGS
                            <br />
                            6:30 AM TO 11:30 PM (As per Indain Standard Time)
                        </strong>
                    </div>
                    <br /> <br />
                    <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                        <button className={styles.btn}>Open Free Demat Account</button>
                    </a>
                    <div id="english" />
                    <p
                        style={{
                            maxWidth: "1200px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <br />
                        <div className={`${styles.card} ${styles.fly_bottom} ${styles.sgx}`}>
                            <h1>What is SGX Nifty?</h1>
                            <p>
                                SGX Nifty is a derivative/futures contract of the Nifty 50 that is
                                traded on the Singapore Exchange (SGX). It’s Based on the Indian
                                Nifty 50 index. Its gives trade fair estimate of how our Indian
                                market will open like Positive, Negative of flat opening either
                                Gap Up, or Gap down. Indian Traders can’t trade on SGX Nifty
                                future and they are also not allowed to trade in derivatives
                                outside India. Only FIIs, DIIs, and big players can take trade-in
                                Derivatives outside India. SGX Nifty is more volatile than the
                                Indian Nifty 50 index.
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className={styles.brd}>
                            <div className={styles.flx}>
                                <img className={styles.im} alt="Clock" src="./sgx_files/clock.gif" />
                                <h1>SGX Nifty Timings</h1>
                                <img className={styles.im} alt="Clock" src="./sgx_files/clock.gif" />
                            </div>
                            <div className={`${styles.flx}`}>
                                <p>
                                    T Session Timings
                                    <br />
                                    (12 hrs. time format hh:mm)
                                    <center>
                                        <table className={styles.styled_table}>
                                            <thead>
                                                <th>Openings</th>
                                                <th>Closing</th>
                                                <th>Time Zone</th>
                                            </thead>
                                            <tr>
                                                <td>9:00am</td>
                                                <td>6:10am</td>
                                                <td>Singapore Time</td>
                                            </tr>
                                            <tr>
                                                <td>6:30am</td>
                                                <td>3:40am</td>
                                                <td>Indian Time</td>
                                            </tr>
                                        </table>
                                    </center>
                                </p>
                                <div style={{ width: "80px" }} />
                                <p>
                                    T+1 Session Timings
                                    <br />
                                    (12 hrs. time format hh:mm)
                                    <center>
                                        <table className={styles.styled_table}>
                                            <thead>
                                                <th>Openings</th>
                                                <th>Closing</th>
                                                <th>Time Zone</th>
                                            </thead>
                                            <tr>
                                                <td>6:40pm</td>
                                                <td>5:15am</td>
                                                <td>Singapore Time</td>
                                            </tr>
                                            <tr>
                                                <td>4:10am</td>
                                                <td>2:45am</td>
                                                <td>Indian Time</td>
                                            </tr>
                                        </table>
                                    </center>
                                </p>
                            </div>
                            <h4>
                                So SGX Nifty trades a total 21 Hrs. in a day, instead off nifty 50
                                trades only 6:15 hrs only.
                            </h4>
                        </div>
                        <br />
                        <br />
                        <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                            <button className={styles.btn}>Open Free Demat Account</button>
                        </a>
                        <div className={`${styles.card} ${styles.bounce_In} ${styles.gift}`}>
                            <h1>What is Gift Nifty?</h1>
                            <p style={{ fontWeight: "500" }}>
                                On 3rd July 2023, SGX Nifty was renamed as Gift Nifty with a $7.5
                                billion derivative trade from the Singapore Exchange to the NSE
                                International Exchange (NSE IX) in Gujarat's Gandhinagar.
                                <br />
                                Gift Nifty stands for
                                <b>Gujarat International Finance Tec-City Nifty</b>, known as GIFT
                                Nifty.
                                <br />
                                <br />
                                Gift Nifty also gives trade fair estimate like of SGX Nifty how
                                our Indian market will open like Positive, Negative of flat
                                opening either Gap Up, or Gap down.
                            </p>
                        </div>
                        <br />
                        <br />
                        <p>
                            <h2>
                                Timings of GIFT Nifty and SGX Nifty
                                <br />
                                (12 hrs. time format hh:mm)
                            </h2>
                            <center>
                                <table className={styles.styled_table}>
                                    <thead>
                                        <th>Openings</th>
                                        <th>Closing</th>
                                        <th>Time Zone</th>
                                    </thead>
                                    <tr>
                                        <td>9:14 AM</td>
                                        <td>9:15 AM</td>
                                        <td>Pre-Opening Session</td>
                                    </tr>
                                    <tr>
                                        <td>9:15 AM</td>
                                        <td>3:30 PM</td>
                                        <td>Indian Time</td>
                                    </tr>
                                </table>
                            </center>
                        </p>
                        <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                            <button className={styles.btn}>Open Free Demat Account</button>
                        </a>
                        <p>
                            GIFT Nifty timings are important, this follows the regular trading
                            hours of the National Stock Exchange (NSE) in India, from 9:15 am to
                            3:30 pm Indian Standard Time (IST). This timing allows the index to
                            synchronize with the domestic market and provide investors with
                            real-time price movements and trading opportunities.{" "}
                        </p>
                        <p>
                            Apart from this, the Singapore Exchange (SGX) operates at different
                            times. SGX Nifty, the derivative product based on the Nifty index,
                            trades from 6:30 am to 11:30 pm Singapore Standard Time (SST){" "}
                        </p>
                        <br />
                        <div className={`${styles.card} ${styles.pulse} ${styles.how_trade}`}>
                            <h1>How to trade in Gift Nifty ?</h1>
                            <ul className={styles.ul}>
                                <li>
                                    Retail investors residing in India are not permitted to trade in
                                    the GIFT Nifty due to foreign exchange regulations.
                                </li>
                                <li>
                                    NRIs, Foreign Portfolio Investors (FPIs), and Eligible Foreign
                                    Investors (EFIs) are eligible to trade through a broker who is a
                                    member of the NSE IX.
                                </li>
                                <br />
                                <h3>Different types of GIFT Nifty contracts -</h3>
                                The different types of GIFT Nifty contracts are as follows :
                                <li>
                                    <b>GIFT Nifty 50 - </b> It's the most popular contract which
                                    tracks the Nifty 50 index.
                                </li>
                                <li>
                                    <b>GIFT Nifty Bank -</b> It tracks the Nifty Bank Index,
                                    consisting of India's 12 largest banks.
                                </li>
                                <li>
                                    <b>GIFT Nifty Financial Services -</b> It tracks the Nifty
                                    Financial Services index. This index comprises the 25 largest
                                    Indian financial services companies.
                                </li>
                                <li>
                                    <b>GIFT Nifty IT -</b> It tracks the Nifty IT Index, comprises
                                    India's 25 largest Information technology services companies.
                                </li>
                            </ul>
                        </div>
                        <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                            <button className={styles.btn}>Open Free Demat Account</button>
                        </a>
                        <div className={`${styles.card} ${styles.flipIn}`}>
                            <h1>How to add in the Watchlist to track Gift Nifty</h1>
                            Many trading platforms are using different keywords to show GIFT
                            Nifty script in their platform.
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src="/sgx_files/gift.webp"
                                    alt="Gift"
                                    style={{ width: "40px", height: "40px", marginRight: "12px" }}
                                />
                                <h3>GIFT Nifty 50 </h3>
                                <img
                                    src="/sgx_files/gift.webp"
                                    alt="Gift"
                                    style={{ width: "40px", height: "40px", marginLeft: "12px" }}
                                />
                            </div>
                            <ul style={{ "list-style-type": "none" }} className={styles.ul}>
                                <li>
                                    <b>Zerodha :</b> To add Gift Nifty in to the watchlist you have
                                    to type the keyword “GIFT NIFTY” here you will see a script
                                    where it will show INDICES, click on the + button to add in to
                                    the watchlist.
                                </li>
                                <li>
                                    <b>Trading view</b>here you have to type “GIFT NIFTY” or
                                    “NIFTY1!” and you will see a script GIFT NIFTY 50 INDEX FUTURE
                                    with our Indian flag.
                                </li>
                                <li>
                                    <b>GIFT Nifty Bank -</b> Right now, only you can add this script
                                    in
                                </li>
                                <p>
                                    <b>Trading view: </b>here you have to type “GIFT NIFTY” or
                                    “BANKNIFTY1!” and you will see a script GIFT NIFTY BANK INDEX
                                    FUTURE with our Indian flag.
                                </p>
                            </ul>
                        </div>
                        <br />
                        <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                            <button className={styles.btn}>Open Free Demat Account</button>
                        </a>
                        <div
                            className={`${styles.card} ${styles.flipIn}`}
                        // style={{
                        //   backgroundImage:
                        //     'url("https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        //   color: "white",
                        // }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src="/sgx_files/caution.webp"
                                    alt="risk"
                                    style={{ width: "40px", height: "40px", marginRight: "12px" }}
                                />
                                <h3>SEBI Risk Disclosure on Derivatives</h3>
                                <img
                                    src="/sgx_files/caution.webp"
                                    alt="risk"
                                    style={{ width: "40px", height: "40px", marginLeft: "12px" }}
                                />
                            </div>
                            <p>
                                On 19th May 2023, SEBI has introduced a risk disclosure on
                                derivatives and instructed to all Indian brokers to display these
                                main points in their trading platforms like App and websites.
                            </p>
                            <b>Volatility Risk : </b> The price of the Nifty index can be
                            volatile, which means that the price of a GIFT Nifty Derivatives
                            contract can also be volatile. This can lead to large profits or
                            losses in a short period of time.
                            <br /> <br />
                            <h4>What these points says</h4>
                            <ul style={{ "list-style-type": "disc" }} className={styles.ul}>
                                <li>
                                    9 out of 10 individual traders in the equity Futures and Options
                                    Segment, incurred net losses
                                </li>
                                <li>
                                    On an average, loss makers registered net trading loss close to
                                    ₹ 50,000.
                                </li>
                                <li>
                                    Over and above the net trading losses incurred, loss makers
                                    expended an additional 28% of net trading losses as transaction
                                    costs.
                                </li>
                                <li>
                                    Those making net trading profits, incurred between 15% to 50% of
                                    such profits as transaction cost.
                                </li>
                            </ul>
                        </div>
                        <br />
                        <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                            <button className={styles.btn}>Open Free Demat Account</button>
                        </a>
                        <br />
                        <div style={{ alignSelf: "flex-start", fontSize: "18px  " }}>
                            Link to Study conducted by SEBI:{" "}
                            <a
                                href="https://www.sebi.gov.in/reports-and-statistics/research/jan-2023/study-analysis-of-profit-and-loss-of-individual-traders-dealing-in-equity-fando-segment_67525.html"
                                target="blank"
                            >
                                {" "}
                                click here
                            </a>
                        </div>
                    </p>
                    <div className={styles.horizontal_line} />
                    <div id="hindi" style={{ height: "20px" }} />
                    <div className="flex flex-col items-center" style={{ maxWidth: "1200px" }}>
                        <h1>SGX Nifty के बारे में </h1>
                        <p>
                            आपने बहुत सी बार एस जी एक्स निफ़्टी ( SGX Nifty ) का नाम सुना होगा,
                            और बहुत सी बार आपने इंटरनेट पर सर्च भी किया होगा, लेकिन ज्यादातर
                            आर्टिकल आपको अंग्रेजी भाषा में मिले होंगे या यदि आपको अंग्रेजी समझ
                            में नहीं आती होगी मतलब आप अंग्रेजी भाषा में ज्यादा रूचि नहीं रखते
                            हैं तो आपको एस जी एक्स निफ़्टी ( SGX Nifty ) क्या है इसके विषय में
                            पूरी जानकारी नहीं मिली होगी। बहुत सी जगह पर जानबूझकर ये जानकारी साझा
                            नहीं की जाती ताकि आम हिंदी निवेशक उस जानकारी का पूरी तरह और सही लाभ
                            न उठा सकें॥
                        </p>
                        <br />
                        <br />
                        <div
                            className={styles.card}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignSelf: "center",
                            }}
                        >
                            <div style={{ height: "20px" }} />
                            <div style={{ display: "flex", alignSelf: "center" }}>
                                <img
                                    src="/sgx_files/ques.webp"
                                    alt="SGC Nifty"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                <h1>SGX Nifty क्या है?</h1>
                                <img
                                    src="/sgx_files/ques.webp"
                                    alt="SGC Nifty"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            </div>
                            <p>
                                SGX Nifty, Nifty 50 का एक डेरिवेटिव/वायदा अनुबंध यानि कॉन्ट्रैक्ट
                                है जिसका कारोबार सिंगापुर एक्सचेंज (एसजीएक्स) पर किया जाता है। यह
                                भारतीय निफ्टी 50 इंडेक्स पर आधारित है।
                                <br />
                                यह एक ट्रेड निष्पक्ष अनुमान देता है कि हमारा भारतीय बाजार
                                सकारात्मक, नकारात्मक या गैप अप या गैप डाउन की तरह कैसे खुलेगा।
                                <br />
                                भारतीय ट्रेडर एसजीएक्स निफ्टी फ्यूचर पर ट्रेड नहीं कर सकते हैं और
                                उन्हें भारत के बाहर डेरिवेटिव में ट्रेड करने की भी अनुमति भी नहीं
                                है।
                                <br />
                                केवल FII, DII और बड़े ट्रेडर ही भारत के बाहर डेरिवेटिव ट्रेड ले
                                सकते हैं।
                                <br />
                                एसजीएक्स निफ्टी भारतीय निफ्टी 50 इंडेक्स से अधिक अस्थिर है।
                            </p>
                        </div>
                        <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                            <button style={{ maxWidth: "400px" }} className={styles.btn}>
                                Open Free Demat Account
                            </button>
                        </a>
                        <br />
                        <br />
                        <br />
                        <div className={styles.brd}>
                            <div className={styles.flx}>
                                <img
                                    alt="Clock"
                                    className={styles.im} src="./sgx_files/clock.gif" />
                                <h1> SGX Nifty का समय सारणी-</h1>
                                <img alt="Clock" className={styles.im} src="./sgx_files/clock.gif" />
                            </div>
                            <div className={styles.flx}>
                                <p>
                                    T Session समय
                                    <br />
                                    ((12 hrs. समय स्वरूप hh:mm))
                                    <center>
                                        <table className={styles.styled_table}>
                                            <thead>
                                                <th>Openings</th>
                                                <th>Closing</th>
                                                <th>Time Zone</th>
                                            </thead>
                                            <tr>
                                                <td>9:00am</td>
                                                <td>6:10am</td>
                                                <td>Singapore Time</td>
                                            </tr>
                                            <tr>
                                                <td>6:30am</td>
                                                <td>3:40am</td>
                                                <td>Indian Time</td>
                                            </tr>
                                        </table>
                                    </center>
                                </p>
                                <div style={{ width: "80px" }} />

                                <p>
                                    T+1 Session Timings
                                    <br />
                                    (12 hrs. time format hh:mm)
                                    <center>
                                        <table className={styles.styled_table}>
                                            <thead>
                                                <th>Openings</th>
                                                <th>Closing</th>
                                                <th>Time Zone</th>
                                            </thead>
                                            <tr>
                                                <td>6:40pm</td>
                                                <td>5:15am</td>
                                                <td>Singapore Time</td>
                                            </tr>
                                            <tr>
                                                <td>4:10am</td>
                                                <td>2:45am</td>
                                                <td>Indian Time</td>
                                            </tr>
                                        </table>
                                    </center>
                                </p>
                            </div>
                            <b>
                                तो एक दिन में SGX Nifty कुल 21 घंटे कारोबार करता है निफ्टी 50 के
                                बजाय, निफ्टी 50 केवल 6:15 बजे ही कारोबार होता है।
                            </b>
                            <br />
                        </div>
                        <br />
                        <br />
                        <div className={`${styles.card} ${styles.bounce_In} ${styles.gift}`}>
                            <h1>गिफ्ट निफ्टी क्या है?</h1>
                            <p>
                                गिफ्ट निफ्टी का मतलब गुजरात इंटरनेशनल फाइनेंस टेक-सिटी निफ्टी है,
                                जिसे गिफ्ट निफ्टी के नाम से जाना जाता है।
                                <br />
                                गिफ्ट निफ्टी भी एसजीएक्स निफ्टी की तरह व्यापार निष्पक्ष अनुमान
                                देता है कि कैसे हमारा भारतीय बाजार सकारात्मक, नकारात्मक या गैप अप
                                या गैप डाउन की तरह खुलेगा।
                            </p>
                        </div>
                        <br />
                        <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                            <button style={{ maxWidth: "400px" }} className={styles.btn}>
                                Open Free Demat Account
                            </button>
                        </a>
                        <div className="flex items-center flex-wrap gap-5 mt-10 justify-center">
                            <br />
                            <br />
                            <p>
                                <h2>
                                    GIFT निफ्टी और SGX निफ्टी की टाइमिंग
                                    <br />
                                    (12 बजे का समय प्रारूप hh:mm)
                                </h2>
                                <center>
                                    <table className={styles.styled_table}>
                                        <thead>
                                            <th>Openings</th>
                                            <th>Closing</th>
                                            <th>Time Zone</th>
                                        </thead>
                                        <tr>
                                            <td>9:14 AM</td>
                                            <td>9:15 AM</td>
                                            <td>Pre-Opening Session</td>
                                        </tr>
                                        <tr>
                                            <td>9:15 AM</td>
                                            <td>3:30 PM</td>
                                            <td>Indian Time</td>
                                        </tr>
                                    </table>
                                </center>
                            </p>
                            <p>
                                गिफ्ट निफ्टी का समय महत्वपूर्ण है, यह भारत में नेशनल स्टॉक
                                एक्सचेंज (एनएसई) के नियमित व्यापारिक घंटों, सुबह 9:15 बजे से
                                दोपहर 3:30 बजे तक भारतीय मानक समय (आईएसटी - भारतीय समय) का
                                अनुसरण करता है। यह समय सूचकांक को घरेलू बाजार के साथ तालमेल
                                बिठाने और निवेशकों को वास्तविक समय मूल्य आंदोलनों और व्यापार के
                                अवसर प्रदान करने की अनुमति देता है।
                            </p>
                            <p>
                                इसके अलावा, सिंगापुर एक्सचेंज (एसजीएक्स) अलग-अलग समय पर संचालित
                                होता है। एसजीएक्स निफ्टी, निफ्टी सूचकांक पर आधारित व्युत्पन्न
                                उत्पाद, सिंगापुर मानक समय (एसएसटी) पर सुबह 6:30 बजे से रात 11:30
                                बजे तक कारोबार करता है।
                            </p>
                            <br />
                            <a
                                target="_blank"
                                href="https://upstox.com/open-account/?f=pzAl"
                            >
                                <button style={{ maxWidth: "400px" }} className={styles.btn}>
                                    Open Free Demat Account
                                </button>
                            </a>
                            <div
                                className={`${styles.card} ${styles.pulse} ${styles.how_trade}`}
                            >
                                <h1>गिफ्ट निफ्टी में ट्रेड कैसे करें ?</h1>
                                <ul style={{ "list-style-type": "disc" }} className={styles.ul}>
                                    <li>
                                        विदेशी मुद्रा नियमों के कारण भारत में रहने वाले खुदरा/ रिटेल
                                        निवेशकों को GIFT निफ्टी में व्यापार करने की अनुमति नहीं है।
                                    </li>
                                    <li>
                                        एनआरआई, विदेशी पोर्टफोलियो निवेशक (एफपीआई), और योग्य विदेशी
                                        निवेशक (ईएफआई) ऐसे ब्रोकर के माध्यम से व्यापार (ट्रेड) करने
                                        के पात्र हैं जो एनएसई IX का सदस्य है।
                                    </li>
                                    <br />
                                    <h3>विभिन्न प्रकार के गिफ्ट निफ्टी कॉन्ट्रैक्ट -</h3>
                                    गिफ्ट निफ्टी कॉन्ट्रैक्ट के विभिन्न प्रकार इस प्रकार हैं :
                                    <li>
                                        <b>GIFT Nifty 50 - </b> यह सबसे लोकप्रिय कॉन्ट्रैक्ट है जो
                                        निफ्टी 50 इंडेक्स को ट्रैक करता है।
                                    </li>
                                    <li>
                                        <b>गिफ्ट निफ्टी बैंक</b> यह निफ्टी बैंक इंडेक्स को ट्रैक
                                        करता है, जिसमें भारत के 12 सबसे बड़े बैंक शामिल हैं।
                                    </li>
                                    <li>
                                        <b>गिफ्ट निफ्टी फाइनेंशियल सर्विसेज -</b> यह निफ्टी
                                        फाइनेंशियल सर्विसेज इंडेक्स को ट्रैक करता है। इस सूचकांक में
                                        25 सबसे बड़ी भारतीय वित्तीय सेवा कंपनियां शामिल हैं। गिफ्ट
                                        निफ्टी आईटी - यह निफ्टी आईटी इंडेक्स को ट्रैक करता है, इसमें
                                        भारत की 25 सबसे बड़ी सूचना प्रौद्योगिकी सेवा कंपनियां शामिल
                                        हैं।
                                    </li>
                                    <li>
                                        <b>गिफ्ट निफ्टी आईटी -</b> यह निफ्टी आईटी इंडेक्स को ट्रैक
                                        करता है, इसमें भारत की 25 सबसे बड़ी सूचना प्रौद्योगिकी सेवा
                                        कंपनियां शामिल हैं
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <a
                                target="_blank"
                                href="https://upstox.com/open-account/?f=pzAl"
                            >
                                <button style={{ maxWidth: "400px" }} className={styles.btn}>
                                    Open Free Demat Account
                                </button>
                            </a>
                            <br />
                            <br />
                            <div className={`${styles.card} ${styles.flipIn}`}>
                                <h1>
                                    गिफ्ट निफ्टी को ट्रैक करने के लिए वॉचलिस्ट में कैसे जोड़ें -
                                </h1>
                                कई ट्रेडिंग प्लेटफॉर्म अपने प्लेटफॉर्म में गिफ्ट निफ्टी
                                स्क्रिप्ट दिखाने के लिए अलग-अलग कीवर्ड का उपयोग कर रहे हैं।
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "20px",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src="/sgx_files/gift.webp"
                                        alt="gift"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            marginRight: "12px",
                                        }}
                                    />
                                    <h3>GIFT Nifty 50 </h3>
                                    <img
                                        src="/sgx_files/gift.webp"
                                        alt="gift"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            marginLeft: "12px",
                                        }}
                                    />
                                </div>
                                <ul style={{ "list-style-type": "none" }} className={styles.ul}>
                                    <li>
                                        <b>ज़ेरोधा :</b> वॉचलिस्ट में गिफ्ट निफ्टी को जोड़ने के लिए
                                        आपको कीवर्ड "गिफ्ट निफ्टी" टाइप करना होगा, यहां आपको एक
                                        स्क्रिप्ट दिखाई देगी जहां यह इंडेक्स दिखाएगा, वॉचलिस्ट में
                                        जोड़ने के लिए + बटन पर क्लिक करें।
                                    </li>
                                    <li>
                                        <b>ट्रेडिंग व्यू : </b>यहां आपको "गिफ्ट निफ्टी" या
                                        "निफ्टी1!" टाइप करना होगा। और आपको हमारे भारतीय ध्वज के साथ
                                        एक स्क्रिप्ट GIFT NIFTY 50 INDEX FUTURE दिखाई देगी।
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <a
                                target="_blank"
                                href="https://upstox.com/open-account/?f=pzAl"
                            >
                                <button style={{ maxWidth: "400px" }} className={styles.btn}>
                                    Open Free Demat Account
                                </button>
                            </a>
                            <br />
                            <div className={`${styles.card} ${styles.flipIn}`}  >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "20px",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src="/sgx_files/caution.webp"
                                        alt="caution"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            marginRight: "12px",
                                        }}
                                    />
                                    <h3>डेरिवेटिव पर सेबी जोखिम प्रकटीकरण</h3>
                                    <img
                                        src="/sgx_files/caution.webp"
                                        alt="caution"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            marginLeft: "12px",
                                        }}
                                    />
                                </div>
                                <p>
                                    19 मई 2023 को, सेबी ने डेरिवेटिव पर जोखिम प्रकटीकरण की शुरुआत
                                    की है और सभी भारतीय ब्रोकरों को इन मुख्य बिंदुओं को अपने
                                    ट्रेडिंग प्लेटफॉर्म जैसे ऐप और वेबसाइटों पर प्रदर्शित करने का
                                    निर्देश दिया है।
                                </p>
                                <b>अस्थिरता जोखिम : </b> निफ्टी सूचकांक की कीमत अस्थिर हो सकती
                                है, जिसका अर्थ है कि GIFT निफ्टी डेरिवेटिव अनुबंध की कीमत भी
                                अस्थिर हो सकती है। इससे कम समय में बड़ा लाभ या हानि हो सकती है।
                                <br /> <br />
                                <h4 style={{ textDecoration: "underline" }}>
                                    ये बिंदु क्या कहते हैं
                                </h4>
                                <ul style={{ "list-style-type": "disc" }} className={styles.ul}>
                                    <li>
                                        इक्विटी फ्यूचर्स और ऑप्शंस सेगमेंट में 10 में से 9 रिटेल
                                        ट्रेडर को शुद्ध को घाटा होता है
                                    </li>
                                    <li>
                                        घाटे में रहने वाले निर्माताओं ने औसतन ₹ 50,000 के करीब शुद्ध
                                        ट्रेडिंग घाटा दर्ज किया।
                                    </li>
                                    <li>
                                        शुद्ध ट्रेडिंग घाटे के अलावा, नुकसान उठाने वाले निर्माताओं
                                        (लोगों को) ने लेनदेन लागत के रूप में शुद्ध ट्रेडिंग घाटे का
                                        28% अतिरिक्त खर्च किया।
                                    </li>
                                    <li>
                                        शुद्ध व्यापार लाभ कमाने वालों को लेनदेन लागत के रूप में इस
                                        तरह के मुनाफे का 15% से 50% के बीच खर्च करना पड़ता है।
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <br />
                            <div className="flex flex-col w-full max-w-4xl">

                                <h3> Notes -</h3>
                                <ul className={styles.ul}>
                                    <li>
                                        <b>FII</b> : Foreign Institutional Investor
                                    </li>
                                    <li>
                                        <b>DII</b> : Domestic Institutional Investors. Like Mutual
                                        fund Houses, LIC etc.
                                    </li>
                                    <li>
                                        <b>Derivatives</b> : वायदा बाजार, Future and Option
                                    </li>
                                    <li>
                                        <b>Volatility</b> : अस्थिरता
                                    </li>
                                </ul>
                                <br />
                                <div className="" >
                                    Link to Study conducted by SEBI:
                                    <a
                                        href="https://www.sebi.gov.in/reports-and-statistics/research/jan-2023/study-analysis-of-profit-and-loss-of-individual-traders-dealing-in-equity-fando-segment_67525.html"
                                        target="blank"
                                        className="text-blue-500 underline"
                                    >
                                        click here
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />
                    <br />
                    <br />
                    <a target="_blank" href="https://upstox.com/open-account/?f=pzAl">
                        <button className={styles.btn}>Open Free Demat Account</button>
                    </a>
                    <div style={{ height: "200px" }} />
                </div>
            </div>

            <Footer />
        </>
    );
};