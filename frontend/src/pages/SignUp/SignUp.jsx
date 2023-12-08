import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";
import Card from "../../components/Card";
import { useSignup } from "../../hooks/userSignup";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }

    await signup(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Card>
      <h2 className="text-center mb-5">Welcome to LET&apos;S PLAY</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter your username"
            className="p-2 bg-white/10 border outline-none text-white backdrop-blur-lg input-border"
          />
        </div>

        <div className="flex flex-col relative">
          <label className="text-white mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter your password"
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Please enter your password"
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
          disabled={isLoading}
          className="bg-white/10 hover:bg-white/40 duration-300 border outline-none px-5 py-2 max-w-fit backdrop-blur-lg text-white"
        >
          Sign In
        </button>
        {confirmPassword !== password && (
          <p className="text-red-500 text-center">Password does not match</p>
        )}
        {error && <div className="error">{error}</div>}
        <div className="flex justify-center flex-col items-center mt-5">
          <p>Already have an account?</p>
          <p>
            Please{" "}
            <Link
              to="/login"
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
