import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";
import { useAuthStore } from "../zustand";

const LoginPage = () => {
  const { setIsAuthenticated, setUserInfo } = useAuthStore();

  // Form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/auth/login", {
        email,
        password,
      });
      console.log(response);
      setIsAuthenticated(true);
      setUserInfo(response.data)
      navigate("/dashboard");
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      setIntervalOutFunc(message, 3000);
    }
  };
  const setIntervalOutFunc = (message: string, time: number) => {
    setServerError(message);
    setTimeout(() => {
      setServerError("");
    }, time);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        {serverError && (
          <div className="font-medium sm:absolute left-0 top-0 sm:m-8 sm:rounded bg-emerald-300 p-5">
            <p>{serverError}</p>
          </div>
        )}
        <div className="shadow-lg p-10 sm:rounded-xl">
          <div>
            <h2 className="font-bold">Log In to Continue</h2>
            <p className="font-light text-sm mt-1 text-balance">
              Welcome back. Let's pick up where you left off!
            </p>
          </div>
          <div className="w-full h-[1px] bg-zinc-300 my-5"></div>
          <form className="flex flex-col gap-6" onSubmit={submitHandler}>
            <input
              className="w-full px-5 py-3 !important"
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              className="w-full px-5 py-3"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <input
              className="bg-[#2f3037] text-white px-5 py-3 sm:rounded cursor-pointer"
              type="submit"
              value="continue"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
