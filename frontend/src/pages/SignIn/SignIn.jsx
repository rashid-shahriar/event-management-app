import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";
import Card from "../../components/Card";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card>
      <h2 className="text-center mb-5">Welcome to LET&apos;S PLAY</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-white mb-2">User Name</label>
          <input
            type="text"
            placeholder="Please enter your username"
            className="p-2 bg-white/10 border outline-none text-white backdrop-blur-lg input-border"
          />
        </div>
        <div className="flex flex-col relative">
          <label className="text-white mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
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
        <a
          href=""
          className="bg-white/10 hover:bg-white/40 duration-300 border outline-none px-5 py-2 max-w-fit backdrop-blur-lg text-white"
        >
          Sign In
        </a>
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
      </div>
    </Card>
  );
};

export default SignIn;
