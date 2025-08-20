import { useState } from "react";
import type { ChangeEvent } from "react";

import FormInput from "../shared/components/molecules/FormInput";
import BasicButton from "../shared/components/atoms/BasicButton";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50">
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center gap-6">
        {/* Logo / Title */}
        <h1 className="text-3xl font-bold text-yellow-500">LANDAS</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <FormInput
            id="email"
            name="email"
            label="Id"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please enter your email id."
          />

          <FormInput
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Please enter your password."
          />

          {/* Options Row */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-500" />
              Save Id
            </label>
            <div className="flex gap-2 text-gray-600">
              <a href="#" className="hover:underline">
                Find Id
              </a>
              |
              <a href="#" className="hover:underline">
                Find Password
              </a>
            </div>
          </div>

          {/* Buttons */}
          <BasicButton variant="primary" fullWidth>
            Login
          </BasicButton>

          <BasicButton variant="outline" fullWidth>
            Join the membership
          </BasicButton>
        </form>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-500 text-center">
          Copyright © WWW.ids2bmall.com All right reserved
        </p>
      </div>
    </div>
  );
}
