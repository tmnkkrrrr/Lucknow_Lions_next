import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Upstox.module.css";

export function generateMetadata() {
  return {
    title: 'Lucknow Lions - Upstox Account Opening at No Cost',
    description: 'Discover the power of Upstox at 0 cost through Lucknow Lions. Experience fast, cost-effective trading with innovative tools for stocks, derivatives, and mutual funds. Start trading today with a trusted partner in online brokerage!',
    keywords: 'Upstox, Upstox charges, Upstox review, Upstox brokerage, Upstox open demat account, Upstox account opening, Upstox registration number',
    robots: 'index',
    openGraph: {
      title: 'Lucknow Lions - Upstox Account Opening at No Cost',
      description: "Discover the power of Upstox at 0 cost through Lucknow Lions. Experience fast, cost-effective trading with innovative tools for stocks, derivatives, and mutual funds. Start trading today with a trusted partner in online brokerage!",
      images: ['https://www.lucknowlions.com/upstox_files/otp1.webp'],
      url: 'https://www.lucknowlions.com/upstox'
    },
    alternates: { canonical: 'https://www.lucknowlions.com/upstox' },
  }
}

export default function Upstox() {
  const link = "https://upstox.com/open-account/?f=pzAl";

  return (
    <div >
      <Navbar />

      <div style={{ height: "65px" }} />

      {/* <div className="flex w-full justify-center"> */}

      <div className={styles.page}>
        <img
          className={styles.logo}
          src="https://upstox.com/app/themes/upstox/dist/img/logo/desktop-logo.svg"
          alt="Upstox"
        />

        <div className="flex flex-wrap items-center justify-between w-full">
          <div style={{ flex: 1 }}>
            <div className={styles.main_hed1}>
              Trade Smart, Invest Better with
            </div>
            <div className={styles.main_hed2}>Upstox</div>
            <div className={styles.main_subhed}>
              Experience seamless online trading and investment with India's
              leading discount broker.
            </div>
            <a
              href={link}
              target="blank"
              style={{ margin: "20px 0", alignSelf: "center" }}
              className={styles.trn}
            ></a>
          </div>
          <div className="flex-1 min-w-[250px] flex justify-center">
            <img className={styles.up_down} alt="Lucknow Lions flying Rocket" src="/upstox_files/rocket.webp" />
          </div>
        </div>

        <a
          href={link}
          target="blank"
          style={{ margin: "20px 0" }}
          className={styles.trn}
        >
          <img alt="Open Demat Account" src="/upstox_files/btn.svg" />
        </a>

        <img className={styles.hl} alt="highlights" src="/zerodha_files/highlights.svg" />

        <div className={styles.bg_rocket}>
          <div className={styles.el_card}>
            <h2 className={styles.un}>
              <img className={styles.icon} alt="info" src="/upstox_files/info.png" />
              About Upstox
            </h2>
            <p>
              Upstox was incorporated in 2009, Upstox is the online discount
              broker which was founded in year 2009 by Ravi Kumar, Raghu Kumar,
              and Shrini Viswanath. Upstox’s parent company is RKSV securities
              limited which was founded in 2008 by the same three men. Upstox
              offers financial services like investment, online stock trading,
              derivatives trading, currency trading and commodity trading,
              mutual funds investment, Government securities Investments,
              advisory services, trading APIs and education content also. The
              company is headquartered in Mumbai, Maharashtra, India
            </p>
            <div className={styles.highlight_sm}>
              Upstox is the member of the CDSL (Central Depository Services
              Limited)
            </div>
          </div>
          <div
            style={{ alignSelf: "center", textDecoration: "underline" }}
            className={`${styles.h1} ${styles.mt_l}`}
          >
            Upstox is Backed by
          </div>
          <div className="flex flex-wrap self-center justify-around w-100 mt-8">
            <div className={styles.cardContainer}>
              <div
                className={styles.avatar}
                style={{
                  backgroundImage: 'url("/upstox_files/ratan.png")',
                }}
              />
              Ratan Tata
            </div>

            <div className={styles.cardContainer}>
              <div
                className={styles.avatar}
                style={{
                  backgroundImage:
                    'url("/upstox_files/kalaari_capital_logo.jpg")',
                }}
              />
              Kalari Capital
            </div>

            <div className={styles.cardContainer}>
              <div
                className={styles.avatar}
                style={{
                  backgroundImage:
                    'url("/upstox_files/tg.png")',
                }}
              />
              Tiger Gold
            </div>
          </div>
          <div className={styles.animatedLine} />
          <h1 className={`${styles.h1} ${styles.mt_l}`}>
            Upstox offers a variety of services, including:
          </h1>
          <div className={styles.hr}>
            <div className={styles.h3}>Trading :</div>
            <img
              className={styles.icon}
              alt="trading"
              src="https://static.vecteezy.com/system/resources/previews/036/525/435/original/trading-report-icon-dual-tone-icon-for-your-website-mobile-presentation-and-logo-design-vector.jpg"
            />
          </div>
          Upstox trading platform offers trading, analysis, charting and many
          more rich trading features and also provides access to stock exchanges
          like NSE, BSE, and MCX, and allows investors to trade in stocks,
          equity derivatives, currency, and commodities. Upstox also offers free
          equity delivery (cash and carry) trading, and charges a flat Rs 20 per
          trade brokerage for other segments.
          <div className={styles.hr}>
            <div className={styles.h3}>Demat accounts :</div>
            <img
              className={styles.icon}
              alt="Demat Account"
              src="https://opendemataccount.sbisecurities.in/SBIDIYV1/assets/images/SBINEW/trusticon.webp"
            />
          </div>
          Upstox accounts combine a trading account with a demat account, which
          allows investors to hold securities like stocks, mutual funds and
          government securities, Sovereign Gold Bond Scheme (SGB)
          electronically.
          <p>
            Upstox provides free demat and trading account with sole owner,
            joint owner and minor account (Whose age is below then 18 year).
          </p>
          <div className={styles.hr}>
            <div className={styles.h3}>Mutual Funds :</div>
            <img
              className={styles.icon}
              alt="Mutual funds " src="https://cdn3d.iconscout.com/3d/premium/thumb/mutual-funds-5768776-4833573.png"
            />
          </div>
          Upstox offers online mutual funds (regular and direct) in a lump sum
          or SIP (Systematic Investment Plan) way and also offer SWP.
          <div className={styles.hr}>
            <div className={styles.h3}>Responsive Customer Support :</div>
            <img
              className={styles.icon}
              alt="Responsive Customer Support"
              src="https://thumbs.dreamstime.com/b/icon-support-customer-service-call-center-vector-icons-help-phone-contact-business-line-symbol-communication-telephone-technology-140921371.jpg"
            />
          </div>
          Upstox offers customer support through multiple channels, like Chat
          support, email support, customer care number and by ticket creation.
          <a
            href={link}
            target="blank"
            style={{ margin: "20px 0", alignSelf: "center" }}
            className={styles.trn}
          >
            <img alt="Open Demat Account" src="/upstox_files/btn.svg" />
          </a>
          <div className={styles.hr}>
            <div className={`${styles.h1}`}>About Founders</div>
          </div>
          <div className={styles.hor}>
            <div className={styles.el_card}>
              <strong className={styles.h3}>Ravi Kumar </strong>
              co founder and chief executive officer (CEO) of Upstox, Ravi Kumar
              pursued a degree in computer science from the prestigious Indian
              Institute of Technology Bombay (IIT Bombay). After completing his
              degree, Ravi Kumar ventured to the United States, where he secured
              a position at Thinkorswim, a trading platform that was a flagship
              of TD Ameritrade. In 2009, Ravi Kumar joined forces with Shrini
              Viswanath and Kavitha Subramanian to co-found Upstox, initially
              known as RKSV Securities.
            </div>

            <div className={styles.el_card}>
              <strong className={styles.h3}>Raghu Kumar</strong>
              Raghu, who is four years younger than Ravi, studied actuarial
              science where he trained himself on numbers and probability. He
              was also influenced by his brother’s passion for trading.Ravi’s
              decision to join a broking firm (Thinkorswim) in 2004 was the
              turning point for the brothers. There he took interest in the
              forex markets that were open 24x7 throughout the year. When Raghu
              graduated in 2006, he began to write algorithms which Ravi coded,
              this helped them trade successfully. They decided to set up their
              own partnership in trading.
              <br />
              <br />
              However, in the 2008 crisis, no algorithm could help them crack
              the US markets then they decided to break from the US market and
              entered to Indian Market.
            </div>
          </div>
          <div className={styles.el_card}>
            <strong>Shrini Viswanath - </strong>
            Shrini Viswanath Co-Founder at Upstox, which is a Financial Software
            company. Their management level is C-Level. Shrini is currently
            based in Mumbai, India.
          </div>
        </div>
        <div className={styles.el_card}>
          <div className={styles.h1}>
            <img width="40px" alt="Upstox Documents" src="/upstox_files/folder.png"></img>
            Documents required for a demat account with Upstox
          </div>
          These below documents are required to open account with Upstox, if you
          are preceding online then only scan copy required, if you are
          preceding offline then hard photocopy required for the below
          documents.
          <ul className={styles.docList}>
            <li>A Scan Copy of PAN CARD required</li>
            <li>A Signature required as per PAN Card on white paper.</li>
            <li>
              <b> Proof of identification (POI)</b> - PAN CARD, or Voter ID, or
              Passport, any ID card issued by the central or state government
              with applicant's photo.
            </li>
            <li>
              <b> Proof of Address (POA) - </b>ADHAR Card, or Ration card, or
              Passport, or Voter ID, verified copies of electricity bills.
            </li>
            <li>
              <b> Proof of Address (POA) - </b>ADHAR Card, or Ration card, or
              Passport, or Voter ID, verified copies of electricity bills.
            </li>
            <li>
              <b> Income Proof -</b> 6-month Bank statement, or ITR with income
              Computation, or Salary Slip, or Net worth certificate or Copy of
              Form 16 or demat holding you may attach for derivatives segments.
            </li>
          </ul>
          <b>Note -</b>
          <ul>
            <li>
              A-These documents are necessary for the KYC (Know Your Customer)
              process and to verify your identity and address.
            </li>

            <li>
              B- It is important to link your Aadhar number with demat account
              because it is mandatory by government of India.
            </li>

            <li>
              C- PAN and Adhar Linking should be done it is also mandatory by
              government of India.
            </li>
          </ul>
        </div>
        <a
          href={link}
          target="blank"
          style={{ margin: "70px 0", alignSelf: "center" }}
          className={styles.trn}
        >
          <img alt="Open Demat Account" src="/upstox_files/btn.svg" />
        </a>
        <div className={styles.h1}>Brokrage and All Charges</div>
        <table className={styles.tbl}>
          <thead>
            <tr>
              <th>Segment</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trading & Demat Account Opening</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Annual Maintenance Charges (AMC)</td>
              <td>Lifetime Free in Limited period offer</td>
            </tr>
            <tr>
              <td>DP Charges</td>
              <td>18.50 + 18% GST per script</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.hr}>
          <img className={styles.icon} alt="Upstox Brokrage" src="/upstox_files/brokrae.png" />
          <div className={styles.h3}>Brokrage</div>
        </div>
        <table className={styles.tbl}>
          <thead>
            <tr>
              <th>Segment</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intraday</td>
              <td>0.05% or Rs 20 per order which is lower.</td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td>20 Brokerage on Delivery</td>
            </tr>
            <tr>
              <td>Intraday</td>
              <td>0.05% or Rs 20 per order which is lower.</td>
            </tr>
            <tr>
              <td>Future</td>
              <td>0.05% or Rs 20 per order which is lower.</td>
            </tr>
            <tr>
              <td>Option</td>
              <td>Flat Rs 20 per order </td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>0.05% or Rs 20 per order which is lower.</td>
            </tr>
            <tr>
              <td>MCX(Future)</td>
              <td>0.05% or Rs 20 per order which is lower.</td>
            </tr>
            <tr>
              <td>Mutual Fund</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Call and Trade</td>
              <td>₹50 per executed order </td>
            </tr>
            <tr>
              <td>Admin Square Offe</td>
              <td>₹50 per executed order </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.hr}>
          <img
            className={styles.icon}
            alt="Upstox Statutory Charges"
            src="https://e7.pngegg.com/pngimages/115/795/png-clipart-web-hosting-service-affiliate-marketing-money-save-cash-purple-violet-thumbnail.png "
          />
          <div className={styles.h3}>Statutory Charges</div>
        </div>
        <table className={styles.tbl}>
          <thead>
            <tr>
              <th>S.C. </th>
              <th>Equity Delivery</th>
              <th>Equity Intraday</th>
              <th>Equity Futures</th>
              <th>Equity Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>STT/CTT (Upto 31st March 2023)</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell side</td>
              <td>0.01% on sell-side</td>
              <td>0.05% on sell-side (on premium)</td>
            </tr>
            <tr>
              <td>STT/CTT (From 1st April 2023)</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell-side</td>
              <td>0.0125% on sell-side</td>
              <td>0.0625% on sell-side (on premium)</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>18% (on brokerage + transaction + demat charges)</td>
              <td>18% (on brokerage + transaction charges)</td>
              <td>18% (on brokerage + transaction charges)</td>
              <td>18% (on brokerage + transaction charges)</td>
            </tr>
            <tr>
              <td>Stamp Duty</td>
              <td>0.015% or ₹1500 / crore on buy-side</td>
              <td>0.003% or ₹300 / crore on buy-side</td>
              <td>0.002% or ₹200 / crore on buy-side</td>
              <td>0.003% or ₹300 / crore on buy-side</td>
            </tr>
          </tbody>
        </table>
        <a
          href={link}
          target="blank"
          style={{ margin: "70px 0", alignSelf: "center" }}
          className={styles.trn}
        >
          <img alt="Upstox Open Demat Account" src="/upstox_files/btn.svg" />
        </a>

        <div className={styles.hr}>
          <img
            className={styles.icon}
            alt="Opstoc exchange Fees"
            src="https://cdn-icons-png.freepik.com/512/10195/10195362.png"
          />
          <div className={styles.h3}>Exchange Fees</div>
        </div>
        <table className={styles.tbl}>
          <thead>
            <tr>
              <th>E.F.</th>
              <th>Equity Delivery</th>
              <th>Equity Intraday</th>
              <th>Equity Futures</th>
              <th>Equity Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Transaction charges (From 1st April 2023 to 31st March 2024)
              </td>
              <td>
                NSE 0.00325% per trade on buy & sell.
                <br />
                BSE charges vary as per the scrip group
              </td>
              <td>
                NSE : 0.00325% per trade on buy & sell.
                <br />
                BSE :charges vary as per the scrip group
              </td>
              <td>
                NSE Exchange turnover charge: 0.0019%
                <br />
                BSE Nil
              </td>
              <td>
                NSE :Exchange turnover charge: 0.050% (on premium)
                <br />
                BSE : 0.0375% (on premium)
              </td>
            </tr>
            <tr>
              <td>Transaction charges (From 1st April 2024)</td>
              <td>
                NSE : 0.00322% per trade on buy & sell.
                <br />
                BSE : charges vary as per the scrip
              </td>
              <td>
                NSE : 0.00322% per trade on buy & sell.
                <br />
                BSE : Charges vary as per the scrip group
              </td>
              <td>
                NSE : Exchange turnover charge: 0.00188%
                <br />
                BSE : Nil
              </td>
              <td>
                NSE : 0.0495% (on premium)
                <br />
                BSE : 0.0495% (on premium)
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.hr}>
          <img className={styles.icon} alt="Upstox Sebi Charges" src="/upstox_files/sebi_charges.png" />

          <div className={styles.h3}>SEBI Charges</div>
        </div>
        <table className={styles.tbl}>
          <thead>
            <tr>
              <th>SEBI Charges</th>
              <th>Equity Delivery</th>
              <th>Equity Intraday</th>
              <th>Equity Futures</th>
              <th>Equity Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SEBI Charges</td>
              <td>₹10/crore</td>
              <td>₹10/crore</td>
              <td>₹10/crore</td>
              <td>₹10/crore</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.hr}>
          <img
            className={styles.icon}
            alt="Upstoc Margin"
            src="https://cdn-icons-png.flaticon.com/512/3605/3605270.png"
          />
          <div className={styles.h3}>Margin</div>
        </div>
        <table className={styles.tbl}>
          <thead>
            <tr>
              <th>Order type</th>
              <th>Applicable margin on Equity</th>
              <th>
                Applicable margin on (Index Futures, Stock Future, Index and
                Stock Option sell, NSE Currency Future, MCX Future)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intraday order</td>
              <td>5x</td>
              <td>1x</td>
            </tr>
            <tr>
              <td>CO/OCO order</td>
              <td>5x</td>
              <td>1x</td>
            </tr>
            <tr>
              <td>Margin Trading Facility (MTF)</td>
              <td>5x</td>
              <td>1x</td>
            </tr>
            <tr>
              <td colSpan={3}>Note: No Margin for Options buying</td>
            </tr>
          </tbody>
        </table>
        <a
          href={link}
          target="blank"
          style={{ margin: "70px 0", alignSelf: "center" }}
          className={styles.trn}
        >
          <img src="/upstox_files/btn.svg" alt="Upstox Charges Explain" />
        </a>
        <div className={styles.hr}>
          <div className={styles.h3}>Charges Explanation</div>
          <img className={styles.icon} alt="Coin" src="/upstox_files/coin.png" />
        </div>
        <p>
          There are two types of charges are applied on trading or investing
          segments through Upstox
        </p>
        <ul className={styles.docList}>
          <li>
            <b>Brokerage charges -</b> Which goes to broker only who provide you
            trading facility, like Brokerage charges only.
          </li>
          <li>
            <b> Government charges -</b> These are multiple kind of charges who
            are applicable on each transaction who goes to government body.
            <br />
            <br />
            <ul className={styles.docList}>
              <li>
                <b>STT/CTT -</b> Securities/Commodities transaction tax
                <ul>
                  <li>
                    Levied by the Government on Securities and Commodities
                  </li>
                  <li>
                    Charged on both buy and sell Stocks - Equity Delivery orders
                  </li>
                  <li>Charged only on sell Intraday and F&O orders</li>
                  <li>May be more than the brokerage we charge</li>
                </ul>
              </li>
              <li>
                <b>GST</b> - Goods and Services Tax
                <ul>
                  <li>Levied by the government on the services rendered.</li>
                  <li>18% of (brokerage + transaction charges + Demat)</li>
                </ul>
              </li>
              <li>
                <b>Stamp duty charges</b>
                <ul>
                  <li>
                    Stamp duty charges are a part of the state revenue system
                  </li>
                  <li>
                    Applicable on the trading of Securities and Commodities
                  </li>
                  <li>
                    in 2020, uniform stamp duty charges are applicable across
                    all the states in India.
                  </li>
                  <li>
                    Read more
                    <a href="https://upstox.com/announcements/demat-account/revision-in-stamp-duty-rates-on-1st-july-2020/">
                      https://upstox.com/announcements/demat-account/revision-in-stamp-duty-rates-on-1st-july-2020
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <b> REGULATORY Charges -</b> These are multiple kind of charges who
            are applicable on each transaction who goes to government body and
            regulatory authorities.
            <br />
            <br />
            <ul className={styles.docList}>
              <li>
                <b>Transaction Charges</b>
                <ul>
                  <li>
                    Charged by exchanges (NSE, BSE, MCX) on the value of your
                    transactions.
                  </li>
                  <li>
                    BSE has revised transaction charges in XC, XD, XT, Z and ZP
                    groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
                    groups have been merged into a new group X w.e.f 01.12.2017)
                  </li>
                  <li>
                    BSE has revised transaction charges in SS and ST groups to
                    ₹1,00,000 per crore of gross turnover.
                  </li>
                </ul>
              </li>

              <li>
                <b> SEBI Charges</b>
                <ul>
                  <li>
                    Charged at ₹10 per crore by Securities and Exchange Board of
                    India for regulating the markets.
                  </li>
                </ul>
              </li>
              <li>
                <b> DP</b> (Depository participant) charges
                <ul>
                  <li>
                    ₹18.5 + GST per scrip (irrespective of quantity), on the
                    day, is debited from the trading account when stocks are
                    sold. This is charged by the depository (CDSL) and
                    depository participant (Upstox).
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <a
          href={link}
          target="blank"
          style={{ margin: "70px 0", alignSelf: "center" }}
          className={styles.trn}
        >
          <img alt="Open Demat Account" src="/upstox_files/btn.svg" />
        </a>
        <div style={{ alignSelf: "center" }} className={styles.h1}>
          Charges for other services
        </div>
        <table className={styles.tbl}>
          <tbody>
            <tr>
              <td>
                Margin Against Demat Holdings (can be used for Futures buy and
                sell and Options Sell orders only
              </td>
              <td>
                ₹50 + GST per scrip for pledging <br />
                ₹50 + GST per scrip for un-pledging
              </td>
            </tr>
            <tr>
              <td>Auto Square-off</td>
              <td>₹50 + 18% GST</td>
            </tr>
            <tr>
              <td>Call & Trade</td>
              <td>₹50 + 18% GST</td>
            </tr>
            <tr>
              <td>Account Maintenance Charges (AMC)*</td>
              <td>
                ₹0* (Users onboarded before August 2021 might be charged a
                quarterly AMC of ₹75 + 18% GST or an annual AMC of ₹150 + 18%
                GST
              </td>
            </tr>
            <tr>
              <td>Off-market (to transfer shares between brokers)</td>
              <td>
                1. Buy orders will continue to be charged at ₹100 or 1.5% of the
                transaction amount (whichever is lower)
                <br />
                2. 'Invest More' orders will be charged at ₹100 or 1.5% of the
                transaction amount (whichever is lower).
                <br />
                3. SIP orders will be charged at ₹10 or 1.5% of the transaction
                amount (whichever is lower)
              </td>
            </tr>
            <tr>
              <td>Netbanking charges (Razorpay / Atom)</td>
              <td>₹7 (GST included)</td>
            </tr>
            <tr>
              <td>Buyback/Takeover/Delisting Charges</td>
              <td>₹20 + GST</td>
            </tr>

            <tr>
              <td>Offer For Sale</td>
              <td>₹20 + GST</td>
            </tr>

            <tr>
              <td>Account Opening Fees</td>
              <td>0</td>
            </tr>
            <tr>
              <td>API Subscription Charges</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Interest on Delayed Payment</td>
              <td>0.05% per day on account debit (negative balance)</td>
            </tr>
            <tr>
              <td>Pledge per ISIN</td>
              <td>Rs 20 + GST is charged for every pledge</td>
            </tr>
            <tr>
              <td>Unpledge per ISIN</td>
              <td>Rs 20 + GST is charged for every unpledge</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.h3}>Upstox Pros & Cons</div>
        <table className={styles.tbl}>
          <thead>
            <tr>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Lowest brokerage Max Rs 20 per order trade in each segment even
                delivery also
              </td>
              <td>No 0 brokerage in delivery trade</td>
            </tr>
            <tr>
              <td>Direct investment in mutual fund with no cost</td>
              <td>No offline branches, its totally online discount broker</td>
            </tr>
            <tr>
              <td>Cover Orders available</td>
              <td>Bracket order is not available</td>
            </tr>
            <tr>
              <td>Margin against share is available (MTF) is available.</td>
              <td></td>
            </tr>
            <tr>
              <td>Available Good till Triggered (GTT)</td>
              <td>No personal relationship manager</td>
            </tr>
            <tr>
              <td>
                Excellent online trading platform like Website and Mobile App
                etc.
              </td>
              <td>No research and advisory services</td>
            </tr>
            <tr>
              <td>Trusted Broker</td>
              <td>No monthly unlimited trading plans.</td>
            </tr>
            <tr>
              <td>No software uses charges.</td>
              <td>NRI trading account is not available</td>
            </tr>
          </tbody>
        </table>
        <a
          href={link}
          target="blank"
          style={{ margin: "70px 0", alignSelf: "center" }}
          className={styles.trn}
        >
          <img alt="Upstox Open Demat Account" src="/upstox_files/btn.svg" />
        </a>
        <div className={styles.h3}>
          Upstox Securities Private Limited Registration Details
        </div>
        <table className={styles.tbl}>
          <thead>
            <tr>
              <th>Segments</th>
              <th>Registration Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>SEBI Registration No</strong>
              </td>
              <td>INZ000315837</td>
            </tr>
            <tr>
              <td>
                <strong>NSE TM Code</strong>
              </td>
              <td>13942</td>
            </tr>
            <tr>
              <td>
                <strong>BSE TM Code</strong>
              </td>
              <td>6155</td>
            </tr>
            <tr>
              <td>
                <strong>CDSL Registration No</strong>
              </td>
              <td>IN-DP-761-2024</td>
            </tr>
            <tr>
              <td>
                <strong>CIN</strong>
              </td>
              <td>U65100DL2021PTC376860</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.el_card}>
          <div className={styles.h2}>F&Qs</div>
          <div className={styles.h5}>
            After I sold a stock from holding, I didn’t received 100% money.
          </div>
          From 1st December 2020, SEBI peak margin rules have changed, by this
          if you sell a stock from the holding 80% amount will be credited in
          same day for trading and rest 20% will be credit next trading day.
          Total 100% withdrawable amount is available on T+2 onwards. To know
          more about this check SEBI’s peak margin rules.
          <div className={styles.h5}>What is MTF in Upstox?</div>
          MTF is in Upstox Margin Trading Facility is a method to purchase
          stocks with only 50% of the required funds. You can borrow the
          remaining funds from Upstox for a nominal charge of Rs. 20 per day, in
          addition to brokerage charges of up to ₹20 per order.
          <div className={styles.h5}>Is MTF chargeable?</div>
          Yes, the following charges are applicable on MTF orders over and above
          regular brokerage
          <br />
          <span>
            <b>Interest : </b> ₹20/day for every slab of ₹40,000 taken as MTF
          </span>
          <span>
            <strong>Pledging charges : </strong> The cost of pledging, as well
            as un-pledging, is ₹20 + GST per scrip.
          </span>
          <div className={styles.h5}>
            Can I withdraw my amount instantly in my Bank Account?
          </div>
          Yes, Upstox provides an instant withdrawal facility for some supported
          banks in trading days, instant withdrawal timing is 10:00 am to 4:00
          pm.
          <div className={styles.h5}>What is CTT?</div>
          Commodity Transaction Tax or CTT is just like Securities Transaction
          Tax (STT) and is applied on all transactions that are recognized as
          investments being made into domestic commodity exchanges. This type of
          tax was implemented in 2016. All transactions that are carried out in
          foreign commodity exchanges in foreign currencies are exempted from
          CTT. It is also not applied to agricultural commodities.
        </div>
        <a
          href={link}
          target="blank"
          style={{ margin: "70px 0", alignSelf: "center" }}
        >
          <img alt="Open Demat Account" src="/upstox_files/btn.svg" />
        </a>
        <div className={styles.attention}>
          <div className="flex justify-center items-center gap-2">
            <img alt="Warning" src="/upstox_files/warning.png" />
            <span>
              Attention: Don’t share login credentials or OTP to anyone even the
              Upstox team also. </span>
            <img alt="warning"
              src="/upstox_files/warning.png"
            />
          </div>
          <br />
          <img
            style={{ alignSelf: "center", display: "flex" }}
            alt="Lucknow Lions Upstox trading platform"
            src="/upstox_files/otp1.webp"
          />
        </div>
        <div className={styles.el_card}>
          <div className={styles.note}>Notes</div>
          <div className={styles.mr}>
            <b>SIP (Systematic Investment Plan) -</b> SIP stands for Systematic
            Investment Plan, this is a disciplined approach to investing in
            mutual funds or in equity stocks. It involves regularly investing a
            fixed amount of money at set of frequency, such as weekly, monthly,
            or quarterly, rather than a lump sum depending by the service
            provider. This is similar like bank RD (recurring deposits) and can
            be starts from a minimum Rs 100 - 500 per month.
          </div>
          <div className={styles.mr}>
            <b>SWP (Systematic Withdrawal Plan) -</b> SWP stands for Systematic
            Withdrawal Plan, which is a mutual fund investment plan that allows
            investors to withdraw fixed amounts of money at regular frequencies
            from their investment. These frequencies can be weekly, monthly,
            quarterly, or yearly
          </div>
          <div className={styles.h6}>
            Investments in the securities market are subject to market risks;
            read all the related documents carefully before investing.
          </div>
          <div className={styles.mr}>
            <b>Central Depository: </b>
            In India, there are two depositories that hold your stock accounts
            for you. These are the CDSL (Central Depository Services Limited)
            and NSDL (National Securities Depository Limited).
          </div>
          <div className={styles.h6}>
            SEBI Risk disclosures on derivatives -
          </div>
          <ul>
            <li>
              9 out of 10 individual traders in equity Futures and Options
              Segment, incurred net losses.
            </li>
            <li>
              On an average, loss makers registered net trading loss close to ₹
              50,000
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
          <span>
            <b>
              Minor & Major Account - (There is no minimum age to invest in the
              stock market. Both a minor and an adult can invest in stocks.)
            </b>
            Whose age is below then 18 years; parents can open minor account for
            their children’s by submitting their respective documents (parents
            or the appointed guardian). The parents or the guardian/s will be in
            charge of the account until the minor attains adulthood. As reach 18
            years the depository participant will send notification to migrate
            minor to major account.
          </span>
          <br />
          In a minor account, you can’t perform trading tasks like Intraday,
          Future and Option or other derivatives, Minor account can be used only
          for investment purposes.
          <br />
          <br />
          The Child’s minor PAN, minor Adhar, and municipal birth certificate
          are required with parents or the appointed guardian’s documents.
          <br /> <br />
          Major Account is that, where you have full access for your demat and
          trading account which can be opened post 18-year-old.
        </div>
        <a
          href={link}
          target="blank"
          style={{ margin: "70px 0", alignSelf: "center" }}
          className={styles.trn}
        >
          <img alt="Open Demat Account" src="/upstox_files/btn.svg" />
        </a>
      </div>
      {/* </div> */}

      <Footer />
    </div>
  );
};