import { useState } from "react";
import FormInput from "../../components/molecules/FormInput";
import BasicButton from "../../components/atoms/BasicButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    console.log("Submitted:", { email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm w-full mx-auto flex flex-col gap-4 p-6 bg-white shadow rounded-xl"
    >
      <h2 className="text-xl font-semibold text-center">Login</h2>

      <FormInput
        id="email"
        label="Email"
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        error={!email && error ? "Email is required" : ""}
      />

      <FormInput
        id="password"
        label="Password"
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        error={!password && error ? "Password is required" : ""}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <BasicButton type="submit" variant="primary" fullWidth>
        Login
      </BasicButton>
    </form>
  );
}
