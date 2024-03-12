import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Pages/Home";
import { AuthContext } from "../Context/AuthContext";
import { Button } from "@chakra-ui/react";
export const Navbar = () => {
  const { isAuth, setIsAuth, myShow, setMyShow } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    setMyShow(false)
  };
  return (
    <>
      <div className=" w-[100%] flex h-20 bg-red-400 items-center justify-around">
        <Link to="/" className="text-xl font-bold text-white">
          Home
        </Link>
        <Search />
        <Link to="/allcontest" className="text-xl font-bold text-white">
          All Contest
        </Link>
        {/* <Link to="/choosecontests" className="text-xl font-bold">Choose Contests</Link> */}
        {myShow ? (
          <Link to="/mydashboard" className="text-xl font-bold text-white">
            My Dashboard
          </Link>
        ) : null}
        {/* <Link to="/mydashboard" className="text-xl font-bold">My Dashboard</Link> */}
        <Link to="/review" className="text-xl font-bold text-white">
          Review
        </Link>
        {isAuth ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Link to="/signin" className="text-xl font-bold text-white">
            Sign in
          </Link>
        )}
      </div>
    </>
  );
};
