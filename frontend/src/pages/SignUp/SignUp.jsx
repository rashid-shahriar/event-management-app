import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";
import Card from "../../components/Card";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/";
    }

    if (password !== confirmPassword) {
      // Handle password mismatch error
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (response.ok) {
        // Registration successful, handle further actions (e.g., redirect to login)
        const data = await response.json();
        console.log("Registration successful:", data);
      } else {
        // Registration failed, handle error (e.g., display error message)
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card>
      <h2 className="text-center mb-5">Welcome to LET&apos;S PLAY</h2>

      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-white mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Please enter your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2 bg-white/10 border outline-none text-white backdrop-blur-lg input-border"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2">Email</label>
          <input
            type="text"
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

        <div className="flex flex-col relative">
          <label className="text-white mb-2">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Please enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 bg-white/10 border w-full outline-none text-white backdrop-blur-lg input-border"
            />
            {showConfirmPassword ? (
              <HiEye
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-3 text-lg text-white cursor-pointer"
              />
            ) : (
              <HiEyeOff
                onClick={toggleConfirmPasswordVisibility}
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
          <p>Already have an account?</p>
          <p>
            Please{" "}
            <Link
              to="/signin"
              className="border-b cursor-pointer hover:text-gray-400 duration-300"
            >
              Sign In!
            </Link>{" "}
          </p>
        </div>
      </form>
    </Card>
  );
};

export default SignUp;
