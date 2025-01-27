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

  const [resetEmail, setResetEmail] = useState('');
  const [resetPassModal, setResetPassModal] = useState(false);

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


  const handleResetPass = async (e) => {
    e.preventDefault();
    alert("If your Account exist with provided Email, you will receive an Email from us")
    setResetPassModal(false);

    try {
      const response = await fetch(`${HOST}/api/${v}/website/reset_pass_otp`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email": resetEmail })
      });

      if (!response.ok) {
        throw new Error('Update failed');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }


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

              {resetPassModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Reset Password</h2>
                      <button
                        onClick={() => setResetPassModal(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-gray-600 mb-4">
                      Enter your email address to receive a password reset link.
                    </p>

                    <form onSubmit={handleResetPass} className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Send Reset Link
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

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

                <div onClick={() => setResetPassModal(true)} className='text-right text-blue-600 cursor-pointer'>Forgot Password?</div>

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
                    <Link href="signup">Signup</Link>
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