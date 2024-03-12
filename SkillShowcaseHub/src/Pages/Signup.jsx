import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Signup = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const toast = useToast();
  const formSubmit = (e) => {
    e.preventDefault();

    const { name, email, number, password } = userForm;

    if (name.trim() && email.trim() && number.trim() && password.trim()) {
      localStorage.setItem("registerData", JSON.stringify(userForm));
      setUserForm({ name: "", email: "", number: "", password: "" });

      toast({
        title: "Account created.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Please fill right information",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="mt-32">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link
              to="/signin"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              &nbsp;Sign in
            </Link>
          </p>
        </div>

        <form className="w-full max-w-sm  m-auto mt-10" onSubmit={formSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={handleChange}
                value={userForm.name}
                name="name"
                type="text"
              />
            </div>
          </div>
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
                value={userForm.email}
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Number
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={handleChange}
                value={userForm.number}
                name="number"
                type="number"
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
                value={userForm.password}
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
    </>
  );
};
