// src/pages/LoginPage.tsx
import { useState } from "react";
import BasicButton from "../shared/components/atoms/BasicButton";
import Checkbox from "../shared/components/atoms/Checkbox";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    saveId: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200 p-6 h-[500px] px-25 py-12">
        {/* Logo */}
        <div className="text-center mb-15">
          <h1 className="text-3xl font-bold text-yellow-500 tracking-wide">
            LANDAS
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Id */}
          <div className="flex items-center ">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 w-24"
            >
              Id
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="Please enter your email id."
              className="flex-1 px-4 py-2 border border-gray-300 
              bg-gray-100
              rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 w-24"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Please enter your password."
              className="flex-1 px-4 py-2 border border-gray-300 
              bg-gray-100
              rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm mt-2">
            <Checkbox
              id="saveId"
              label="Save Id"
              checked={formData.saveId}
              onChange={handleChange}
              name="saveId"
            />

            <div className="flex items-center gap-2 text-gray-500">
              <button type="button" className="hover:text-gray-800">
                Find Id
              </button>
              <span>|</span>
              <button type="button" className="hover:text-gray-800">
                Find Password
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <BasicButton variant="primary" fullWidth>
              Login
            </BasicButton>
            <BasicButton variant="outline" fullWidth>
              Join the membership
            </BasicButton>
          </div>
        </form>
      </div>

      {/* Footer outside card */}
      <div className="mt-6 text-center text-xs text-gray-400">
        Copyright © WWW.ids2bmall.com All right reserved
      </div>
    </div>
  );
}
