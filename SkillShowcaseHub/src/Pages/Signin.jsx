import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export const Signin = () => {
  return (
    <>
    
      <Login />
    </>
  );
};

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const nav = useNavigate();
  const toast=useToast()

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = loginUser;
    const storedData = JSON.parse(localStorage.getItem("registerData")) || {};

    if (storedData.email === email && storedData.password === password) {
      localStorage.setItem("isAuth", "Authenticated");
      setIsAuth(true);
      nav(`/`);
      toast({
        title: "Successfully Logged In",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Please Enter Valid Credentails",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setLoginUser({ email: "", password: "" });
  };

  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link
                to="/signup"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                &nbsp;create a new account
              </Link>
            </p>
          </div>
          <form className="w-full max-w-sm  m-auto mt-10" onSubmit={handleSubmit}>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={handleChange}
                value={loginUser.email}
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={handleChange}
                value={loginUser.password}
                name="password"
                type="password"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <input
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              ></input>
            </div>
          </div>
        </form>

        </div>
      </div>
    </>
  );
};
