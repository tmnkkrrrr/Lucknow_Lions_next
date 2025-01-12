'use client';

import { useState } from 'react';
import styles from './Login.module.css';

import { HOST, v } from '@/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar/Navbar';

// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
//   ssr: false
// });

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    setErrors({
      email: '',
      password: '',
    });
    const newErrors = {};

    if (!formData.email) {
      newErrors.name = 'Email / Phone Number is required';
      setErrors(newErrors);
      return false;
    }
    
    const result = parseInt(formData.email, 10);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (isNaN(result)) {
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Valid email is required';
        setErrors(newErrors);
        return false;
      }
    } else {
      if (!phonePattern.test(formData.email)) {
        newErrors.email = 'Valid Phone Number is required';
        setErrors(newErrors);
        return false;
      }
    }

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
        const response = await fetch(`${HOST}/api/${v}/visitor/loginS`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          alert('Login successful!');
          setFormData({
            email: '',
            password: '',
          });
          router.push('/dashboard'); // Add appropriate redirect path
        } else {
          alert(`Login failed: ${result.message}`);
        }
      } catch (error) {
        alert('Login is Disabled for now');
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
              <div style={{ marginBottom: '30px' }}>
                <div className={styles.h1}>Login here</div>
                <div className={styles.des}>Please Enter your Details below</div>
              </div>

              <div>
                <div className={styles.flx}>
                  <label className={styles.label} htmlFor="email">
                    Email / Phone Number:
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
                  <label className={styles.label} htmlFor="password">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? styles.errorInput : styles.input}
                  />
                  {errors.password && (
                    <div className={styles.errorMessage}>{errors.password}</div>
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
                  Login
                </button>
              )}

              <div className={styles.last}>
                <div className={styles.label}>
                  Already have an Account?
                  <span className={styles.link}>
                    <Link href="/signup">Signup</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <img 
                className={styles.img} 
                src="/login_files/login_gif.gif" 
                alt="Login animation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}