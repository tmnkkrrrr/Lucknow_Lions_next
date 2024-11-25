"use client"
import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from "./Navbar.module.css";

const Navbar = () => {
  // const router = useRouter();
  const { pathname } = {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.main_nav}>
      <div className={styles.nav}>
        {/* <Link href="/"> */}
          <img
            src="/logo.png"
            className={styles.logo}
            alt="Your Logo"
            height="50"
          />
        {/* </Link> */}

        {/* Hamburger Icon */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Menu */}
        <ul className={`${styles.menus} ${isMenuOpen ? styles.open : ""}`}>
          <li className={pathname === "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === "/sgx_nifty" ? styles.active : ""}>
            <Link href="/sgx_nifty">SGX Nifty</Link>
          </li>
          <li className={pathname === "/zerodha" ? styles.active : ""}>
            <Link href="/zerodha">Zerodha</Link>
          </li>
          <li className={pathname === "/upstox" ? styles.active : ""}>
            <Link href="/upstox">Upstox</Link>
          </li>
          <li className={pathname === "/fyers" ? styles.active : ""}>
            <Link href="/fyers">Fyers</Link>
          </li>
          <li className={pathname === "/contact_us" ? styles.active : ""}>
            <Link href="/contact_us">Contact Us</Link>
          </li>
          <li className={pathname === "/about_us" ? styles.active : ""}>
            <Link href="/about_us">About Us</Link>
          </li>

          {/* Login/Signup Button - Inside Hamburger menu for mobile */}
          <li
            className={pathname === "/getin" ? styles.disappear : ""}
            style={{ marginTop: "15px" }} // Added margin for spacing in the mobile menu
          >
            <Link href="/getin">
              <button className={styles.loginButton}>Login / Signup</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
