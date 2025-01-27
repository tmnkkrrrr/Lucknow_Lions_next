'use client';

import { useState } from 'react';
import styles from './Signup.module.css';
import { HOST, v } from '@/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar/Navbar';


export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobileNo: '',
  });

  const [loading, setLoading] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.mobileNo)) {
      newErrors.mobileNo = 'Valid phone number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (!captchaValid) {
        alert('Please Fill Captcha First');
        return;
      }
      
      try {
        setLoading(true);
        const response = await fetch(`${HOST}/api/${v}/visitor/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          alert('Signup successful!');
          setFormData({
            name: '',
            email: '',
            mobileNo: '',
          });
          router.push('/getin/login');
        } else {
          alert(`Signup failed: ${result.message}`);
        }
      } catch (error) {
        console.error(error);
        alert('Signup failed');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.page_container}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.formContainer}>
            <div className={styles.left}>
              <img 
                className={styles.img} 
                src="/signup_files/signup_gif.gif" 
                alt="Signup animation"
              />
            </div>

            <div className={styles.right}>
              <div style={{ marginBottom: '30px' }}>
                <div className={styles.h1}>Get Started</div>
                <div className={styles.des}>Create your Account now</div>
              </div>

              <div>
                <div className={styles.flx}>
                  <label className={styles.label} htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.errorInput : styles.input}
                  />
                  {errors.name && (
                    <div className={styles.errorMessage}>{errors.name}</div>
                  )}
                </div>

                <div className={styles.flx}>
                  <label className={styles.label} htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.errorInput : styles.input}
                  />
                  {errors.email && (
                    <div className={styles.errorMessage}>{errors.email}</div>
                  )}
                </div>

                <div className={styles.flx}>
                  <label className={styles.label} htmlFor="phone">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    className={errors.mobileNo ? styles.errorInput : styles.input}
                  />
                  {errors.mobileNo && (
                    <div className={styles.errorMessage}>{errors.mobileNo}</div>
                  )}
                </div>

                {/* <ReCAPTCHA
                  sitekey="6LdKEC8qAAAAAHhkvHdpZ3oIcPRLZe8RrtuocIj3"
                  onChange={(v) => {
                    if (v.length > 20) setCaptchaValid(true);
                  }}
                /> */}
              </div>

              {loading ? (
                'Loading...'
              ) : (
                <button
                  className={styles.submit}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Sign Up
                </button>
              )}

              <div className={styles.last}>
                <div className={styles.label}>
                  Have an Account?
                  <span className={styles.link}>
                    <Link href="/login">Login</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}