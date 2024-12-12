"use client";
import { useState } from "react";
import styles from "./ContactUs.module.css";
import { sendContactUsEnquiry } from "@/helper/helper";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


export default function ContactUs() {
    const [firstName, FirstName] = useState("");
    const [middleName, MiddleName] = useState("");
    const [lastName, LastName] = useState("");
    const [email, Email] = useState("");
    const [mob, Mob] = useState("");
    const [sub, Sub] = useState("");
    const [message, Message] = useState("");

    const [isSent, IsSent] = useState(false);

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please Enter a valid Email Address");
            return;
        }
        IsSent(true);
        sendContactUsEnquiry({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            phoneNumber: mob,
            subject: sub,
            message: message,
        })
            .then((res) => alert(`Your Ticket has been generated.\n ${res.ticket}`))
            .finally(() => IsSent(false));
        FirstName("");
        LastName("");
        MiddleName("");
        Email("");
        Mob("");
        Sub("");
        Message("");
        setTimeout(() => IsSent(false), 2000);
    };

    return (
        <div className={styles.page}>
            <div style={{ height: "47px" }} />

            <Navbar />

            <div className={styles.bannerCointainer}>
                <div className={styles.overText}>
                    <span className={styles.textStyle}>C</span>
                    ontact Us
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.child_left}>
                        <div className={styles.sp}>
                            <div>
                                <h1 className={styles.main_hed}>Contact Information</h1>
                                <div className={styles.para}>
                                    Say something to Start a live chat
                                </div>
                                <div className={styles.space} />
                                <div className={styles.flx2}>
                                    <div>
                                        <div className={styles.box_hed}>Support related</div>
                                        <div className={styles.flx_row}>
                                            <img
                                                className={styles.ic}
                                                src="/contactus_files/message.png"
                                            />
                                            <span>contact@lucknowlions.com</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className={styles.box_hed}>Contact Timing</div>
                                        <div className={styles.flx_row}>
                                            <img
                                                className={styles.ic}
                                                src="/contactus_files/call.png"
                                            />
                                            <span> 24X7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.flx}>
                                    <img
                                        src="/contactus_files/contactus_img.webp"
                                        alt="Contact Us"
                                        className={styles.bottom_image}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className={styles.divider} /> */}

                    <div className={styles.child_right}>
                        <div className={styles.flx_btm}>
                            <div className={styles.flx_hlf}>
                                First Name
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(v) => {
                                        const value = v.target.value;
                                        if (value.length > 15) return;
                                        FirstName(value);
                                    }}
                                    className={styles.bottom_line_input}
                                    placeholder="Enter your First name"
                                />
                                <div className={styles.err}></div>
                            </div>

                            <div className={styles.flx_hlf}>
                                Middle Name
                                <input
                                    type="text"
                                    value={middleName}
                                    onChange={(v) => {
                                        const value = v.target.value;
                                        if (value.length > 15) return;
                                        MiddleName(value);
                                    }}
                                    className={styles.bottom_line_input}
                                    placeholder="Enter your Middle name"
                                />
                            </div>

                            <div className={styles.flx_hlf}>
                                Last Name
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(v) => {
                                        const value = v.target.value;
                                        if (value.length > 15) return;
                                        LastName(value);
                                    }}
                                    className={styles.bottom_line_input}
                                    placeholder="Enter your Last name"
                                />
                            </div>
                        </div>

                        <div className={styles.flx_btm}>
                            <div className={styles.flx_hlf}>
                                Email
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(v) => {
                                        const value = v.target.value;
                                        if (value.length > 30) return;
                                        Email(value);
                                    }}
                                    className={styles.bottom_line_input}
                                    placeholder="Enter your Email address"
                                />
                            </div>

                            <div className={styles.flx_hlf}>
                                Phone Number
                                <input
                                    type="text"
                                    value={mob}
                                    onChange={(v) => {
                                        const value = v.target.value;
                                        const numericValue = value.replace(/[^0-9]/g, "");
                                        if (numericValue.length > 10) return;
                                        Mob(numericValue);
                                    }}
                                    className={styles.bottom_line_input}
                                    placeholder="Enter your Phone number"
                                />
                            </div>
                        </div>

                        <div className={styles.field}>
                            Subject
                            <input
                                type="text"
                                value={sub}
                                onChange={(v) => {
                                    const value = v.target.value;
                                    if (value.length > 50) return;
                                    Sub(value);
                                }}
                                className={styles.bottom_line_input}
                                placeholder="Enter your Subject"
                            />
                        </div>

                        <div className={styles.field}>
                            Message
                            <input
                                type="text"
                                value={message}
                                onChange={(v) => {
                                    const value = v.target.value;
                                    if (value.length > 300) return;
                                    Message(value);
                                }}
                                className={styles.bottom_line_input}
                                placeholder="Enter your Message"
                            />
                        </div>

                        {isSent ? (
                            <img src="/contactus_files/aero.gif" />
                        ) : (
                            <>
                                <button onClick={handleSubmit} className={styles.btn}>
                                    Send Message
                                </button>
                                <img
                                    className={styles.gif}
                                    src="/contactus_files/contactus_4.gif"
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.more_info}>
                    <h2 style={{ fontWeight: "700", marginBottom: "30px" }}>
                        More Information
                    </h2>
                    <div className={styles.flx}>
                        <div className={styles.card}>
                            <img
                                className={styles.card_img}
                                src="/contactus_files/contactus_1.webp"
                            />
                            <div className={styles.card_hed}>General Information</div>
                            <div className={styles.card_bd}>contact@lucknowlions.com</div>
                        </div>
                        <div className={styles.card}>
                            <img
                                className={styles.card_img}
                                src="/contactus_files/contactus_2.webp"
                            />
                            <div className={styles.card_hed}>CEO</div>
                            <div className={styles.card_bd}>help.ceo@lucknowlions.com</div>
                        </div>
                        <div className={styles.card}>
                            <img
                                className={styles.card_img}
                                src="/contactus_files/contactus_3.webp"
                            />
                            <div className={styles.card_hed}>Write Us</div>
                            <div className={styles.card_bd}>
                                <b style={{ fontSize: "17px" }}>Lucknow Lions</b>
                                8A, Vrindavan Vihar, Gaushala Road, Balaganj, Lucknow : 226003
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};