import { useState } from "react";
import axios from "../config/axios.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/api/auth/register", { email, password })
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="shadow-lg p-10 sm:rounded-xl">
        <div>
          <h2 className="font-bold">Create Your Account</h2>
          <p className="font-light text-sm mt-1 text-balance">
            Make it yours. Create your account and get started today
          </p>
        </div>
        <div className="w-full h-[1px] bg-zinc-300 my-5"></div>
        <form className="flex flex-col gap-6" onSubmit={submitHandler}>
          <input
            className="w-full px-5 py-3 !important"
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full px-5 py-3"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="bg-[#2f3037] text-white px-5 py-3 sm:rounded cursor-pointer"
            type="submit"
            value="continue"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
