"use client";

import React, { useState } from "react";
import { Shield, Lock, CheckCircle } from "lucide-react";
import { HOST_CLIENT } from "@/config";

export default function LeadCapturePopup({ ClosedComponent }) {
  const link = "https://signup.fyers.in/?utm_source=AP-Leads&utm_medium=AP0251";
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    country: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    submitLead();
    window.location.href = link;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length > 13) return; 
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  async function submitLead() {
    try {
      const response = await fetch(`${HOST_CLIENT}/api/v1/visitor/regsiter-fyers-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit lead');

      return await response.json();
    } catch (error) {
      console.error('Error submitting lead:', error);
      return null;
    }
  }


  return (
    <>
      {!isOpen && (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer" style={{ alignSelf: "center" }}>
          {ClosedComponent}        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-2xl shadow-2xl max-w-4xl w-full 
                  overflow-y-auto max-h-[90vh] p-6 md:p-8 relative">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-3xl font-bold text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">

              <div className="flex-shrink-0 hidden lg:block">
                <div className="w-40 h-40 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="text-white">
                    <div className="w-14 h-14 bg-white rounded-full mx-auto mb-4"></div>
                    <div className="w-20 h-14 bg-white rounded-t-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <img src="/logo.png" className="h-[60px] md:h-[70px] mx-auto mb-4" />

                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  Lead Capture Form
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {[
                    { label: "Name", name: "name", type: "text" },
                    { label: "Mobile", name: "mobile", type: "tel" },
                    { label: "Country", name: "country", type: "text" },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <label className="text-lg md:text-xl font-bold w-32">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        className="flex-1 border-2 border-gray-400 border-dashed px-4 py-3 
                           text-lg rounded-md w-full"
                      />
                    </div>
                  ))}

                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-10 md:px-12 py-3 rounded-full 
                         text-lg md:text-xl font-bold hover:bg-blue-700 shadow-lg w-full md:w-auto"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>

                {/* TRUST BADGES */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 fill-green-500" />
                    <span className="text-base md:text-lg font-semibold">Safe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-500 fill-green-500" />
                    <span className="text-base md:text-lg font-semibold">Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500 fill-green-500" />
                    <span className="text-base md:text-lg font-semibold">Trusted</span>
                  </div>
                </div>

                {/* INFO TEXT */}
                <div className="mt-6 text-xs md:text-sm text-center px-2">
                  <p><strong>This form is only for account opening related queries.</strong></p>
                  <p className="mt-2">
                    <strong>
                      After submitting, you will be redirected to{" "}
                      <span className="text-blue-600 underline">
                        FYERS official account opening link.
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}