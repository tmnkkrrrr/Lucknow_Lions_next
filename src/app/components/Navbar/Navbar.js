"use client"
import Link from 'next/link';
import styles from "./Navbar.module.css";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.main_nav}>
      <div className={styles.nav}>
        <Link href='https://www.lucknowlions.com' >
          <img
            src="/logo.png"
            className={styles.logo}
            alt="Lucknow Lions Logo"
          />
        </Link>

        {/* Hamburger Icon */}
        <button title='Lucknow Lions Menu Button' className={styles.hamburger} onClick={toggleMenu}>
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
          <li className={pathname === "/blogs" ? styles.active : ""}>
            <Link href="/blogs">Education-Blogs</Link>
          </li>
          <li className={pathname === "/upstox" ? styles.active : ""}>
            <Link href="/upstox">Upstox</Link>
          </li>
          <li className={pathname === "/fyers" ? styles.active : ""}>
            <Link href="/fyers">Fyers</Link>
          </li>
          <li className={pathname === "/aliceblue-demat-account" ? styles.active : ""}>
            <Link href="/aliceblue-demat-account">Alice Blue</Link>
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
