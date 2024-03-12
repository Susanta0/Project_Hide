import { useState, useContext } from "react";
import { Navbar } from "../Routes/Navbar";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { Timer } from "../Components/MyDashFile/Timer.jsx";
import { FileUpload } from "../Components/MyDashFile/FileUpload.jsx";
export const MyDashboard = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      {isAuth ? (
        <div className="py-2 bg-fuchsia-200">
          <h1 className="text-2xl text-center font-bold">
            Your Contest is Runing
          </h1>
          <div className=" font-bold text-3xl text-center">
            <Timer/>
          </div>
          <FileUpload/>
        </div>
      ) : (
        <Navigate to="/" />
      )}
      
    </>
  );
};


