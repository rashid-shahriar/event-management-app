import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";
import Card from "../../components/Card";
import { useLogin } from "../../hooks/useLogin";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // call the login function from the hook
    await login(email, password);
  };

  return (
    <Card>
      <h2 className="text-center mb-5">Welcome to LET&apos;S PLAY</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-white mb-2">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Please enter your username"
            className="p-2 bg-white/10 border outline-none text-white backdrop-blur-lg input-border"
          />
        </div>
        <div className="flex flex-col relative">
          <label className="text-white mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
        <button
          disabled={isLoading}
          className="bg-white/10 hover:bg-white/40 duration-300 border outline-none px-5 py-2 max-w-fit backdrop-blur-lg text-white"
        >
          Sign In
        </button>

        {error && <div className="error">{error}</div>}
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
