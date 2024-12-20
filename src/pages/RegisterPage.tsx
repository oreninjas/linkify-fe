import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  // Form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Form validation
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const errorEmailFunc = (email: string) => {
    if (!email) {
      return "email is required!";
    }

    if (email.length < 12) {
      return "email should be a valid email";
    }

    return "";
  };
  const errorPasswordFunc = (password: string) => {
    if (!password) {
      return "password is required!";
    }

    if (password.length < 8) {
      return "password should be at least of 8 characters";
    }

    return "";
  };
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = errorEmailFunc(email);
    const passwordError = errorPasswordFunc(password);

    setErrorEmail(emailError);
    setErrorPassword(passwordError);

    if (emailError || passwordError) return;

    try {
      await axios({
        method: "POST",
        url: "http://localhost:3000/api/auth/register",
        data: {
          email,
          password,
        },
      });
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
              onChange={(e) => {
                setEmail(e.target.value);
                errorEmailFunc(email);
              }}
              value={email}
            />
            {errorEmail && <li className="text-sm">{errorEmail}</li>}
            <input
              className="w-full px-5 py-3"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
                errorPasswordFunc(password);
              }}
              value={password}
            />
            {errorPassword && <li className="text-sm">{errorPassword}</li>}
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

export default RegisterPage;
