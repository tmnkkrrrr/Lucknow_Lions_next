'use client'

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { HOST, v } from "@/config";

export default function LoginPage() {

  const [resetEmail, setResetEmail] = useState('');
  const [resetPassModal, setResetPassModal] = useState(false);

    const handleResetPass = async (e) => {
      e.preventDefault();
      alert("If your Account exist with provided Email, you will receive an Email from us")
      setResetPassModal(false);
  
        const response = await fetch(`${HOST}/api/${v}/website/reset_pass_otp`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "email": resetEmail })
        });
  
        // if (!response.ok) {
        //   throw new Error('Update failed');
        // }
  
        const data = await response.json();
        return data;
      } 

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-800  flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1295094894/vector/blue-brush-pattern-background.jpg?s=612x612&w=0&k=20&c=OqEJXuGg1gj0Ono3GJ_DgrU5ADTF8-lk46i_pgbq0oc=')`
          }}>
            <Navbar />
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full space-y-6">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                    Welcome!
                </h1>

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


                <div className="space-y-4">
                    <p className="text-gray-600">
                        If you are already registered with us, Please choose Login
                    </p>

                    <p className="text-gray-600">
                        If you are visiting for the first time, Please choose Signup
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <Link href="/getin/login" className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                            Log in
                        </Link>
                        <Link href="/getin/signup" className="px-8 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                            Sign up
                        </Link>
                    </div>
                </div>

              <div onClick={() => setResetPassModal(true)} className='text-center text-blue-600 cursor-pointer'>Forgot Password?</div>

            </div>

            {/* Background pattern */}
            <div className="fixed inset-0 -z-10 bg-[linear-gradient(45deg,_#f1f5f9_25%,_transparent_25%,_transparent_75%,_#f1f5f9_75%,_#f1f5f9),linear-gradient(45deg,_#f1f5f9_25%,_transparent_25%,_transparent_75%,_#f1f5f9_75%,_#f1f5f9)] bg-[length:60px_60px] opacity-10" />
        </div>
    );
}