import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicButton from "../shared/components/atoms/BasicButton";
import Checkbox from "../shared/components/atoms/Checkbox";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    saveId: false,
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear errors when typing
    if (name === "email") setFieldErrors((prev) => ({ ...prev, email: "" }));
    if (name === "password")
      setFieldErrors((prev) => ({ ...prev, password: [] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmailError = "";
    const newPasswordErrors: string[] = [];

    // Empty field validation
    let hasEmptyField = false;

    if (!formData.email.trim()) {
      hasEmptyField = true;
      setFieldErrors((prev) => ({
        ...prev,
        email: "You have not entered your id",
      }));
      newPasswordErrors.push("Invalid id or password"); // Show login error even if email empty
    }

    if (!formData.password.trim()) {
      hasEmptyField = true;
      newPasswordErrors.push("You have not entered your password");
    }

    // If no empty field, validate credentials
    if (!hasEmptyField) {
      if (
        formData.email === "admin@example.com" &&
        formData.password === "1234"
      ) {
        navigate("/homepage");
        return;
      } else {
        newPasswordErrors.push("Invalid id or password");
      }
    }

    // Update password errors
    setFieldErrors((prev) => ({ ...prev, password: newPasswordErrors }));
  };

  const hasAnyError = !!fieldErrors.email || fieldErrors.password.length > 0;

  const inputClasses =
    "flex-1 px-4 py-2 rounded-lg text-sm focus:outline-none " +
    (hasAnyError
      ? "border border-red-500 text-red-600 bg-red-50 focus:ring-red-200 focus:border-red-500"
      : "border-gray-300 text-gray-900 bg-gray-100 focus:ring-yellow-400 focus:border-yellow-400");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200 p-6 h-[500px] px-25 py-12">
        <div className="text-center mb-15">
          <h1 className="text-3xl font-bold text-yellow-400 tracking-wide">
            LANDAS
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          {/* Email */}
          <div className="flex flex-col">
            <div className="flex items-center">
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
                className={inputClasses}
              />
            </div>
            <p className="text-red-500 text-xs mt-1 ml-24 min-h-[1rem]">
              {fieldErrors.email}
            </p>
          </div>

          {/* Password */}
          <div className="flex flex-col">
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
                className={inputClasses + " password-input"}
              />
            </div>
            <div className="flex flex-col ml-24 mt-1 min-h-[1rem]">
              {fieldErrors.password.map((msg, i) => (
                <p key={i} className="text-red-500 text-xs">
                  {msg}
                </p>
              ))}
            </div>
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
          <div className="flex flex-col gap-3 mt-2">
            <BasicButton
              type="submit"
              variant="primary"
              fullWidth
              className="hover:bg-yellow-400 hover:text-black"
            >
              Login
            </BasicButton>
            <BasicButton variant="outline" fullWidth>
              Join the membership
            </BasicButton>
          </div>
        </form>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400">
        Copyright © WWW.ids2bmall.com All right reserved
      </div>
    </div>
  );
}
