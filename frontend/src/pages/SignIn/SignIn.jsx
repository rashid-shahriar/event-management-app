import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";
import Card from "../../components/Card";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, handle further actions (e.g., store token, redirect)
        const data = await response.json();
        console.log("Login successful:", data);
      } else {
        // Login failed, handle error (e.g., display error message)
        const errorData = await response.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card>
      <h2 className="text-center mb-5">Welcome to LET&apos;S PLAY</h2>

      <form onSubmit={handleSignIn} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-white mb-2">Email</label>
          <input
            type="email"
            placeholder="Please enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 bg-white/10 border outline-none text-white backdrop-blur-lg input-border"
          />
        </div>
        <div className="flex flex-col relative">
          <label className="text-white mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 bg-white/10 border w-full outline-none text-white backdrop-blur-lg input-border"
            />
            {showPassword ? (
              <HiEye
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-lg text-white cursor-pointer"
              />
            ) : (
              <HiEyeOff
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-lg text-white cursor-pointer"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-white/10 hover:bg-white/40 duration-300 border outline-none px-5 py-2 max-w-fit backdrop-blur-lg text-white"
        >
          Sign In
        </button>
        <div className="flex justify-center flex-col items-center mt-5">
          <p>Don&apos;t have an account?</p>
          <p>
            Please Create an account.{" "}
            <Link
              to="/signup"
              className="border-b cursor-pointer hover:text-gray-400 duration-300"
            >
              Sign Up!
            </Link>{" "}
          </p>
        </div>
      </form>
    </Card>
  );
};

export default SignIn;
