import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvaider } from "./Context/AuthContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvaider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </AuthContextProvaider>
);
